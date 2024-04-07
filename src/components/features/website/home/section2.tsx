import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export const Section2 = () => {
  const typewriterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const textContainer = typewriterRef.current;
    const textElements = textContainer?.querySelectorAll('.typewriter-text span');

    if (!textContainer || !textElements) return;

    const animationDuration = 0.15; // Decrease to speed up the animation
    const animationDelay = 0.015; // Decrease to reduce the delay between animations

    const startTypingAnimation = () => {
      gsap.set(textElements, { visibility: 'visible' });

      let totalCharacters = 0;

      // Iterate through the text lines and animate them one after another
      for (let i = 0; i < textElements.length; i++) {
        const textElement = textElements[i];
        const textArray = textElement.textContent?.split('');

        if (!textArray) continue;

        textElement.textContent = '';

        // Iterate through the characters of the current line and animate them one after another
        for (let j = 0; j < textArray.length; j++) {
          const char = textArray[j];

          if (char === ' ') {
            // Add a space
            textElement.appendChild(document.createTextNode('\u00A0')); // Use non-breaking space entity
          } else {
            const charWrapper = document.createElement('span');
            charWrapper.textContent = char;
            charWrapper.style.opacity = '0';

            textElement.appendChild(charWrapper);

            gsap.to(charWrapper, {
              duration: animationDuration,
              opacity: '1',
              delay: totalCharacters * animationDelay, // Apply the delay for each character
            });
          }

          totalCharacters++;
        }

        // Add an extra delay after each line
        totalCharacters++;
      }
    };

    // Intersection Observer callback
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        startTypingAnimation();

        // Unobserve the element after starting the animation (with null check)
        if (typewriterRef.current) {
          observer.unobserve(typewriterRef.current);
        }
      }
    };

    // Create an Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // You can adjust this threshold based on how much of the element should be visible to trigger the animation
    });

    if (typewriterRef.current) {
      observer.observe(typewriterRef.current);
    }

    // Cleanup function for unobserving the element when the component unmounts
    return () => {
      if (typewriterRef.current) {
        observer.unobserve(typewriterRef.current);
      }
    };
  }, []);

  return (
    <div className='w-full h-[80rem] bg-black text-white flex justify-center items-center'>
      <div
        ref={typewriterRef}
        className='typewriter-container flex justify-center items-center w-full'
      >
        <p className='typewriter-text flex flex-col justify-center items-center'>
          <span className='text-heading-01 flex mb-16 '>
            Evolution of Digitalization in Education
          </span>
          <span className='text-heading-05 flex mb-2'>
            Digitizing educational content was just the beginning.Generative AI has
          </span>
          <span className='text-heading-05 flex mb-2'>
            transformed education, providing interactive and adaptive learning
          </span>
          <span className='text-heading-05 flex'>experiences in a dynamic environment.</span>
        </p>
      </div>
    </div>
  );
};
