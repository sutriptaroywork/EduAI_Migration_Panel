import { FieldWrapperProps } from './form-field-wrapper';

export function FormFieldGroupWrapper(props: FieldWrapperProps) {
  const { className, children } = props;
  const baseStyles = ['grid gap-[2.4rem] ', className ? className : 'grid-cols-2'].join(' ');
  return <div className={baseStyles}>{children}</div>;
}
