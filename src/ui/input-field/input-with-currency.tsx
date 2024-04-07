import { currencyConvertor } from '@/utils/currency-convertor';
import { SubmitHandler, useForm } from 'react-hook-form';

export function InputWithCurrency() {
  function handleChange(e: any) {
    let val = e.target.value;
    // eslint-disable-next-line no-useless-escape
    let removeChar = val.replace(/[^0-9\.]/g, '');
    let formatted = currencyConvertor(removeChar);
    e.target.value = formatted;
  }
  let methods = useForm({
    defaultValues: {
      currency_field: currencyConvertor(123456),
    }, //initialValueOfAddNewOrganization(),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const { handleSubmit, formState, register, control, watch } = methods;
  const onSubmit: SubmitHandler<any> = async value => {
    // console.log(value, 'form');
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='currency-field'>Enter Amount</label>
      <input
        type='text'
        id='currency-field'
        data-type='currency'
        placeholder='₹1,000,000.00'
        onKeyUp={e => {
          handleChange(e);
        }}
        {...register('currency_field')}
      />
      {/* <>{formState.errors.currency_field?.message}</> */}
      <button onClick={() => handleSubmit(onSubmit)}>submit</button>
    </form>
  );
}
