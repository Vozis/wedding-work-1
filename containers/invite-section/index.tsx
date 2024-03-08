import Title from '@/components/typography/title';
import Description from '@/components/typography/description';
import Divider from '@/components/divider';
import ImageBlock from '@/components/image';
import React from 'react';
import AnimateSection from '@/components/animate/section';

export default function InviteSection() {
  return (
    <AnimateSection
      id={'inviteSection'}
      className={
        'mt-12 block max-w-screen-xl gap-5 px-5 md:grid md:h-[27rem] md:grid-cols-[1fr,2fr] md:gap-12 lg:mx-auto lg:mt-28'
      }
    >
      <div
        className={'flex flex-col items-center justify-center gap-4 md:gap-10'}
      >
        <Title title={'Дорогие гости'} className={'text-center'} />
        <div className={'flex items-center justify-center gap-3'}>
          <p className={'text-4xl font-bold'}>08</p>
          <p
            className={
              'relative block after:absolute after:-left-1 after:-top-1.5 after:h-1.5 after:w-1.5 after:rounded-full after:bg-black'
            }
          />
          <p className={'text-4xl font-bold'}>08</p>
          <p
            className={
              'relative block after:absolute after:-left-1 after:-top-1.5 after:h-1.5 after:w-1.5 after:rounded-full after:bg-black'
            }
          />
          <p className={'text-4xl font-bold'}>24</p>
        </div>
        <div className={'flex items-center justify-center gap-3'}>
          <p className={'text-4xl font-bold'}>16</p>
          <p
            className={
              'relative block after:absolute after:-left-1 after:-top-1.5 after:h-1.5 after:w-1.5 after:rounded-full after:bg-black'
            }
          />
          <p className={'text-4xl font-bold'}>00</p>
        </div>
        <Divider className={''} />
        <Description className={'text-center '}>
          Приглашаем на торжество в мир роскоши и комфорта на самую лучшую
          свадьбу ЕВЕР ФОРЕВЕР
        </Description>
      </div>
      <div className={'hidden md:flex'}>
        <ImageBlock
          className={'h-full w-full bg-cover bg-center grayscale md:h-full'}
          path={'/img/form/form-start.jpeg'}
        />
        <ImageBlock
          className={'h-full w-full bg-cover bg-center grayscale md:h-full'}
          path={'/img/form/form-middle.jpeg'}
        />
        <ImageBlock
          className={'h-full w-full bg-cover bg-left grayscale md:h-full'}
          path={'/img/form/form-end.jpeg'}
        />
      </div>
    </AnimateSection>
  );
}
