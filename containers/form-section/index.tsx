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
        'mt-12 items-center gap-5 px-5 lg:mx-auto lg:mt-28 lg:max-w-screen-xl lg:gap-10'
      }
    >
      <Title title={'Опрос'} className={'mb-10 text-center md:text-left'} />
      <div
        className={
          ' md:grid md:grid-cols-[1fr,1fr] md:gap-10 lg:grid-cols-[1fr,2fr] lg:gap-10'
        }
      >
        <Form className={'justify-stretch'} />
        {/*<div className={'border border-yellow-400'}>Пример</div>*/}
        <div className={'hidden md:grid md:gap-5 lg:grid-cols-[1fr,1.5fr,1fr]'}>
          <ImageBlock
            className={'h-80 w-full bg-cover bg-center grayscale md:h-full'}
            path={'/img/form/form-start.jpeg'}
          />
          <ImageBlock
            className={
              'lg:bg-center-bottom h-80 w-full bg-cover bg-center grayscale md:h-full'
            }
            path={'/img/form/form-middle.jpeg'}
          />
          <ImageBlock
            className={'bg-top-bottom h-80 w-full bg-cover grayscale md:h-full'}
            path={'/img/form/form-end.jpeg'}
          />
        </div>
      </div>
    </AnimateSection>
  );
}
