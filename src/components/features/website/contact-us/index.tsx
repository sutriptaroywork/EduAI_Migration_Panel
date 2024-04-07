import { ContactUsCircleBg } from '@/assets/bg/contact-us-circle';
import { ContactUsVector } from '@/assets/bg/contact-us-vector';
import { GridBg } from '@/assets/bg/grid-bg';
import { Logout, Mail } from '@/assets/icons';
import { Compose } from '@/assets/icons/compose';
import { AppLinks } from '@/constants/app-links';
import Link from 'next/link';
import { SecondaryButton } from '../button';
import { PrimaryButton } from '../button/primary-button';
import { Footer } from '../footer';

export function ContactUsView() {
  return (
    <div className=' w-full h-full '>
      <div className='relative w-full overflow-x-hidden '>
        <GridBg className='w-full h-[38.4rem] absolute inset-0 top-[-9rem] scale-[3] lg:scale-100 lg:top-[-1rem] select-none 1440:top-[1rem]' />

        <div className='flex flex-col justify-center items-center pt-[6rem] px-[1.6rem] sm:px-[3.2rem] lg:px-[18.4rem]'>
          <ContactUsCircleBg className='w-full select-none' />
          <h3 className='text-body-01 text-white'>Contact us</h3>
          <h2 className='text-heading-03 lg:text-heading-02 text-white text-center'>
            Get in touch with us to know more
          </h2>

          <Link
            href={'mailto:info@midasfintechsolutions.com'}
            passHref
            className='w-full mt-[4.8rem] mb-[1.6rem]'
          >
            <PrimaryButton
              className={`${btnStyle} !w-full !text-sub-01 sm:!text-heading-05 lg:!text-heading-03`}
            >
              <Compose className={iconStyle} />
              Request a demo
            </PrimaryButton>
          </Link>

          <div className='flex justify-center flex-col lg:flex-row items-center gap-[.8rem] w-full '>
            <Link href='mailto:info@midasfintechsolutions.com' passHref className='w-full'>
              <SecondaryButton
                className={`${btnStyle} !text-sun-01 sm:!text-heading-05 lg:!text-heading-04 w-full`}
              >
                <Mail className={iconStyle} />
                Contact us
              </SecondaryButton>
            </Link>
            <Link href={AppLinks.login} passHref className='w-full'>
              <SecondaryButton
                className={`${btnStyle} !text-sun-01 sm:!text-heading-05 lg:!text-heading-04 w-full`}
              >
                <Logout className={iconStyle} />
                Log in to shikshaML{' '}
              </SecondaryButton>
            </Link>
          </div>
        </div>
        <ContactUsVector className='w-full' />
      </div>

      {/* <div className='bg-[url("/images/contact-us-vector.svg")] mt-[20rem] bg-no-repeat background-'></div> */}
      <div className=' mt-[-15rem]'>
        <Footer />
      </div>
    </div>
  );
}

const iconStyle = 'w-[2.4rem] h-[2.4rem] sm:w-[3.2rem] sm:h-[3.2rem] lg:w-[4.8rem] lg:h-[4.8rem]';
const btnStyle = 'h-[6.4rem] sm:!h-[8rem] lg:!h-[12rem]';
