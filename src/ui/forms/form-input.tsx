import { forwardRef, useState } from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export function _formInput({ ...rest }: Props, ref: React.Ref<HTMLInputElement>) {
  // const ref = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   if (!ref?.current) return;
  //   ref?.current.addEventListener('input', (e) => {
  //     const target = e.target as HTMLInputElement;
  //     const value = target.value;
  //     const removeSpace = value.replace(/[^0-9]/g, '');
  //     const formattedValue = inrCurrencyFormat(Number(removeSpace), false);
  //     target.value = formattedValue;
  //   });

  //   return () => {
  //     ref.current?.removeEventListener('input', () => {});
  //   };
  // }, []);

  const [formatted, setFormatted] = useState<string>('');
  const [value, setValue] = useState<string>('');

  return (
    <>
      <input
        ref={ref}
        value={formatted}
        onChange={e => {
          setValue(e.target.value);
          const removeSpace = e.target.value.replace(/[^0-9]/g, '');
          setFormatted(inrCurrencyFormat(Number(removeSpace)));
        }}
        type='text'
        {...rest}
      />
    </>
  );
}

export const FormattedInput = forwardRef(_formInput);

FormattedInput.displayName = 'FormattedInput';

function inrCurrencyFormat(amount: number): string {
  return amount?.toLocaleString('en-IN', {
    maximumFractionDigits: 0,
    style: 'currency',
    currency: 'INR',
  });
}
