import { Dash } from '@/assets/icons';
import { ReactNode } from 'react';

interface BenefitCardProps {
  main_heading: ReactNode;
  left_title: string;
  left_des: string;
  right_title: string;
  right_des: string;
  className?: string;
}
export function BenefitCard(props: BenefitCardProps) {
  const { main_heading, left_des, left_title, right_title, right_des, className = '' } = props;
  return (
    <div
      className={`w-[88vw] benefit-card flex flex-col gap-[6.4rem] px-[3.2rem] py-[6.4rem] bg-home-bg-gradient rounded-[4.8rem]  min-h-[48rem] ${className}`}
    >
      <div className='flex justify-center items-center'>
        <h1 className='text-white text-heading-02 text-center relative'>
          {main_heading}
          <span className='absolute top-[6rem] left-0'>
            {' '}
            <Dash />
          </span>
        </h1>
      </div>
      <div className='flex justify-center gap-[6.4rem]'>
        <div className='left-card'>
          <CardView title={left_title} des={left_des} />
        </div>
        <div className='right-card'>
          <CardView title={right_title} des={right_des} />
        </div>
      </div>
    </div>
  );
}

const CardView = (props: { title: string; des: string }) => {
  const { title, des } = props;
  return (
    <div className='flex flex-col gap-[1.6rem]'>
      <h4 className='text-heading-04 text-white'>{title}</h4>
      <p className='text-gray-20 text-body-01'>{des}</p>
    </div>
  );
};
