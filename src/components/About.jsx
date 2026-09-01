import React from 'react';
import { ShieldCheck, Flame, Mic, Award, Zap, ChevronRight } from 'lucide-react';
import { artistData } from '../data/artistData';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#07070a]">
      {/* Background accents */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[2px] bg-[#ff0033]"></span>
            <span className="text-xs font-tech font-bold uppercase tracking-[0.3em] text-[#ff0033]">
              IDENTIDAD & TRAYECTORIA
            </span>
          </div>
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl text-white tracking-wide">
            4 AÑOS FORJANDO EL <span className="text-[#ff0033]">LEGADO</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-2 font-light">
            Desde los cyphers callejeros hasta el máximo trono de Red Bull Batalla, una carrera construida sobre disciplina, líricas certeras y potencia pura.
          </p>
        </div>

        {/* Main Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Collage with 2 Images */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-12 gap-4 items-center">
              
              {/* Primary Image: Dark Hoodie / Street Portrait */}
              <div className="col-span-8 relative">
                <div className="relative rounded-2xl overflow-hidden border border-red-500/30 shadow-2xl group">
                  <img
                    src="/assets/IMG_3706.png"
                    alt="COREBACK Portrait"
                    className="w-full aspect-[4/5] object-cover object-center filter brightness-90 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/80 backdrop-blur-md rounded-xl border border-white/10">
                    <span className="text-[10px] font-tech text-[#ff0033] font-bold uppercase tracking-wider block">
                      ESTILO & ACTITUD
                    </span>
                    <p className="text-xs text-zinc-200 font-medium">
                      Dark Rap • Boom Bap • Estética Streetwear
                    </p>
                  </div>
                </div>
              </div>

              {/* Secondary Overlapping Image: Camcorder / Backstage */}
              <div className="col-span-4 relative -ml-6 z-20 space-y-4">
                <div className="rounded-xl overflow-hidden border border-zinc-700/80 shadow-2xl group transform hover:-translate-y-1 transition-all duration-300">
                  <img
                    src="/assets/IMG_5552.jpg"
                    alt="COREBACK Camcorder"
                    className="w-full aspect-[3/4] object-cover filter brightness-90 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-red-950/20 mix-blend-color"></div>
                </div>

                {/* Mini Stat Card */}
                <div className="bg-black/90 p-4 rounded-xl border border-red-500/40 text-center shadow-lg">
                  <div className="font-heading text-3xl text-[#ff0033] leading-none">4+</div>
                  <div className="text-[9px] font-tech text-zinc-300 uppercase tracking-widest mt-1">
                    AÑOS DE FLOW
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Key Features */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-4">
              <h3 className="font-display text-2xl sm:text-3xl text-white font-bold tracking-tight">
                "La palabra es el arma más afilada cuando tienes la verdad en el pecho."
              </h3>
              
              {artistData.bioLong.map((paragraph, index) => (
                <p key={index} className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/40 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-red-950/60 border border-red-800/40 flex items-center justify-center text-[#ff0033] mb-3 group-hover:scale-110 transition-transform">
                  <Award size={20} />
                </div>
                <h4 className="font-tech text-sm font-bold text-white uppercase tracking-wider mb-1">
                  Red Bull Batalla
                </h4>
                <p className="text-xs text-zinc-400">
                  Consagración en el torneo más exigente de freestyle hispanohablante con respuestas al momento y punchlines demoledores.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/40 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-red-950/60 border border-red-800/40 flex items-center justify-center text-[#ff0033] mb-3 group-hover:scale-110 transition-transform">
                  <Mic size={20} />
                </div>
                <h4 className="font-tech text-sm font-bold text-white uppercase tracking-wider mb-1">
                  Duetos & Colaboraciones
                </h4>
                <p className="text-xs text-zinc-400">
                  Referente absoluta en formatos 2vs2 y canciones colaborativas, complementando métricas complejas y coros memorables.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/40 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-red-950/60 border border-red-800/40 flex items-center justify-center text-[#ff0033] mb-3 group-hover:scale-110 transition-transform">
                  <Flame size={20} />
                </div>
                <h4 className="font-tech text-sm font-bold text-white uppercase tracking-wider mb-1">
                  Medios Digitales
                </h4>
                <p className="text-xs text-zinc-400">
                  Impacto viral en Instagram, TikTok, YouTube y plataformas de streaming con más de 1.2M de visualizaciones en la escena.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/40 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-red-950/60 border border-red-800/40 flex items-center justify-center text-[#ff0033] mb-3 group-hover:scale-110 transition-transform">
                  <Zap size={20} />
                </div>
                <h4 className="font-tech text-sm font-bold text-white uppercase tracking-wider mb-1">
                  Sonido Vanguardista
                </h4>
                <p className="text-xs text-zinc-400">
                  Fusión de crudeza 90s, dark ambient, drill y métricas vanguardistas adaptadas a cualquier tarima.
                </p>
              </div>

            </div>

            {/* Instagram CTA callout */}
            <div className="pt-2">
              <a
                href={artistData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-tech font-bold uppercase tracking-widest text-[#ff0033] hover:text-white transition-colors"
              >
                <span>SEGUIR EL DÍA A DÍA EN @COREBACKK</span>
                <ChevronRight size={16} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
