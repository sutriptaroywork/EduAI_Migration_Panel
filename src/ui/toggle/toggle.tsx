import { Switch } from '@headlessui/react';

interface ToggleProps {
  enabled: boolean;
  onChange: (value: boolean) => void;
  size?: 'small' | 'medium' | 'large';
}

/**
 * @function Toggle
 *
 *@example
 * const Example = ()=>{
 *   const [checked, setChecked] = useState(false);
 *   return(
 *     <Toggle enabled={checked} onChange={() => setChecked(!checked)} />
 *   )
 * }
 *
 */

export function Toggle(props: ToggleProps) {
  const {
    enabled,
    onChange,
    // size = 'medium'
  } = props;
  // const [enabled, setEnabled] = useState(false);

  // const classes = {
  //   size: {
  //     small: '',
  //     medium: '',
  //     large: '',
  //   },
  // };

  return (
    <Switch
      checked={enabled}
      onChange={(value: any) => onChange(value)}
      className={classNames(
        enabled ? 'bg-primary-60' : 'bg-gray-20',
        'relative inline-flex h-[2rem] w-[3.6rem] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-60 focus:ring-offset-2',
      )}
    >
      <span className='!sr-only'>Use setting</span>
      <span
        aria-hidden='true'
        className={classNames(
          enabled ? 'translate-x-6' : 'translate-x-0',
          'pointer-events-none inline-block h-[1.6rem] w-[1.6rem] transform rounded-full bg-white shadow-medium ring-0 transition duration-200 ease-in-out',
        )}
      />
    </Switch>
  );
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

// LARGE SIZE
//
// return (
//   <Switch
//     checked={enabled}
//     onChange={() => onChange()}
//     className={`
//     relative inline-flex h-[32px] w-[64px] flex-shrink-0 cursor-pointer rounded-full  border-[2px] border-transparent border-gray-05 transition-colors duration-200 ease-in-out focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-06 focus:ring-offset-1
//     ${
//       enabled
//         ? 'bg-blue-06 hover:bg-blue-07 active:bg-blue-08 disabled:bg-gray-02'
//         : 'bg-transparent hover:bg-gray-01 active:bg-gray-02 disabled:bg-transparent'
//     }
//         `}
//   >
//     <span className="sr-only">Use setting</span>
//     <span
//       aria-hidden="true"
//       className={`
//       pointer-events-none inline-block h-[28px] w-[28px] transform rounded-full shadow ring-0 transition duration-200 ease-in-out
//       ${
//         enabled
//           ? 'translate-x-[33px] bg-white disabled:bg-gray-02 '
//           : '-translate-x-0 bg-gray-07'
//       }
//       `}
//     />
//   </Switch>
// );
