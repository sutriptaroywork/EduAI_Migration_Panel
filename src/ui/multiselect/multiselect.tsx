import { Chevron } from '@/assets/icons';
import { useClickOutside } from '@/hooks/use-click-outside';
import { removeSpecialChar } from '@/utils/string-formatter';
import { useState } from 'react';

type RequiredOptions = { label: string; value: string };

type DynamicOptions<T> = T & RequiredOptions;

interface Props<T extends { [key: string]: string }> {
  onChange: (value: DynamicOptions<T>[]) => void;
  options: DynamicOptions<T>[];
  defaultValues?: DynamicOptions<T>[];
  placeholder: string;
  className?: string;
  customHeight?: string;
  position?: 'left' | 'right';
  placeHolderColor?: string;
  showHelper?: boolean;
}

export function MultiSelect<T extends { [key: string]: string }>(props: Props<T>) {
  const {
    onChange,
    options,
    defaultValues = [],
    placeholder = 'select options',
    className = '',
    customHeight = '',
    position = 'left',
    placeHolderColor,
    showHelper = true,
  } = props;

  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<any[]>(defaultValues ?? []);
  const [open, setOpen] = useState(false);
  const multiRef = useClickOutside(() => setOpen(false));

  function removeAll() {
    setSelected([]);
    onChange(selected);
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

  const [selectAll, setSelectAll] = useState(false);
  const handleOptionChange = (value: any, option: any) => {
    let newValue: (typeof options)[number][] = [];

    if (value === 'all') {
      newValue = selectAll ? [] : options.map(option => option);
      setSelectAll(!selectAll);
    } else {
      if (selected?.findIndex((o: any) => o.value === option.value) >= 0) {
        newValue = removeOption(option);
      } else {
        newValue = [...selected, option];
      }
      // setSelected(newValue);
      setSelectAll(false);
    }
    onChange(newValue);

    setSelected(newValue);
  };
  const isIndeterminate = selected?.length > 0 && selected?.length < options?.length;
  // console.log('selected', selected);
  return (
    <div
      className={` ${className} relative h-[4rem] w-full min-w-[16rem] rounded-[4px] border border-gray-30 bg-white dark:border-dark-gray-40 dark:bg-dark-gray-05`}
    >
      <div
        className={`flex h-full items-center justify-between gap-[0.8rem] px-[1.2rem] py-[0.8rem] `}
      >
        <div className='flex items-center gap-[0.8rem]'>
          {/* {selected.length > 0 ? (
            <Badge className='flex items-center gap-[0.4rem]'>
              <span>{selected.length}</span>
              <button onClick={() => removeAll()} type='button'>
                <Close width={12} height={12} />
              </button>
            </Badge>
          ) : (
            <Search width={16} height={16} className='text-gray-60 dark:text-dark-gray-70' />
          )} */}
          <p
            className={`text-med-body ${
              placeHolderColor ? placeHolderColor : 'text-gray-40 dark:text-dark-gray-50'
            }`}
          >
            {removeSpecialChar(placeholder)}
          </p>
        </div>
        <button onClick={triggerOptions} type='button'>
          <Chevron
            width={16}
            height={16}
            className={` ${
              open ? 'rotate-180 ' : ''
            } text-gray-60 transition duration-150 ease-in-out dark:text-dark-gray-70`}
          />
        </button>
      </div>
      {open && (
        <div
          ref={multiRef}
          className={`
           ${customHeight.length > 0 ? customHeight : 'max-h-[32rem]'} 
          absolute ${position === 'left' ? 'left-0' : 'right-0'}
           z-[999] mt-[0.8rem] flex  w-full min-w-[24rem] flex-col gap-[0.2rem] overflow-y-auto rounded-[8px] border border-gray-20 bg-white p-[0.4rem] shadow-medium dark:border-dark-gray-30 dark:bg-dark-gray-05`}
        >
          <div>
            <input
              type='text'
              className='!h-[4rem]'
              placeholder='Search'
              onChange={e => {
                setSearch(e.target.value);
              }}
            />
          </div>
          {/* toggle-all */}
          <div className='flex items-center gap-[0.8rem] rounded-[4px] px-[1.2rem] py-[0.8rem]'>
            <input
              id='toggle-all'
              type='checkbox'
              checked={selectAll}
              onChange={() => handleOptionChange('all', [])}
              ref={el => {
                if (el) {
                  el.indeterminate = isIndeterminate;
                }
              }}
            />
            <label
              className='cursor-pointer text-gray-80 text-med-body dark:text-dark-gray-90'
              htmlFor={'toggle-all'}
            >
              Select All
            </label>
          </div>
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
                    // defaultChecked={selected.some((o: any) => o.value === option.value)}
                    // onChange={e => {
                    //   onItemClick(option);
                    // }}
                    checked={selected.some((o: any) => o.value === option.value)}
                    value={option.value}
                    id={option.value}
                    onChange={() => handleOptionChange(option?.value, option)}
                  />
                  <label
                    className='cursor-pointer capitalize text-gray-80 text-med-body dark:text-dark-gray-90'
                    htmlFor={option.value}
                  >
                    {removeSpecialChar(option?.label)}
                    {showHelper && (
                      <span className='ml-[.8rem] text-gray-40 text-reg-body-sm dark:text-dark-gray-50'>
                        {option?.helper}
                      </span>
                    )}
                  </label>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}
