import React from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useSectionInView } from '@/hooks/useSectionInView';
import { useActiveSectionContext } from '@/providers/action-section-context';

interface IAnimationSection extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
}

const variants: Variants = {
  initial: {
    opacity: 0,
    y: 40,
    transition: {
      duration: 0.5,
    },
  },
  animate: {
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
  const { ref } = useSectionInView(id, 0.5);

  const { activeSection } = useActiveSectionContext();

  return (
    <motion.section
      ref={ref}
      className={className}
      style={style}
      key={id}
      id={id}
      variants={variants}
      whileInView="animate"
      viewport={{ once: true, amount: 'some' }}
      initial="initial"
      layout
    >
      {children}
    </motion.section>
  );
}
