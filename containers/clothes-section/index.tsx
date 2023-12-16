import SuperTitle from '@/components/typography/super-title';
import Player from '@/components/player';
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

export default function ClothesSection() {
  return (
    <section
      id={'clothesSection'}
      className={
        'mt-12 flex flex-col gap-4 lg:mx-auto lg:mt-28 lg:max-w-screen-xl'
      }
    >
      <div className={'flex flex-col gap-3 px-5 lg:flex-row lg:gap-10'}>
        <Title
          title={'Дресс-код'}
          className={'flex-shrink-0 text-center md:text-left'}
        />
        <Description>
          Мы очень старались сделать праздник красивым и будем рады, если в
          своих нарядах вы поддержите цветовую гамму нашей свадьбы:
        </Description>
      </div>
      <article className={styles.clothesContent}>
        <div
          className={cn('flex flex-col gap-3', styles.clothesContent__manInfo)}
        >
          <Subtitle title={'Мужчины'} className={'self-start'} />
          <ClothesList items={clothesListMan} />
        </div>
        <div className={styles.clothesContent__manPhoto}>
          <div className={'relative h-full w-full'}>
            <Image
              src={'/img/clothes/clothes-man-1.jpg'}
              alt={'Image'}
              fill
              style={{
                objectFit: 'cover',
                filter: 'saturate(0%)',
              }}
            />
          </div>
          <div className={'relative h-full w-full'}>
            <Image
              src={'/img/clothes/clothes-man-2.jpg'}
              alt={'Image'}
              fill
              style={{
                objectFit: 'cover',
                filter: 'saturate(0%)',
              }}
            />
          </div>
          <div className={'relative h-full w-full'}>
            <Image
              src={'/img/clothes/clothes-man-3.jpg'}
              alt={'Image'}
              fill
              style={{
                objectFit: 'cover',
                filter: 'saturate(0%)',
              }}
            />
          </div>
          <div className={'relative h-full w-full'}>
            <Image
              src={'/img/clothes/clothes-man-4.jpg'}
              alt={'Image'}
              fill
              style={{
                objectFit: 'cover',
                filter: 'saturate(0%)',
              }}
            />
          </div>
        </div>
        <div
          className={cn(
            'mt-2 flex flex-col gap-3 px-5',
            styles.clothesContent__womanInfo,
          )}
        >
          <Subtitle title={'Женщины'} className={'self-start'} />
          <ClothesList items={clothesListWoman} />
        </div>
        <div className={cn('', styles.clothesContent__womanPhoto)}>
          <div className={styles.itemTwo}>
            <div className={'relative h-full w-full'}>
              <Image
                src={'/img/clothes/clothes-woman-1.jpg'}
                alt={'Image'}
                fill
                style={{
                  objectFit: 'cover',
                  filter: 'saturate(0%)',
                }}
              />
            </div>
            <div className={'relative h-full w-full'}>
              <Image
                src={'/img/clothes/clothes-woman-2.jpg'}
                alt={'Image'}
                fill
                style={{
                  objectFit: 'cover',
                  filter: 'saturate(0%)',
                }}
              />
            </div>
          </div>
          <div className={cn(styles.itemThree)}>
            <div className={'relative h-full w-full'}>
              <Image
                src={'/img/clothes/clothes-woman-3.jpg'}
                alt={'Image'}
                fill
                style={{
                  objectFit: 'cover',
                  filter: 'saturate(0%)',
                }}
              />
            </div>
            <div className={'relative h-full w-full'}>
              <Image
                src={'/img/clothes/clothes-woman-4.jpg'}
                alt={'Image'}
                fill
                style={{
                  objectFit: 'cover',
                  filter: 'saturate(0%)',
                }}
              />
            </div>
            <div className={'relative h-full w-full'}>
              <Image
                src={'/img/clothes/clothes-woman-5.jpg'}
                alt={'Image'}
                fill
                style={{
                  objectFit: 'cover',
                  filter: 'saturate(0%)',
                }}
              />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
