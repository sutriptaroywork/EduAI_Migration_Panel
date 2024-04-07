type LabelWrapperProp = {
  id: string;
  label: string;
  isDisabled?: boolean;
  disabledWithRequired?: boolean;
};

export function LabelWrapper(props: LabelWrapperProp) {
  const { label, id, isDisabled = false, disabledWithRequired = false } = props;
  return (
    <label
      htmlFor={id}
      className={`${
        isDisabled || disabledWithRequired ? 'text-gray-40 ' : 'text-gray-60 '
      }   text-body-02 `}
    >
      {label}
    </label>
  );
}
