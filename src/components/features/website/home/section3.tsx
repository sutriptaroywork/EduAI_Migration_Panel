import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export const Section3 = () => {
  const textWrapper = useRef<HTMLElement | any>(null);
  useEffect(() => {
    const moveableText = document.querySelector('.moveable-text') as HTMLElement;

    function getScrollAmount() {
      let moveableTextWidth = moveableText.scrollWidth;
      return -(moveableTextWidth - window.innerWidth);
    }

    gsap.to(moveableText, {
      x: getScrollAmount() + 10,
      // duration: 10,
      ease: 'none',
      // repeat: -1,
      scrollTrigger: {
        trigger: '.text-move-wrapper',
        // toggleActions: 'restart',
        // trigger: textWrapper.current,
        // start: 'top 10%',
        start: 'top center',
        // end: textWrapper.current.clientHeight,
        // end: 'bottom center',
        end: 'center bottom',
        // end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        scrub: 10,
        // invalidateOnRefresh: true,
        // markers: true,
      },
    });
  }, []);

  return (
    <>
      {/* <div className=''> */}
      <div className='text-move-wrapper flex items-center h-full' ref={textWrapper}>
        <div className='moveable-text '>
          <h2>Understanding</h2> <h2>its</h2> <h2>operational</h2> <h2>mechanism</h2>
        </div>
      </div>
    </>
  );
};
