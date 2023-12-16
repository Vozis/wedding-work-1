import Title from '@/components/typography/title';
import Description from '@/components/typography/description';
import Divider from '@/components/divider';
import ImageBlock from '@/components/image';

export default function InviteSection() {
  return (
    <section
      id={'inviteSection'}
      className={
        'mt-12 max-w-screen-xl px-5 md:flex md:gap-12 lg:mx-auto lg:mt-28'
      }
    >
      <div className={'flex flex-col items-center gap-4 '}>
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
        <Divider className={''} />
        <Description className={'text-center '}>
          Приглашаем на торжество в мир роскоши и комфорта на самую лучшую
          свадьбу ЕВЕР ФОРЕВЕР
        </Description>
      </div>
      <div className={'hidden md:flex md:gap-5'}>
        <ImageBlock
          className={''}
          direction={'left'}
          path={'/img/image-1.jpg'}
        />
        <ImageBlock
          className={'mt-16'}
          direction={'right'}
          path={'/img/image-1.jpg'}
        />
        <ImageBlock
          className={'md:hidden'}
          direction={'left'}
          path={'/img/image-1.jpg'}
        />
      </div>
    </section>
  );
}
