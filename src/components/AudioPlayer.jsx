import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Disc, FileText, ChevronDown, ChevronUp, Radio } from 'lucide-react';
import { beatEngine } from '../utils/audioEngine';

export default function AudioPlayer({
  currentTrack,
  isPlaying,
  onTogglePlay,
  onNextTrack,
  onPrevTrack,
  onOpenLyrics,
}) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [volume, setVolume] = useState(0.85);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(1);
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);

  // Setup callbacks on engine
  useEffect(() => {
    beatEngine.setOnTimeUpdate((curr, dur) => {
      setCurrentTime(curr);
      setDuration(dur);
    });

    beatEngine.setOnEnded(() => {
      if (onNextTrack) onNextTrack();
    });
  }, [onNextTrack]);

  // Canvas visualizer loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const draw = () => {
      animFrameRef.current = requestAnimationFrame(draw);
      const freqData = beatEngine.getFrequencyData();

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const barWidth = (canvas.width / freqData.length) * 1.5;
      let x = 0;

      for (let i = 0; i < freqData.length; i++) {
        const barHeight = (freqData[i] / 255) * canvas.height;

        // Gradient red
        const gradient = ctx.createLinearGradient(0, canvas.height, 0, 0);
        gradient.addColorStop(0, '#8b0000');
        gradient.addColorStop(0.5, '#d90429');
        gradient.addColorStop(1, '#ff0033');

        ctx.fillStyle = gradient;
        ctx.fillRect(x, canvas.height - barHeight, barWidth - 1, barHeight);

        x += barWidth;
      }
    };

    draw();

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    setIsMuted(val === 0);
    beatEngine.setVolume(val);
  };

  const handleToggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      beatEngine.setVolume(volume || 0.85);
    } else {
      setIsMuted(true);
      beatEngine.setVolume(0);
    }
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const fraction = Math.max(0, Math.min(1, clickX / rect.width));
    beatEngine.seek(fraction);
    setCurrentTime(fraction * duration);
  };

  const formatTime = (secs) => {
    if (isNaN(secs) || secs < 0) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-300 ${
        isMinimized ? 'translate-y-[calc(100%-2.5rem)]' : 'translate-y-0'
      }`}
    >
      {/* Top Red Laser Line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#ff0033] to-transparent shadow-[0_0_10px_rgba(255,0,51,0.8)]"></div>

      {/* Main Container */}
      <div className="bg-[#09090c]/95 backdrop-blur-xl border-t border-white/10 px-4 sm:px-6 py-2.5 shadow-2xl">
        
        {/* Progress Bar (Clickable) */}
        <div
          onClick={handleSeek}
          className="w-full h-1.5 bg-zinc-800 hover:h-2.5 transition-all cursor-pointer rounded-full mb-2 group relative overflow-hidden"
          title="Saltar a este punto"
        >
          <div
            className="h-full bg-gradient-to-r from-red-600 via-[#ff0033] to-red-400 rounded-full transition-all duration-100 relative"
            style={{ width: `${progressPercent}%` }}
          >
            <span className="w-2.5 h-2.5 bg-white rounded-full absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 shadow-md"></span>
          </div>
        </div>

        <div className="container-custom flex items-center justify-between gap-3 sm:gap-6">
          
          {/* Left: Track Info & Cover */}
          <div className="flex items-center gap-3 min-w-0 flex-1 sm:flex-initial">
            <div className="relative w-11 h-11 rounded-lg overflow-hidden bg-black border border-red-500/40 flex-shrink-0">
              <img
                src={currentTrack?.cover || "/assets/IMG_3694.png"}
                alt={currentTrack?.title}
                className="w-full h-full object-cover"
              />
              {isPlaying && (
                <div className="absolute inset-0 bg-red-950/50 backdrop-blur-[1px] flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-[#ff0033] animate-ping"></span>
                </div>
              )}
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] font-tech text-[#ff0033] font-bold uppercase tracking-wider">
                  {currentTrack?.genre || 'RAP OFICIAL'}
                </span>
                {currentTrack?.duet && (
                  <span className="text-[8px] bg-red-950/60 border border-red-700/40 text-red-300 px-1.5 py-0.2 rounded uppercase font-tech">
                    DUETO
                  </span>
                )}
              </div>
              <h4 className="font-heading text-base sm:text-lg text-white truncate tracking-wide leading-tight">
                {currentTrack?.title || 'ACHORAO (Prod. Gianco)'}
              </h4>
              <p className="text-[11px] text-zinc-400 truncate font-tech">
                {currentTrack?.artist || 'COREBACK (CORE)'}
              </p>
            </div>
          </div>

          {/* Center: Controls & Time */}
          <div className="flex flex-col items-center gap-1 flex-1 max-w-xs">
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                onClick={onPrevTrack}
                className="p-1.5 text-zinc-400 hover:text-white hover:scale-110 transition-all"
                title="Pista Anterior"
              >
                <SkipBack size={18} />
              </button>

              <button
                onClick={onTogglePlay}
                className="w-10 h-10 rounded-full bg-[#ff0033] text-white flex items-center justify-center hover:bg-red-600 hover:scale-110 transition-all shadow-lg shadow-red-600/40"
                title={isPlaying ? 'Pausar Canción' : 'Reproducir Canción'}
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} className="fill-white translate-x-0.5" />}
              </button>

              <button
                onClick={onNextTrack}
                className="p-1.5 text-zinc-400 hover:text-white hover:scale-110 transition-all"
                title="Siguiente Pista"
              >
                <SkipForward size={18} />
              </button>
            </div>

            <div className="flex items-center gap-2 text-[10px] font-tech text-zinc-400">
              <span>{formatTime(currentTime)}</span>
              <span>/</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Right: Real-time Audio Canvas Visualizer & Volume */}
          <div className="hidden md:flex items-center gap-5">
            {/* Visualizer Canvas */}
            <div className="w-28 h-8 rounded bg-black/60 border border-white/5 px-1 py-0.5 flex items-center">
              <canvas ref={canvasRef} width="112" height="32" className="w-full h-full" />
            </div>

            {/* Volume Control */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleToggleMute}
                className="text-zinc-400 hover:text-[#ff0033] transition-colors"
                title={isMuted ? 'Desmutear' : 'Mutear'}
              >
                {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-16 sm:w-20 accent-[#ff0033] bg-zinc-700 h-1.5 rounded-full cursor-pointer"
              />
            </div>

            {/* Minimize / Maximize Toggle */}
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
              title={isMinimized ? 'Expandir reproductor' : 'Minimizar reproductor'}
            >
              {isMinimized ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
