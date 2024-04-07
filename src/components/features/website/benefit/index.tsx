import { GridBg } from '@/assets/bg/grid-bg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import { BenefitCard } from './benefit-card';
import { cardOneData, cardThreeData, cardTwoData } from './card-data';

gsap.registerPlugin(ScrollTrigger);

export const Benefit = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleClick = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(1);
    }
  };

  const slider = useRef<any>();

  // useEffect(() => {
  //   const tlCard1 = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: slider.current,
  //       scrub: 1,
  //       pin: false,
  //       markers: { endColor: 'white', fontSize: '20px', startColor: 'green' },
  //     },
  //   });

  //   tlCard1.to('.benefit-first-card', { xPercent: -100 }, '+=.6');

  //   ScrollTrigger.create({
  //     trigger: '.benefit-first-card',
  //     start: 'top center',
  //     end: 'center center',
  //     animation: tlCard1,
  //     scrub: 1,
  //   });

  //   const tlCard2 = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: slider.current,
  //       scrub: 1,
  //       pin: false,
  //     },
  //   });

  //   tlCard2.to('.benefit-second-card', { xPercent: -100 });

  //   ScrollTrigger.create({
  //     trigger: '.benefit-second-card',
  //     start: 'top center',
  //     end: 'center center',
  //     animation: tlCard2,
  //     scrub: 1,
  //   });

  //   const tlCard3 = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: slider.current,
  //       scrub: 1,
  //       pin: false,
  //     },
  //   });

  //   tlCard3.to('.benefit-third-card', { xPercent: -200 }, '+=.8');

  //   ScrollTrigger.create({
  //     trigger: '.benefit-third-card',
  //     start: 'top center',
  //     end: 'center center',
  //     animation: tlCard3,
  //     scrub: 1,
  //   });

  //   // Reverse the animations on scroll back up
  //   ScrollTrigger.create({
  //     trigger: slider.current,
  //     start: 'center center',
  //     end: 'top center',
  //     onEnter: () => {
  //       tlCard1.reverse();
  //       tlCard2.reverse();
  //       tlCard3.reverse();
  //     },
  //     onLeaveBack: () => {
  //       tlCard1.play();
  //       tlCard2.play();
  //       tlCard3.play();
  //     },
  //   });
  // }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let benefitCard = gsap.utils.toArray(document.querySelectorAll('.benefit-card'));
      const listHeights = benefitCard.map((list: any) => {
        const items = list.querySelectorAll('.c-flyway__item');
        return [...items].reduce((acc, curr) => acc + curr.offsetHeight, 0);
      });
      const listTotalHeights = listHeights.reduce((acc, curr) => acc + curr, 0);
      if (slider?.current) {
        // const tl = {
        //   trigger: slider.current,
        //   pin: true,
        //   scrub: 1,
        //   // pinSpacing: '20',
        //   // pinSpacing: false,
        //   // pinType: 'fixed',
        //   // snap: 1 / (benefitCard.length - 1),
        //   // end: `+=${listTotalHeights}`,
        //   end: '100%',
        //   // pin: '.benefit-wapper',
        //   // end: slider.current.clientHeight,
        //   // end: 'bottom bottom',
        //   // end: () => '+=' + slider.current.clientWidth,
        //   // markers: true,
        // };
        // gsap.to('.benefit-card-wrapper', {
        //   yPercent: 10,
        //   scrollTrigger: tl,
        // });
        gsap.to(benefitCard, {
          xPercent: -100 * (benefitCard.length - 1),
          // y: '45%',
          // position: 'relative',
          ease: 'ease',
          scrollTrigger: {
            trigger: slider.current,
            pin: true,
            // pinSpacer: slider.current,
            scrub: 1,
            snap: 1 / (benefitCard.length - 1),
            end: '100%',
          },
        });
      }
    });
    return () => ctx.revert();
  }, []);

  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     let benefitCardContainer = document.querySelector('.benefit-card-wrapper') as HTMLElement;
  //     let benefitCards = gsap.utils.toArray('.benefit-card');

  //     if (slider?.current && benefitCardContainer) {
  //       gsap.to(benefitCardContainer, {
  //         scrollTrigger: {
  //           trigger: slider.current,
  //           start: 'top top', // Ensure the pin starts when the container reaches the top of the viewport
  //           end: () => `+=${benefitCardContainer.clientHeight}`, // Pin the container until it reaches its original height
  //           pin: true,
  //           // ... (other scrollTrigger options)
  //         },
  //       });

  //       // Calculate the total height of all benefit cards
  //       const totalCardsHeight = benefitCards.reduce(
  //         (totalHeight, card: any) => totalHeight + card.clientHeight,
  //         0,
  //       );

  //       // Use ScrollTrigger to update the end position of the pin animation based on the total cards height
  //       gsap.to(benefitCardContainer, {
  //         scrollTrigger: {
  //           trigger: slider.current,
  //           start: `top bottom-=${totalCardsHeight}`, // Unpin the container when the last card leaves the viewport
  //           end: 'bottom top', // End the animation when the container's bottom reaches the top of the viewport
  //           pin: true,
  //           // start: 'top top',
  //           // end: `bottom bottom-=${totalCardsHeight}`,
  //           // ... (other scrollTrigger options)
  //         },
  //       });
  //       benefitCards.forEach((card: any, index) => {
  //         // gsap.to(benefitCards, {
  //         // xPercent: -100 * (benefitCards.length - 1), // Moves each card 100% to the left, adjust as needed
  //         gsap.to(card, {
  //           xPercent: -100 * index + 1,
  //           // xPercent: -100 * (benefitCards.length - 1), // Moves each card 100% to the left, adjust as needed
  //           delay: index + 1 * 200,
  //           scrollTrigger: {
  //             trigger: slider.current,
  //             start: 'top center', // Adjust the start position as needed
  //             end: `bottom bottom-=${totalCardsHeight}`,
  //             scrub: 1, // For smooth animation with scroll
  //           },
  //         });
  //       });
  //     }
  //   });
  //   return () => ctx.revert();
  // }, []);

  return (
    <div className='benefit-wapper w-full h-full flex flex-col overflow-hidden text-white items-center relative justify-center'>
      <GridBg className='w-full h-[38.4rem] absolute inset-0 top-[-9rem] scale-[3] lg:scale-100 lg:top-[-1rem] select-none 1440:top-[1rem]' />
      <div className='py-[6.4rem] lg:p-[6.4rem] w-full h-full'>
        <div
          // ref={component  }
          className=' flex flex-col justify-center items-center lg:items-start mb-[4.8rem] gap-[.8rem]'
        >
          <p className='text-white text-body-01'>Benefits</p>
          <p className='text-white text-heading-01'>
            Enhanced Efficiency. Innovation. Scalability.
          </p>
        </div>
        <div className='w-full h-full overflow-hidden'>
          <div
            ref={slider}
            className='benefit-card-wrapper gap-[1.6rem] relative flex flex-wrap w-[300vw] h-full'
          >
            <BenefitCard
              main_heading={cardOneData?.main_head}
              left_title={cardOneData.left.title}
              left_des={cardOneData.left.des}
              right_title={cardOneData.right.title}
              right_des={cardOneData.right.des}
              className='benefit-first-card'
              // className='absolute inset-0 benefit-first-card'
            />
            <BenefitCard
              main_heading={cardTwoData?.main_head}
              left_title={cardTwoData.left.title}
              left_des={cardTwoData.left.des}
              right_title={cardTwoData.right.title}
              right_des={cardTwoData.right.des}
              className='benefit-second-card'

              // className='absolute inset-0 left-[103%]'
              // className='translate-x-[110%] translate-y-[-100%] benefit-second-card'
            />

            <BenefitCard
              main_heading={cardThreeData?.main_head}
              left_title={cardThreeData.left.title}
              left_des={cardThreeData.left.des}
              right_title={cardThreeData.right.title}
              right_des={cardThreeData.right.des}
              className='benefit-third-card'

              // className='absolute inset-0 left-[208%]'
              // className='translate-x-[220%] translate-y-[-200%] benefit-three-card'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className='flex justify-center items-center'>
          <span className='flex justify-center rounded-lg items-center w-[2rem] h-[2rem] border bg-purple-50 mx-2 hover:bg-primary-70 border-gray-70'>
            <button className='text-[1.5rem]' onClick={() => setCurrentStep(currentStep - 1)}>
              {`<`}
            </button>
          </span>
          <span
            className={` ${
              currentStep == 1 ? 'w-[4.8rem]' : 'w-[0.8rem]'
            } mr-2 h-4  rounded-lg bg-primary-30`}
          ></span>
          <span
            className={`${
              currentStep == 2 ? 'w-[4.8rem]' : 'w-[0.8rem]'
            } mr-2 h-4 bg-primary-30  rounded-lg `}
          ></span>
          <span
            className={`${
              currentStep == 3 ? 'w-[4.8rem]' : 'w-[0.8rem]'
            } mr-2 h-4 bg-primary-30  rounded-lg `}
          ></span>
          <span className='flex justify-center rounded-lg items-center w-[2rem] h-[2rem] border bg-purple-50 mx-2 hover:bg-primary-70 border-gray-70'>
            <button className='text-[1.5rem]' onClick={handleClick}>
              {`>`}
            </button>
          </span>
        </div> */
}
{
  /* </div> */
}

