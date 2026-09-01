import React from 'react';
import { ArrowUp, Music, Radio, Disc, Heart, Flame } from 'lucide-react';
import { InstagramIcon, SpotifyIcon, YoutubeIcon } from './SocialIcons';
import { artistData } from '../data/artistData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030304] border-t border-zinc-900 pt-16 pb-28 sm:pb-24 relative overflow-hidden">
      
      {/* Laser line on top */}
      <div className="absolute top-0 left-0 right-0 red-laser-line"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-900">
          
          {/* Col 1: Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff0033]"></span>
              <span className="font-heading text-3xl sm:text-4xl tracking-wider text-white">
                CORE<span className="text-[#ff0033]">BACK</span>
              </span>
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm font-light max-w-sm leading-relaxed">
              4 años de trayectoria forjando un legado en el rap, freestyle y batallas de gallos. Música independiente con impacto internacional.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={artistData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-pink-400 hover:text-white hover:border-pink-500 transition-all hover:scale-105"
                title="Instagram @corebackk"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-green-400 hover:border-green-500 transition-all hover:scale-105"
                title="Spotify"
              >
                <SpotifyIcon size={18} />
              </a>
              <a
                href={artistData.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-red-500 hover:border-red-500 transition-all hover:scale-105"
                title="YouTube"
              >
                <YoutubeIcon size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="font-tech text-xs font-bold uppercase tracking-widest text-[#ff0033]">
              EXPLORAR
            </h5>
            <ul className="space-y-2 text-xs font-tech text-zinc-400">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">INICIO</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">TRAYECTORIA (4 AÑOS)</a>
              </li>
              <li>
                <a href="#redbull" className="hover:text-white transition-colors">REDBULL BATALLA</a>
              </li>
              <li>
                <a href="#discography" className="hover:text-white transition-colors">DISCOGRAFÍA & DUETOS</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">GALERÍA AUDIOVISUAL</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-white transition-colors">BOOKING & CONTACTO</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Booking info (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="font-tech text-xs font-bold uppercase tracking-widest text-[#ff0033]">
              CONTRATACIONES DIRECTAS
            </h5>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              Disponibilidad para festivales, exhibiciones de freestyle 1vs1, duetos 2vs2 y colaboraciones discográficas.
            </p>
            <div className="pt-1">
              <a
                href={artistData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-tech font-bold text-pink-400 hover:text-pink-300 block"
              >
                DM en Instagram: @corebackk
              </a>
              <span className="text-[11px] font-tech text-zinc-500 block mt-1">
                booking@corebackofficial.com
              </span>
            </div>
          </div>

        </div>

        {/* Bottom copyright and scroll to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-tech text-zinc-500">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} COREBACK. Todos los derechos reservados.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-zinc-400 hover:text-[#ff0033] transition-colors"
          >
            <span>VOLVER ARRIBA</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
