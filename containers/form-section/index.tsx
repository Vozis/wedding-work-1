import Title from '@/components/typography/title';
import Form from '@/components/form';
import Image from 'next/image';

import logo2 from '@/public/img/logo2.svg';
import ImageBlock from '@/components/image';
import AnimateSection from '@/components/animate/section';
import Description from '@/components/typography/description';

export default function FormSection() {
  return (
    <AnimateSection
      id={'closeSection'}
      className={
        'mt-12 flex flex-col items-center gap-5 px-5 md:items-start lg:mx-auto lg:mt-28 lg:max-w-screen-xl lg:gap-10'
      }
    >
      <Title title={'Опрос'} className={'text-center md:text-left'} />
      <div className={'md:flex md:gap-5 lg:gap-20'}>
        <Form className={''} />
        <div
          className={
            'hidden w-full border border-black md:mx-auto md:flex md:justify-end md:gap-5'
          }
        >
          <ImageBlock
            className={'mt-16 xl:mt-32'}
            direction={'left'}
            path={'/img/start/1.jpg'}
          />
          <ImageBlock
            className={'xl:mt-16'}
            direction={'right'}
            path={'/img/start/2.jpg'}
          />
          <ImageBlock
            className={'md:hidden xl:block'}
            direction={'left'}
            path={'/img/start/3.jpg'}
          />
        </div>
      </div>
    </AnimateSection>
  );
}
