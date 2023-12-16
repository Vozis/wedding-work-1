import { IFieldProps } from '@/components/form/inputs/input/input.types';
import { ControllerRenderProps } from 'react-hook-form';
import { Options } from 'react-select';
import { SelectHTMLAttributes } from 'react';

export interface IOption {
  value: string;
  label: string;
}

type TypedSelectPropsField = SelectHTMLAttributes<HTMLSelectElement> &
  IFieldProps;
export interface ISelectField extends TypedSelectPropsField {
  options: Options<IOption>;
  multiple?: boolean;
  // field: ControllerRenderProps<any, any>;
  // isLoading?: boolean;
  // onInputChange?: (value: any) => void;
  // defaultValue?: number | number[];
}
