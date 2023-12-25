'use client';

import React from 'react';
import { PlayerProvider } from '@/providers/player';

export default function Providers({ children }: { children: React.ReactNode }) {
  return <PlayerProvider>{children}</PlayerProvider>;
}
