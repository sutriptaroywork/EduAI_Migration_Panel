import { Fragment } from 'react';

export function StarCover() {
  return (
    <div className='absolute overflow-hidden inset-y-[4rem] inset-x-[2rem]  w-full h-full'>
      <div className='star-container relative w-full h-full flex justify-center items-center'>
        {Array.from({ length: 2 }, (_, index) => {
          return (
            <Fragment key={index}>
              <div
                className={`star star${index + 1}  ${
                  process.env.NODE_ENV === 'production'
                    ? `bg-[url('/' + ${process.env.REVERSE_PROXY_BASE_URL} + '/images/Stars.png')]`
                    : 'bg-[url("/images/Stars.png")]'
                }
                `}
                // className={`bg-white star star${index + 1} absolute top-[${index + 1 * 2}%] left-[${
                //   index + 1 * 4
                // }%]`}
              />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
