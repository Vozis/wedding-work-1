'use client';

import Image from 'next/image';
import StartSection from '@/containers/start-section';
import InviteSection from '@/containers/invite-section';
import ClothesSection from '@/containers/clothes-section';
import ScheduleSection from '@/containers/schedule-section';
import CloseSection from '@/containers/close-section';
import LocationSection from '@/containers/location-section';
import DetailsSection from '@/containers/details-section';
import ImagesSection from '@/containers/images-section';
import dynamic from 'next/dynamic';
import PageLoader from '@/components/loaders/page-loader';
import { Suspense, useEffect, useState } from 'react';

const DynamicCloseSection = dynamic(() => import('@/containers/close-section'));
const DynamicScheduleSection = dynamic(
  () => import('@/containers/schedule-section'),
);
const DynamicImageSection = dynamic(
  () => import('@/containers/images-section'),
);
const DynamicClothesSection = dynamic(
  () => import('@/containers/clothes-section'),
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <StartSection />
      <InviteSection />
      <DynamicClothesSection />
      <DynamicScheduleSection />
      <LocationSection />
      <DetailsSection />
      <DynamicImageSection />
      <DynamicCloseSection />
    </main>
  );
}
