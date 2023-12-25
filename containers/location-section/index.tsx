import Location from '@/components/location';

export default function LocationSection() {
  return (
    <section
      id={'locationSection'}
      className={'mt-12 px-12 py-24 lg:px-40 lg:py-40'}
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.33) 0%, rgba(0, 0, 0, 0.33) 100%), url('/img/location/location.jpg'), lightgray 50% / cover no-repeat`,
        backgroundSize: 'cover',
        filter: 'saturate(0%)',
      }}
    >
      <Location />
    </section>
  );
}
