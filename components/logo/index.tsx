import Image from 'next/image';
import logo from '@/public/Logo.svg';
import Link from 'next/link';
import cn from 'clsx';
import { className } from 'postcss-selector-parser';
import { HTMLAttributes } from 'react';

export default function Logo({ className }: HTMLAttributes<HTMLLinkElement>) {
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
  };

  return (
    <Link
      href={'#startSection'}
      className={cn('block', className)}
      onClick={handleScroll}
    >
      <Image priority src={logo} alt={'Logo'} />
    </Link>
  );
}
