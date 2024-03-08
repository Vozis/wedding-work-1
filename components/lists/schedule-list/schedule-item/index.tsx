import { FC, PropsWithChildren } from 'react';
import cn from 'clsx';
import { AnimationProps } from 'framer-motion';
import { motion } from 'framer-motion';

export interface IScheduleItem extends AnimationProps {
  title: string;
  description: string;
  time: string;
  className?: string;
  image: string;
  isEnded?: boolean;
}

const fadeInVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeInOut',
    },
  },
};

const ScheduleItem: FC<PropsWithChildren<IScheduleItem>> = ({
  className,
  title,
  time,
  description,
  image,
  isEnded,
}) => {
  return (
    <motion.li
      variants={fadeInVariants}
      initial={'initial'}
      whileInView={'animate'}
      viewport={{
        once: true,
        margin: '0px 0px -50px 0px',
      }}
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
      <div className={'flex flex-col gap-3'}>
        <p className={'text-2xl font-bold lg:text-4xl'}>{title}</p>
        {/*<p className={'text-3xl font-bold lg:text-4xl'}>{time}</p>*/}
        <p className={'text-xl font-light lg:text-2xl'}>{description}</p>
      </div>
    </motion.li>
  );
};

export default ScheduleItem;
