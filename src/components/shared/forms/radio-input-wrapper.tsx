import { Fragment, HTMLAttributes, ReactNode } from 'react';
import { FormFieldWrapper } from './form-field-wrapper';
import { LabelWrapper } from './label-wrapper';
import { RequiredFieldWrapper } from './required-field-wrapper';

export interface InputFieldWrapperProps extends HTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
  className?: string;
  error?: string;
  value?: string;
  label: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  data: {
    label: string;
    register: any;
    watch: any;
    value: string | number;
    checked?: boolean;
    isDisabled?: boolean;
  }[];
  variant?: 'with-container' | 'without-container';
}

export function RadioInputWrapper(props: InputFieldWrapperProps) {
  const {
    className = '',
    error,
    label,
    placeholder,
    isRequired = false,
    isDisabled = false,
    data,
    variant = 'with-container',
    ...rest
  } = props;

  return (
    <FormFieldWrapper className={className}>
      {variant === 'with-container' ? (
        <>
          {isRequired ? (
            <RequiredFieldWrapper isDisabled={isDisabled}>
              <LabelWrapper label={label} id={label} disabledWithRequired={isDisabled} />
            </RequiredFieldWrapper>
          ) : (
            <LabelWrapper label={label} id={label} isDisabled={isDisabled} />
          )}
          <div className='flex h-full items-center justify-start gap-[.8rem] '>
            {data?.map((val: any, index: number) => {
              return (
                <Fragment key={index + val?.label}>
                  <label
                    htmlFor={val?.label}
                    className={`flex h-[4.8rem] w-full items-center justify-between whitespace-nowrap rounded-[4px] border border-gray-30 bg-white px-[1.6rem] py-[1.4rem]  text-gray-80 text-reg-body dark:border-dark-gray-30 dark:bg-dark-gray-10 dark:text-dark-gray-80`}
                  >
                    {val?.label}
                    <input
                      type='radio'
                      id={val?.label}
                      placeholder={placeholder}
                      disabled={val?.isDisabled}
                      value={val?.value}
                      checked={val?.checked}
                      {...val?.register}
                      {...rest}
                      className={`${error && '!ring-red-60 dark:!ring-red-50'}`}
                    />
                  </label>
                </Fragment>
              );
            })}
          </div>
          {error && <div className='text-red-60 text-reg-body-sm dark:text-red-40'>{error}</div>}
        </>
      ) : (
        <>
          <div className='flex items-center justify-start gap-[.8rem]'>
            <div className='flex items-center justify-start'>
              {isRequired ? (
                <RequiredFieldWrapper isDisabled={isDisabled}>
                  <LabelWrapper label={label} id={label} disabledWithRequired={isDisabled} />
                </RequiredFieldWrapper>
              ) : (
                <LabelWrapper label={label} id={label} isDisabled={isDisabled} />
              )}
              <span
                className={`${
                  isDisabled
                    ? 'text-gray-40 dark:text-dark-gray-50'
                    : 'text-gray-60 dark:text-dark-gray-60'
                }   text-med-body-sm `}
              >
                :
              </span>
            </div>
            {data?.map((val, index: number) => {
              return (
                <div className='flex items-center justify-start gap-[.8rem]' key={index}>
                  <input
                    type='radio'
                    id={val?.label}
                    placeholder={placeholder}
                    disabled={isDisabled}
                    value={val?.value}
                    {...val?.register}
                    {...rest}
                    className={`${error && '!ring-red-60 dark:!ring-red-50'}`}
                  />
                  <label
                    htmlFor={val.label}
                    className='text-gray-80 text-reg-body dark:text-dark-gray-80'
                  >
                    {val?.label}
                  </label>
                </div>
              );
            })}
          </div>
          {error && <div className='text-red-60 text-reg-body-sm dark:text-red-40'>{error}</div>}
        </>
      )}
    </FormFieldWrapper>
  );
}

//   <div className='flex w-[17rem] items-center justify-between'>
//     <div className='flex items-center'>
//       <input
//         type='radio'
//         {...register('server_type', {
//           required: 'Required field',
//           deps: ['type'],
//         })}
//         id='type-colo'
//         value='colo'
//         checked={watch('server_type') === 'colo'}
//       />
//       <label htmlFor='type-colo' className='ml-2 inline-block text-[1.4rem]'>
//         Colo
//       </label>
//     </div>
//     <div className='flex items-center'>
//       <input
//         type='radio'
//         {...register('server_type', {
//           required: 'Required field',
//           deps: ['type'],
//         })}
//         id='type-non-colo'
//         value='non-colo'
//         checked={watch('server_type') === 'non-colo'}
//       />
//       <label htmlFor='type-non-colo' className='ml-2 inline-block text-[1.4rem]'>
//         Non colo
//       </label>
//     </div>
//   </div>;
