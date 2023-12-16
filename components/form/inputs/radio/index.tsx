'use client';

import { forwardRef, useState } from 'react';
import cn from 'clsx';
import { errorCatch } from '@/utils/errorCatch';
import { IField } from '@/components/form/inputs/input/input.types';

export const RadioField = forwardRef<HTMLInputElement, IField>(
  (
    {
      visibility,
      checked,
      labelClassName,
      value,
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
      <label className={''}>
        <input
          type={'radio'}
          value={value}
          className={cn('peer hidden', className)}
          ref={ref}
          placeholder={placeholder || ' '}
          onChange={onChange}
          {...rest}
        />
        <span
          className={cn(
            'block cursor-pointer select-none rounded-lg border border-black text-center text-sm text-black peer-checked:bg-black peer-checked:text-white',
            labelClassName,
          )}
        >
          {label}
        </span>
      </label>
    );
  },
);

RadioField.displayName = 'RadioField';
