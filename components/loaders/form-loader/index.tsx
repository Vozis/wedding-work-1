import React from 'react';
import cn from 'clsx';
import cat from '@/public/img/cat.svg';
import Image from 'next/image';
import { AnimatePresence, motion, Variants } from 'framer-motion';

const variants: Variants = {
  out: {
    opacity: 0,
    y: 40,
    transition: {
      duration: 0.5,
    },
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.5,
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
      <Image src={cat} alt={'image'} width={150} height={150} />
      <p>Пока идет загрузка, полюбуйтесь котиком</p>
    </div>
  );
}
