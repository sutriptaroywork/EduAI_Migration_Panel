import Tippy from '@tippyjs/react';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';

import { Logo, Logout } from '@/assets/icons';
import { sessionLogout } from '@/lib/i-logout';
import { Button, Modal } from '@/ui';
import { useUserSession } from '@store/userSession';

export function LoggedInNavBar() {
  const [openLogoutModal, setOpenLogoutModal] = useState(false);
  const { userSession } = useUserSession();

  const [username, setUsername] = useState(userSession?.name);

  useEffect(() => {
    setUsername(localStorage.getItem('name'));
  }, []);

  const handleModal = () => {
    setOpenLogoutModal(true);
  };

  return (
    <Fragment>
      <nav className='fixed top-0 z-[200] flex h-[6.4rem] w-[100%] items-center justify-between border-b-[1px] border-gray-20 bg-white px-[3.2rem] py-[1.6rem]  '>
        <div className='flex items-center justify-start gap-[0.8rem]'>
          <Link
            href='/dashboard'
            passHref
            className='flex h-full w-[11.3rem] items-center text-primary-60 dark:text-primary-50 '
          >
            <Logo />
          </Link>
        </div>

        <div className='relative flex items-center justify-start gap-[.8rem]'>
          {/* <Badge variant='danger'>Credentials will expire in 3 days</Badge> */}
          <p className='flex items-center justify-start gap-[.4rem] text-gray-80 text-sub-02'>
            Welcome{' '}
            <span className='text-body-02'>
              {username}
              {/* {userSession?.name ?? localStorage.getItem('name')} */}
            </span>
          </p>
          <Tippy content={'Logout'} placement='bottom' arrow={false} className='tippy'>
            <Button variant='ghost' onClick={() => handleModal()}>
              <Logout />
            </Button>
          </Tippy>
          {/* <div className='ml-[1rem]'>
              {' '}
              <MyProfile />
            </div> */}
        </div>
        <Modal
          open={openLogoutModal}
          handleClose={() => setOpenLogoutModal(!openLogoutModal)}
          variant='small'
          title={'Confirm Logout'}
          description={'Are you sure want to log out?'}
          onConfirm={async () => {
            // console.log('logout');
            await sessionLogout();
          }}
        />
      </nav>
    </Fragment>
  );
}

export const LoggedOutNavBar = () => {
  return (
    <nav className='fixed  top-0 z-[200] flex h-[6.4rem] w-[100%] items-center justify-between border-b border-gray-20 bg-white px-[3.2rem] '>
      <Link
        href='/dashboard'
        className=' flex h-full w-[11.3rem] items-center text-primary-60 dark:text-primary-50 '
      >
        <Logo />
      </Link>
    </nav>
  );
};
