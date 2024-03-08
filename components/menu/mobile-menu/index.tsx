'use client';

import styles from '@/components/menu/mobile-menu/mobileMenu.module.scss';
import React, { useState } from 'react';
import BurgerMenu from '@/components/menu/burger';
import { useLockedBody } from 'usehooks-ts';
import MenuList from '@/components/menu/menu-list';
import cn from 'clsx';
import Image from 'next/image';
import logoImage from '@/public/img/logo2.svg';
import LinkButton from '@/components/buttons/link-button';
import { menuList } from '@/constants';
import Logo from '@/components/logo';
import Link from 'next/link';
import { useActiveSectionContext } from '@/providers/action-section-context';

type Props = {
  content?: React.ReactNode;
};

export default function MobileMenu({ content }: Props) {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  useLockedBody(isMenuOpen, 'root');
  const handleScroll = (e: any) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');

    const elem = document.getElementById(targetId);

    if (!elem) return;

    window.scrollTo({
      behavior: 'smooth',
      top:
        elem?.getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        100,
    });
  };

  return (
    <div>
      <BurgerMenu
        className={'absolute right-2.5 top-0 z-20 md:hidden'}
        isOpen={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <nav>
        <div
          onClick={() => setIsMenuOpen(false)}
          className={cn(styles.cover, 'md:hidden', {
            [styles.coverShow]: isMenuOpen,
          })}
        />
        <div
          className={cn(styles.menuContainer, {
            [styles.menuOpen]: isMenuOpen,
          })}
        >
          <Link
            href={'#startSection'}
            onClick={e => {
              handleScroll(e);
              setActiveSection('startSection');
              setTimeOfLastClick(Date.now());
            }}
          >
            <Image src={logoImage} alt={'image'} className={'md:hidden'} />
          </Link>
          <MenuList
            itemClassName={'md:text-xl'}
            className={'flex flex-col items-center gap-3 md:flex-row'}
            clickHandler={handleScroll}
            menu={{ items: menuList }}
          />
          <LinkButton
            path={'#closeSection'}
            onClick={e => {
              handleScroll(e);
              setActiveSection('closeSection');
              setTimeOfLastClick(Date.now());
            }}
            className={'w-32 text-2xl'}
          >
            Опрос
          </LinkButton>
        </div>
      </nav>
    </div>
  );
}
