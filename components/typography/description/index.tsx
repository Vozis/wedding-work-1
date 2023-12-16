import cn from 'clsx';
import React, { FC, PropsWithChildren } from 'react';

interface IDescription extends React.HTMLAttributes<HTMLParagraphElement> {}

const Description: FC<PropsWithChildren<IDescription>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <p className={cn(className, 'font-novelist text-lg')} {...rest}>
      {children}
    </p>
  );
};

export default Description;
