import React from 'react';
import cn from 'clsx';
import ClothesItem, {
  IClothesItem,
} from '@/components/lists/clothes-list/clothes-item';

interface IClothesList extends React.HTMLAttributes<HTMLDivElement> {
  items: IClothesItem[];
}

export default function ClothesList({ items, className }: IClothesList) {
  return (
    <ul className={cn('flex flex-col gap-4', className)}>
      {items.map((item, index) => (
        <ClothesItem title={item.title} key={index} index={index + 1} />
      ))}
    </ul>
  );
}
