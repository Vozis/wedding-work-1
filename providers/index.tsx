'use client';

import React, { useEffect, useState } from 'react';
import { PlayerProvider } from '@/providers/player';
import TransitionProvider from '@/providers/transition';

export default function Providers({ children }: { children: React.ReactNode }) {
  return <PlayerProvider>{children}</PlayerProvider>;
}
