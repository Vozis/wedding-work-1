'use client';

import { forwardRef } from 'react';
import { errorCatch } from '@/utils/errorCatch';
import { IField } from '@/components/form/inputs/input/input.types';
import cn from 'clsx';

export const InputField = forwardRef<HTMLInputElement, IField>(
  (
    {
      visibility,
      label,
      placeholder,
      error,
      type = 'text',
      className,
      style,
      onChange,
      children,
      ...rest
    },
    ref,
  ) => {
    return (
      <div className={'relative w-full'} style={style}>
        <label className={''}>
          <span className={'text-2xl'}>{label}</span>
          <div className={''}>
            <input
              className={cn(
                'peer block w-full border-x-transparent border-b-gray-300 border-t-transparent bg-transparent py-1 pe-0 ps-2 text-xl transition-all duration-200 focus:border-x-transparent focus:border-b-black focus:border-t-transparent focus:outline-0 focus:ring-0',
                {
                  'border-b-red-500 placeholder-red-500': error,
                },
              )}
              ref={ref}
              placeholder={placeholder || ' '}
              onChange={onChange}
              {...rest}
            />
          </div>
        </label>
        {error && (
          <div className={'absolute text-red-500'}>{errorCatch(error)}</div>
        )}
      </div>
    );
  },
);

InputField.displayName = 'InputField';
