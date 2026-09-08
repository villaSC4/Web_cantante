import React, { useState } from 'react';
import { Play, Pause, Disc, Music, ExternalLink, Radio, FileText, Check, Mic2, Sparkles } from 'lucide-react';
import { artistData } from '../data/artistData';

export default function Discography({ currentTrack, isPlaying, onSelectTrack, onTogglePlay }) {
  const [filter, setFilter] = useState('ALL');
  const [selectedLyricsTrack, setSelectedLyricsTrack] = useState(null);

  const tracks = artistData.tracks;
  const filteredTracks = filter === 'ALL'
    ? tracks
    : filter === 'DUETS'
    ? tracks.filter(t => t.duet)
    : tracks.filter(t => !t.duet);

  return (
    <section id="discography" className="py-24 relative overflow-hidden bg-[#050507]">
      {/* Cyan accent glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[2px] bg-[#00f0ff]"></span>
              <span className="text-xs font-tech font-bold uppercase tracking-[0.3em] text-[#00f0ff]">
                CATÁLOGO MUSICAL & COLABORACIONES
              </span>
            </div>
            <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl text-white tracking-wide">
              DISCOGRAFÍA & <span className="text-[#00f0ff]">DUETOS</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl font-light mt-1">
              Explora sus producciones originales, duetos de alto nivel y sesiones de freestyle. Haz clic para reproducir los beats.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 bg-zinc-900/90 p-1.5 rounded-full border border-zinc-800 self-start md:self-auto">
            <button
              onClick={() => setFilter('ALL')}
              className={`px-4 py-1.5 rounded-full text-xs font-tech font-bold tracking-wider transition-all ${
                filter === 'ALL'
                  ? 'bg-[#00f0ff] text-black font-bold shadow-md shadow-cyan-500/30'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              TODOS ({tracks.length})
            </button>
            <button
              onClick={() => setFilter('DUETS')}
              className={`px-4 py-1.5 rounded-full text-xs font-tech font-bold tracking-wider transition-all flex items-center gap-1.5 ${
                filter === 'DUETS'
                  ? 'bg-[#00f0ff] text-black font-bold shadow-md shadow-cyan-500/30'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Mic2 size={13} />
              <span>DUETOS</span>
            </button>
            <button
              onClick={() => setFilter('SOLO')}
              className={`px-4 py-1.5 rounded-full text-xs font-tech font-bold tracking-wider transition-all ${
                filter === 'SOLO'
                  ? 'bg-[#00f0ff] text-black font-bold shadow-md shadow-cyan-500/30'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              SOLOS
            </button>
          </div>
        </div>

        {/* Tracks List / Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Track List (8 cols) */}
          <div className="lg:col-span-8 space-y-3">
            {filteredTracks.map((track, idx) => {
              const isCurrent = currentTrack?.id === track.id;
              const isThisPlaying = isCurrent && isPlaying;

              return (
                <div
                  key={track.id}
                  className={`p-4 rounded-2xl border transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group ${
                    isCurrent
                      ? 'bg-cyan-950/30 border-cyan-500/80 shadow-lg shadow-cyan-500/20'
                      : 'bg-zinc-900/50 border-zinc-800/80 hover:border-cyan-500/40 hover:bg-zinc-900/90'
                  }`}
                >
                  {/* Left: Number + Cover + Track info */}
                  <div className="flex items-center gap-4">
                    <span className="font-heading text-xl text-zinc-500 w-6 text-center group-hover:text-[#00f0ff] transition-colors">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>

                    {/* Cover Thumbnail */}
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-black flex-shrink-0 border border-white/10">
                      <img
                        src={track.cover}
                        alt={track.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {/* Play overlay button on image */}
                      <button
                        onClick={() => {
                          if (isCurrent) {
                            onTogglePlay();
                          } else {
                            onSelectTrack(track);
                          }
                        }}
                        className={`absolute inset-0 bg-black/60 flex items-center justify-center text-white transition-opacity ${
                          isThisPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        }`}
                        aria-label="Reproducir track"
                      >
                        {isThisPlaying ? (
                          <Pause size={18} className="text-[#00f0ff]" />
                        ) : (
                          <Play size={18} className="fill-white translate-x-0.5" />
                        )}
                      </button>
                    </div>

                    {/* Track info */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-heading text-lg sm:text-xl text-white tracking-wide group-hover:text-cyan-400 transition-colors">
                          {track.title}
                        </h4>
                        {track.duet && (
                          <span className="px-2 py-0.5 rounded-full bg-cyan-600/20 border border-cyan-500/40 text-[9px] font-tech text-cyan-300 font-bold uppercase tracking-wider">
                            DUETO
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-xs font-tech text-zinc-400">
                        <span>{track.artist}</span>
                        <span>•</span>
                        <span>{track.genre}</span>
                        <span>•</span>
                        <span className="text-zinc-500">{track.bpm} BPM</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Duration + Actions */}
                  <div className="flex items-center justify-end gap-3 pt-2 sm:pt-0 border-t border-zinc-800/60 sm:border-0">
                    <span className="font-tech text-xs text-zinc-400">
                      {track.duration}
                    </span>

                    {/* View Lyrics */}
                    <button
                      onClick={() => setSelectedLyricsTrack(track)}
                      className="p-2 rounded-lg bg-zinc-800/60 hover:bg-cyan-950/60 border border-zinc-700/60 hover:border-cyan-500/60 text-zinc-300 hover:text-[#00f0ff] transition-colors"
                      title="Ver Letra / Barras"
                    >
                      <FileText size={15} />
                    </button>

                    {/* Main Play CTA */}
                    <button
                      onClick={() => {
                        if (isCurrent) {
                          onTogglePlay();
                        } else {
                          onSelectTrack(track);
                        }
                      }}
                      className={`px-4 py-2 rounded-full font-tech text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                        isThisPlaying
                          ? 'bg-[#00f0ff] text-black shadow-lg shadow-cyan-500/40'
                          : 'bg-zinc-800 text-zinc-200 hover:bg-[#00f0ff] hover:text-black'
                      }`}
                    >
                      {isThisPlaying ? <Pause size={14} /> : <Play size={14} className="fill-current" />}
                      <span>{isThisPlaying ? 'SONANDO' : 'ESCUCHAR'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Featured Duets Spotlight Card (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-card-cyan p-6 rounded-3xl space-y-4 relative overflow-hidden">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00f0ff] animate-ping"></span>
                <span className="text-xs font-tech font-bold uppercase tracking-widest text-[#00f0ff]">
                  ESPECIAL DUETOS
                </span>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-cyan-500/40 aspect-video">
                <img
                  src="/assets/IMG_1829.jpg"
                  alt="COREBACK Duets Live"
                  className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-xs font-tech text-white font-bold uppercase tracking-wider">
                    Sincronía 2vs2 & Feats
                  </p>
                </div>
              </div>

              <h4 className="font-display text-lg text-white font-bold leading-snug">
                La química perfecta en tarima y grabaciones de estudio
              </h4>
              
              <p className="text-xs text-zinc-300 font-light leading-relaxed">
                Reconocida por su versatilidad para acoplar coros, alternar barras en 4x4 y elevar el nivel lírico en cada colaboración musical.
              </p>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-tech text-zinc-400">Plataformas Oficiales</span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://spotify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-green-400 hover:border-green-500 transition-colors"
                    title="Spotify"
                  >
                    <Disc size={15} />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-[#00f0ff] hover:border-cyan-500 transition-colors"
                    title="YouTube"
                  >
                    <Radio size={15} />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Lyrics Modal if Selected */}
        {selectedLyricsTrack && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-[#0e0e12] border border-cyan-500/50 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative animate-scaleUp">
              
              <div className="flex items-start justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] font-tech text-[#00f0ff] font-bold uppercase tracking-wider">
                    LETRA & BARRAS
                  </span>
                  <h3 className="font-heading text-2xl text-white">
                    {selectedLyricsTrack.title}
                  </h3>
                  <p className="text-xs font-tech text-zinc-400">
                    {selectedLyricsTrack.artist} ({selectedLyricsTrack.year})
                  </p>
                </div>
                <button
                  onClick={() => setSelectedLyricsTrack(null)}
                  className="p-2 rounded-full bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700"
                >
                  ✕
                </button>
              </div>

              {/* Lyrics Content */}
              <div className="p-4 rounded-2xl bg-black/60 border border-white/5 font-mono text-sm text-zinc-200 leading-relaxed italic whitespace-pre-line max-h-60 overflow-y-auto">
                {selectedLyricsTrack.lyrics}
              </div>

              {/* Modal Actions */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => {
                    onSelectTrack(selectedLyricsTrack);
                    setSelectedLyricsTrack(null);
                  }}
                  className="btn-primary py-2 px-5 text-xs"
                >
                  <Play size={14} className="fill-current" />
                  <span>REPRODUCIR TRACK</span>
                </button>
                <button
                  onClick={() => setSelectedLyricsTrack(null)}
                  className="text-xs font-tech text-zinc-400 hover:text-white"
                >
                  CERRAR
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
