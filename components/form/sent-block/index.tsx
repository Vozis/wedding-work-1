'use client';

import React from 'react';
import cn from 'clsx';
import { Variants, AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

interface ISentBlock extends React.HTMLAttributes<HTMLDivElement> {
  nam?: string;
}

const variants: Variants = {
  out: {
    opacity: 0,
    x: 40,
    transition: {
      duration: 1,
    },
  },
  in: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: {
      duration: 1,
    },
  },
};

export default function SentBlock({ className, style }: ISentBlock) {
  return (
    <div
      // variants={variants}
      // animate="in"
      // initial="out"
      // exit="exit"
      className={cn(' text-center', className)}
      style={style}
    >
      <p className={'text-2xl'}>
        Результаты успешно приняты! Если рядом есть еще кто-то, кому нужно
        отправить свои предпочтения, можно сделать это через пару секунд :)
      </p>
    </div>
  );
}
