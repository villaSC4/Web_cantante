import React, { useState, useEffect } from 'react';
import { Menu, X, Flame, Sparkles } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from './SocialIcons';
import { artistData } from '../data/artistData';

export default function Navbar({ isPlaying, currentTrack, onTogglePlay }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'INICIO', href: '#hero' },
    { name: 'TRAYECTORIA', href: '#about' },
    { name: 'REDBULL & BATALLAS', href: '#redbull' },
    { name: 'DISCOGRAFÍA', href: '#discography' },
    { name: 'GALERÍA', href: '#gallery' },
    { name: 'BOOKING', href: '#booking' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050506]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl shadow-black/90'
          : 'bg-gradient-to-b from-black/90 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative">
            <span className="w-3 h-3 rounded-full bg-[#ff0033] inline-block animate-ping absolute -top-1 -right-1 opacity-75"></span>
            <span className="w-3 h-3 rounded-full bg-[#ff0033] inline-block absolute -top-1 -right-1"></span>
            <span className="font-heading text-3xl sm:text-4xl tracking-wider text-white group-hover:text-red-500 transition-colors">
              CORE<span className="text-[#ff0033]">BACK</span>
            </span>
          </div>
          <span className="hidden sm:inline-block text-[10px] uppercase font-tech tracking-widest text-zinc-400 border border-zinc-700/60 px-2 py-0.5 rounded bg-zinc-900/50">
            OFFICIAL WEB
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-tech font-bold tracking-widest text-zinc-300 hover:text-[#ff0033] transition-colors relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#ff0033] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Mini Beat Status */}
          {currentTrack && (
            <button
              onClick={onTogglePlay}
              title={isPlaying ? 'Pausar Música de Fondo' : 'Reproducir Música de Fondo'}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-red-500/40 text-xs font-tech text-zinc-200 hover:border-red-500 transition-colors shadow-sm"
            >
              <div className="flex items-end gap-0.5 h-3">
                <span className={`w-0.5 bg-[#ff0033] rounded-full transition-all ${isPlaying ? 'h-3 animate-pulse' : 'h-1.5'}`}></span>
                <span className={`w-0.5 bg-[#ff0033] rounded-full transition-all ${isPlaying ? 'h-2 animate-pulse' : 'h-1'}`}></span>
                <span className={`w-0.5 bg-[#ff0033] rounded-full transition-all ${isPlaying ? 'h-3.5 animate-pulse' : 'h-2'}`}></span>
              </div>
              <span className="max-w-[110px] truncate text-[11px] font-semibold">{currentTrack.title}</span>
            </button>
          )}

          {/* YouTube Link */}
          <a
            href={artistData.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-red-500 text-red-500 hover:text-white transition-all shadow-sm"
            title="Canal de YouTube @COREBACKK"
          >
            <YoutubeIcon size={16} />
          </a>

          {/* Instagram Direct Link */}
          <a
            href={artistData.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-pink-500/30 hover:border-pink-500 text-xs font-semibold text-zinc-200 hover:text-white transition-all shadow-sm hover:shadow-pink-500/20"
            title="Instagram Oficial @corebackk"
          >
            <InstagramIcon size={15} className="text-pink-400" />
            <span className="hidden md:inline font-tech text-[11px]">@corebackk</span>
          </a>

          {/* Booking CTA */}
          <a
            href="#booking"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#ff0033] text-white text-xs font-tech font-bold uppercase tracking-wider hover:bg-red-600 transition-all shadow-lg shadow-red-600/30 hover:shadow-red-600/50"
          >
            <Flame size={14} />
            <span>BOOKING</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white hover:text-[#ff0033]"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a0d] border-b border-red-900/30 px-6 py-6 transition-all duration-300 animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-tech font-bold tracking-widest text-zinc-300 hover:text-[#ff0033] py-2 border-b border-zinc-900 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-red-500/60">→</span>
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={artistData.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-red-950/50 border border-red-600/40 text-red-200 text-xs font-bold"
              >
                <YoutubeIcon size={16} />
                <span>CANAL YOUTUBE @COREBACKK</span>
              </a>
              <a
                href={artistData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-pink-950/40 border border-pink-600/40 text-pink-200 text-xs font-bold"
              >
                <InstagramIcon size={16} />
                <span>SEGUIR EN INSTAGRAM @corebackk</span>
              </a>
              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#ff0033] text-white text-xs font-bold uppercase tracking-wider"
              >
                <Flame size={16} />
                <span>SOLICITAR BOOKING & FECHAS</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
