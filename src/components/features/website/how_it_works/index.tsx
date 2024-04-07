import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { Fragment, useEffect } from 'react';
import Cube from '../../../../../public/images/cube.png';
import { HowItWorksData } from './data';
// import Cube from "../../../../../public/images/cube.png"

gsap.registerPlugin(ScrollTrigger);
export const HowItWorks = () => {
  useEffect(() => {
    gsap.to('.how-it-works-container', {
      // y: 0,
      // opacity: 0.5,
      scrollTrigger: {
        trigger: '.how-it-works-container',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        pin: '.right',
      },
      // scrollTrigger: {
      //   trigger: '.how-it-works-container',
      //   start: 'top center',
      //   end: 'bottom bottom',
      //   // scrub: true,
      //   pin: '.image',
      // },
    });
    // new ScrollTrigger({
    //   trigger: '.gallery',
    //   start: 'top top',
    //   end: 'bottom bottom',
    //   pin: '.right',
    // });
  }, []);

  return (
    <Fragment>
      <div className='how-it-works-container flex flex-col lg:flex-row justify-start items-center w-full h-full p-[3.2rem]'>
        <div
          className={`left image w-full lg:w-1/2 h-[50%] lg:h-full flex justify-center items-center overflow-hidden relative`}
        >
          <Image src={Cube} alt='cube-image' placeholder='blur' />
          {/* add below line if production failed */}
          {/* <div
            className={`${
              process.env.NODE_ENV === 'production'
                ? `bg-[url('/' + ${process.env.REVERSE_PROXY_BASE_URL} + '/images/cube.png')]`
                : 'bg-[url("/images/cube.png")]'
            } bg-no-repeat bg-contain w-full h-full`}
          ></div> */}
        </div>
        <div className='how-it-works-right no-scrollbar mb-[2.4rem] lg:mb-0 content-contanier w-full lg:w-1/2 h-[50%] lg:h-[80%] overflow-y-auto '>
          {HowItWorksData?.map((val: any, index: number) => {
            return (
              <Fragment key={index}>
                <div className='content-wrapper relative w-full h-full  flex flex-col justify-center items-start'>
                  <h2 className='text-heading-04 sm:text-heading-03 text-white pb-[1.6rem] sm:pb-0'>
                    {val?.title}
                  </h2>
                  <div className='w-full border border-gray-70 sm:my-[2.4rem]'></div>
                  <p className='text-sub-02 text-gray-30 py-[1.6rem] sm:py-0'>{val?.des}</p>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};
