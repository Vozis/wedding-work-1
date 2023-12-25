import React, { FC } from 'react';
import cn from 'clsx';
import { IButton } from '@/components/buttons/main-button/button.interface';

const Button: FC<IButton> = ({
  path = '/',
  children,
  size,
  className,
  onClick,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center justify-center rounded-xl bg-black px-5 py-2 text-white',
        className,
        {
          'text-sm': size === 'small',
          'text-md': size === 'medium',
          'text-lg': size === 'large',
        },
      )}
    >
      {children}
    </button>
  );
};

export default Button;
