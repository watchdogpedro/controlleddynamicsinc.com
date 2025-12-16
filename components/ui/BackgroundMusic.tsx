'use client';

import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, X } from 'lucide-react';

export default function BackgroundMusic() {
  const [mounted, setMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [volume, setVolume] = useState(0.15);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Only run on client after mount to prevent SSR hydration issues
  useEffect(() => {
    setMounted(true);

    // Check if user previously dismissed the player
    const dismissed = localStorage.getItem('backgroundMusicDismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      return;
    }

    // Check if user had music playing before
    const wasPlaying = localStorage.getItem('backgroundMusicPlaying');
    if (wasPlaying === 'true') {
      setIsPlaying(true);
    }

    // Get saved volume preference
    const savedVolume = localStorage.getItem('backgroundMusicVolume');
    if (savedVolume) {
      setVolume(parseFloat(savedVolume));
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;

      if (isPlaying) {
        audioRef.current.play().catch(() => {
          // Auto-play was prevented by browser
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, volume]);

  const togglePlay = () => {
    const newState = !isPlaying;
    setIsPlaying(newState);
    localStorage.setItem('backgroundMusicPlaying', newState.toString());
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    localStorage.setItem('backgroundMusicVolume', newVolume.toString());
  };

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsPlaying(false);
    localStorage.setItem('backgroundMusicDismissed', 'true');
    localStorage.setItem('backgroundMusicPlaying', 'false');
  };

  // Don't render until mounted on client (which only happens if not previously dismissed)
  // or if dismissed during this session
  if (!mounted || isDismissed) {
    return null;
  }

  return (
    <>
      {/* Audio element */}
      <audio
        ref={audioRef}
        loop
        preload="none"
        src="/background-music.mp3"
      />

      {/* Floating music player */}
      <div className="fixed bottom-6 right-6 z-[9999]">
        <div className="bg-white/95 backdrop-blur-sm shadow-lg rounded-full border border-gray-200 p-3 flex items-center gap-3">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
            title={isPlaying ? 'Pause background music' : 'Play background music'}
          >
            {isPlaying ? (
              <Volume2 className="w-5 h-5 text-[#C9A227]" />
            ) : (
              <VolumeX className="w-5 h-5 text-gray-600" />
            )}
          </button>

          {/* Volume slider (shows when playing) */}
          {isPlaying && (
            <div className="flex items-center gap-2 animate-fadeIn">
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-20 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#C9A227]"
                aria-label="Volume control"
              />
              <span className="text-xs text-gray-600 w-8">
                {Math.round(volume * 100)}%
              </span>
            </div>
          )}

          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close music player"
            title="Hide music player permanently"
          >
            <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
          </button>
        </div>

        {/* Tooltip for first-time visitors */}
        {!isPlaying && (
          <div className="absolute bottom-full right-0 mb-2 bg-[#0A1628] text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-lg animate-fadeIn">
            Click to play ambient music
            <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#0A1628]"></div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
