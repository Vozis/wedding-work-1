import { components, DropdownIndicatorProps } from 'react-select';
import { MdKeyboardArrowDown } from 'react-icons/md';

export const CustomDropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <MdKeyboardArrowDown />
    </components.DropdownIndicator>
  );
};
