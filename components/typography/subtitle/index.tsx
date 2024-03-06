import cn from 'clsx';
import { FC } from 'react';

interface ISubTitle {
  title: string;
  className?: string;
}

const SubTitle: FC<ISubTitle> = ({ className, title }) => {
  return (
    <h3
      className={cn(
        'relative text-2xl font-semibold leading-none before:absolute before:-left-0.5 before:-right-0.5 before:bottom-0 before:h-[1px] before:bg-red-950 lg:text-3xl xl:text-4xl',
        className,
      )}
    >
      {title}
    </h3>
  );
};

export default SubTitle;
