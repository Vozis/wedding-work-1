'use client';

import { AnimatePresence, motion, usePresence, Variants } from 'framer-motion';
import Image from 'next/image';
import logoImage from '@/public/img/logo2.svg';
import React, { useEffect } from 'react';

const variants: Variants = {
  out: {
    opacity: 0,

    transition: {
      duration: 1,
      delay: 2,
    },
  },
  in: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export default function PageLoader() {
  return (
    <motion.div className="fixed inset-0 z-[10000] flex flex-1 items-center justify-center bg-white">
      <motion.div
      // initial={{
      //   opacity: 0,
      // }}
      // animate={{
      //   opacity: 1,
      //   transition: {
      //     duration: 2,
      //   },
      // }}
      // exit={{
      //   opacity: 0,
      //   x: -200,
      //   transition: {
      //     duration: 2,
      //   },
      // }}
      >
        <Image priority src={logoImage} alt={'image'} />
      </motion.div>
    </motion.div>
  );
}
