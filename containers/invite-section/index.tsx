import Title from '@/components/typography/title';
import Description from '@/components/typography/description';
import ImageBlock from '@/components/image';
import React from 'react';
import AnimateSection from '@/components/animate/section';

export default function InviteSection() {
  return (
    <AnimateSection
      id={'inviteSection'}
      className={
        'mt-12 flex max-w-screen-xl flex-col gap-10 md:grid md:min-h-[27rem] md:grid-cols-[1fr,2fr] md:gap-12 lg:mx-auto lg:mt-28'
      }
    >
      <div
        className={
          'flex flex-col items-center justify-center gap-4 px-5 md:gap-8'
        }
      >
        <Title title={'Дорогие гости'} className={'text-center'} />
        <div
          className={
            'flex items-center justify-center gap-3 border-b border-black pb-2 md:pb-5'
          }
        >
          <p className={'text-6xl font-bold'}>16</p>
          <p
            className={
              'relative block after:absolute after:-left-1 after:-top-1.5 after:h-1.5 after:w-1.5 after:rounded-full after:bg-black'
            }
          />
          <p className={'text-6xl font-bold'}>00</p>
        </div>
        <div className={'flex items-center justify-center gap-3'}>
          <p className={'text-4xl font-bold'}>29</p>
          <p
            className={
              'relative block after:absolute after:-left-1 after:-top-1.5 after:h-1.5 after:w-1.5 after:rounded-full after:bg-black'
            }
          />
          <p className={'text-4xl font-bold'}>06</p>
          <p
            className={
              'relative block after:absolute after:-left-1 after:-top-1.5 after:h-1.5 after:w-1.5 after:rounded-full after:bg-black'
            }
          />
          <p className={'text-4xl font-bold'}>24</p>
        </div>
        <Description className={'text-center'}>
          Дорогие друзья!
          Мы очень хотим, чтобы в этот день с нами рядом были самые близкие,
          поэтому с большой радостью приглашаем Вас на наш первый семейный
          праздник - нашу свадьбу!
        </Description>
      </div>
      <div className={'block h-80 md:hidden'}>
        <ImageBlock
          className={
            'h-full w-full bg-cover bg-[center_top_-14rem] grayscale md:h-full'
          }
          path={'/img/invite/1.jpg'}
        />
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
