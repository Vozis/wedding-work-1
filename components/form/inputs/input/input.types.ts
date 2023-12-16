import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormResetField,
} from 'react-hook-form';
import { Dispatch, InputHTMLAttributes, SetStateAction } from 'react';

export interface IFieldProps {
  label?: string;
  placeholder?: string;
  labelClassName?: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  visibility?: boolean;
  resetField?: UseFormResetField<any>;
  setIsNewImageAdd?: Dispatch<SetStateAction<boolean>>;
  setResult?: Dispatch<SetStateAction<string | ArrayBuffer | null>>;
  result?: string | ArrayBuffer | null;
  isLoaded?: boolean;
  setIsLoaded?: Dispatch<SetStateAction<boolean>>;
}

type TypedInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps;

export interface IField extends TypedInputPropsField {}
