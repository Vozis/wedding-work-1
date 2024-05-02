import Description from '@/components/typography/description';
import logo2 from '@/public/img/logo2.svg';
import Image from 'next/image';
import Link from 'next/link';
import { BiLogoTelegram, BiLogoWhatsapp } from 'react-icons/bi';

export default function CloseSection() {
  return (
    <div
      className={
        'flex h-full w-full items-center justify-center px-12 py-10 md:px-24 lg:px-40'
      }
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.33) 0%, rgba(0, 0, 0, 0.33) 100%), url('/img/close.webp'), lightgray 50% / cover no-repeat`,
        backgroundSize: 'cover',
        filter: 'saturate(0%)',
      }}
    >
      <div
        className={
          'flex flex-col items-center justify-center gap-4 bg-white p-12 text-center lg:mx-auto lg:max-w-screen-md lg:px-20'
        }
      >
        <Description>
          В этот день мы будем немного заняты, поэтому в случае
          возникновения вопросов обращайтесь за помощью
          к нашему организатору <b>Светлане</b>.
        </Description>
        <div className={'flex flex-col items-center gap-5'}>
          <Link
            href="tel:89218807347"
            className={'border-b border-black text-xl'}
          >
            8-921-880-73-47
          </Link>
          <div className={'flex justify-center gap-3'}>
            <Link
              href={'https://wa.me/79218807347'}
              target={'_blank'}
              className={'p-2'}
            >
              <BiLogoWhatsapp className={'text-[35px]'} />
            </Link>
            <Link
              href={'https://t.me/@Serova_S_wedding'}
              target={'_blank'}
              className={'p-2'}
            >
              <BiLogoTelegram className={'text-[35px]'} />
            </Link>
          </div>
        </div>
        <Image className={'mt-2 md:hidden'} src={logo2} alt={'Logo'} />
        <p className={'hidden text-2xl md:block'}>До скорой встречи!</p>
      </div>
    </div>
  );
}
