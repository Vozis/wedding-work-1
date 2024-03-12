import { IScheduleItem } from '@/components/lists/schedule-list/schedule-item';

export const scheduleList: IScheduleItem[] = [
  {
    title: 'Welcome',
    description:
      'Время пролетит незаметно за игристым и общением с другими гостями',
    time: '16:00',
    image: '/img/schedule/schedule-1.jpg',
  },
  {
    title: 'Церемония',
    description:
      'На всякий случай приготовьте носовые платочки для трогательного момента',
    time: '16:30',
    image: '/img/schedule/schedule-2.jpg',
  },
  {
    title: 'Свадебный банкет',
    description: 'Будет много танцев, веселья, поздравлений и, конечно, любви',
    time: '17:00',
    image: '/img/schedule/schedule-3.jpg',
  },
  {
    title: 'Завершение торжества',
    description: 'К сожалению, даже такой прекрасный день может закончиться...',
    time: '22:00',
    image: '/img/schedule/schedule-4.jpg',
  },
];
