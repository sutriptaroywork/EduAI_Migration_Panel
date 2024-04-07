import Tippy from '@tippyjs/react';
import { ReactNode } from 'react';

interface UWProps {
  children: ReactNode;
  tippyContent: string;
}
export function UploaderWrapper(props: UWProps) {
  const { children, tippyContent } = props;
  return (
    <Tippy className='tippy' content={tippyContent} placement='bottom' arrow={false}>
      <div className='relative h-full w-full flex-1'>{children}</div>
    </Tippy>
  );
}
