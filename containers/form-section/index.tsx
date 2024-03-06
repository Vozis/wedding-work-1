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
        'mt-12 flex flex-col items-center gap-5 px-5 lg:mx-auto lg:mt-28 lg:max-w-screen-xl lg:gap-10'
      }
    >
      <Title title={'Опрос'} className={'text-center md:text-left'} />
      <div
        className={
          'flex flex-col gap-12 md:grid md:grid-cols-[1fr,1fr] md:grid-rows-1 lg:grid-cols-[1fr,2fr] lg:gap-20'
        }
      >
        <Form className={''} />
        <div
          className={
            'grid grid-rows-3 gap-5 lg:grid-cols-[1fr,1.5fr,1fr] lg:grid-rows-1'
          }
        >
          <ImageBlock
            className={'h-80 w-full bg-cover bg-center grayscale md:h-full'}
            path={'/img/form/form-start.jpeg'}
          />
          <ImageBlock
            className={
              'lg:bg-center-bottom h-80 h-full w-full bg-cover bg-center grayscale md:h-full'
            }
            path={'/img/form/form-middle.jpeg'}
          />
          <ImageBlock
            className={'bg-top-bottom h-80 w-full bg-cover grayscale md:h-full'}
            path={'/img/form/form-end.jpeg'}
          />
          {/*<ImageBlock*/}
          {/*  className={'self-center xl:mt-16'}*/}
          {/*  direction={'right'}*/}
          {/*  path={'/img/start/2.jpg'}*/}
          {/*/>*/}
          {/*<ImageBlock*/}
          {/*  className={'hidden lg:block'}*/}
          {/*  direction={'left'}*/}
          {/*  path={'/img/start/3.jpg'}*/}
          {/*/>*/}
        </div>
      </div>
    </AnimateSection>
  );
}
