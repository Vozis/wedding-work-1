import React from 'react';

export type PlayerData = {
  isPlaying: boolean;
};

export type PlayerAction = { type: 'TOGGLE_IS_PLAYING'; isPLaying: boolean };

export interface IPlayerContext2 {
  isPlaying: PlayerData;
  setIsPlaying: React.Dispatch<PlayerAction>;
}

export interface IPlayerContext {
  isPlaying: boolean;
  setIsPlaying: (t: boolean) => void;
}
