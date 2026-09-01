import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Download, Share2, Tag } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';
import { artistData } from '../data/artistData';

export default function LightboxModal({ selectedImage, currentIndex, itemsList, onClose, onNavigate }) {
  if (!selectedImage) return null;

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onNavigate(-1);
    if (e.key === 'ArrowRight') onNavigate(1);
  }, [onClose, onNavigate]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [handleKeyDown]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `COREBACK - ${selectedImage.title}`,
        text: 'Mira esta foto de COREBACK en su web oficial',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('¡Enlace copiado al portapapeles!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 animate-fadeIn">
      
      {/* Top Header Bar */}
      <div className="flex items-center justify-between z-20">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff0033]"></span>
          <span className="font-tech text-xs font-bold text-zinc-300 uppercase tracking-widest">
            {currentIndex + 1} / {itemsList.length} • {selectedImage.category}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShare}
            className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-red-500 transition-colors"
            title="Compartir"
          >
            <Share2 size={16} />
          </button>
          
          <a
            href={artistData.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-pink-400 hover:text-white hover:border-pink-500 transition-colors"
            title="Ver en Instagram"
          >
            <InstagramIcon size={16} />
          </a>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-red-950/60 border border-red-700/60 text-white hover:bg-[#ff0033] transition-colors"
            title="Cerrar (Esc)"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Center Image Container with Prev/Next Buttons */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
        
        {/* Prev Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(-1);
          }}
          className="absolute left-2 sm:left-6 z-30 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-[#ff0033] border border-white/10 text-white transition-all transform hover:scale-110"
          aria-label="Foto anterior"
        >
          <ChevronLeft size={24} />
        </button>

        {/* The Image */}
        <div className="relative max-h-[75vh] max-w-[90vw] flex items-center justify-center">
          <img
            src={selectedImage.src}
            alt={selectedImage.title}
            className="max-h-[75vh] max-w-[90vw] object-contain rounded-xl shadow-2xl border border-white/10 animate-scaleUp"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(1);
          }}
          className="absolute right-2 sm:right-6 z-30 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-[#ff0033] border border-white/10 text-white transition-all transform hover:scale-110"
          aria-label="Siguiente foto"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Bottom Information Footer */}
      <div className="max-w-xl mx-auto text-center space-y-1 bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 z-20">
        <h3 className="font-heading text-xl sm:text-2xl text-white tracking-wide">
          {selectedImage.title}
        </h3>
        <p className="text-xs text-zinc-300 font-light">
          {selectedImage.description}
        </p>
      </div>

    </div>
  );
}
