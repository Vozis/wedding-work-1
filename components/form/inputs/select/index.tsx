'use client';

import { forwardRef } from 'react';
import cn from 'clsx';
import { ISelectField } from '@/components/form/inputs/select/select.types';

export const SelectField = forwardRef<HTMLSelectElement, ISelectField>(
  (
    {
      options,
      visibility,
      multiple,
      labelClassName,
      value,
      label,
      placeholder,
      error,
      className,
      style,
      onChange,
      children,
      ...rest
    },
    ref,
  ) => {
    return (
      <div className={'relative w-60'} style={style}>
        <select
          multiple={multiple}
          className={cn(
            'mr-2 rounded-full border-gray-200 focus:ring-black',
            className,
          )}
          ref={ref}
          {...rest}
        >
          {options &&
            options.map(option => (
              <option
                key={option.value}
                value={option.value}
                className={cn('', labelClassName)}
              >
                {option.label}
              </option>
            ))}
        </select>
      </div>
    );
  },
);

SelectField.displayName = 'SelectField';
