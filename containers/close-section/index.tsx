import Title from '@/components/typography/title';
import Form from '@/components/form';
import Image from 'next/image';

import logo2 from '@/public/img/logo2.svg';
import ImageBlock from '@/components/image';

export default function CloseSection() {
  return (
    <section
      id={'closeSection'}
      className={
        'mt-12 flex flex-col items-center gap-4 px-5 md:items-start lg:mx-auto lg:mt-28 lg:max-w-screen-xl lg:gap-10'
      }
    >
      <Title title={'Небольшой опрос'} />
      <div className={'md:flex md:gap-4 lg:gap-20'}>
        <Form className={''} />
        <div className={'hidden md:mx-auto md:flex md:justify-end md:gap-5'}>
          <ImageBlock
            className={'self-end md:self-center lg:self-end'}
            direction={'left'}
            path={'/img/image-1.jpg'}
          />
          <ImageBlock
            className={'self-center md:self-start lg:self-center'}
            direction={'right'}
            path={'/img/image-1.jpg'}
          />
          <ImageBlock
            className={'self-start md:hidden xl:block'}
            direction={'left'}
            path={'/img/image-1.jpg'}
          />
        </div>
      </div>
      <Image
        className={'md:hidden'}
        src={logo2}
        alt={'Logo'}
        style={{
          margin: '2rem',
        }}
      />
    </section>
  );
}
