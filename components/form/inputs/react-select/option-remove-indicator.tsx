import { MultiValueRemoveProps } from 'react-select';
import { MdOutlineClear } from 'react-icons/md';
import { CSSProperties } from 'react';

export const CustomOptionRemoveIndicator = (props: MultiValueRemoveProps) => {
  const {
    children = <MdOutlineClear />,
    innerProps: { ref, className, ...restInnerProps },
  } = props;
  return (
    <div
      className={'flex items-center justify-center'}
      {...restInnerProps}
      ref={ref}
    >
      <div className={'text-sm text-gray-500'} style={{ padding: '0px 5px' }}>
        {children}
      </div>
    </div>
  );
};
