import { FC, PropsWithChildren } from 'react';
import cn from 'clsx';

export interface IClothesItem {
  title: string;
  index?: number;
  className?: string;
}

const ClothesItem: FC<PropsWithChildren<IClothesItem>> = ({
  className,
  title,
  index,
}) => {
  return (
    <div
      className={cn(
        'flex gap-2 text-xl font-medium lg:text-2xl xl:text-4xl',
        className,
      )}
    >
      {index && <span className={'inline-block w-3'}>{index}.</span>}
      <span>{title}</span>
    </div>
  );
};

export default ClothesItem;
