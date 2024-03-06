import React from 'react';
import cn from 'clsx';
import styles from './image.module.scss';

interface IImage extends React.HTMLAttributes<HTMLDivElement> {
  path: string;
  isFigured?: boolean;
  direction?: 'left' | 'right' | null;
}

export default function ImageBlock({
  path,
  direction = null,
  className,
  isFigured = false,
  style,
  ...rest
}: IImage) {
  console.log(isFigured);

  return (
    <div
      className={cn(
        {
          [styles.image]: isFigured,
          [styles.image__left]: direction === 'left',
          [styles.image__right]: direction === 'right',
        },
        className,
      )}
      style={
        style
          ? style && {
              backgroundImage: `url(${path})`,
            }
          : {
              backgroundImage: `url(${path})`,
            }
      }
      {...rest}
    ></div>
  );
}
