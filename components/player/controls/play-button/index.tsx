'use client';

import { FaPause } from 'react-icons/fa6';
import { FaPlay } from 'react-icons/fa';
import React from 'react';
import cn from 'clsx';
import { usePlayer } from '@/hooks/usePlayer';

interface IPlayButton extends React.HTMLAttributes<HTMLButtonElement> {
  itemClassName?: string;
  itemPlayClass?: string;
}

export default function PlayButton({
  className,
  itemClassName,
  itemPlayClass,
}: IPlayButton) {
  const { isPlaying, setIsPlaying } = usePlayer();

  return (
    <button
      className={cn(
        'relative z-2 flex items-center justify-center text-2xl after:absolute after:-z-1 after:rounded-full after:bg-white',
        className,
      )}
      onClick={() => setIsPlaying(!isPlaying)}
    >
      {isPlaying ? (
        <FaPause className={itemClassName} />
      ) : (
        <FaPlay className={cn(itemPlayClass, itemClassName)} />
      )}
    </button>
  );
}
