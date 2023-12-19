import { AnimatePresence, backInOut, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { FC, PropsWithChildren } from 'react';

const TransitionProvider: FC<
  PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>
> = ({ children, className }) => {
  return (
    <AnimatePresence initial={false} mode={'wait'}>
      {children}
    </AnimatePresence>
  );
};

export default TransitionProvider;
