import React from 'react';
import { Quote, Globe, Sparkles, TrendingUp, Radio, Award } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';
import { artistData } from '../data/artistData';

export default function PressSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-[#07070a] border-t border-zinc-900">
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <div className="inline-flex items-center gap-2 mb-1">
            <span className="w-6 h-[2px] bg-[#00f0ff]"></span>
            <span className="text-xs font-tech font-bold uppercase tracking-[0.3em] text-[#00f0ff]">
              RECONOCIMIENTO & IMPACTO
            </span>
            <span className="w-6 h-[2px] bg-[#00f0ff]"></span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white tracking-wide">
            MEDIOS DIGITALES & <span className="text-[#00f0ff]">PRENSA</span>
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm font-light">
            Lo que dicen las plataformas especializadas y la comunidad del hip hop sobre el fenómeno COREBACK.
          </p>
        </div>

        {/* Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {artistData.pressQuotes.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-cyan-500/50 transition-all duration-300 relative flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-tech font-bold uppercase tracking-wider text-[#00f0ff] bg-cyan-950/40 border border-cyan-800/30 px-2.5 py-1 rounded-full">
                    {item.tag}
                  </span>
                  <Quote size={20} className="text-zinc-600 group-hover:text-cyan-400 transition-colors" />
                </div>

                <p className="text-sm text-zinc-300 font-light italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-zinc-800 flex items-center justify-between">
                <span className="font-heading text-lg text-white tracking-wide">
                  {item.source}
                </span>
                <span className="text-xs text-cyan-400 font-tech">★★★★★</span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Feature Showcase Card */}
        <div className="rounded-3xl bg-gradient-to-r from-purple-950/30 via-zinc-900/80 to-cyan-950/30 border border-pink-500/30 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2">
                <InstagramIcon size={20} className="text-pink-400" />
                <span className="text-xs font-tech font-bold uppercase tracking-widest text-pink-400">
                  COMUNIDAD OFICIAL
                </span>
              </div>
              <h3 className="font-heading text-3xl sm:text-4xl text-white tracking-wide">
                CONÉCTATE DIRECTO EN <span className="text-pink-400">@COREBACKK</span>
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed max-w-xl">
                Sigue las historias diarias, ensayos de batallas, lanzamientos sorpresa, sesiones de freestyle en vivo y material exclusivo entre bastidores.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch lg:items-end justify-center gap-3">
              <a
                href={artistData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-pink-600 to-cyan-600 text-white font-tech text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-pink-600/30 text-center"
              >
                <InstagramIcon size={16} />
                <span>SEGUIR EN INSTAGRAM</span>
              </a>
              <span className="text-[11px] font-tech text-zinc-400 text-center lg:text-right">
                Historias y contenido diario activo
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
