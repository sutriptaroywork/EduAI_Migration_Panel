import { ReactNode } from 'react';
interface RequiredFieldWrapperProps {
  children: ReactNode;
  isDisabled?: boolean;
}

export function RequiredFieldWrapper(props: RequiredFieldWrapperProps) {
  const { children, isDisabled } = props;
  return (
    <div>
      {children}
      <sup
        className={` ${
          isDisabled ? 'text-gray-40 dark:text-dark-gray-50' : 'text-red-60 dark:text-red-50'
        } text-med-body-sm  `}
      >
        *
      </sup>
    </div>
  );
}
