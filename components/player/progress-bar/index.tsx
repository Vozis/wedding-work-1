'use client';

import React, { MutableRefObject } from 'react';

interface IProgressBar {
  progressBarRef: MutableRefObject<HTMLInputElement | null>;
  audioRef: MutableRefObject<HTMLAudioElement | null>;
  duration: number;
  timeProgress: number;
}

export default function ProgressBar({
  progressBarRef,
  audioRef,
  duration,
  timeProgress,
}: IProgressBar) {
  const handleProgressChange = () => {
    if (audioRef.current && audioRef.current.currentTime) {
      audioRef.current.currentTime = Number(progressBarRef.current?.value);
    }
  };

  return (
    <div>
      {/*<span>{timeProgress}</span>*/}
      <input
        type={'range'}
        ref={progressBarRef}
        defaultValue={'0'}
        onChange={handleProgressChange}
      />
      {/*<span>{duration}</span>*/}
    </div>
  );
}
