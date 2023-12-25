import { FC, PropsWithChildren } from 'react';
import cn from 'clsx';

export interface IScheduleItem {
  title: string;
  description: string;
  time: string;
  className?: string;
  image: string;
  isEnded?: boolean;
}

const ScheduleItem: FC<PropsWithChildren<IScheduleItem>> = ({
  className,
  title,
  time,
  description,
  image,
  isEnded,
}) => {
  return (
    <div
      className={cn(
        'relative flex items-center gap-5 lg:flex-col lg:text-center',
        className,
        !isEnded
          ? 'after:absolute after:-bottom-10 after:left-[47px] after:h-8 after:w-0.5 after:bg-black md:after:-bottom-12 lg:after:hidden'
          : '',
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
