'use client';

import { useMediaQuery } from 'usehooks-ts';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import DesktopMenu from '@/components/menu/desktop-menu';
import MobileMenu from '@/components/menu/mobile-menu';

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
  // return <MobileMenu />;
}
