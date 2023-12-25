import ImageBlock from '@/components/image';
import AnimateSection from '@/components/animate/section';

export default function ImagesSection() {
  return (
    <AnimateSection
      id={'imageSection'}
      className={'mt-12 flex flex-col px-5 md:hidden '}
    >
      <ImageBlock
        className={'self-start'}
        direction={'left'}
        path={'/img/start/1.jpg'}
      />
      <ImageBlock
        className={'-mt-12 self-end'}
        direction={'right'}
        path={'/img/start/2.jpg'}
      />
    </AnimateSection>
  );
}
