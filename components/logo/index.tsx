import Image from 'next/image';
import logo from '@/public/Logo.svg';
export default function Logo() {
  return <Image src={logo} alt={'Logo'} />;
}
