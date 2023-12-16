import Title from '@/components/typography/title';
import DetailsList from '@/components/lists/details-list';
import { detailsList } from '@/components/lists/details-list/constants';

export default function DetailsSection() {
  return (
    <section
      id={'detailsSection'}
      className={
        'mt-12 flex flex-col gap-3 px-5 lg:mx-auto lg:mt-20 lg:max-w-screen-xl lg:gap-10'
      }
    >
      <Title title={'Детали'} className={'text-center'} />
      <DetailsList items={detailsList} />
    </section>
  );
}
