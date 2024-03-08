import React, { FC } from 'react';
import cn from 'clsx';
import Link from 'next/link';
import { ILinkButton } from '@/components/buttons/link-button/link-button.interface';

const LinkButton: FC<ILinkButton> = ({
  path = '/',
  children,
  size,
  className,
  onClick,
  ...rest
}) => {
  return (
    <Link
      href={path}
      onClick={onClick}
      className={cn(
        'flex items-center justify-center rounded-xl bg-black px-3 py-1 text-white',
        className,
        {
          'text-sm': size === 'small',
          'text-md': size === 'medium',
          'text-lg': size === 'large',
        },
      )}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
