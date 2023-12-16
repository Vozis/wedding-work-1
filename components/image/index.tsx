import React from 'react';
import cn from 'clsx';
import styles from './image.module.scss';

interface IImage extends React.HTMLAttributes<HTMLDivElement> {
  path: string;
  direction: 'left' | 'right';
}

export default function ImageBlock({ path, direction, className }: IImage) {
  return (
    <div
      className={cn(
        className,
        styles.image,
        direction === 'left' ? styles.image__left : styles.image__right,
      )}
      style={{
        backgroundImage: `url(${path})`,
      }}
    ></div>
  );
}
