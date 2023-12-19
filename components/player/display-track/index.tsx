'use client';

import { IMusicTrack } from '@/types/music';
import React, { forwardRef, MutableRefObject } from 'react';
import { SelectField } from '@/components/form/inputs/select';

interface IDisplayTrack {
  currentTrack: IMusicTrack;
  audioRef: MutableRefObject<HTMLAudioElement | null>;
  progressBarRef: MutableRefObject<HTMLInputElement | null>;
  setDuration: React.Dispatch<React.SetStateAction<number>>;
}
export default function DisplayTrack({
  currentTrack,
  audioRef,
  setDuration,
  progressBarRef,
}: IDisplayTrack) {
  const onLoadedMetadata = () => {
    if (audioRef && audioRef.current) {
      const seconds = audioRef.current.duration;
      setDuration(seconds);
      if (progressBarRef && progressBarRef.current) {
        progressBarRef.current.max = String(seconds);
      }
    }
  };

  const onEnded = () => {
    if (audioRef && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <div>
      <audio
        src={currentTrack.src}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={onEnded}
      />
      <div className={'text-center text-white'}>
        <p className={'text-xl font-bold'}>{currentTrack.title}</p>
        <p>{currentTrack.author}</p>
      </div>
    </div>
  );
}
