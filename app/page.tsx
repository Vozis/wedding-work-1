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
import React, { Fragment, Suspense, useEffect, useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import logoImage from '@/public/img/logo2.svg';
import FormSection from '@/containers/form-section';

const DynamicFormSection = dynamic(() => import('@/containers/form-section'));
const DynamicScheduleSection = dynamic(
  () => import('@/containers/schedule-section'),
);
const DynamicImageSection = dynamic(
  () => import('@/containers/images-section'),
);
const DynamicClothesSection = dynamic(
  () => import('@/containers/clothes-section'),
);
const DynamicCloseSection = dynamic(() => import('@/containers/close-section'));

const variants: Variants = {
  out: {
    opacity: 0,
    x: 500,
    transition: {
      duration: 2,
    },
  },
  in: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

export default function Home() {
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {
    const fn = () => {
      console.log('all content loaded');
      setIsContentLoaded(true);
    };

    if (document.readyState === 'complete') {
      fn();
    } else {
      window.addEventListener('load', fn);
      return () => window.removeEventListener('load', fn);
    }
  }, []);

  return (
    <AnimatePresence mode={'wait'}>
      {!isContentLoaded ? (
        <PageLoader />
      ) : (
        <motion.article
          key={'body'}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 1,
              delay: 0.5,
            },
          }}
        >
          <Header />
          <main className="min-h-screen">
            <StartSection />
            <ClothesSection />
            {/*<ScheduleSection />*/}
            {/*<DynamicClothesSection />*/}
            <DynamicScheduleSection />
            <LocationSection />
            <DetailsSection />
            {/*<ImagesSection />*/}
            {/*<FormSection />*/}
            {/*<DynamicImageSection />*/}
            <DynamicFormSection />
          </main>
          <Footer />
        </motion.article>
      )}
    </AnimatePresence>
  );
}
