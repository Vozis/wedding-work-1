import { FC } from 'react';
import cn from 'clsx';
import { harmony } from '@/libs/fonts';
import { motion, AnimationProps } from 'framer-motion';

interface ISuperTitle extends AnimationProps {
  title: string;
  className?: string;
}

const SuperTitle: FC<ISuperTitle> = ({
  className,
  title,
  initial,
  animate,
  transition,
}) => {
  return (
    <motion.h1
      className={cn('', className, harmony.className)}
      // initial={initial ? initial : { x: -100, opacity: 0 }}
      // animate={animate ? animate : { x: 0, opacity: 1 }}
      // transition={
      //   transition
      //     ? transition
      //     : { type: 'just', stiffness: 125, delay: 2, duration: 0.7 }
      // }
    >
      {title}
    </motion.h1>
  );
};

export default SuperTitle;
