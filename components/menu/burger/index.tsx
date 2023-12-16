'use client';
import cn from 'clsx';
import React, { FC, useState } from 'react';
import styles from './burger.module.scss';

const BurgerMenu: FC<
  { isOpen: boolean } & React.HTMLAttributes<HTMLButtonElement>
> = ({ className, onClick, isOpen }) => {
  return (
    <button
      onClick={onClick}
      className={cn(className, styles.burger, {
        [styles.open]: isOpen,
      })}
    >
      <div className={styles.icon} />
    </button>
  );
};

export default BurgerMenu;
