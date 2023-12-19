import Link from 'next/link';
import { IMenuItem } from '@/components/menu/menu.types';
import React from 'react';
import cn from 'clsx';

import { motion } from 'framer-motion';

interface IMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  item: IMenuItem;
  clickHandler?: (e: any) => void;
}

export default function MenuItem({
  item,
  clickHandler,
  className,
}: IMenuItemProps) {
  return (
    <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
      <Link
        href={item.path}
        onClick={clickHandler}
        className={cn('text-center text-4xl', className)}
      >
        {item.title}
      </Link>
    </motion.li>
  );
}
