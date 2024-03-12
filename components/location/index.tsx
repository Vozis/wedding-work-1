import Title from '@/components/typography/title';
import Description from '@/components/typography/description';
import Divider from '@/components/divider';
import Button from '@/components/buttons/main-button';
import Link from 'next/link';

export default function Location() {
  return (
    <div
      className={
        'relative flex flex-col items-center justify-center gap-8 bg-white p-12 text-center lg:mx-auto lg:max-w-screen-md lg:px-20'
      }
    >
      <Title title={'Место проведения'} className={'text-center'} />
      <Divider />
      <Description>
        Историческая Усадьба А.И. Путилова на Крестовском острове, с собственной
        гранитной набережной и причалом на берегу реки Малой Невки, окружена
        романтичными набережными и позволит соприкоснуться с частичкой истории
        «северной столицы»
      </Description>
      <Link
        href={'https://yandex.ru/maps/-/CDFUuQ-U'}
        target={'_blank'}
        className={
          'absolute -bottom-5 flex w-44 items-center justify-center rounded-xl bg-black px-5 py-2 text-xl text-white'
        }
      >
        Открыть карту
      </Link>
    </div>
  );
}
