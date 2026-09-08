import React from 'react';
import { Flame, Trophy, Mic2, Disc, Radio, Zap } from 'lucide-react';

export default function MarqueeBanner() {
  const items = [
    { text: "COREBACK // FEMALE RAP TITAN", icon: <Flame size={14} className="text-[#00f0ff]" /> },
    { text: "CAMPEONA DE FREESTYLE", icon: <Trophy size={14} className="text-yellow-400" /> },
    { text: "4 AÑOS DOMINANDO TARIMAS", icon: <Zap size={14} className="text-[#00f0ff]" /> },
    { text: "DUETOS & FREESTYLE SESSIONS", icon: <Mic2 size={14} className="text-cyan-400" /> },
    { text: "NUEVOS BEATS & LANZAMIENTOS 2024", icon: <Disc size={14} className="text-cyan-400" /> },
    { text: "TOUR & BOOKING ABIERTO", icon: <Radio size={14} className="text-[#00f0ff]" /> },
  ];

  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="w-full bg-gradient-to-r from-cyan-950/70 via-black to-cyan-950/70 border-y border-cyan-500/30 py-3 overflow-hidden select-none relative shadow-lg shadow-black">
      <div className="flex animate-marquee whitespace-nowrap">
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 mx-6 text-xs sm:text-sm font-tech font-bold tracking-widest text-zinc-300 uppercase"
          >
            {item.icon}
            <span>{item.text}</span>
            <span className="text-cyan-500/40 text-xs font-mono">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