{
  /* <div className='w-full bg-home-bg-gradient rounded-[3rem] h-[48rem] flex flex-col items-center justify-center'>
          {currentStep == 1 && (
            <div className='flex flex-col items-center justify-center z-10'>
              <div className='flex text-med-H2 mb-8'>
                <p>
                  <span className='text-gradient-1'>Future scope</span> and Competitive edge
                </p>
                <span className='absolute top-[29rem]'>
                  {' '}
                  <Dash />
                </span>
              </div>
              <div className='flex'>
                <div className='flex flex-col m-12 p-8'>
                  <p className='flex text-heading-04'>Industry-Wise Competitive Edge</p>
                  <p className='flex text-reg-sub-02 my-6'>
                    Adopting our generative AI solution offers educational and coaching institutes a
                    significant industry-wise competitive edge. By providing a more immersive,
                    personalized, and interactive learning environment, institutes can differentiate
                    themselves from competitors and attract students who seek innovative educational
                    platforms.
                  </p>
                </div>
                <div className='flex flex-col m-12 p-8'>
                  <p className='flex text-heading-04'>Future-Proofing Education</p>
                  <p className='flex text-reg-sub-02 my-6'>
                    Our solution future-proofs institutes by providing adaptability for emerging
                    technologies. By embracing our generative AI solution, institutes can seamlessly
                    integrate voice-based interfaces or AI avatars into their educational platforms,
                    offering a more natural and immersive learning experience as these technologies
                    become commercially viable in future.
                  </p>
                </div>
              </div>
            </div>
          )}
          {currentStep == 2 && (
            <div className='flex flex-col items-center justify-center'>
              <div className='flex text-med-H2 mb-8'>
                <p>
                  <span className='text-gradient-1'>Embrace the future</span> with Generative AI
                </p>
                <span className='absolute top-[29rem]'>
                  {' '}
                  <Dash />
                </span>
              </div>
              <div className='flex'>
                <div className='flex flex-col m-12 p-8'>
                  <p className='flex text-heading-04'>Attract Modern Learners</p>
                  <p className='flex text-reg-sub-02 my-6'>
                    Adopting our generative AI solution offers educational and coaching institutes a
                    significant industry-wise competitive edge. By providing a more immersive,
                    personalized, and interactive learning environment, institutes can differentiate
                    themselves from competitors and attract students who seek innovative educational
                    platforms.
                  </p>
                </div>
                <div className='flex flex-col m-12 p-8'>
                  <p className='flex text-heading-04'>Stay Ahead of Technological Advancements</p>
                  <p className='flex text-reg-sub-02 my-6'>
                    Our solution future-proofs institutes by providing adaptability for emerging
                    technologies. By embracing our generative AI solution, institutes can seamlessly
                    integrate voice-based interfaces or AI avatars into their educational platforms,
                    offering a more natural and immersive learning experience as these technologies
                    become commercially viable in future.
                  </p>
                </div>
              </div>
            </div>
          )}
           {currentStep == 3 && (
            <div className='flex flex-col items-center justify-center'>
              <div className='flex text-med-H2 mb-8'>
                <p>
                  <span className='text-gradient-1'>Flexible and Adaptable</span>
                  Infrastructure for Future
                </p>
                <span className='absolute top-[29rem]'>
                  {' '}
                  <Dash />
                </span>
              </div>
              <div className='flex'>
                <div className='flex flex-col m-12 p-8'>
                  <p className='flex text-heading-04'>Integration of New Technologies</p>
                  <p className='flex text-reg-sub-02 my-6'>
                    Adopting our generative AI solution offers educational and coaching institutes a
                    significant industry-wise competitive edge. By providing a more immersive,
                    personalized, and interactive learning environment, institutes can differentiate
                    themselves from competitors and attract students who seek innovative educational
                    platforms.
                  </p>
                </div>
                <div className='flex flex-col m-12 p-8'>
                  <p className='flex text-heading-04'>Gain a Competitive Edge</p>
                  <p className='flex text-reg-sub-02 my-6'>
                    Our solution future-proofs institutes by providing adaptability for emerging
                    technologies. By embracing our generative AI solution, institutes can seamlessly
                    integrate voice-based interfaces or AI avatars into their educational platforms,
                    offering a more natural and immersive learning experience as these technologies
                    become commercially viable in future.
                  </p>
                </div>
              </div>
            </div>
          )} 
           <div className='flex justify-center items-center'>
            <span className='flex justify-center rounded-lg items-center w-[2rem] h-[2rem] border bg-purple-50 mx-2 hover:bg-primary-70 border-gray-70'>
              <button className='text-[1.5rem]' onClick={() => setCurrentStep(currentStep - 1)}>
                {`<`}
              </button>
            </span>
            <span
              className={` ${
                currentStep == 1 ? 'w-[4.8rem]' : 'w-[0.8rem]'
              } mr-2 h-4  rounded-lg bg-primary-80`}
            ></span>
            <span
              className={`${
                currentStep == 2 ? 'w-[4.8rem]' : 'w-[0.8rem]'
              } mr-2 h-4 bg-primary-80  rounded-lg `}
            ></span>
            <span
              className={`${
                currentStep == 3 ? 'w-[4.8rem]' : 'w-[0.8rem]'
              } mr-2 h-4 bg-primary-80  rounded-lg `}
            ></span>
            <span className='flex justify-center rounded-lg items-center w-[2rem] h-[2rem] border bg-purple-50 mx-2 hover:bg-primary-70 border-gray-70'>
              <button className='text-[1.5rem]' onClick={handleClick}>
                {`>`}
              </button>
            </span>
          </div> 
        </div> */
}
