import styles from '@/components/header/header.module.scss';
import React from 'react';
import cn from 'clsx';
import Image from 'next/image';
import logoImage from '@/public/img/logo2.svg';
import MenuList from '@/components/menu/menu-list';
import { menuList } from '@/components/menu/constants';
import Link from 'next/link';
import Button from '@/components/buttons/main-button';
import LinkButton from '@/components/buttons/link-button';

type Props = {
  content?: React.ReactNode;
};

export default function DesktopMenu({ content }: Props) {
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
    <nav>
      <div className={'flex items-center gap-3'}>
        <MenuList
          menu={{ items: menuList }}
          className={'flex items-center gap-3'}
          itemClassName={'text-sm'}
          clickHandler={handleScroll}
        />
        <LinkButton
          path={'#closeSection'}
          className={'text-sm'}
          onClick={handleScroll}
        >
          Опрос
        </LinkButton>
      </div>
    </nav>
  );
}
