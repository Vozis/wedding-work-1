import React, { MutableRefObject, useCallback, useEffect, useRef } from 'react';
import cn from 'clsx';
import { usePlayer } from '@/hooks/usePlayer';
import PlayButton from '@/components/player/controls/play-button';

interface IControls extends React.HTMLAttributes<HTMLButtonElement> {
  itemClassName?: string;
  audioRef: MutableRefObject<HTMLAudioElement | null>;
  progressBarRef: MutableRefObject<HTMLInputElement | null>;
  duration: number;
  setTimeProgress: React.Dispatch<React.SetStateAction<number>>;
  isPlaying?: Boolean;
  setIsPlaying?: (t: boolean) => void;
  itemPlayClass?: string;
}

export default function Controls({
  itemClassName,
  className,
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
  itemPlayClass,
  ...rest
}: IControls) {
  const { isPlaying, setIsPlaying } = usePlayer();
  const playAnimationRef = useRef<any | null>(null);

  const repeat = useCallback(() => {
    if (audioRef && audioRef.current) {
      const currentTime = audioRef.current!.currentTime;
      progressBarRef.current!.value = String(currentTime);
      if (progressBarRef.current) {
        progressBarRef.current!.style.setProperty(
          '--range-progress',
          `${(+progressBarRef.current.value / duration) * 100}%`,
        );
      }
      playAnimationRef.current = requestAnimationFrame(repeat);
    }
  }, [audioRef, duration, progressBarRef]);

  useEffect(() => {
    if (audioRef && audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      playAnimationRef.current = requestAnimationFrame(repeat);
    }
  }, [isPlaying, audioRef, repeat]);

  return (
    <>
      <PlayButton
        itemPlayClass={'ml-0.5'}
        className={cn(
          'relative z-2 flex items-center justify-center text-2xl after:absolute after:-z-1 after:rounded-full after:bg-white',
          className,
        )}
      />
    </>
  );
}
