import cn from 'clsx';
import React, { FC, PropsWithChildren } from 'react';
import {
  motion,
  AnimatePresenceProps,
  AnimationProps,
  Variants,
} from 'framer-motion';

interface IDescription
  extends React.HTMLAttributes<HTMLParagraphElement>,
    AnimationProps {
  isAnimated?: boolean;
}

const Description: FC<PropsWithChildren<IDescription>> = ({
  children,
  className,
  variants,
  animate,
  initial,
  transition,
  isAnimated = false,
  ...rest
}) => {
  return (
    <motion.p
      className={cn(className, 'font-novelist text-lg')}
      initial={initial ? initial : isAnimated ? { y: 100, opacity: 0 } : {}}
      animate={animate ? animate : isAnimated ? { y: 0, opacity: 1 } : {}}
      transition={
        transition && !variants
          ? transition
          : { type: 'spring', stiffness: 125, delay: 2, duration: 0.7 }
      }
    >
      {children}
    </motion.p>
  );
};

export default Description;
