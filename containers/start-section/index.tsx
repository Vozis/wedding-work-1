'use client';

import SuperTitle from '@/components/typography/super-title';
import Description from '@/components/typography/description';
import Image from 'next/image';

import arrow from '@/public/img/Arrow.svg';
import { useSectionInView } from '@/hooks/useSectionInView';
import { SetStateAction, Dispatch, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

const DynamicPlayer = dynamic(() => import('@/components/player'), {
  ssr: false
})

interface IProps {
  setIsLoaded: Dispatch<SetStateAction<boolean>>;
}

export default function StartSection({setIsLoaded}: IProps) {
  const { ref } = useSectionInView('startSection');

  const mobileVideoRef = useRef<HTMLVideoElement>(null);


  useEffect(() => {
    mobileVideoRef &&
    mobileVideoRef.current &&
    mobileVideoRef.current
      .play()
      .then(() => {})
      .catch((err:any) => {
        console.log(err);
      });
  }, []);

  return (
    <section
      ref={ref}
      id={'startSection'}
      className={'relative flex pb-5 sm:justify-center'}
      style={{
        minHeight: 'calc(100vh - 3rem)',
      }}
    >
      <div
        className={'absolute bottom-0 left-0 right-0 top-0 -z-2 md:hidden grayscale'}
        // style={{
        //   background: 'url(\'/img/start/mobile.jpg\')',
        //   backgroundPositionY: '3rem',
        //   backgroundPositionX: '90%',
        //   backgroundSize: 'cover',
        //   backgroundRepeat: 'no-repeat',
        //   borderRadius: '500px 0 0 0',
        // }}
      >
        <video
          className='w-full h-full object-cover aspect-auto'
          preload="auto"
          playsInline
          ref={mobileVideoRef}
          muted
          loop
          controls={false}
          onLoad={() => setIsLoaded(true)}
        >
          <source src="/img/start/1.mp4" type="video/mp4" />
        </video>

      </div>
      {/*<div*/}
      {/*  className={'absolute bottom-0 left-0 right-0 top-0 -z-1 md:hidden'}*/}
      {/*  style={{*/}
      {/*    background:*/}
      {/*      'linear-gradient(to bottom, rgba(0,0,0, 0.00) 30%, rgba(0, 0, 0, 0.60) 60%, rgba(0, 0, 0, 0.9) 80%, #000 100%)',*/}
      {/*    backgroundSize: 'cover',*/}
      {/*    backgroundRepeat: 'no-repeat',*/}
      {/*    borderRadius: '500px 0 0 0',*/}
      {/*  }}*/}
      {/*/>*/}
      <div
        className={'absolute bottom-0 left-0 right-0 top-0 -z-2 max-md:hidden grayscale'}
        // style={{
        //   background: 'url(\'/img/start/mobile.jpg\')',
        //   backgroundPositionY: '3rem',
        //   backgroundPositionX: '90%',
        //   backgroundSize: 'cover',
        //   backgroundRepeat: 'no-repeat',
        //   borderRadius: '500px 0 0 0',
        // }}
      >
        <video
          className='w-full h-full object-cover aspect-auto'
          preload="auto"
          playsInline
          autoPlay
          muted
          loop
          controls={false}
          onLoad={() => setIsLoaded(true)}
        >
          <source src="/img/start/desktop-20.mp4" type="video/mp4" />
        </video>

      </div>
      {/*<div
        className={
          'absolute bottom-0 left-0 right-0 top-0 -z-1 hidden grid-cols-4 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-1 before:bg-gradient-to-t before:from-black/100 before:to-black/30  sm:grid'
        }
      >
        <div className={'relative grayscale'}>
          <Image
            src={'/img/start/1.jpg'}
            alt={'image'}
            fill
            priority
            style={{
              objectFit: 'cover',
              objectPosition: '80%',
            }}
            sizes={'100vw, (max-width: 768px) 25vw'}
          />
        </div>
        <div className={'relative  grayscale'}>
          <Image
            src={'/img/start/2.jpg'}
            alt={'image'}
            fill
            priority
            style={{
              objectFit: 'cover',
              objectPosition: '90%',
            }}
            sizes={'100vw, (max-width: 768px) 25vw'}
          />
        </div>
        <div className={'relative  grayscale'}>
          <Image
            src={'/img/start/3.jpg'}
            alt={'image'}
            fill
            priority
            style={{
              objectFit: 'cover',
              objectPosition: '10%',
            }}
            sizes={'100vw, (max-width: 768px) 25vw'}
          />
        </div>
        <div className={'relative  grayscale'}>
          <Image
            src={'/img/start/4.jpg'}
            alt={'image'}
            fill
            priority
            style={{
              objectFit: 'cover',
              objectPosition: '20%',
            }}
            sizes={'100vw, (max-width: 768px) 25vw'}
          />
        </div>
      </div>*/}

      <div
        className={'mx-auto flex flex-col items-center justify-between px-5'}
      >
        <div className={'pt-2'}>
          <SuperTitle
            title={'Иван'}
            className={
              'text-right text-[8rem] leading-[4rem] s:text-[10rem] s:leading-[5rem]'
            }
          />
          <SuperTitle
            title={'Ксения'}
            className={
              'block text-center text-[8rem] leading-[4rem] s:text-[10rem] s:leading-[5rem] '
            }
          />
        </div>
        <div className={'flex flex-col items-center gap-5'}>
          <DynamicPlayer className={'flex flex-col items-center gap-5'} />
          <Description className={'text-center text-white'}>
            Нажмите на Play и листайте ниже погрузитесь в настроение нашего
            торжества
          </Description>
          <Image src={arrow} alt={'arrow down'} className={'animate-bounce'} />
        </div>
      </div>
    </section>
  );
}
