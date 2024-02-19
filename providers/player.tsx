'use client';

import React, { createContext, useReducer, useState } from 'react';
import {
  IPlayerContext,
  IPlayerContext2,
  PlayerAction,
  PlayerData,
} from '@/types/types';

const reducer = (state: PlayerData, action: PlayerAction) => {
  switch (action.type) {
    case 'TOGGLE_IS_PLAYING':
      const newIsPlaying = state.isPlaying ? false : true;
      return { ...state, isPlaying: newIsPlaying };
    default:
      return state;
  }
};

const initialState: PlayerData = {
  isPlaying: false,
};

const playerState = {
  isPlaying: initialState,
  setIsPlaying: (action: PlayerAction): void => {},
};

// export const PlayerContext = createContext<IPlayerContext>(playerState);
export const PlayerContext = createContext<IPlayerContext | null>(null);

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // const [isPlaying, setIsPlaying] = useReducer(reducer, initialState);

  return (
    <PlayerContext.Provider value={{ isPlaying, setIsPlaying }}>
      {children}
    </PlayerContext.Provider>
  );
}
