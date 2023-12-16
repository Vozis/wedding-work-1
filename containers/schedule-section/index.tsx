import Title from '@/components/typography/title';
import ScheduleList from '../../components/lists/schedule-list';
import { scheduleList } from '@/components/lists/schedule-list/constants';

export default function ScheduleSection() {
  return (
    <section
      id={'scheduleSection'}
      className={
        'mt-12 flex flex-col gap-5 px-5 lg:mx-auto lg:mt-28 lg:max-w-screen-xl lg:gap-10'
      }
    >
      <Title title={'Расписание'} className={'text-center md:text-left'} />
      <ScheduleList items={scheduleList} />
    </section>
  );
}
