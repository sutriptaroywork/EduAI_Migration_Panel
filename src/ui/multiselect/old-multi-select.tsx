/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Chevron } from '@/assets/icons';
import {
  ChangeEventHandler,
  forwardRef,
  Ref,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { useClickOutside } from '../../hooks/use-click-outside';

interface DropdownProps<T extends { [a: string]: string }> {
  dataItems: ({ label: string; id: string } & T)[];
  selectedItems?: ({ label: string; id: string } & T)[];
  onChange?: unknown;
  className?: string;
  selectAll?: boolean;
  defaultItems?: string[];
  size?: 'small' | 'medium' | 'large';
  menuLabel?: string;
}

function MultiSelectWithRef<T extends { [a: string]: string }>(
  props: DropdownProps<T>,
  ref: Ref<HTMLInputElement>,
) {
  const {
    dataItems,
    defaultItems,
    onChange,
    selectedItems,
    className,
    menuLabel = '',
    // selectAll,
    size = 'medium',
  } = props;

  const multiSelectionRef = useRef<HTMLInputElement>(null);
  const cachedOnChange = useRef(onChange).current;

  const [open, setOpen] = useState(false);
  const [firstRender, setFirstRender] = useState(true);
  const [selected, setSelected] = useState<(typeof dataItems)[number][]>([]);

  const dropdownRef = useClickOutside(() => setOpen(false));

  const classes = {
    size: {
      small: 'h-[3.2rem]',
      medium: 'h-[4rem]',
      large: 'h-[4.8rem]',
    },
  };

  useImperativeHandle(
    ref,
    () => ({
      ...(multiSelectionRef.current ?? document.createElement('input')),
      value: selected as any,
    }),
    [selected],
  );

  useEffect(() => {
    if (
      !!selectedItems &&
      (selectedItems.length !== 0 || (selectedItems.length === 0 && selected.length !== 0))
    ) {
      setSelected(selectedItems);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItems]);

  useEffect(() => {
    if (
      typeof cachedOnChange === 'function' &&
      (selected.length >= 0 ||
        (!!selectedItems && selectedItems.length === 0 && selected.length >= 0))
    ) {
      cachedOnChange(selected);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cachedOnChange, selected]);

  useEffect(() => {
    if (defaultItems && firstRender === true) {
      const defaultArrayItems: any = [];
      dataItems.map(item => (defaultItems.includes(item.id) ? defaultArrayItems.push(item) : null));
      setSelected(defaultArrayItems);
      setFirstRender(false);
    }
  }, [defaultItems, firstRender, dataItems]);

  const handleChange = useCallback(function handleChange(selectedItem: (typeof dataItems)[number]) {
    setSelected(function (cur) {
      const curSelected = [...cur];

      const idSelectedItem = curSelected.findIndex(item => item.id === selectedItem.id);

      // idSelectedItem is -1 when an item is selected
      // the index of idSelectedItem increases when items are deselected from the list
      if (idSelectedItem !== -1) {
        curSelected.splice(idSelectedItem, 1);
      } else {
        curSelected.push(selectedItem);
      }

      return curSelected;
    });
  }, []);

  return (
    <div
      ref={multiSelectionRef}
      tabIndex={0}
      onClick={() => setOpen(state => !state)}
      className={` 
      ${className}
      ${classes.size[size]}
      border-gray-02
        text-body-03
        hover:bg-gray-02 focus:ring-blue-06
        dark:border-gray-07 dark:hover:bg-gray-07 relative z-[999] my-0 w-[20rem] cursor-pointer select-none rounded-[2px] border-[1px] p-[1rem] after:absolute after:top-1/2 after:right-[10px]
        after:h-0
        after:w-0 
        after:border-[0.6rem]
        after:border-transparent 
        after:content-[''] focus:border-[1px]
        focus:outline-none         
        focus:ring-2 
        focus:ring-offset-1 

    `}
    >
      <div ref={dropdownRef}>
        <span className='flex items-center justify-between'>
          {menuLabel ? menuLabel : `${selected.length} Selected`}
          <Chevron
            width={16}
            height={16}
            className={`${open ? 'rotate-180 transition-all ease-in' : 'transition-all ease-in'}`}
          />
        </span>

        <ul
          // ref={dropdownRef}
          onClick={e => e.stopPropagation()}
          className={`checkbox-dropdown-list  border-gray-02
          shadow-soft-02 dark:bg-gray-09 pointer-events-none absolute inset-x-[-1px] top-full z-50 m-0 mt-1 max-h-[calc(50vh-10rem)] list-none
          overflow-y-auto overflow-x-hidden rounded-[1px] border-[1px] border-inherit bg-white p-0${
            open ? 'pointer-events-auto opacity-100' : 'opacity-0'
          }
        `}
        >
          {defaultItems && defaultItems.length > 0 && firstRender === true ? (
            <>
              {dataItems.map(function (items) {
                const { id, label } = items;
                return (
                  <Items
                    key={id}
                    data={label}
                    // selectAll={label.toLowerCase() === 'select all' ? true : false}
                    onChange={handleChange.bind(null, items)}
                    defaultItems={defaultItems}
                    // selected={!!selected.find(item => item.id ===id)}
                    selected={defaultItems.includes(id)}
                  />
                );
              })}
            </>
          ) : (
            dataItems.map(function (items) {
              const { id, label } = items;
              return (
                <Items
                  key={id}
                  data={label}
                  onChange={handleChange.bind(null, items)}
                  selected={!!selected.find(item => item.id === id)}
                />
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
}

interface ItemProps {
  data: string;
  onChange: ChangeEventHandler;
  selected: boolean;
  selectAll?: boolean;
  defaultItems?: string[];
}

export const MultiSelect = forwardRef(MultiSelectWithRef);

export const Items = ({ data: item, selected, onChange }: ItemProps) => {
  return (
    <li>
      <label className='capitalize-first hover:bg-gray-01 dark:hover:bg-gray-08 my-[0.4rem] block cursor-pointer p-[1rem]'>
        <input
          type='checkbox'
          checked={selected}
          onChange={onChange}
          className='mr-2 h-[1.4rem] w-[1.4rem] '
        />
        {item}
      </label>
    </li>
  );
};
