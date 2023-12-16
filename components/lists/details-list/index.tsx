import DetailsItem, {
  IDetailsItem,
} from '@/components/lists/details-list/details-item';

interface IDetailsList {
  items: IDetailsItem[];
}

export default function DetailsList({ items }: IDetailsList) {
  return (
    <ul className={'flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-10'}>
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
