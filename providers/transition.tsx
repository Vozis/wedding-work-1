import { AnimatePresence } from 'framer-motion';
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
