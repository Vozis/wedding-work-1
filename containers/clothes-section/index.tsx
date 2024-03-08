import Description from '@/components/typography/description';
import Title from '@/components/typography/title';
import Subtitle from '@/components/typography/subtitle';
import ClothesList from '../../components/lists/clothes-list';
import {
  clothesListMan,
  clothesListWoman,
} from '@/components/lists/clothes-list/constants';
import Image from 'next/image';
import styles from './clothes.module.scss';
import cn from 'clsx';
import AnimateSection from '@/components/animate/section';

export default function ClothesSection() {
  return (
    <AnimateSection
      id={'clothesSection'}
      className={
        'mt-12 flex flex-col gap-4 lg:mx-auto lg:mt-20 lg:max-w-screen-xl lg:gap-8'
      }
    >
      <Title
        title={'Дресс-код'}
        className={'flex-shrink-0 px-5 text-center md:text-left'}
      />
      <div className={'flex flex-col gap-3 px-5 lg:flex-row lg:gap-10'}>
        <Description>
          Мы очень старались сделать праздник красивым и очень просим в своих
          нарядах поддержать стилистику нашей свадьбы:
        </Description>
      </div>
      <article className={styles.clothesContent}>
        <div
          className={cn(
            'flex flex-col gap-3 lg:gap-6',
            styles.clothesContent__manInfo,
          )}
        >
          <Subtitle title={'Мужчины'} className={'self-start'} />
          <ClothesList items={clothesListMan} />
        </div>
        <div className={styles.clothesContent__manPhoto}>
          <div className={'relative h-full w-full'}>
            <Image
              src={'/img/clothes/clothes-man-1.jpeg'}
              alt={'Image'}
              loading={'lazy'}
              fill
              style={{
                objectFit: 'cover',
                filter: 'saturate(0%)',
              }}
              sizes={'50vw, (max-width:767px) 25vw'}
            />
          </div>
          <div className={'relative h-full w-full'}>
            <Image
              src={'/img/clothes/clothes-man-2.jpeg'}
              alt={'Image'}
              fill
              style={{
                objectFit: 'cover',
                filter: 'saturate(0%)',
              }}
              sizes={'50vw, (max-width:767px) 25vw'}
            />
          </div>
          <div className={'relative h-full w-full'}>
            <Image
              src={'/img/clothes/clothes-man-3.jpeg'}
              alt={'Image'}
              loading={'lazy'}
              fill
              style={{
                objectFit: 'cover',
                filter: 'saturate(0%)',
              }}
              sizes={'50vw, (max-width:767px) 25vw'}
            />
          </div>
          <div className={'relative h-full w-full'}>
            <Image
              src={'/img/clothes/clothes-man-4.jpeg'}
              alt={'Image'}
              loading={'lazy'}
              fill
              style={{
                objectFit: 'cover',
                filter: 'saturate(0%)',
              }}
              sizes={'50vw, (max-width:767px) 25vw'}
            />
          </div>
        </div>
        <div
          className={cn(
            'mt-2 flex flex-col gap-3 px-5',
            styles.clothesContent__womanInfo,
          )}
        >
          <Subtitle title={'Девушки'} className={'self-start'} />
          <ClothesList items={clothesListWoman} />
        </div>
        <div className={cn('', styles.clothesContent__womanPhoto)}>
          <div className={styles.itemTwo}>
            <div className={'relative h-full w-full'}>
              <Image
                src={'/img/clothes/clothes-woman-1.webp'}
                alt={'Image'}
                loading={'lazy'}
                fill
                style={{
                  objectFit: 'cover',
                  filter: 'saturate(0%)',
                }}
                sizes={'50vw, (max-width:767px) 20vw'}
              />
            </div>
            <div className={'relative h-full w-full'}>
              <Image
                src={'/img/clothes/clothes-woman-2.jpeg'}
                alt={'Image'}
                loading={'lazy'}
                fill
                style={{
                  objectFit: 'cover',
                  filter: 'saturate(0%)',
                }}
                sizes={'50vw, (max-width:767px) 20vw'}
              />
            </div>
          </div>
          <div className={cn(styles.itemThree)}>
            <div className={'relative h-full w-full'}>
              <Image
                src={'/img/clothes/clothes-woman-3.jpeg'}
                alt={'Image'}
                loading={'lazy'}
                fill
                style={{
                  objectFit: 'cover',
                  filter: 'saturate(0%)',
                }}
                sizes={'50vw, (max-width:767px) 20vw'}
              />
            </div>
            <div className={'relative h-full w-full'}>
              <Image
                src={'/img/clothes/clothes-woman-4.jpeg'}
                alt={'Image'}
                loading={'lazy'}
                fill
                style={{
                  objectFit: 'cover',
                  filter: 'saturate(0%)',
                }}
                sizes={'50vw, (max-width:767px) 20vw'}
              />
            </div>
            <div className={'relative h-full w-full'}>
              <Image
                src={'/img/clothes/clothes-woman-5.webp'}
                alt={'Image'}
                loading={'lazy'}
                fill
                style={{
                  objectFit: 'cover',
                  filter: 'saturate(0%)',
                }}
                sizes={'50vw, (max-width:767px) 20vw'}
              />
            </div>
          </div>
        </div>
      </article>
    </AnimateSection>
  );
}
