import { ClearIndicatorProps } from 'react-select';
import { MdOutlineClear } from 'react-icons/md';
import { CSSProperties } from 'react';

export const CustomClearIndicator = (props: ClearIndicatorProps) => {
  const {
    children = <MdOutlineClear />,
    getStyles,
    innerProps: { ref, ...restInnerProps },
  } = props;
  return (
    <div
      {...restInnerProps}
      ref={ref}
      style={getStyles('clearIndicator', props) as CSSProperties}
    >
      <div className={'text-sm text-gray-500'}>{children}</div>
    </div>
  );
};
