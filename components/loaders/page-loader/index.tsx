'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import loadingImg from '@/public/img/loading.svg';
import React from 'react';

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
    <motion.div
      key={'loading'}
      exit={{
        opacity: 0,
        transition: {
          duration: 1,
          delay: 1.5,
        },
      }}
      className="fixed inset-0 z-[10000] flex flex-1 items-center justify-center bg-white"
    >
      <motion.div
        key={'image'}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.5,
            duration: 1,
          },
        }}
      >
        <Image
          priority
          src={loadingImg}
          alt={'image'}
          // className={'animate-mount'}
        />
      </motion.div>
    </motion.div>
  );
}
