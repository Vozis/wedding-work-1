'use client';

import './react-select.scss';
import styles from './select.module.scss';

import { FC, useEffect, useState } from 'react';
import Select, { OnChangeValue } from 'react-select';
import makeAnimated from 'react-select/animated';
import {
  IOption,
  ISelect,
} from '@/components/form/inputs/react-select/select.types';
import { errorCatch } from '@/utils/errorCatch';
import { v4 as uuidv4 } from 'uuid';
import { CustomDropdownIndicator } from '@/components/form/inputs/react-select/dropdown';
import { CustomIndicatorSeparator } from '@/components/form/inputs/react-select/separator';
import { CustomClearIndicator } from '@/components/form/inputs/react-select/removeIndicator';
import { CustomOptionRemoveIndicator } from '@/components/form/inputs/react-select/option-remove-indicator';

const animatedComponents = makeAnimated({
  // @ts-ignore
  DropdownIndicator: CustomDropdownIndicator,
  // @ts-ignore
  IndicatorSeparator: CustomIndicatorSeparator,
  // @ts-ignore
  ClearIndicator: CustomClearIndicator,
  // @ts-ignore
  MultiValueRemove: CustomOptionRemoveIndicator,
});

export const ReactSelectField: FC<ISelect> = ({
  field,
  label,
  isLoading,
  error,
  isMulti,
  options,
  placeholder,
  defaultValue,
  onInputChange,
  closeMenuOnSelect,
  isClearable,
}) => {
  const id = uuidv4();
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => setIsMounted(true), []);

  const getValue = () => {
    if (field.value) {
      const item = isMulti
        ? options.filter(option => field.value.indexOf(option.value) >= 0)
        : options.find(option => option.value === field.value);

      // console.log(item);
      return item;
    } else {
      return isMulti ? [] : '';
    }
  };

  const onChange = (newValue: OnChangeValue<IOption, boolean> | unknown) => {
    field.onChange(
      isMulti
        ? (newValue as IOption[]).map(option => option.value)
        : (newValue as IOption).value,
    );
  };

  return (
    <div className={'w-full'}>
      <label>
        <p className={'text-3xl'}>{label}</p>
        {isMounted ? (
          <Select
            id={id}
            closeMenuOnSelect={closeMenuOnSelect}
            classNamePrefix={'custom-select'}
            isSearchable={false}
            options={options}
            isMulti={isMulti}
            components={animatedComponents}
            isLoading={isLoading}
            value={getValue()}
            onChange={onChange}
            isClearable={isClearable}
            onFocus={onInputChange}
            defaultValue={defaultValue}
            placeholder={placeholder}
          />
        ) : null}
      </label>
      {error && <div className={styles.error}>{errorCatch(error)}</div>}
    </div>
  );
};
