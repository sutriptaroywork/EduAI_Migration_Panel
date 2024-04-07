import { HomeBg } from '@/assets/bg/home-bg';
import gsap from 'gsap';
import { CustomEase } from 'gsap/dist/CustomEase';
import Link from 'next/link';
import { Fragment, useEffect } from 'react';
import { PrimaryButton } from '../button/primary-button';
import { StarCover } from '../star';

gsap.registerPlugin(CustomEase);
CustomEase.create('cubic-text', '.25,1,.5,1');

export function LadingSection() {
  useEffect(() => {
    const title = document.querySelectorAll('.text-container');
    const tl = gsap.timeline({ defaults: { duration: 1 } });
    title.forEach((val, index) => {
      const p = val.querySelectorAll('div p');
      const h1 = val.querySelectorAll('div h1');
      const button = val.querySelectorAll('div a');

      const delay = index * 0.08;

      tl.to(h1, { y: 0, duration: 2, ease: 'none' }, delay)
        .to(p, { y: 0, duration: 1, ease: 'none' }, delay * 20)
        .to(button, { y: 0, duration: 0.8, ease: 'none', opacity: 1 }, delay * 15);
    });
  }, []);
  return (
    <Fragment>
      <div className={`bg-home-bg-gradient rounded-[4.8rem] h-full w-full`}>
        <div className={`flex relative justify-center flex-col items-center w-full h-full `}>
          <HomeBg className='z-[-1] select-none top-[-16.9rem] absolute sm:top-[-3rem] w-full h-full lg:top-[4rem]  ' />
          <StarCover />
          <div className={` flex justify-center items-center  px-[2.4rem] `}>
            <div
              className={`sm:max-w-[56rem] lg:max-w-[74.7rem] h-full flex flex-col gap-[3.2rem] justify-center items-center`}
            >
              <div className='text-container relative w-full '>
                <div className=' overflow-hidden '>
                  <h1
                    className={`text-heading-03 select-none sm:text-heading-02 lg:text-heading-01 text-center home-hero-text translate-y-full`}
                  >
                    Revolutionizing Education through{' '}
                    <span className='home-generative-text'>Generative</span> AI
                  </h1>
                </div>
              </div>

              <div className='text-container relative w-full '>
                <div className=' overflow-hidden '>
                  <p className='text-dark-gray-80 translate-y-full text-body-02 sm:text-body-01 text-center'>
                    Our groundbreaking product revolutionizes education through generative AI,
                    enhancing digital content interaction and transforming the learning experience.
                  </p>
                </div>
              </div>

              <div className='text-container relative w-full '>
                <div className=' flex justify-center items-center'>
                  <Link
                    href={'mailto:info@midasfintechsolutions.com'}
                    passHref
                    className='translate-y-full'
                  >
                    <PrimaryButton className=' !text-body-01'>Book a demo</PrimaryButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
