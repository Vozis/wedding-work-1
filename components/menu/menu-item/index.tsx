import Link from 'next/link';
import { IMenuItem } from '@/components/menu/menu.types';
import React from 'react';
import cn from 'clsx';

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
    <li>
      <Link
        href={item.path}
        onClick={clickHandler}
        className={cn('text-center text-4xl', className)}
      >
        {item.title}
      </Link>
    </li>
  );
}
