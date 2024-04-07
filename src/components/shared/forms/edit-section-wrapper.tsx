import { getFormattedClassName } from '@/utils/get-formatted-class';
import { ReactNode } from 'react';

interface EditSectionWrapperProp {
  children: ReactNode;
  className?: string;
}
export function EditSectionWrapper(props: EditSectionWrapperProp) {
  const { children, className = '' } = props;
  const baseWrapperStyle = getFormattedClassName([
    'flex flex-col gap-[2.4rem] mb-[2.4rem]',
    className,
  ]);
  return <div className={baseWrapperStyle}>{children}</div>;
}
