import React from 'react';

export default function Divider({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="92"
      height="6"
      viewBox="0 0 92 6"
      fill="none"
    >
      <path d="M1 3H33" stroke="black" strokeLinecap="round" />
      <path d="M59 3H91" stroke="black" strokeLinecap="round" />
      <circle cx="46" cy="3" r="3" fill="black" />
    </svg>
  );
}
