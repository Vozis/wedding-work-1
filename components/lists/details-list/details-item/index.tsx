import { FC, PropsWithChildren } from 'react';
import cn from 'clsx';
import description from '@/components/typography/description';
import Subtitle from '@/components/typography/subtitle';
import Description from '@/components/typography/description';
import Divider from '@/components/divider';

export interface IDetailsItem {
  title: string;
  description: string;
  className?: string;
}

const DetailsItem: FC<PropsWithChildren<IDetailsItem>> = ({
  className,
  title,
  description,
}) => {
  return (
    <div
      className={cn('flex flex-col items-center gap-4 text-center', className)}
    >
      <Subtitle title={title} />
      <Divider className={'lg:hidden'} />
      <Description>{description}</Description>
    </div>
  );
};

export default DetailsItem;
