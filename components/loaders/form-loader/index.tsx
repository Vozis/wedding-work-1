'use client';

import React from 'react';
import cn from 'clsx';
import cat from '@/public/img/cat.svg';
import Image from 'next/image';
import { Variants, AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

const variants: Variants = {
  initial: {
    opacity: 0,
    x: 20,
    transition: {
      duration: 1,
      type: 'spring',
    },
  },
  in: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: 0.5,
      type: 'spring',
    },
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: {
      duration: 1,
      type: 'spring',
    },
  },
};

export default function FormLoader({
  className,
  style,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-5',
        className,
      )}
      style={style}
    >
      <Image
        src={cat}
        alt={'image'}
        width={150}
        height={150}
        style={{
          width: 'auto',
          height: 'auto',
        }}
      />
      <p className={'text-2xl'}>Пока идет загрузка, полюбуйтесь котиком )</p>
    </div>
  );
}
