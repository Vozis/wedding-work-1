import styles from '@/components/header/header.module.scss';
import React from 'react';
import cn from 'clsx';
import Button from '@/components/buttons/main-button';
import { IMenu } from '@/components/menu/menu.types';
import MenuItem from '@/components/menu/menu-item';

export interface IMenuList extends React.HTMLAttributes<HTMLDivElement> {
  menu: IMenu;
  clickHandler?: (event: any) => void;
  itemClassName?: string;
}
export default function MenuList({
  menu,
  clickHandler,
  className,
  itemClassName,
}: IMenuList) {
  return (
    <ul className={cn(className, '')}>
      {menu.items &&
        menu.items.length &&
        menu.items.map(item => (
          <MenuItem
            item={item}
            clickHandler={clickHandler}
            key={item.path}
            className={itemClassName}
          />
        ))}
    </ul>
  );
}
