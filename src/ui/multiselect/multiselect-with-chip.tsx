/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Chevron, Close } from '@/assets/icons';
import { useClickOutside } from '@/hooks/use-click-outside';
import { removeSpecialChar } from '@/utils/string-formatter';
import { Dispatch, SetStateAction, useState } from 'react';
import { Badge } from '../badge';

type RequiredOptions = { label: string; value: string };

type DynamicOptions<T> = T & RequiredOptions;

interface Props<T extends { [key: string]: string }> {
  onChange: (value: DynamicOptions<T>[]) => void;
  options: DynamicOptions<T>[];
  defaultValues?: DynamicOptions<T>[];
  placeholder: string;
  className?: string;
  customHeight?: string;
  position?: 'right' | 'left';
  selected: DynamicOptions<T>[];
  setSelected: Dispatch<SetStateAction<DynamicOptions<T>[]>>;
}

export function MultiSelectWithChip<T extends { [key: string]: string }>(props: Props<T>) {
  const {
    onChange,
    options,
    defaultValues = [],
    placeholder = 'select options',
    className = '',
    customHeight = '',
    position = 'left',
    selected = [],
    setSelected,
  } = props;

  const [search, setSearch] = useState('');

  //   const [selected, setSelected] = useState<(typeof options)[number][]>(defaultValues);
  const [open, setOpen] = useState(false);
  const multiRef = useClickOutside(() => setOpen(false));

  function removeAll() {
    setSelected([]);
    // onChange(selected);
  }

  function removeOption(option: (typeof options)[number]) {
    return selected.filter((o: any) => o.value !== option.value);
  }

  function triggerOptions() {
    setOpen(prev => !prev);
  }

  function onItemClick(option: (typeof options)[number]) {
    let newValue: (typeof options)[number][] = [];
    if (selected.findIndex((o: any) => o.value === option.value) >= 0) {
      newValue = removeOption(option);
    } else {
      newValue = [...selected, option];
    }
    setSelected(newValue);
    onChange(newValue);
  }

  return (
    <div
      className={` ${className} relative h-[4rem] w-full min-w-[16rem] rounded-[4px] border border-gray-30 bg-white dark:border-dark-gray-40 dark:bg-dark-gray-05`}
    >
      <button
        className={`flex h-full w-full items-center justify-between gap-[0.8rem] px-[1.2rem] py-[0.8rem] `}
        onClick={triggerOptions}
      >
        <div className='flex items-center gap-[0.8rem]'>
          {
            selected.length > 0 ? (
              <Badge className='flex items-center gap-[0.4rem]'>
                <span>{selected.length}</span>
                <button onClick={() => removeAll()} type='button'>
                  <Close width={12} height={12} />
                </button>
              </Badge>
            ) : null
            // <Search width={16} height={16} className='text-gray-60 dark:text-dark-gray-70' />
          }
          <p className='text-gray-40 text-reg-body dark:text-dark-gray-50'>
            {removeSpecialChar(placeholder)}
          </p>
        </div>
        <button type='button'>
          <Chevron
            width={16}
            height={16}
            className={` ${
              open ? 'rotate-180 ' : ''
            } stroke-gray-60 transition duration-150 ease-in-out dark:stroke-dark-gray-70`}
          />
        </button>
      </button>
      {open && (
        <div
          ref={multiRef}
          className={`
           ${customHeight.length > 0 ? customHeight : 'max-h-[32rem]'} 
          absolute ${position === 'left' ? 'left-0' : 'right-0'}
          z-[999] mt-[0.8rem] flex  w-full min-w-[24rem] flex-col gap-[0.2rem] overflow-y-auto rounded-[8px] border border-gray-20 bg-white p-[0.4rem] shadow-medium dark:border-dark-gray-30 dark:bg-dark-gray-05`}
        >
          <div className='relative'>
            {/* <Search
              width={16}
              height={16}
              className='absolute left-[1.2rem] top-[1.2rem] text-gray-60 dark:text-dark-gray-70 [&>input]:focus:text-red-60 [&>input]:active:text-red-60'
            /> */}
            <input
              type='text'
              className='!h-[4rem] w-full pl-[2.8rem] placeholder:pl-[2.8rem]'
              placeholder='Search'
              onChange={e => {
                setSearch(e.target.value);
              }}
            />
          </div>

          <div className='flex items-center justify-start gap-[.8rem] p-[.8rem]'>
            {selected?.map((val: any, index: number) => {
              return (
                <Badge
                  variant='info'
                  key={index}
                  className='flex items-center justify-between rounded-[.8rem] px-[.8rem] py-[.6rem] !text-med-body'
                >
                  {val?.label}{' '}
                  <Close
                    width={16}
                    height={16}
                    onClick={e => {
                      onItemClick(val);
                    }}
                  />
                </Badge>
              );
            })}
          </div>

          {/* <div className='flex items-center gap-[0.8rem] rounded-[4px] py-[0.8rem] px-[1.2rem]'>
            <input
              type='checkbox'
              defaultChecked={selected.length === options.length}
              value={'toggle-all'}
              onChange={e => {
                setSelected(selected.length === 0 ? options : []);
                onChange(selected.length === 0 ? options : []);
                // setSelected(selected.length === 0 ? options : []);
                // onChange(selected.length === 0 ? options : []);
              }}
            />
            <label
              className='text-gray-80 text-med-body dark:text-dark-gray-90'
              htmlFor={'toggle-all'}
            >
              Toggle All
            </label>
          </div> */}
          {options
            ?.filter((item: any) => {
              if (search.length === 0) {
                return true;
              }
              return removeSpecialChar(item.label).toLowerCase().includes(search.toLowerCase());
            })
            ?.map((option, index) => {
              return (
                <div
                  key={index}
                  className={`${
                    selected.some((o: any) => o.value === option.value)
                      ? 'bg-gray-10 dark:bg-dark-gray-20'
                      : ''
                  } flex items-center gap-[0.8rem] rounded-[4px] px-[1.2rem] py-[0.8rem]`}
                >
                  <input
                    type='checkbox'
                    defaultChecked={selected.some((o: any) => o.value === option.value)}
                    value={option.value}
                    id={option.value}
                    onChange={e => {
                      onItemClick(option);
                    }}
                  />
                  <label
                    className='flex cursor-pointer items-center justify-start gap-[.8rem] whitespace-nowrap capitalize text-gray-80 text-reg-body dark:text-dark-gray-90'
                    htmlFor={option.value}
                  >
                    {removeSpecialChar(option.label)}
                    <span className='text-gray-40 text-reg-body-sm dark:text-dark-gray-50'>
                      {option?.email}
                    </span>
                  </label>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

//   <MultiSelectWithChip
//     onChange={val => {
//       setClientCode(val);
//     }}
//     placeholder='From'
//     options={formattedClient}
//     className='w-[12rem]'
//     selected={clientCode}
//     setSelected={setClientCode}
//   />
//   <div className='justify-strat flex flex-wrap items-center gap-[.8rem]'>
//     {clientCode?.map((val: any, index: number) => {
//       return (
//         <Badge
//           variant='info'
//           key={index}
//           className='flex items-center justify-between rounded-[.8rem] px-[.8rem] py-[.6rem] !text-med-body'
//         >
//           {val?.label}{' '}
//           <Close
//             width={16}
//             height={16}
//             onClick={e => {
//               onItemClick(val);
//             }}
//           />
//         </Badge>
//       );
//     })}
//   </div>
