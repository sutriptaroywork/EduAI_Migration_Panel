import { Close, Search } from '@/assets/icons';
import { Button } from '@/ui';
import { Fragment, useEffect, useRef, useState } from 'react';

interface SearchBoxProp {
  filter: string;
  setFilter: (filterValue: string) => void;
}

export function SearchBox(props: SearchBoxProp) {
  const { filter, setFilter } = props;

  const inputRef = useRef<HTMLInputElement | null>(null);

  const [showSearchBox, setShowSearchBox] = useState(false);

  let divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // if (window.innerWidth <= 768) {
    //   setShowSearchBox(true);
    // }

    let handler = (e: any) => {
      if (!divRef.current?.contains(e.target) && (filter === '' || filter === undefined)) {
        setShowSearchBox(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, [filter]);

  useEffect(() => {
    if (showSearchBox) {
      inputRef.current?.focus();
    }
  }, [showSearchBox]);

  return (
    <Fragment>
      <div
        ref={divRef}
        className={`${
          showSearchBox ? 'w-[32rem]' : 'w-[4rem] '
        } relative flex h-[4rem] cursor-pointer items-center justify-center rounded-[4px] border-0  border-gray-30 bg-white  dark:border-dark-gray-30 dark:bg-dark-gray-10 dark:text-dark-gray-30`}
      >
        {showSearchBox ? (
          <Search
            width={16}
            height={16}
            className={`${
              showSearchBox ? 'absolute left-[1.2rem]' : null
            } duration-5000   !text-gray-60 transition-all ease-linear dark:!text-dark-gray-70`}
          />
        ) : (
          <Button
            onlyIcon
            variant='ghost'
            size='large'
            className='!h-[4rem]'
            onClick={() => {
              setShowSearchBox(true);
            }}
          >
            <Search width={16} height={16} className=' !text-gray-60 dark:!text-dark-gray-70' />
          </Button>
        )}
        <input
          ref={inputRef}
          type='text'
          placeholder='search...'
          // eslint-disable-next-line jsx-a11y/no-autofocus
          value={filter || ''}
          onChange={e => setFilter(e.target.value)}
          spellCheck='false'
          className={`${showSearchBox ? 'block w-[32rem]' : 'hidden'}  h-[4rem] !pl-[4rem]  `}
        />
        <Close
          width={16}
          height={16}
          onClick={() => {
            setFilter('');
            setShowSearchBox(false);
          }}
          className={`${
            showSearchBox ? 'absolute right-[1.5rem] block' : 'hidden'
          } text-gray-60 dark:text-dark-gray-70`}
        />
      </div>
    </Fragment>
  );
}
