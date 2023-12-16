import ScheduleItem, {
  IScheduleItem,
} from '@/components/lists/schedule-list/schedule-item';

interface IScheduleList {
  items: IScheduleItem[];
}

export default function ScheduleList({ items }: IScheduleList) {
  return (
    <ul className={'flex flex-col gap-12 lg:flex-row'}>
      {items.map((item, index) => (
        <ScheduleItem
          title={item.title}
          image={item.image}
          time={item.time}
          description={item.description}
          key={index}
        />
      ))}
    </ul>
  );
}
