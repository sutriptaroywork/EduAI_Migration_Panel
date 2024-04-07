import { Close, Delete } from '@/assets/icons';
import { Button } from '@/ui';
import { HTMLAttributes, ReactNode } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { FormFieldWrapper } from './forms';

interface SliderOverHeadProps {
  heading?: string;
  className?: string;
  handleClose: () => void;
  hasHeader?: boolean;
  handleDelete: () => void;
  otherHeaderBtn?: ReactNode;
  customHeader?: ReactNode;
  showDeleteBtn?: boolean;
}
export function SliderOverHead(props: SliderOverHeadProps) {
  const {
    heading,
    className = '',
    handleClose,
    handleDelete,
    otherHeaderBtn,
    customHeader,
    showDeleteBtn = true,
  } = props;
  const headStyles = ['text-gray-100 text-bold-body dark:text-white', className].join(' ');
  return (
    <div className='fixed  inset-0 z-[1000] flex h-[6.4rem] w-full items-center justify-between rounded-[.8rem] rounded-b-[0px] border-b-[1px] border-gray-20 bg-white p-[1.6rem] dark:border-dark-gray-30 dark:bg-dark-gray-10 '>
      {customHeader ? customHeader : <h3 className={headStyles}>{heading}</h3>}

      <div className='flex items-center justify-start gap-[.8rem]'>
        {otherHeaderBtn && otherHeaderBtn}
        {showDeleteBtn && (
          <Button
            className='h-[3.2rem] w-[3.2rem] '
            onlyIcon
            type='button'
            variant={'fill-outline-light'}
            onClick={() => {
              handleDelete();
            }}
          >
            <Delete className='h-[1.6rem] w-[1.6rem] text-red-60' />
          </Button>
        )}

        <Button
          className='h-[3.2rem] w-[3.2rem] '
          onlyIcon
          type='button'
          variant={'fill-outline-light'}
          onClick={() => {
            handleClose();
          }}
        >
          <Close className='h-[1.6rem] w-[1.6rem] text-gray-70' />
        </Button>
      </div>
    </div>
  );
}

export interface InputFieldWrapperProps extends HTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
  className?: string;
  error?: string | undefined | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | any;
  type?: 'text' | 'number' | 'radio' | 'date';
  value?: string;
  register: any;
  isDisabled?: boolean;
}

export const SlideOverInputField = (props: InputFieldWrapperProps) => {
  const {
    className = '',
    error = '',
    type = 'text',
    isDisabled = false,
    register,
    placeholder,
    ...rest
  } = props;

  return (
    <FormFieldWrapper>
      <input
        type={type}
        placeholder={placeholder}
        disabled={isDisabled}
        spellCheck={false}
        {...register}
        {...rest}
        className={`${
          error && '!ring-red-60 dark:!ring-red-50'
        } border-none !text-gray-100 !shadow-none !text-bold-body  dark:!text-white`}
      />

      {error && (
        <div className='text-red-60 text-reg-body-sm dark:text-red-40'>{error as string}</div>
      )}
    </FormFieldWrapper>
  );
};
