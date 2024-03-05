import { FC, PropsWithChildren } from 'react';
import cn from 'clsx';
import Description from '@/components/typography/description';
import Subtitle from '@/components/typography/subtitle';
import Divider from '@/components/divider';
import { motion } from 'framer-motion';

export interface IDetailsItem {
  title: string;
  description: string;
  className?: string;
}

const itemVariants = {
  initial: {
    y: 0,
    opacity: 1,
  },
  animate: {
    y: 50,
    opacity: 0,
  },
};

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

const DetailsItem: FC<PropsWithChildren<IDetailsItem>> = ({
  className,
  title,
  description,
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
      className={cn('flex flex-col items-center gap-4 text-center', className)}
    >
      <Subtitle title={title} />
      <Divider className={'lg:hidden'} />
      <Description>{description}</Description>
    </motion.li>
  );
};

export default DetailsItem;
