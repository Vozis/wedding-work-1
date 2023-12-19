import { IPlayerContext } from '@/types/types';
import { useContext } from 'react';
import { PlayerContext } from '@/providers/player';

export const usePlayer = (): IPlayerContext => {
  const context = useContext(PlayerContext);

  if (!context) {
    throw new Error('Please use PlayerProvider in parent Component');
  }

  return context;
};
