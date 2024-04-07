import {
  Bg_card1,
  Bg_card2,
  Bg_card3,
  FirstCardIcon,
  SecondCardIcon,
  ThirdCardIcon,
} from '@/assets/features-card';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { PrimaryButton } from '../button/primary-button';
import { FeaturesCard } from './features-card';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export function Features() {
  const [count, setCount] = useState(1);
  const featuerWrapper = useRef<any | HTMLDivElement>();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.addLabel('card1');
    tl.to('.card-one', {
      xPercent: 20,
      scale: 1,
      zIndex: 3,
    });

    tl.from('.card-two', {
      xPercent: 9,
      scale: 0.8,
      zIndex: 2,
    });

    tl.from('.card-three', {
      xPercent: 8,
      scale: 0.5,
      zIndex: 1,
    });

    tl.addLabel('card2');
    // tl.removeLabel('card1');

    tl.to('.card-three', { xPercent: -37, scale: 0.8, zIndex: 2 }, '-=.6');
    tl.to('.card-two', { xPercent: -29, scale: 1, zIndex: 3 }, '-=.6');
    tl.to('.card-one', { xPercent: 70, scale: 0.5, zIndex: 1 }, '-=.6');
    tl.addLabel('card3');
    // tl.removeLabel('card2');
    // tl.to('.card-one', { xPercent: 27, scale: 0.8, zIndex: 2 }, '+=.3');
    // tl.to('.card-two', { xPercent: 34, scale: 0.5, zIndex: 1 }, '+=.3');
    // tl.to('.card-three', { xPercent: -33, scale: 1, zIndex: 3 }, '+=.6');
    tl.to('.card-one', { xPercent: 31, scale: 0.8, zIndex: 2 }, '+=.3');
    tl.to('.card-two', { xPercent: 34, scale: 0.5, zIndex: 1 }, '+=.3');
    tl.to('.card-three', { xPercent: -22, scale: 1, zIndex: 3 }, '+=.6');
    // Disable the pin for the timeline
    gsap.timeline({
      scrollTrigger: {
        trigger: featuerWrapper.current,
        scrub: 1,
        pin: false,
        // markers: { endColor: 'white', fontSize: '20px', startColor: 'green' },
      },
    });

    ScrollTrigger.create({
      trigger: '.card-one',
      start: 'top +=50',
      end: 'center center',
      animation: tl,
      scrub: 1,
    });

    ScrollTrigger.create({
      trigger: '.card-two',
      start: 'top +=100',
      end: 'center center',
      animation: tl,
      endTrigger: '.card-three',
      scrub: 1,
      // markers: true,
      onEnter: () => {
        // console.log('pause');
        tl.pause();
      },
      onLeaveBack: () => {
        // console.log('pause');

        tl.play();
      },
    });

    ScrollTrigger.create({
      trigger: '.card-three',
      start: 'top +=180',
      end: 'center center',
      animation: tl,
      scrub: 1,
    });
  }, []);
  // useEffect(() => {
  //   // const cardContainer = document.querySelector('.card-container');
  //   console.log('wrapper', featuerWrapper.current.clientHeight);
  //   if (featuerWrapper?.current) {
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: featuerWrapper.current,
  //         scrub: 1,
  //         // snap: { ease: 'power4.inOut' },
  //         // start: 'top 40%',
  //         // end: '80%',
  //         // pin: true,
  //         // pinSpacing: false,
  //         // pinnedContainer: featuerWrapper.current,
  //         pin: featuerWrapper.current,
  //         end: +featuerWrapper.current.clientHeight + 100,
  //         // end: '+=70%',
  //         // end: '+=1000',

  //         markers: { endColor: 'white', fontSize: '20px', startColor: 'green' },
  //       },
  //     });
  //     // tl.addLabel('card1');
  //     // tl.to('.card-one', {
  //     //   xPercent: 20,
  //     //   scale: 1,
  //     //   zIndex: 3,
  //     // });
  //     // tl.from('.card-two', {
  //     //   xPercent: 9,
  //     //   scale: 0.8,
  //     //   zIndex: 2,
  //     // });
  //     // tl.from('.card-three', {
  //     //   xPercent: -3,
  //     //   scale: 0.5,
  //     //   zIndex: 1,
  //     // });

  //     // tl.addLabel('card2');
  //     // tl.to('.card-one', { xPercent: 70, scale: 0.5, zIndex: 1 }, '-=.3');
  //     // tl.to('.card-two', { xPercent: -29, scale: 1, zIndex: 3 });
  //     // tl.from(
  //     //   '.card-three',
  //     //   {
  //     //     xPercent: -3,
  //     //     scale: 0.8,
  //     //     zIndex: 1,
  //     //   },
  //     //   '-=.3',
  //     // );

  //     // tl.addLabel('card3');
  //     // tl.to('.card-two', { xPercent: 34, scale: 0.5, zIndex: 1 });
  //     // tl.to('.card-one', { xPercent: 42, scale: 0.8, zIndex: 2 });
  //     // tl.to('.card-three', { xPercent: -59, scale: 1, zIndex: 3 }, '+=.6');

  //     tl.addLabel('card1');
  //     tl.to('.card-one', {
  //       xPercent: 20,
  //       scale: 1,
  //       zIndex: 3,
  //     });
  //     tl.from('.card-two', {
  //       xPercent: 9,
  //       scale: 0.8,
  //       zIndex: 2,
  //     });
  //     tl.from('.card-three', {
  //       xPercent: -3,
  //       scale: 0.5,
  //       zIndex: 1,
  //     });

  //     tl.addLabel('card2');
  //     // tl.to('.card-one', { xPercent: 70, scale: 0.5, zIndex: 1 }, '-=.6');
  //     // tl.to('.card-two', { xPercent: -29, scale: 1, zIndex: 3 }, '-=.6');
  //     // tl.from('.card-three', { xPercent: -3, scale: 0.8, zIndex: 1 }, '-=.6');

  //     // tl.addLabel('card3');
  //     // tl.to('.card-one', { xPercent: 42, scale: 0.8, zIndex: 2 }, '+=.3');
  //     // tl.to('.card-two', { xPercent: 34, scale: 0.5, zIndex: 1 }, '+=.3');
  //     // tl.to('.card-three', { xPercent: -59, scale: 1, zIndex: 3 }, '+=.6');

  //     tl.to('.card-one', { xPercent: 70, scale: 0.5, zIndex: 1 }, '+=1'); // Adjust the duration as needed
  //     tl.to('.card-two', { xPercent: 20, scale: 1, zIndex: 3 }, '+=1'); // Adjust the duration as needed
  //     tl.from('.card-three', { xPercent: -3, scale: 0.8, zIndex: 1 }, '-=0.6'); // Keep the original delay

  //     tl.addLabel('card3');
  //     tl.to('.card-one', { xPercent: 42, scale: 0.8, zIndex: 2 }, '+=.3');
  //     tl.to('.card-two', { xPercent: 34, scale: 0.5, zIndex: 1 }, '+=.3');
  //     tl.to('.card-three', { xPercent: -59, scale: 1, zIndex: 3 }, '+=.6');
  //     // tl.from('.card-one', { xPercent: 16, scale: 0.6 });

  //     // tl.addLabel('card1');
  //     // tl.to('.card-one', {
  //     //   zIndex: 30,
  //     //   xPercent: 16,
  //     //   scale: 1,
  //     // });
  //     // tl.from('.card-two', {
  //     //   zIndex: 20,
  //     //   xPercent: 20,
  //     //   scale: 0.8,
  //     // });
  //     // tl.addLabel('card2');
  //     // tl.to('.card-one', { scale: 0.6, xPercent: 40, zIndex: 10 });
  //     // tl.to('.card-two', { xPercent: 15, scale: 1 });
  //     // tl.from('.card-three', { zIndex: 10, xPercent: 12, scale: 0.8 });
  //     // tl.addLabel('.card3');
  //     // tl.to('.card-three', { zIndex: 30, xPercent: 40, scale: 1 });
  //     // tl.from('.card-one', { xPercent: 16, scale: 0.6, zIndex: 20 });
  //     // tl.to('.card-two', { xPercent: 30, scale: 0.6, zIndex: 10 });

  //     // gsap.to('.card-one', {
  //     //   zIndex: 10,s
  //     //   xPercent: 70,
  //     //   scale: 0.9,
  //     //   scrollTrigger: {
  //     //     trigger: 'feature-wapper',
  //     //     scrub: 4,
  //     //     start: 'center center',
  //     //     pin: true,
  //     //     end: 'center center',
  //     //     markers: true,
  //     //   },
  //     // });
  //     // gsap.to('.card-two', {
  //     //   zIndex: 20,
  //     //   xPercent: -70,
  //     //   scrollTrigger: {
  //     //     trigger: 'feature-wapper',
  //     //     scrub: 4,
  //     //     start: 'center center',
  //     //     pin: true,
  //     //     end: 'center center',
  //     //     markers: true,
  //     //   },
  //     // });
  //   }
  // }, []);

  return (
    <div
      ref={featuerWrapper}
      className='w-full feature-wapper relative z-[5] h-full flex items-center justify-center  rounded-[4.8rem] p-[3.2rem]'
    >
      <div className=' rounded-[4.8rem] gap-[3.2rem] items-center bg-primary-100 justify-center flex  relative w-full h-full overflow-hidden'>
        {/* <div className='absolute left-[-12rem] 1440:left-[-18rem] 1440:w-[43%] 1440:h-[67%] top-[-12rem] z-40 h-[70%] w-[30%] rounded-full bg-primary-70 opacity-50'></div>
        <div className='absolute left-[-14rem] top-[-12rem] z-30 h-[99%] w-[46%] 1440:left-[-26rem] 1440:top-[-18rem] 1440:w-[57%] 1440:h-[97%] rounded-full bg-purple-60 opacity-20'></div>
        <div className='absolute left-[-24rem] top-[-20rem] z-20 h-[130%] w-[65%] 1440:left-[-28rem] 1440:top-[-20rem] 1440:w-[67%] 1440:h-[115%] rounded-full bg-primary-50 opacity-20'></div> */}
        <div className='absolute left-[-17%] top-[-39%] z-40 h-[49.8rem] w-[49.8rem] 1440:left-[-13%] 1440:top-[-25%] rounded-full bg-primary-70 opacity-50'></div>
        <div className='absolute left-[-30%] top-[-82%] z-30  w-[76rem] h-[83rem] 1440:w-[83rem] 1440:left-[-26%] 1440:top-[-53%]  rounded-full bg-purple-60 opacity-20'></div>
        <div className='absolute left-[-34%] top-[-90%] z-20 w-[93.2rem] h-[95.2rem] 1440:w-[116.2rem] 1440:h-[116.2rem] 1440:left-[-37%] 1440:top-[-80%]  rounded-full bg-primary-50 opacity-20'></div>

        <div className='w-1/2 flex items-center z-50 '>
          <div className='flex flex-col text-white text-heading-02 gap-[4rem] px-[2.4rem]'>
            <p>Unlocking Advanced Features with Generative AI Solution</p>
            <Link href={'mailto:info@midasfintechsolutions.com'} passHref className='w-max'>
              <PrimaryButton variant='without-shadow' className='w-max py-[1.6rem] px-[2.4rem]'>
                Request a demo
              </PrimaryButton>
            </Link>
          </div>
        </div>
        <div className='w-1/2 h-full flex flex-col z-50  justify-end items-center'>
          <div className='card-container relative w-full h-full flex justify-center items-center'>
            <FeaturesCard
              cardIcon={<FirstCardIcon />}
              bgImg={<Bg_card1 className='w-full h-full' />}
              title='AI summarization'
              des='Our generative AI analyzes and summarizes educational videos, helping learners grasp key concepts faster. This empowers students to review content quickly and reinforces their understanding of complex topics.'
              // className={`${count == 1 ? 'z-30' : 'z-10'} right-[16rem] card-one`}
              className='right-[16rem] card-one z-[3]'
            />
            <FeaturesCard
              cardIcon={<SecondCardIcon />}
              bgImg={<Bg_card2 className='w-full h-full' />}
              title='AI Q&A Practice Widget'
              des='Our AI-powered Q&A practice widget offers interactive exercises tailored to video content. It generates relevant questions based on the video context, providing personalized practice opportunities for effective knowledge reinforcement.'
              // className={`${count == 2 ? 'z-30' : 'z-20'} right-[9rem] card-two`}
              className=' right-[8rem] card-two scale-[.8] z-[2]'
            />
            <FeaturesCard
              cardIcon={<ThirdCardIcon />}
              bgImg={<Bg_card3 className='w-full h-full' />}
              title='AI Chatbot'
              des='Our AI chatbot facilitates natural language conversation during educational videos, offering instant responses and personalized guidance. It creates an interactive learning environment that adapts to individual learning styles, supporting students at their own pace.'
              // className={`${count == 3 ? 'z-30' : 'z-10'} right-12 card-three`}
              titleClassName='!text-primary-05'
              desClassName='!text-primary-10'
              className='right-[-3rem] card-three scale-50 z-[1]'
            />
          </div>

          {/* <div className='flex pb-[1rem] 1440:pb-[6rem]'>
            <span className='flex justify-center rounded-lg items-center w-[2rem] h-[2rem] border bg-purple-50 mx-2 hover:bg-primary-70 border-gray-70'>
              <button
                className='text-[1.5rem]'
                onClick={() => {
                  if (count > 1) {
                    setCount(count - 1);
                  }
                }}
              >
                {`<`}
              </button>
            </span>
            <span className='flex justify-center rounded-lg items-center w-[2rem] h-[2rem] border bg-purple-50 mx-2 hover:bg-primary-70 border-gray-70'>
              <button
                className='text-[1.5rem]'
                onClick={() => {
                  if (count < 3) {
                    setCount(count + 1);
                  }
                }}
              >
                {`>`}
              </button>
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
}
