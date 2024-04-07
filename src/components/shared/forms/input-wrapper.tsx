import { HTMLAttributes, ReactNode } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { FormFieldWrapper } from './form-field-wrapper';
import { LabelWrapper } from './label-wrapper';
import { RequiredFieldWrapper } from './required-field-wrapper';

export interface InputFieldWrapperProps extends HTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
  className?: string;
  error?: string | undefined | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | any;
  type?: 'text' | 'number' | 'radio' | 'date' | 'url';
  value?: string;
  register: any;
  label: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  pattern?: any;
  helperText?: string | ReactNode;
  name?: string;
  variant?: 'with-icon' | 'without-icon';
  icon?: ReactNode | any;
  showLabel?: boolean;
  inputClassName?: string;
}

export function InputFieldWrapper(props: InputFieldWrapperProps) {
  const {
    className = '',
    error,
    type = 'text',
    label,
    placeholder,
    isRequired = false,
    isDisabled = false,
    register,
    helperText = '',
    variant = 'without-icon',
    icon,
    showLabel = true,
    inputClassName = '',
    ...rest
  } = props;
  return (
    <FormFieldWrapper className={className}>
      {showLabel &&
        (isRequired ? (
          <RequiredFieldWrapper isDisabled={isDisabled}>
            <LabelWrapper label={label} id={label} disabledWithRequired={isDisabled} />
          </RequiredFieldWrapper>
        ) : (
          <LabelWrapper label={label} id={label} isDisabled={isDisabled} />
        ))}
      {variant === 'without-icon' ? (
        <input
          type={type}
          id={label}
          placeholder={placeholder}
          disabled={isDisabled}
          spellCheck={false}
          {...register}
          {...rest}
          className={`${
            error &&
            '  !ring-red-60 focus:!border-red-60 focus:!ring-red-60 focus-visible:!border-red-60 focus-visible:!shadow-red focus-visible:!ring-red-60 active:!border-red-60 '
          } ${inputClassName}
          `}
        />
      ) : (
        <div className='relative '>
          <span className='absolute left-[1rem] top-[1.6rem] text-gray-60'>{icon}</span>
          <input
            type={type}
            id={label}
            placeholder={placeholder}
            disabled={isDisabled}
            spellCheck={false}
            {...register}
            {...rest}
            className={`${
              error &&
              ' !border-red-60 !ring-red-60 focus:!border-red-60 focus:!ring-red-60 focus-visible:!border-red-60 focus-visible:!shadow-red focus-visible:!ring-red-60 active:!border-red-60 '
            } !pl-[3.2rem]`}
          />
        </div>
      )}
      {helperText && <p className='text-gray-60 text-reg-body-sm '>{helperText}</p>}
      {error && (
        <div className='text-red-60 text-reg-body-sm dark:text-red-40'>{error as string}</div>
      )}
    </FormFieldWrapper>
  );
}
