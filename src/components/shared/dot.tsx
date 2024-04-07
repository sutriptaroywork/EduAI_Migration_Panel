interface DotProp {
  className?: string;
}

export function Dot(props: DotProp) {
  const { className = '' } = props;
  return (
    <div
      className={`h-[.4rem] w-[.4rem] rounded-full bg-gray-40 dark:bg-dark-gray-50 ${
        className ? className : ''
      }`}
    ></div>
  );
}
