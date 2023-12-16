import {
  components,
  DropdownIndicatorProps,
  IndicatorSeparatorProps,
} from 'react-select';
import { MdKeyboardArrowDown } from 'react-icons/md';

export const CustomIndicatorSeparator = ({
  innerProps,
}: IndicatorSeparatorProps) => {
  return (
    <span className={'h-4 w-[0.5px] items-center bg-black'} {...innerProps} />
  );
};
