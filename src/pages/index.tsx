import { Benefit } from '@/features/website/benefit';
import { ContactUsView } from '@/features/website/contact-us';
import { Features } from '@/features/website/features';
import { LadingSection } from '@/features/website/home';
import { Section2 } from '@/features/website/home/section2';
import { Section3 } from '@/features/website/home/section3';
import { HowItWorks } from '@/features/website/how_it_works';

import { SectionWrapper } from '@/features/website/section-wrapper';
import { SEO } from '@/shared/seo';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const two = useRef();
  useEffect(() => {
    gsap.set('.single-step', { opacity: 0 });
    const allSteps = gsap.utils.toArray('.single-step');

    /* settings */
    const totalDuration = 1000;
    const singleStepDuration = totalDuration / allSteps.length;

    /* section */
    ScrollTrigger.create({
      trigger: '.two',
      start: 'top 10%',
      // end: '+=' + totalDuration,
      end: 'bottom bottom',
      pin: true,
      //pinSpacing: false,
      // markers: true,
      scrub: 1,
      // toggleActions: 'restart pause reverse pause',
      id: 'two',
      onEnter: () => console.log('entering'),
      onLeave: () => console.log('leaving'),
    });

    /* texts inside section */
    const stepsTimeline = gsap.timeline();
    ScrollTrigger.create({
      trigger: '.two .stepped-animation',
      start: 'top center',
      end: 'bottom bottom',
      // end: '+=' + totalDuration,
      animation: stepsTimeline,
      scrub: true,
      // snap: 1 / allSteps.length - 1,
    });

    /* Manual timeline to fade in / out the single steps */
    stepsTimeline
      .to('.two .stepped-animation>:nth-child(1)', { duration: 0.3, opacity: 1 })
      .to('.two .stepped-animation>:nth-child(1)', {
        duration: 0.2,
        opacity: 1,
        // stagger: singleStepDuration * 1,
      })
      .to('.two .stepped-animation>:nth-child(2)', {
        duration: 0.3,
        opacity: 1,
        // stagger: singleStepDuration * 1,
      })
      .to('.two .stepped-animation>:nth-child(2)', {
        duration: 0.2,
        opacity: 1,
        // stagger: singleStepDuration * 2,
      })
      .to('.two .stepped-animation>:nth-child(3)', {
        duration: 0.3,
        opacity: 1,
        // stagger: singleStepDuration * 2,
      });
  }, []);

  return (
    <>
      {' '}
      <SEO title='ShikshaML &#10095; Home' />
      <SectionWrapper id='home' className='px-[3.2rem]'>
        <LadingSection />
      </SectionWrapper>
      {/* <SectionWrapper id='features' className='bg-black'>
        <Features />
      </SectionWrapper> */}
      <SectionWrapper className='overflow-hidden  bg-black' id='home2'>
        <Section2 />
      </SectionWrapper>
      <SectionWrapper className=' bg-primary-50 ' id='home3'>
        <Section3 />
      </SectionWrapper>
      <SectionWrapper id='how-it-works'>
        <HowItWorks />
        {/* <section className='two w-full h-full'>
          <div id='scroll-container' className='grid'>
            <div className='left image w-full h-[50%] lg:h-full flex justify-center items-center overflow-hidden bg-[url("/images/cube.png")] bg-no-repeat'></div>
            <div className='stepped-animation'>
              <div className='single-step'>
                <div className='single-step__inner'>
                  1. Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu
                  vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis,
                  accumsan porttitor, facilisis luctus, metus.
                </div>
              </div>

              <div className='single-step'>
                <div className='single-step__inner'>
                  2. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit
                  amet orci. Aenean dignissim pellentesque felis.
                </div>
              </div>

              <div className='single-step'>
                <div className='single-step__inner'>
                  3. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula
                  vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales
                  sit amet, nisi.
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </SectionWrapper>
      <SectionWrapper id='features' className='bg-black'>
        <Features />
      </SectionWrapper>
      <SectionWrapper id='benefit' className='!h-full top-[-18rem] 1440:top-0 1440:!h-screen'>
        <Benefit />
        {/* <div className='w-full h-full overflow-hidden'>
          <ul id='container' className='container'>
            <li className='thumbnail bg-red-60'>1</li>
            <li className='thumbnail bg-primary-60'>2</li>
            <li className='thumbnail bg-orange-60'>3</li>
            <li className='thumbnail bg-purple-80'>4</li>
            <li className='thumbnail bg-white'>5</li>
            <li className='thumbnail bg-green-60'>6</li>
            <li className='thumbnail bg-amber-600'>7</li>
            <li className='thumbnail bg-fuchsia-600'>8</li>
            <li className='thumbnail bg-yellow-800'>9</li>
          </ul>
        </div> */}
        {/* <Scene /> */}
      </SectionWrapper>
      <SectionWrapper className='!h-full' id='contact-us'>
        <ContactUsView />
      </SectionWrapper>
    </>
  );
}

// export const getServerSideProps = withIronSessionSsr(async function ({ req, res }) {
//   const user = req.session.user;
//   if (user === undefined) {
//     return {
//       redirect: { destination: '/flow/login', permanent: false },
//     };
//   }

//   return {
//     props: { user: req.session.user ?? null },
//   };
// }, sessionOptions);
