'use client';

import { FaPlay } from 'react-icons/fa';
import React, { useState } from 'react';
import { FaPause } from 'react-icons/fa6';
import cn from 'clsx';

interface IPlayButton extends React.HTMLAttributes<HTMLButtonElement> {
  itemClassName?: string;
}

export default function PlayButton({
  itemClassName,
  className,
  ...rest
}: IPlayButton) {
  const [isOn, setIsOn] = useState<boolean>(false);

  return (
    <button
      className={cn(
        'relative z-2 flex items-center justify-center text-2xl after:absolute after:-z-1 after:rounded-full after:bg-white',
        className,
      )}
      onClick={() => setIsOn(!isOn)}
    >
      {isOn ? (
        <FaPause className={itemClassName} />
      ) : (
        <FaPlay className={itemClassName} />
      )}
    </button>
  );
}
