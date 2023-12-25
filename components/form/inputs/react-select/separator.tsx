import { IndicatorSeparatorProps } from 'react-select';

export const CustomIndicatorSeparator = ({
  innerProps,
}: IndicatorSeparatorProps) => {
  return (
    <span className={'h-4 w-[0.5px] items-center bg-black'} {...innerProps} />
  );
};
