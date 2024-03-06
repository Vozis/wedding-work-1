import Location from '@/components/location';
import Description from '@/components/typography/description';
import logo2 from '@/public/img/logo2.svg';
import Image from 'next/image';
import Link from 'next/link';
import { MdWhatsapp } from 'react-icons/md';
import { FaWhatsapp, FaTelegram } from 'react-icons/fa';
import { BiLogoTelegram, BiLogoWhatsapp } from 'react-icons/bi';

export default function CloseSection() {
  return (
    <div
      className={
        'flex h-full w-full items-center justify-center px-12 py-10 lg:px-40'
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
          На все вопросы, связанные с торжеством, с радостью ответит организатор
          нашей свадьбы Светлана
        </Description>
        <div className={'flex flex-col items-center gap-5'}>
          <Link href="tel:89218807347" className={'border-b border-black'}>
            8-921-880-73-47
          </Link>
          <div className={'flex justify-center gap-5'}>
            <Link href={'https://wa.me/79218807347'} target={'_blank'}>
              <BiLogoWhatsapp className={'text-[35px]'} />
            </Link>
            <Link href={'https://wa.me/79218807347'} target={'_blank'}>
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
