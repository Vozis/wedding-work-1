'use client';

import React, { createContext, useState } from 'react';
import { IPlayerContext } from '@/types/types';

export const PlayerContext = createContext<IPlayerContext | null>(null);

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <PlayerContext.Provider value={{ isPlaying, setIsPlaying }}>
      {children}
    </PlayerContext.Provider>
  );
}
