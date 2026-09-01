import React from 'react';
import { Play, Pause, Trophy, Flame, Mic2, ArrowDown, Sparkles } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';
import { artistData } from '../data/artistData';

export default function Hero({ currentTrack, isPlaying, onTogglePlay, onSelectTrack }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Graphic & Glows */}
      <div className="absolute inset-0 bg-[#050506] -z-20"></div>
      
      {/* Red Radial Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-glow"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-red-900/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      
      {/* Cyber Grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none -z-10"></div>

      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[80vh]">
          
          {/* Left Column: Typography & Story */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="tag-badge">
                <Trophy size={13} className="text-yellow-400" />
                <span>REDBULL BATALLA WINNER</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-[11px] font-tech font-semibold text-zinc-300">
                ⚡ 4 AÑOS DE TRAYECTORIA
              </span>
              <span className="px-3 py-1 rounded-full bg-red-950/40 border border-red-800/40 text-[11px] font-tech font-semibold text-red-300">
                🎙️ DUETOS & FREESTYLE
              </span>
            </div>

            {/* Main Stage Name */}
            <div className="space-y-1">
              <p className="text-xs sm:text-sm font-tech uppercase tracking-[0.35em] text-[#ff0033] font-bold">
                LA VOZ CRUDA DEL RAP // UNDERGROUND TITAN
              </p>
              <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-wider leading-none select-none">
                CORE<span className="text-[#ff0033] drop-shadow-[0_0_25px_rgba(255,0,51,0.7)]">BACK</span>
              </h1>
            </div>

            {/* Tagline / Punchline */}
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-xl font-light leading-relaxed">
              Líricas sin filtro, flow destructivo y presencia escénica consagrada en la élite del freestyle y las batallas de habla hispana.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={onTogglePlay}
                className="btn-primary flex-1 sm:flex-initial justify-center"
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} className="fill-white" />}
                <span>{isPlaying ? 'PAUSAR BEAT' : 'ESCUCHAR BEAT'}</span>
              </button>

              <a
                href="#redbull"
                className="btn-outline flex-1 sm:flex-initial justify-center"
              >
                <Trophy size={16} className="text-[#ff0033]" />
                <span>VER BATALLAS</span>
              </a>

              <a
                href={artistData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-zinc-900/90 border border-zinc-800 hover:border-pink-500 text-zinc-300 hover:text-pink-400 transition-all hover:scale-105"
                title="Instagram @corebackk"
              >
                <InstagramIcon size={20} />
              </a>
            </div>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-3 gap-4 pt-6 w-full max-w-md border-t border-zinc-800/80">
              <div>
                <div className="font-heading text-3xl sm:text-4xl text-white">4+</div>
                <div className="text-[11px] font-tech text-zinc-400 uppercase tracking-wider">Años de Carrera</div>
              </div>
              <div>
                <div className="font-heading text-3xl sm:text-4xl text-[#ff0033]">1º LUGAR</div>
                <div className="text-[11px] font-tech text-zinc-400 uppercase tracking-wider">Red Bull Batalla</div>
              </div>
              <div>
                <div className="font-heading text-3xl sm:text-4xl text-white">+1.2M</div>
                <div className="text-[11px] font-tech text-zinc-400 uppercase tracking-wider">Impactos Digitales</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Glow & Track Preview Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Visual Frame */}
            <div className="relative w-full max-w-md rounded-2xl p-2 bg-gradient-to-b from-red-600/30 via-zinc-900/40 to-black border border-red-500/40 shadow-[0_0_50px_rgba(255,0,51,0.25)] group">
              
              {/* Corner Accents */}
              <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-[#ff0033]"></div>
              <div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-[#ff0033]"></div>
              <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-[#ff0033]"></div>
              <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-[#ff0033]"></div>

              {/* Main Photo */}
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-zinc-950">
                <img
                  src="/assets/IMG_3694.png"
                  alt="COREBACK Rap Artist"
                  className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-105 group-hover:brightness-105 transition-all duration-700"
                />

                {/* Dark Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-red-500/40">
                  <span className="w-2 h-2 rounded-full bg-[#ff0033] animate-ping"></span>
                  <span className="text-[10px] font-tech font-bold text-white tracking-widest uppercase">
                    ON AIR // REDBULL TITAN
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/85 backdrop-blur-md p-4 rounded-xl border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-tech uppercase text-[#ff0033] font-bold tracking-wider">
                        TRACK DESTACADO
                      </span>
                      <h4 className="font-heading text-lg text-white tracking-wide">
                        {currentTrack?.title || "SOMBRAS EN EL HOOD"}
                      </h4>
                    </div>
                    <button
                      onClick={onTogglePlay}
                      className="w-10 h-10 rounded-full bg-[#ff0033] flex items-center justify-center text-white hover:bg-red-600 transition-all hover:scale-110 shadow-lg shadow-red-600/40"
                      aria-label="Reproducir track"
                    >
                      {isPlaying ? <Pause size={18} /> : <Play size={18} className="fill-white translate-x-0.5" />}
                    </button>
                  </div>

                  {/* Frequency Equalizer Visual */}
                  <div className="flex items-center gap-1 h-4 pt-1">
                    {[40, 75, 90, 50, 85, 100, 60, 80, 45, 95, 70, 85, 60, 40, 90, 65, 30].map((h, i) => (
                      <span
                        key={i}
                        className="flex-1 bg-gradient-to-t from-red-600 to-red-400 rounded-full transition-all duration-150"
                        style={{
                          height: isPlaying ? `${Math.max(15, (h * (0.4 + Math.random() * 0.6)))}%` : '20%',
                          opacity: isPlaying ? 0.9 : 0.3
                        }}
                      ></span>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center pt-8">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-zinc-500 hover:text-[#ff0033] transition-colors"
          >
            <span className="text-[10px] font-tech uppercase tracking-[0.25em]">CONOCE LA HISTORIA</span>
            <ArrowDown size={16} className="animate-bounce text-[#ff0033]" />
          </a>
        </div>

      </div>

      {/* Bottom Red Laser Line */}
      <div className="absolute bottom-0 left-0 right-0 red-laser-line"></div>
    </section>
  );
}
