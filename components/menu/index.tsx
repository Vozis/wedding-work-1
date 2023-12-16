'use client';

import { useMediaQuery } from 'usehooks-ts';
import MobileMenu from '@/components/menu/mobile-menu';
import DesktopMenu from '@/components/menu/desktop-menu';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const DynamicMobileMenu = dynamic(
  () => import('@/components/menu/mobile-menu'),
  {
    ssr: false,
  },
);
const DynamicDesktopMenu = dynamic(
  () => import('@/components/menu/desktop-menu'),
  {
    ssr: false,
  },
);

export default function HeaderMenu() {
  const isMobile = useMediaQuery('(max-width:650px)');
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => setIsMounted(true), []);

  return <div>{isMobile ? <DynamicMobileMenu /> : <DynamicDesktopMenu />}</div>;
}
