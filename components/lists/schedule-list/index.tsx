import ScheduleItem, {
  IScheduleItem,
} from '@/components/lists/schedule-list/schedule-item';

interface IScheduleList {
  items: IScheduleItem[];
}

export default function ScheduleList({ items }: IScheduleList) {
  return (
    <ul
      className={
        'grid grid-rows-4 gap-12 md:gap-16 lg:grid-cols-4 lg:grid-rows-1'
      }
    >
      {items.map((item, index) => (
        <ScheduleItem
          title={item.title}
          image={item.image}
          time={item.time}
          description={item.description}
          key={index}
          isEnded={index === items.length - 1}
        />
      ))}
    </ul>
  );
}
