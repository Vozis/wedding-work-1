'use client';

import { forwardRef, useState } from 'react';
import cn from 'clsx';
import { errorCatch } from '@/utils/errorCatch';
import { IField } from '@/components/form/inputs/input/input.types';

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
          <span className={'text-xl'}>{label}</span>
          <div className={''}>
            <input
              className={
                'peer block w-full border-x-transparent border-b-gray-300 border-t-transparent bg-transparent py-2 pe-0 ps-2 text-sm transition-all duration-200 focus:border-x-transparent focus:border-b-black focus:border-t-transparent focus:outline-0 focus:ring-0'
              }
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
