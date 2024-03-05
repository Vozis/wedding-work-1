import CloseSection from '@/containers/close-section';

export default function Footer() {
  return (
    <footer
      className={
        'mt-10 flex items-center justify-center border-t border-black md:mt-12'
      }
    >
      <CloseSection />
    </footer>
  );
}
