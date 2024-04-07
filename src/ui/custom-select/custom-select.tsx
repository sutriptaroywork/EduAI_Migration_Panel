/* eslint-disable @typescript-eslint/no-explicit-any */
import { Check, Chevron, Close } from '@/assets/icons';
import React, { useEffect, useRef, useState } from 'react';

/*
 * @Usage
 *
 *  const options = [
 *  { value: 'green', label: 'Green', ...},
 *  { value: 'blue', label: 'Blue', ...},
 *  { value: 'purple', label: 'Purple', ... },
 *  { value: 'grey', label: 'Grey', ... },
 *  ];
 *
 *
 * <CustomDropdown
 *    options={options}
 *    onChange={(value: any) => console.log(value)}
 *    placeHolder={'Lead generated'}
 *    className="border border-blue-60 bg-blue-10 text-blue-60"
 *    isMulti={true}
 *    size="small"
 *    isSearchable={true}
 * />
 */
interface DropdownProps<T extends { [a: string]: any }> {
  placeHolder?: string | React.ReactNode;
  options: ({ label: string; value: string } & T)[];
  isMulti?: boolean;
  isSearchable?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onChange: (a: any) => void;
  size?: 'small' | 'medium' | 'large';
  color?: 'red' | 'blue' | 'green' | 'yellow' | 'gray' | 'custom' | 'white';
  hasBorder?: boolean;
  optionWidth?: string;
  labelSize?: string;
  showHelper?: boolean;
  defaultValue?: string | number;
}

