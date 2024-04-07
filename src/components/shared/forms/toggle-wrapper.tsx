import { Toggle } from '@/ui/toggle/toggle';
import { Controller } from 'react-hook-form';

type ToggleWrapper = {
  isRequired?: boolean;
  isDisabled?: boolean;
  label: string;
  control: any;
  name: string;
  rules?: any;
  showToggleLabel?: boolean;
  ToggleLabel?: string;
};
export function ToggleWrapper(props: ToggleWrapper) {
  const {
    control,
    name,
    label,
    ToggleLabel,
    showToggleLabel = false,
    isDisabled = false,
    isRequired = false,
    ...rest
  } = props;
  return (
    <div>
      {' '}
      <label
        htmlFor='first'
        className={`flex h-full w-full items-center justify-between whitespace-nowrap rounded-[4px] border border-gray-30 bg-white px-[1.6rem] py-[1.4rem]  text-gray-80 text-reg-body dark:border-dark-gray-30 dark:bg-dark-gray-10 dark:text-dark-gray-80`}
      >
        {isRequired ? (
          <span>
            {' '}
            {label}
            <sup className='text-red-60 dark:text-red-50'>*</sup>
          </span>
        ) : (
          <span> {label}</span>
        )}

        <div className='flex items-center justify-start gap-[.8rem]'>
          <Controller
            control={control}
            name={name}
            render={({ field: { ref, ...field } }) => {
              const { onChange, value } = field;
              return (
                <Toggle
                  enabled={
                    value
                    // status.toLowerCase() === 'active' ? true : false
                  }
                  onChange={value => onChange(value)}
                />
              );
            }}
            {...rest}
          />
          {showToggleLabel && ToggleLabel}{' '}
        </div>
      </label>
    </div>
  );
}
