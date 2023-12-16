import cn from 'clsx';
import { FC } from 'react';

interface ITitle {
  title: string;
  className?: string;
}

const Title: FC<ITitle> = ({ title, className }) => {
  return (
    <h1 className={cn('text-5xl lg:text-3xl xl:text-5xl', className)}>
      {title}
    </h1>
  );
};

export default Title;
