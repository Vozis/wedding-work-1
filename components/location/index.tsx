import Title from '@/components/typography/title';
import Description from '@/components/typography/description';
import Divider from '@/components/divider';
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
        Отель «Левада» — это уголок спокойствия и уюта в самом сердце природы.
        Вы сможете насладиться красотой окружающей местности и провести время
        на свежем воздухе.
      </Description>
      <Link
        href={'https://yandex.ru/maps/org/park_otel_levada/157260580634/?ll=30.265796,60.126298&z=7'}
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
