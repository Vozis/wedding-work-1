import React from 'react';
import { PlayerProvider } from '@/providers/player';
import TransitionProvider from '@/providers/transition';
import ActiveSectionContextProvider from '@/providers/action-section-context';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    // <TransitionProvider>
    <ActiveSectionContextProvider>
      <PlayerProvider>{children}</PlayerProvider>
    </ActiveSectionContextProvider>
    // </TransitionProvider>
  );
}
