import { getFormattedClassName } from '@/utils/get-formatted-class';
import { HTMLAttributes, ReactNode } from 'react';

export interface FieldWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function FormFieldWrapper(props: FieldWrapperProps) {
  const { children, className = '', ...rest } = props;
  const baseStyles = getFormattedClassName(['flex flex-col justify-start gap-[.8rem]', className]);

  return (
    <div {...rest} className={baseStyles}>
      {children}
    </div>
  );
}
