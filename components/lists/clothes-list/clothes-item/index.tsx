import { FC, PropsWithChildren } from 'react';
import cn from 'clsx';
import { motion, Variants } from 'framer-motion';
import { notificationVariants } from '@/components/lists/clothes-list';

export interface IClothesItem {
  title: string;
  index?: number;
  className?: string;
}

const fadeInVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeInOut',
    },
  },
};

const ClothesItem: FC<PropsWithChildren<IClothesItem>> = ({
  className,
  title,
  index,
}) => {
  return (
    <motion.li
      variants={fadeInVariants}
      initial={'initial'}
      whileInView={'animate'}
      viewport={{
        once: true,
        margin: '0px 0px -50px 0px',
      }}
      className={cn(
        'flex gap-2 text-xl font-medium lg:text-2xl xl:text-4xl',
        className,
      )}
    >
      {index && <span className={'inline-block w-3'}>{index}.</span>}
      <span>{title}</span>
    </motion.li>
  );
};

export default ClothesItem;
