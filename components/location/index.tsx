import Title from '@/components/typography/title';
import Description from '@/components/typography/description';
import Divider from '@/components/divider';
import Button from '@/components/buttons/main-button';

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
        Особняк просто шик, не хуже Петрвоского. Добираемся своим ходом,Метро 15
        минут дойдете, там плитки нет
      </Description>
      <Button type={'submit'} className={'absolute -bottom-5 w-44'}>
        Открыть карту
      </Button>
    </div>
  );
}
