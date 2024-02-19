import Image from 'next/image';
import logo from '@/public/Logo.svg';

export default function Logo() {
  return <Image priority src={logo} alt={'Logo'} />;
}
