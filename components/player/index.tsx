import PlayButton from '@/components/player/play-button';
import Scale from '@/components/player/scale';
import React from 'react';

interface IPlayer extends React.HTMLAttributes<HTMLDivElement> {}

export default function Player({ className }: IPlayer) {
  return (
    <div className={className}>
      <PlayButton className={'h-16 w-16 after:h-16 after:w-16'} />
      <Scale />
    </div>
  );
}
