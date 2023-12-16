import { FC, PropsWithChildren } from 'react';
import cn from 'clsx';
import Image from 'next/image';

export interface IScheduleItem {
  title: string;
  description: string;
  time: string;
  className?: string;
  image: string;
}

const ScheduleItem: FC<PropsWithChildren<IScheduleItem>> = ({
  className,
  title,
  time,
  description,
  image,
}) => {
  return (
    <div
      className={cn(
        'flex items-center gap-5 lg:flex-col lg:text-center',
        className,
      )}
    >
      <div
        className={cn(
          'h-24 w-24 flex-shrink-0 rounded-full border border-black',
        )}
        style={{
          background: `url('${image}') no-repeat`,
          backgroundSize: 'cover',
          filter: 'saturate(0%)',
        }}
      >
        {/*<Image src={image} alt={'Image'}/>*/}
      </div>
      <div className={'flex flex-col'}>
        <p className={'text-xl'}>{title}</p>
        <p className={'text-xl font-semibold'}>{time}</p>
        <p className={'text-base'}>{description}</p>
      </div>
    </div>
  );
};

export default ScheduleItem;
