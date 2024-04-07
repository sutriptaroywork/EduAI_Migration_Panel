import Link from 'next/link';
import { Button } from '../button';

interface ErrorPageProp {
  heading?: string;
  description?: string;
  variant: 'forbidden' | '500' | '404';
}

const variants = {
  404: `w-[30.3rem] h-[24.8rem] bg-[url('/images/error-images/404-light.svg')]  dark:bg-[url("/images/error-images/404-dark.svg")]`,
  forbidden: `h-[16rem] w-[22rem] bg-[url('/images/error-images/forbidden.svg')]  dark:bg-[url("/images/error-images/forbidden-dark.svg")]`,
  500: ` w-[22.8rem] h-[22.8rem] bg-[url('/images/error-images/500-light.svg')]  dark:bg-[url("/images/error-images/500-dark.svg")]`,
};
const content = {
  404: {
    heading: 'Error 404, Page not found',
    des: 'The requested URL or the page you are looking for was not found on the server.',
  },
  forbidden: {
    heading: 'Access denied.',
    des: 'You are not authorised to access this page. Please contact your admin to request access.',
  },
  500: {
    heading: 'Error 500, Internal server error.',
    des: 'The server encountered an error and was unable to complete your request. Please try again later. If the problem persists, please report your problem at',
  },
};

export function ErrorPage(props: ErrorPageProp) {
  const { heading, description, variant } = props;

  return (
    <div className={`flex h-[100%] items-center justify-center `}>
      <div className=' flex flex-col items-center'>
        <div className={` bg-contain bg-no-repeat ${variants[variant]} `}></div>
        <h5 className=' mt-[2.4rem] max-w-[40rem] text-center text-gray-100 text-bold-sub-01 dark:text-white'>
          {heading ? heading : content[variant].heading}
        </h5>

        <p className='  mt-[.8rem] mb-[2.4rem] w-[40rem] max-w-[40rem] text-center text-gray-60 text-reg-body dark:text-dark-gray-70'>
          {description ? description : content[variant].des}
        </p>

        {variant === '404' ? (
          <Link href='/' passHref>
            <Button className='max-w-max'>Go back</Button>
          </Link>
        ) : (
          <Link href='mailto:support@midasfintechsolutions.com' passHref>
            <Button className='max-w-max'>Contact admin</Button>
          </Link>
        )}
      </div>
    </div>
  );
}
