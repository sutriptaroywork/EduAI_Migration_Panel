import { ContactUsLogo } from '@/assets/icons';
import Link from 'next/link';
import { Fragment } from 'react';

export function Footer() {
  return (
    <div className='flex flex-col justify-center items-center px-[6.4rem]'>
      {' '}
      <ContactUsLogo />
      <div className='lg:flex pt-[6.4rem] pb-[2.4rem] hidden justify-between items-center w-full'>
        <h4 className={textStyle}>All rights reseved © 2023 shikshaML</h4>
        <h4 className={`${textStyle} flex justify-center items-center gap-[.8rem]`}>
          Privacy policy <Dot /> Terms &amp; Conditions
        </h4>
        <Link href='mailto:info@midasfintechsolutions.com' className={textStyle}>
          info@midasfintechsolutions.com
        </Link>
      </div>
      {/* --------for mobile---------- */}
      <div className='lg:hidden flex gap-[1.6rem] pt-[6.4rem] pb-[2.4rem] flex-col justify-center items-center'>
        {footerList?.map((val: any, index: number) => {
          return (
            <Fragment key={index}>
              <Link href={val?.href} className={textStyle}>
                {val?.label}
              </Link>
              <Dot className={index == 3 ? 'hidden' : 'block'} />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
const textStyle = 'text-gray-40 text-body-02';
export const Dot = (props: { className?: string }) => {
  const { className } = props;
  return <div className={`${className} w-[.4rem] h-[.4rem] rounded-full bg-gray-40`}></div>;
};

const footerList = [
  { label: 'Privacy policy', href: '' },
  { label: 'Terms & Conditions', href: '' },
  { label: 'info@midasfintechsolutions.com', href: '' },
  { label: 'All rights reseved © 2023 shikshaML', href: '' },
];
