import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeBanner from './components/MarqueeBanner';
import About from './components/About';
import BatallasSection from './components/BatallasSection';
import Discography from './components/Discography';
import Gallery from './components/Gallery';
import PressSection from './components/PressSection';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';
import LightboxModal from './components/LightboxModal';
import { artistData } from './data/artistData';
import { beatEngine } from './utils/audioEngine';

export default function App() {
  const [currentTrack, setCurrentTrack] = useState(artistData.tracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Lightbox state
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxItems, setLightboxItems] = useState(artistData.gallery);

  // Toggle play/pause
  const handleTogglePlay = () => {
    if (isPlaying) {
      beatEngine.stop();
      setIsPlaying(false);
    } else {
      beatEngine.start(currentTrack);
      setIsPlaying(true);
    }
  };

  // Select a new track
  const handleSelectTrack = (track) => {
    setCurrentTrack(track);
    beatEngine.stop();
    beatEngine.start(track);
    setIsPlaying(true);
  };

  // Next track
  const handleNextTrack = () => {
    const currentIndex = artistData.tracks.findIndex(t => t.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % artistData.tracks.length;
    handleSelectTrack(artistData.tracks[nextIndex]);
  };

  // Prev track
  const handlePrevTrack = () => {
    const currentIndex = artistData.tracks.findIndex(t => t.id === currentTrack.id);
    const prevIndex = (currentIndex - 1 + artistData.tracks.length) % artistData.tracks.length;
    handleSelectTrack(artistData.tracks[prevIndex]);
  };

  // Open Lightbox
  const handleOpenLightbox = (image, index, items) => {
    setLightboxImage(image);
    setLightboxIndex(index);
    setLightboxItems(items);
  };

  // Navigate inside Lightbox
  const handleNavigateLightbox = (direction) => {
    const newIndex = (lightboxIndex + direction + lightboxItems.length) % lightboxItems.length;
    setLightboxIndex(newIndex);
    setLightboxImage(lightboxItems[newIndex]);
  };

  const handleCloseLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className="min-h-screen bg-[#040405] text-white flex flex-col selection:bg-[#00f0ff] selection:text-black">
      {/* Top Navbar */}
      <Navbar
        isPlaying={isPlaying}
        currentTrack={currentTrack}
        onTogglePlay={handleTogglePlay}
      />

      {/* Main Content */}
      <main className="flex-1">
        <Hero
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          onTogglePlay={handleTogglePlay}
          onSelectTrack={handleSelectTrack}
        />

        <MarqueeBanner />

        <About />

        <BatallasSection />

        <Discography
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          onSelectTrack={handleSelectTrack}
          onTogglePlay={handleTogglePlay}
        />

        <Gallery onOpenLightbox={handleOpenLightbox} />

        <PressSection />

        <BookingForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fixed Bottom Audio Player */}
      <AudioPlayer
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        onTogglePlay={handleTogglePlay}
        onNextTrack={handleNextTrack}
        onPrevTrack={handlePrevTrack}
        onOpenLyrics={(track) => {}}
      />

      {/* Lightbox Modal */}
      {lightboxImage && (
        <LightboxModal
          selectedImage={lightboxImage}
          currentIndex={lightboxIndex}
          itemsList={lightboxItems}
          onClose={handleCloseLightbox}
          onNavigate={handleNavigateLightbox}
        />
      )}
    </div>
  );
}
