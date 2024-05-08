import React, { useRef, useState } from 'react';
import ProgressBar from '@/components/player/progress-bar';
import DisplayTrack from '@/components/player/display-track';
import cn from 'clsx';
import { IMusicTrack } from '@/types/music';
import { musicTracks } from '@/libs/music';
import Controls from '@/components/player/controls';

interface IPlayer extends React.HTMLAttributes<HTMLDivElement> {}

export default function Player({ className }: IPlayer) {
  const [currentTrack, setCurrentTrack] = useState<IMusicTrack>(musicTracks[0]);
  const [timeProgress, setTimeProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className={cn('', className)}>
      <DisplayTrack
        currentTrack={currentTrack}
        audioRef={audioRef}
        progressBarRef={progressBarRef}
        setDuration={setDuration}
      />
      <Controls
        setTimeProgress={setTimeProgress}
        className={'h-16 w-16 after:h-16 after:w-16'}
        itemPlayClass={'ml-1'}
        audioRef={audioRef}
        progressBarRef={progressBarRef}
        duration={duration}
      />
      <ProgressBar
        progressBarRef={progressBarRef}
        audioRef={audioRef}
        duration={duration}
        timeProgress={timeProgress}
      />
    </div>
  );
}
