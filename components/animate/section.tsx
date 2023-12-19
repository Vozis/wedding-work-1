import React from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';

interface IAnimationSection extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
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
      delay: 0.25,
    },
  },
};

export default function AnimateSection({
  id,
  children,
  className,
  style,
}: IAnimationSection) {
  return (
    <AnimatePresence>
      <motion.section
        className={className}
        style={style}
        key={id}
        id={id}
        variants={variants}
        whileInView="in"
        viewport={{ once: true, amount: 'some' }}
        initial="out"
        exit="out"
      >
        {children}
      </motion.section>
    </AnimatePresence>
  );
}
