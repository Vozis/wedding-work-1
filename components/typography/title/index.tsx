import cn from 'clsx';
import { FC } from 'react';
import { motion, Variants, AnimationProps } from 'framer-motion';

interface ITitle extends AnimationProps {
  title: string;
  className?: string;
  isAnimated?: boolean;
}

const variants: Variants = {
  initial: {
    y: 40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 0,
    transition: {
      delay: 0.5,
    },
  },
};

const Title: FC<ITitle> = ({
  title,
  className,
  initial,
  transition,
  animate,
  isAnimated = false,
}) => {
  return (
    <motion.h1
      className={cn('text-5xl lg:text-5xl xl:text-7xl', className)}
      initial={initial ? initial : isAnimated ? { y: 100, opacity: 0 } : {}}
      animate={animate ? animate : isAnimated ? { y: 0, opacity: 1 } : {}}
      transition={
        transition
          ? transition
          : { type: 'spring', stiffness: 125, delay: 2.5, duration: 2 }
      }
    >
      {title}
    </motion.h1>
  );
};

export default Title;
