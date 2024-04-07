import { Controller } from 'react-hook-form';
import { FormFieldWrapper } from './form-field-wrapper';
import { LabelWrapper } from './label-wrapper';
import { RequiredFieldWrapper } from './required-field-wrapper';

export interface ControllerWrapper {
  isRequired?: boolean;
  isDisabled?: boolean;
  label: string;
  render: any;
  control: any;
  name: string;
  rules?: any;
  showLabel?: boolean;
}
export function ControllerWrapper(props: ControllerWrapper) {
  const {
    isRequired = false,
    isDisabled = false,
    label,
    control,
    name,
    showLabel = true,
    ...rest
  } = props;
  return (
    <FormFieldWrapper>
      {showLabel &&
        (isRequired ? (
          <RequiredFieldWrapper isDisabled={isDisabled}>
            <LabelWrapper label={label} id={label} disabledWithRequired={isDisabled} />
          </RequiredFieldWrapper>
        ) : (
          <LabelWrapper label={label} id={label} isDisabled={isDisabled} />
        ))}

      <Controller control={control} name={name} {...rest} />
    </FormFieldWrapper>
  );
}
