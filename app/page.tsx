'use client';

import StartSection from '@/containers/start-section';
import InviteSection from '@/containers/invite-section';
import dynamic from 'next/dynamic';
import PageLoader from '@/components/loaders/page-loader';
import React, { useState, useEffect } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { AnimatePresence, motion, Variants } from 'framer-motion';


// DynamicComponents
const DynamicFormSection = dynamic(() => import('@/containers/form-section'));
const DynamicScheduleSection = dynamic(
  () => import('@/containers/schedule-section'),
);
const DynamicClothesSection = dynamic(
  () => import('@/containers/clothes-section'),
);
const DynamicDetailsSection = dynamic(() => import('@/containers/details-section'))
const DynamicLocationSection = dynamic(() => import('@/containers/location-section'))

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

    if (typeof window !== 'undefined' && document.readyState === 'complete') {
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
            <StartSection setIsLoaded={setIsContentLoaded} />
            <InviteSection />
            <DynamicClothesSection />
            <DynamicScheduleSection />
            <DynamicLocationSection />
            <DynamicDetailsSection />
            <DynamicFormSection />
          </main>
          <Footer />
        </motion.article>
      )}
    </AnimatePresence>
  );
}
