import { FC } from 'react';
import cn from 'clsx';
import { harmony } from '@/libs/fonts';

interface ISuperTitle {
  title: string;
  className?: string;
}

const SuperTitle: FC<ISuperTitle> = ({ className, title }) => {
  return (
    <h1 className={cn('font-harmony', className, harmony.className)}>
      {title}
    </h1>
  );
};

export default SuperTitle;
