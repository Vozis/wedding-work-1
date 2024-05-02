import Location from '@/components/location';
import AnimateSection from '@/components/animate/section';

export default function LocationSection() {
  return (
    <AnimateSection
      id={'locationSection'}
      className={'mt-12 px-12 py-24 lg:px-40 lg:py-40'}
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.33) 0%, rgba(0, 0, 0, 0.33) 100%), url('/img/location/location.jpeg'), lightgray no-repeat`,
        backgroundPositionY: 'bottom',
        backgroundSize: 'cover',
        filter: 'saturate(0%)',
      }}
    >
      <Location />
    </AnimateSection>
  );
}
