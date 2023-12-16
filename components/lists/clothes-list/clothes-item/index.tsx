import { FC, PropsWithChildren } from 'react';
import cn from 'clsx';

export interface IClothesItem {
  title: string;
  index?: number
  className?: string;
}

const ClothesItem: FC<PropsWithChildren<IClothesItem>> = ({
  className,
  title,
  index
}) => {
  return (
    <div
      className={cn('text-xl flex gap-2 xl:text-4xl lg:text-2xl font-medium', className)}
    >
      {index && <span className={'inline-block w-3'}>{index}.</span>}
      <span>{title}</span>
    </div>
  );
};

export default ClothesItem;
