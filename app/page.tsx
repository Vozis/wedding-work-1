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
import { Suspense } from 'react';

const DynamicStartSection = dynamic(
  () => import('@/containers/start-section'),
  { ssr: false },
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <StartSection />
      <InviteSection />
      <ClothesSection />
      <ScheduleSection />
      <LocationSection />
      <DetailsSection />
      <ImagesSection />
      <CloseSection />
    </main>
  );
}