export function CustomSelect<T extends { [a: string]: any }>(props: DropdownProps<T>) {
  const {
    placeHolder = 'Select option',
    options,
    isMulti,
    isSearchable,
    onChange,
    className,
    style,
    size = 'medium',
    color = 'custom',
    hasBorder = false,
    labelSize,
    optionWidth = '',
    showHelper = true,
    defaultValue,
  } = props;

  const classes = {
    size: {
      small: 'py-[0.5rem]',
      medium: 'py-[0.7rem]',
      large: 'py-[1.1rem]',
    },
    colors: {
      red: `${
        hasBorder && 'border'
      } border-red-60 bg-red-10 dark:bg-red-100 text-red-60 dark:text-red-10`,
      blue: `${hasBorder && 'border'} border-blue-60 bg-blue-10 text-blue-60`,
      green: `${
        hasBorder && 'border'
      } border-green-60 bg-green-10 dark:bg-green-100 dark:text-green-10 text-green-60`,
      yellow: `${hasBorder && 'border'} border-yellow-60 bg-yellow-10 text-yellow-60`,
      gray: `${
        hasBorder && 'border'
      } border-gray-60 bg-gray-10 text-gray-60 dark:text-dark-gray-70 dark:bg-dark-gray-05`,
      white: `${
        hasBorder && 'border'
      } border-gray-20 dark:border-dark-gray-30 dark:bg-dark-gray-05 bg-white text-gray-60`,
      custom: '',
    },
  };

  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState<any>(isMulti ? [] : null);
  const [searchValue, setSearchValue] = useState('');
  const searchRef = useRef<any>();

  useEffect(() => {
    setSearchValue('');
    if (showMenu && searchRef.current) {
      searchRef.current.focus();
    }
  }, [showMenu]);

  useEffect(() => {
    const handler = () => setShowMenu(false);

    window.addEventListener('click', handler);
    return () => {
      window.removeEventListener('click', handler);
    };
  });
  const handleInputClick = (e: any) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const getDisplay = () => {
    if (!selectedValue || selectedValue.length === 0 || !defaultValue) {
      return <span className='whitespace-nowrap'>{placeHolder}</span>;
    }
    if (isMulti) {
      return (
        <div className='dropdown-tags flex flex-wrap gap-[0.5rem]'>
          {selectedValue?.map((option: any) => (
            <div
              key={option.value}
              className='dropdown-tag-item flex items-center justify-between rounded-[2px] bg-[#ddd] p-[2px] text-reg-body'
            >
              {option.label}
              <button
                type='button'
                onClick={e => onTagRemove(e, option)}
                className='dropdown-tag-close'
              >
                <Close width={16} height={16} />
              </button>
            </div>
          ))}
        </div>
      );
    }
    return (
      <span className={`${labelSize ? labelSize : 'whitespace-nowrap'}`}>
        {selectedValue?.label}
      </span>
      // <span className={`${labelSize ? labelSize : 'text-med-body'}`}>{placeHolder}</span>
    );
  };

  const removeOption = (option: any) => {
    return selectedValue.filter((o: any) => o.value !== option.value);
  };

  const onTagRemove = (e: any, option: any) => {
    e.stopPropagation();
    const newValue = removeOption(option);
    setSelectedValue(newValue);
    onChange(newValue);
  };

  const onItemClick = (option: any) => {
    let newValue;
    if (isMulti) {
      if (selectedValue.findIndex((o: any) => o.value === option.value) >= 0) {
        newValue = removeOption(option);
      } else {
        newValue = [...selectedValue, option];
      }
    } else {
      newValue = option;
    }
    setSelectedValue(newValue);
    onChange(newValue);
  };

  const isSelected = (option: any) => {
    if (isMulti) {
      return selectedValue?.filter((o: any) => o.value === option.value).length > 0;
    }

    if (!selectedValue) {
      return false;
    }

    return selectedValue.value === option.value;
  };

  const onSearch = (e: any) => {
    setSearchValue(e.target.value);
  };

  const getOptions = () => {
    if (!searchValue) {
      return options;
    }

    return options.filter(
      (option: any) => option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0,
    );
  };

  return (
    <div
      className={`${className} ${classes.colors[color]} dropdown-container relative cursor-pointer rounded-[4px] bg-gray-05 dark:bg-dark-gray-05`}
      style={style}
    >
      <button
        type='button'
        onClick={handleInputClick}
        className={`dropdown-input ${
          classes.size[size]
        } flex h-full w-full select-none items-center justify-between gap-[0.8rem] px-[0.8rem]  ${
          labelSize ? labelSize : 'text-med-body'
        }`}
      >
        <div className='capitalize'>{getDisplay()}</div>
        <div className=''>
          <div className=''>
            <Chevron
              width={16}
              height={16}
              className={`${showMenu ? 'rotate-180' : 'rotate-0'} ${
                classes.colors[color]
              } border-0 transition duration-100 ease-in-out `}
            />
          </div>
        </div>
      </button>
      {showMenu && (
        <div
          className={`${
            optionWidth ? optionWidth : 'w-full'
          } dropdown-menu absolute z-[200] max-h-[32rem] w-max translate-y-[0.4rem] overflow-y-auto rounded-[.8rem] border border-gray-20 bg-white p-[4px] shadow-medium dark:border-dark-gray-30 dark:bg-dark-gray-10`}
        >
          {isSearchable && (
            <div className='search-box'>
              <input
                onChange={onSearch}
                value={searchValue}
                ref={searchRef}
                className='bg-gray-10 px-[1.2rem] pb-[5px] pt-[6px]'
              />
            </div>
          )}
          {getOptions().map((option: any) => (
            <button
              type='button'
              onClick={() => onItemClick(option)}
              key={option.value}
              className={`dropdown-item flex w-full cursor-pointer items-center justify-between gap-[1.6rem] px-[1.2rem] pb-[5px] pt-[6px] text-gray-80 hover:bg-gray-10 dark:text-dark-gray-70 dark:hover:bg-dark-gray-20 ${
                (isSelected(option) || defaultValue === option?.value) &&
                'selected dark:bg-gray-08  bg-gray-10 text-blue-60 dark:text-blue-50'
              } rounded-[4px]`}
            >
              <p>
                <span className='whitespace-nowrap capitalize text-reg-body'>{option.label}</span>
                {showHelper && (
                  <span className='ml-[.8rem] text-gray-40 text-reg-body-sm dark:text-dark-gray-50'>
                    {option?.helper}
                  </span>
                )}
              </p>
              <Check
                width={16}
                height={16}
                className={`${
                  isSelected(option) || defaultValue === option?.value
                    ? 'block text-blue-60 dark:text-blue-50'
                    : 'hidden'
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
