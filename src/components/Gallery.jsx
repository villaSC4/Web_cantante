import React, { useState } from 'react';
import { Camera, Image as ImageIcon, Sparkles, Eye, Layers, Maximize2 } from 'lucide-react';
import { artistData } from '../data/artistData';

export default function Gallery({ onOpenLightbox }) {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const categories = [
    { id: 'ALL', label: 'TODAS', count: artistData.gallery.length },
    { id: 'En Vivo', label: 'EN VIVO & BATALLAS', count: artistData.gallery.filter(i => i.category === 'En Vivo').length },
    { id: 'Duetos', label: 'DUETOS & COLLABS', count: artistData.gallery.filter(i => i.category === 'Duetos').length },
    { id: 'Sesiones', label: 'SESIONES URBANAS', count: artistData.gallery.filter(i => i.category === 'Sesiones').length },
    { id: 'Backstage', label: 'BACKSTAGE', count: artistData.gallery.filter(i => i.category === 'Backstage').length },
  ];

  const filteredItems = activeFilter === 'ALL'
    ? artistData.gallery
    : artistData.gallery.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-[#070709]">
      {/* Background Neon Lasers */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[2px] bg-[#00f0ff]"></span>
              <span className="text-xs font-tech font-bold uppercase tracking-[0.3em] text-[#00f0ff]">
                REGISTRO VISUAL
              </span>
            </div>
            <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl text-white tracking-wide">
              GALERÍA <span className="text-[#00f0ff]">AUDIOVISUAL</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl font-light mt-1">
              La intensidad de los directos, la química en duetos, las sesiones de estudio y la vida tras bambalinas.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-zinc-900/80 p-1.5 rounded-2xl border border-zinc-800 self-start md:self-auto">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-tech font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                  activeFilter === cat.id
                    ? 'bg-[#00f0ff] text-black font-bold shadow-md shadow-cyan-500/40'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  activeFilter === cat.id ? 'bg-black/40 text-black font-bold' : 'bg-zinc-800 text-zinc-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item, index, filteredItems)}
              className="group relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800/80 hover:border-cyan-500/80 cursor-pointer shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image Aspect Box */}
              <div className="aspect-[4/5] w-full overflow-hidden bg-zinc-900 relative">
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-110 group-hover:brightness-105 transition-all duration-500"
                />

                {/* Dark Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[9px] font-tech font-bold uppercase tracking-wider text-zinc-200 group-hover:border-cyan-500/50 group-hover:text-cyan-300 transition-colors">
                    {item.category}
                  </span>
                </div>

                {/* Hover Maximize Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all transform scale-75 group-hover:scale-100">
                  <Maximize2 size={14} className="text-[#00f0ff]" />
                </div>

                {/* Bottom Overlay Details */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <h4 className="font-heading text-lg text-white tracking-wide group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-zinc-300 font-light line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-xs font-tech text-zinc-500 uppercase tracking-widest">
            {artistData.gallery.length} FOTOGRAFÍAS OFICIALES EN ALTA RESOLUCIÓN • ARCHIVO COREBACK
          </p>
        </div>

      </div>
    </section>
  );
}
