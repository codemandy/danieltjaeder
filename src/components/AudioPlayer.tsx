import { useState, useRef } from 'react';

interface AudioPlayerProps {
  title: string;
  description: string;
  duration: string;
  audioSrc: string;
}

export default function AudioPlayer({ title, description, duration, audioSrc }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <audio 
        ref={audioRef} 
        src={audioSrc} 
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
      
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-medium text-lg">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
        <span className="text-gray-500 text-sm">{isPlaying ? formatTime(currentTime) : '0:00'} / {duration}</span>
      </div>
      
      <div className="flex items-center space-x-4">
        <button 
          onClick={togglePlayPause}
          className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center"
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          )}
        </button>
        
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-black h-2 rounded-full" 
            style={{ 
              width: audioRef.current && audioRef.current.duration ? 
                `${(currentTime / audioRef.current.duration) * 100}%` : '0%' 
            }}
          ></div>
        </div>
      </div>
    </div>
  );
} 
