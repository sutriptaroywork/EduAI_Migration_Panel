import { ReactNode } from 'react';

interface MFooterProps {
  children: ReactNode;
}
export function ModalFooter(props: MFooterProps) {
  const { children } = props;
  return (
    <div
      className={`sm:dark:boder-dark-gray-30  flex  
                flex-col-reverse items-center gap-[.8rem] p-[1.6rem] sm:flex-row
                 sm:justify-end sm:border-t sm:border-gray-20 sm:bg-gray-05 sm:dark:border-dark-gray-30 sm:dark:bg-dark-gray-05`}
    >
      {children}
    </div>
  );
}
