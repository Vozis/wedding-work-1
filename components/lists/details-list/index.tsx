import DetailsItem, {
  IDetailsItem,
} from '@/components/lists/details-list/details-item';

interface IDetailsList {
  items: IDetailsItem[];
}

export default function DetailsList({ items }: IDetailsList) {
  return (
    <ul
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
    </ul>
  );
}
