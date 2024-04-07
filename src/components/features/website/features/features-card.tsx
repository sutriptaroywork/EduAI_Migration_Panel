import { ReactNode } from 'react';

interface FCPRops {
  title: string;
  des: string;
  bgImg: ReactNode;
  cardIcon: ReactNode;
  className?: string;
  titleClassName?: string;
  desClassName?: string;
}
export function FeaturesCard(props: FCPRops) {
  const {
    title,
    des,
    bgImg,
    cardIcon,
    className = '',
    titleClassName = '',
    desClassName = '',
  } = props;
  return (
    <div className={` ${className} absolute top-[50%] translate-y-[-50%]`}>
      <div className='relative flex flex-col justify-between items-start w-[32rem] h-[44.8rem] 1440:h-[56rem] 1440:p-[3.2rem] p-[2.4rem] 1440:w-[40rem] '>
        <div className='absolute inset-0 z-[-1]'>{bgImg}</div>
        <div>{cardIcon}</div>
        <div>
          <h3 className={`${titleClassName} text-heading-04 1440:text-heading-03 text-primary-90`}>
            {title}
          </h3>
          <p className={`${desClassName} text-body-01 text-primary-90 mt-[1.2rem]`}>{des}</p>
        </div>
      </div>
    </div>
  );
}
