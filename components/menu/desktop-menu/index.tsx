import React from 'react';
import MenuList from '@/components/menu/menu-list';
import LinkButton from '@/components/buttons/link-button';
import { useActiveSectionContext } from '@/providers/action-section-context';
import { menuList } from '@/constants';

type Props = {
  content?: React.ReactNode;
};

export default function DesktopMenu({ content }: Props) {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const handleScroll = (e: any) => {
    e.preventDefault();

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');

    const elem = document.getElementById(targetId);

    if (!elem) return;

    window.scrollTo({
      behavior: 'smooth',
      top:
        elem?.getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        70,
    });
  };

  return (
    <nav>
      <div className={'flex items-center gap-3'}>
        <MenuList
          menu={{ items: menuList }}
          className={'flex items-center gap-3'}
          itemClassName={''}
          // clickHandler={handleScroll}
        />
        <LinkButton
          path={'#closeSection'}
          className={'text-sm'}
          onClick={handleScroll}
        >
          Опрос
        </LinkButton>
      </div>
    </nav>
  );
}
