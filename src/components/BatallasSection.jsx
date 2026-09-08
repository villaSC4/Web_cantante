import React, { useState } from 'react';
import { Trophy, Flame, Zap, Shield, Play, Sparkles, Award } from 'lucide-react';
import { artistData } from '../data/artistData';

export default function BatallasSection() {
  const [activeTab, setActiveTab] = useState(0);

  const punchlines = [
    {
      round: "FINAL REGIONAL",
      quote: "Dijeron que el trono era para los de siempre, pero el fuego responde al que nunca se miente.",
      opp: "Batalla por el Título",
      hype: "99% Ovación"
    },
    {
      round: "DUELOS 2vs2 (DUETOS)",
      quote: "Dos micrófonos en sincronía, mi compa abre el camino y yo cierro la dinastía.",
      opp: "All-Stars Duetos",
      hype: "100% Clímax"
    },
    {
      round: "MINUTO LIBRE 4x4",
      quote: "4 años de escuela, 4 años de tarima, no me hables de suerte cuando tengo la rima.",
      opp: "Semifinal",
      hype: "98% Impacto"
    }
  ];

  return (
    <section id="batallas" className="py-24 relative overflow-hidden bg-[#0a0a0e] border-y border-cyan-950/60">
      {/* Background Neon Lasers */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[2px] bg-[#00f0ff]"></span>
              <span className="text-xs font-tech font-bold uppercase tracking-[0.3em] text-[#00f0ff]">
                FREESTYLE DE ÉLITE
              </span>
            </div>
            <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl text-white tracking-wide">
              BATALLAS DE <span className="text-[#00f0ff]">FREESTYLE</span> & GALLOS
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl font-light mt-1">
              Consagración en el circuito de mayor prestigio. Agilidad mental, punchlines quirúrgicos y un minuto de oro demoledor.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-cyan-950/40 border border-cyan-700/50 p-3.5 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-[#00f0ff] flex items-center justify-center text-black shadow-lg shadow-cyan-500/50">
              <Trophy size={24} />
            </div>
            <div>
              <div className="text-[11px] font-tech text-cyan-300 font-bold uppercase tracking-wider">
                PALMARÉS OFICIAL
              </div>
              <div className="font-heading text-xl text-white">
                CAMPEONA DE FREESTYLE
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Banner / Stage Photo */}
        <div className="relative rounded-3xl overflow-hidden border border-cyan-500/40 bg-zinc-950 mb-16 shadow-[0_0_50px_rgba(0,240,255,0.2)] group">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Visual stage photo: Gritty mic photo IMG_8335.jpg */}
            <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto lg:h-[450px] overflow-hidden">
              <img
                src="/assets/IMG_8335.jpg"
                alt="COREBACK Freestyle Batalla Live"
                className="w-full h-full object-cover object-center filter grayscale contrast-125 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-zinc-950 hidden lg:block"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent lg:hidden"></div>
              
              {/* Badge on Photo */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-cyan-500/50 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping"></span>
                <span className="text-[10px] font-tech font-bold text-white uppercase tracking-widest">
                  STAGE RECORD
                </span>
              </div>
            </div>

            {/* Content & Timeline */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
              <div className="space-y-2">
                <span className="tag-badge">
                  <Flame size={13} className="text-[#00f0ff]" />
                  <span>4 AÑOS EN EL CIRCUITO</span>
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-white font-bold tracking-tight">
                  Dominio Absoluto en el 1vs1 y Duetos 2vs2
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed">
                  COREBACK no solo destaca en el combate individual, sino que se ha ganado la admiración de los jurados y del público por su capacidad de acople perfecto en batallas de parejas y duetos estelares.
                </p>
              </div>

              {/* Milestones Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {artistData.battleMilestones.slice(0, 4).map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-cyan-500/50 transition-colors space-y-1"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-heading text-base text-[#00f0ff]">{item.year}</span>
                      <span className="text-[10px] font-tech text-zinc-400 uppercase">{item.location}</span>
                    </div>
                    <h5 className="font-tech text-xs font-bold text-white uppercase">
                      {item.title}
                    </h5>
                    <p className="text-[11px] text-zinc-400 font-light line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

        {/* Punchlines & Memorables Bars Showcase */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-3xl sm:text-4xl text-white tracking-wide">
              PUNCHLINES <span className="text-[#00f0ff]">MEMORABLES</span>
            </h3>
            <span className="text-xs font-tech text-zinc-400 uppercase tracking-widest">
              HISTÓRICO EN TARIMA
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {punchlines.map((bar, index) => (
              <div
                key={index}
                className="glass-card p-6 relative flex flex-col justify-between group hover:border-[#00f0ff] transition-all"
              >
                {/* Cyan laser corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
                  <div className="absolute transform rotate-45 bg-[#00f0ff] text-[8px] font-tech font-bold text-black text-center w-12 top-1.5 right-[-14px]">
                    MVP
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-tech text-[#00f0ff] font-bold uppercase tracking-wider">
                    <Zap size={14} />
                    <span>{bar.round}</span>
                  </div>
                  <p className="font-display text-lg text-white font-medium italic leading-snug">
                    "{bar.quote}"
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-tech text-zinc-400">
                  <span>{bar.opp}</span>
                  <span className="text-cyan-400 font-bold">{bar.hype}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
