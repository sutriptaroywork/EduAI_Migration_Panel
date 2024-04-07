import { getFormattedClassName } from '@/utils/get-formatted-class';
import { ReactNode } from 'react';

interface CardProp {
  children: ReactNode;
  className?: string;
  variant?: 'with-hover' | 'without-hover';
}
export function Card(props: CardProp) {
  const { children, className = '', variant = 'without-hover' } = props;
  const CardStyle = getFormattedClassName([
    className,
    `${variant === 'with-hover' ? 'hover:bg-gray-05 dark:hover:bg-dark-gray-20' : ''}`,
    ' bg-gray-05 rounded-[.8rem] p-[1.6rem] w-full',
  ]);
  return <div className={CardStyle}>{children}</div>;
}
