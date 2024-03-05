import DetailsItem, {
  IDetailsItem,
} from '@/components/lists/details-list/details-item';
import { motion } from 'framer-motion';

interface IDetailsList {
  items: IDetailsItem[];
}

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function DetailsList({ items }: IDetailsList) {
  return (
    <motion.ul
      variants={variants}
      initial={'initial'}
      whileInView={'animate'}
      viewport={{
        once: true,
        margin: '0px 0px -50px 0px',
      }}
      className={
        'flex flex-col gap-4 md:gap-10 lg:flex-row lg:items-start lg:gap-20'
      }
    >
      {items.map((item, index) => (
        <DetailsItem
          title={item.title}
          description={item.description}
          key={index}
        />
      ))}
    </motion.ul>
  );
}
