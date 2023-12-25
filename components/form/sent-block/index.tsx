import React from 'react';
import cn from 'clsx';
import { Variants } from 'framer-motion';

interface ISentBlock extends React.HTMLAttributes<HTMLDivElement> {
  nam?: string;
}

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

export default function SentBlock({ className, style }: ISentBlock) {
  return (
    <div className={cn('text-center', className)} style={style}>
      <p>
        Результаты успешно приняты! Если рядом есть еще кто-то, кому нужно
        отправить свои предпочтения, можно сделать это через пару секунд :)
      </p>
    </div>
  );
}
