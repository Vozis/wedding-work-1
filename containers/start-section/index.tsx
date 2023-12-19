'use client';

import SuperTitle from '@/components/typography/super-title';
import Player from '@/components/player';
import Description from '@/components/typography/description';
import Image from 'next/image';

import arrow from '@/public/img/Arrow.svg';
import { useMediaQuery } from 'usehooks-ts';
import dynamic from 'next/dynamic';

const DynamicPlayer = dynamic(() => import('@/components/player'), {
  ssr: false,
});

export default function StartSection() {
  return (
    <section
      className={'relative flex pb-5 md:justify-center'}
      style={{
        minHeight: 'calc(100vh - 3rem)',
      }}
    >
      <div
        className={'absolute bottom-0 left-0 right-0 top-0 -z-1 md:hidden'}
        style={{
          background:
            "linear-gradient(180deg, rgba(124, 124, 124, 0.00) 30.24%, rgba(0, 0, 0, 0.60) 67.66%, rgba(0, 0, 0, 0.78) 81.47%, #000 100%), url('/img/start/mobile.jpg'), lightgray 50% / cover no-repeat",
          backgroundSize: 'cover',
          backgroundPosition: 'right bottom',
          borderRadius: '500px 0 0 0',
        }}
      />

      <div
        className={
          'absolute bottom-0 left-0 right-0 top-0 -z-1 hidden grid-cols-4 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-1 before:bg-gradient-to-t before:from-black/100 before:to-black/30  md:grid'
        }
      >
        <div className={'relative'}>
          <Image
            src={'/img/start/1.jpg'}
            alt={'image'}
            fill
            priority
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className={'relative'}>
          <Image
            src={'/img/start/2.jpg'}
            alt={'image'}
            fill
            priority
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className={'relative'}>
          <Image
            src={'/img/start/3.jpg'}
            alt={'image'}
            fill
            priority
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className={'relative'}>
          <Image
            src={'/img/start/4.jpg'}
            alt={'image'}
            fill
            priority
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      </div>

      <div className={'flex flex-col items-center justify-between px-5'}>
        <div className={'pt-2'}>
          <SuperTitle
            title={'Илья'}
            className={
              'text-right text-[8rem] leading-[4rem] s:text-[9rem] s:leading-[5rem] md:text-white'
            }
          />
          <SuperTitle
            title={'Анастасия'}
            className={
              'block text-center text-[8rem] leading-[4rem] s:text-[9rem] s:leading-[5rem] md:text-white '
            }
          />
        </div>
        <div className={'flex flex-col items-center gap-5'}>
          <Player className={'flex flex-col items-center gap-5'} />
          <Description className={'text-center text-white'}>
            Нажмите на PLay и листайте ниже погрузитесь в настроение нашего
            торжества
          </Description>
          <Image src={arrow} alt={'Arrow down'} />
        </div>
      </div>
    </section>
  );
}
