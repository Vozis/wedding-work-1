import React from 'react';
import cn from 'clsx';
import MenuItem from '@/components/menu/menu-item';
import { IMenu } from '@/types/types';

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
        menu.items.map((item, index) => (
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
