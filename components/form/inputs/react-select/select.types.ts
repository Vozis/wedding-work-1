import { IFieldProps } from '@/components/form/inputs/input/input.types';
import { ControllerRenderProps } from 'react-hook-form';
import { Options } from 'react-select';

export interface IOption {
  value: string;
  label: string;
}

export interface ISelect extends IFieldProps {
  options: Options<IOption>;
  isMulti?: boolean;
  isClearable?: boolean;
  closeMenuOnSelect?: boolean;
  field: ControllerRenderProps<any, any>;
  isLoading?: boolean;
  onInputChange?: (value: any) => void;
  defaultValue?: number;
  id?: string;
}
