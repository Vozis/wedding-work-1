'use client';

import { useActiveSectionContext } from '@/providers/action-section-context';
import Link from 'next/link';
import React from 'react';
import cn from 'clsx';

import { motion } from 'framer-motion';
import { IMenuItem } from '@/types/types';
import { usePathname } from 'next/navigation';

interface IMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  item: IMenuItem;
  clickHandler?: (e: any) => void;
}

export default function MenuItem({
  item,
  clickHandler,
  className,
}: IMenuItemProps) {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const handleScroll = (e: any) => {
    e.preventDefault();

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');

    const elem = document.getElementById(targetId);

    if (!elem) return;

    window.scrollTo({
      behavior: 'smooth',
      top:
        elem?.getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        70,
    });

    setActiveSection(item.title);
    setTimeOfLastClick(Date.now());
  };

  return (
    <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
      <Link
        href={item.path}
        onClick={handleScroll}
        className={cn('text-center text-5xl md:text-lg', className, {
          'text-red': activeSection === item.title,
        })}
      >
        {item.title}
      </Link>
    </motion.li>
  );
}
