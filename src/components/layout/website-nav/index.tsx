/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Logo } from '@/assets/icons';
import { AppLinks } from '@/constants/app-links';
import { LoginButton } from '@/features/website/button';
import { scrollTop } from '@/utils/scrollTop';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { NavList } from './web-nav-list';

export function WebsiteNavbar() {
  return (
    <header>
      <nav className='flex h-[8rem] z-[300] relative w-full items-center justify-between bg-black px-[4.8rem] py-[1.6rem] backdrop-blur-[1.4rem] nav-container'>
        <Link href={'/'} passHref>
          <Logo />
        </Link>

        {/* <NavLink /> */}

        <Link href={AppLinks.login} passHref>
          <LoginButton />
        </Link>
        {/* <LoginButtonWIthArrow /> */}
      </nav>
      <NavLink />
    </header>
  );
}

const NavLink = () => {
  const [currentEle, setCurrentEle] = useState<HTMLElement | string | any>('#home');
  const [selectedID, setSelectedId] = useState('#home');
  useEffect(() => {
    // gsap.to('.menu-container', {
    //   backgroundColor: '#000',
    //   duration: 1,
    //   scrollTrigger: '#home',
    // });

    const navLinkEl = document.querySelectorAll('.nav-link');
    const sectionEl = document.querySelectorAll('.section');
    const menuContainer = document.querySelector('.menu-container');
    const navContainer = document.querySelector('.nav-container');
    const loginBtn = document.querySelector('.login-btn-nav');

    let currentSection = 'home';

    function handleScroll() {
      if (navContainer && navContainer?.getBoundingClientRect()?.top < -52) {
        menuContainer?.classList?.add(...['!bg-black', '!left-[35%]']);
        loginBtn?.classList?.add('active');
      } else {
        menuContainer?.classList?.remove(...['!bg-black', '!left-[35%]']);
        loginBtn?.classList?.remove('active');
      }

      sectionEl.forEach((ele: any, index: number) => {
        ele.classList.add(...['sticky', 'top-0', `z-[${index + 1 * 10}]`]);
        // if (window?.scrollY >= ele.getBoundingClientRect().y) {
        //   currentSection = ele.id;
        // }
        const rect = ele.getBoundingClientRect();
        if (rect?.top < window?.innerHeight / 2 && rect?.bottom > window?.innerHeight / 2) {
          currentSection = ele.id;
          return;
        }
      });
      navLinkEl.forEach((navEle: any) => {
        // if ((navEle.id === 'home' && currentSection === 'home2') || currentSection === 'home3') {
        //   navEle.classList.add('active');
        // }
        if (navEle.id.includes(currentSection)) {
          document?.querySelector('.active')?.classList.remove('active');
          navEle.classList.add('active');
        }
      });
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const currentEleID: any = document.querySelector(selectedID);
    setCurrentEle(currentEleID);
  }, [selectedID]);

  return (
    <div className='hidden  lg:flex menu-container w-max !fixed z-[1000] left-[34%] transition-colors duration-500 ease-in top-[1.6rem] bg-transparent h-[4.8rem] items-center justify-start gap-[.2rem] rounded-full border border-dark-gray-30 p-[.8rem]'>
      {NavList?.map((val: { link: string; label: string }, index: number) => {
        return (
          <div key={index}>
            {/* <Link
              href={val?.link}
              passHref
              className={`nav-link ${
                index === 0 ? 'active' : ''
              } flex h-[3.2rem] items-center justify-center rounded-full px-[1.2rem] py-[.4rem] text-dark-gray-80 text-body-02 hover:bg-white hover:text-black`}
            >
              {val?.label}
            </Link> */}
            <button
              id={`nav-${val?.link}`}
              onMouseEnter={() => {
                setSelectedId(val?.link);
              }}
              onClick={() => {
                scrollTop(currentEle, selectedID, index);
              }}
              className={`nav-link ${
                index === 0 ? 'active' : ''
              } flex h-[3.2rem] whitespace-nowrap items-center justify-center rounded-full px-[1.2rem] py-[.4rem] text-dark-gray-80 text-body-02 hover:bg-white hover:text-black transition-all duration-500 ease-in-out`}
            >
              {val?.label}
            </button>
          </div>
        );
      })}

      <div className='login-btn-nav  '>
        <Link href={AppLinks.login} className={`w-0 h-0 whitespace-nowrap`}>
          <span className='hidden whitespace-nowrap'>Log in</span>
        </Link>
      </div>
    </div>
  );
};
