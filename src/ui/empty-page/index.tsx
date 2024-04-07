import { ReactNode } from 'react';

interface EmptyPageProps {
  heading?: string;
  description?: string;
  icon: ReactNode;
  pageHeight?: string;
}

export function EmptyPage(props: EmptyPageProps) {
  const { description, icon, pageHeight } = props;

  // const variants = {
  //   user: " w-[20rem] h-[14.8rem] bg-[url('/images/empty-images/no-user-light.svg')] bg-[url('/images/empty-images/no-user-dark.svg')]",
  //   other:
  //     "h-[16.6rem] w-[15rem] bg-[url('/images/empty-images/no-data-light.svg')] dark:bg-[url('/images/empty-images/no-data-dark.svg')]",
  // };

  return (
    <div
      className={`flex ${
        pageHeight ? pageHeight : 'h-full'
      } w-full flex-col items-center justify-center gap-[.8rem]`}
    >
      {icon}
      {/* {heading && (
          <h5 className='mt-[1.6rem] text-gray-80 text-med-sub-02 dark:text-dark-gray-80'>
            {heading}
          </h5>
        )} */}
      <p className={`max-w-[32rem] text-center text-gray-60 text-body-02`}>{description}</p>
    </div>
  );
}
