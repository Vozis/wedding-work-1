import React from 'react';
import cn from 'clsx';
import ClothesItem, {
  IClothesItem,
} from '@/components/lists/clothes-list/clothes-item';
import { motion } from 'framer-motion';

interface IClothesList extends React.HTMLAttributes<HTMLDivElement> {
  items: IClothesItem[];
}

export const notificationVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.15 } },
  exit: {
    x: '-12rem',
    opacity: 0,
    transition: {
      staggerChildren: 0.15,
      staggerDirection: -1,
      when: 'afterChildren',
      delay: 4,
    },
  },
};

export default function ClothesList({ items, className }: IClothesList) {
  return (
    <motion.ul className={cn('flex flex-col gap-4', className)}>
      {items.map((item, index) => (
        <ClothesItem title={item.title} key={index} index={index + 1} />
      ))}
    </motion.ul>
  );
}
