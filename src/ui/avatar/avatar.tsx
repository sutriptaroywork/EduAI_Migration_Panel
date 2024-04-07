import Image from 'next/image';

interface AvatarProps {
  noImage?: boolean;
  label: string;
  hideLabel?: boolean;
  src?: string;
  size?: 'large' | 'medium' | 'small' | 'extra small' | 'extra large';
  rounded?: boolean;
  alt: string;
  id?: string;
}

export function Avatar({
  noImage,
  label,
  hideLabel = false,
  id,
  alt,
  src = '',
  size = 'medium',
  rounded = false,
}: AvatarProps) {
  // const colors = [
  //   'bg-red-500',
  //   'bg-blue-500',
  //   'bg-green-500',
  //   'bg-yellow-500',
  //   // Add more color classes as needed
  // ];
  // const ramdomColor = colors[Math.floor(Math.random() * colors.length)];
  // console.log(colors[Math.floor(Math.random() * colors.length)]);
  const boxClasses = {
    size: {
      'extra large': 'h-[8rem] w-[8rem]  ',
      large: 'w-[4.8rem] h-[4.8rem] ',
      medium: 'w-[4rem] h-[4rem] ',
      small: 'h-[3.2rem] w-[3.2rem] ',
      'extra small': 'h-[2.4rem] w-[2.4rem] ',
    },
  };

  const imageClasses = {
    size: {
      'extra large': 80,
      large: 48,
      medium: 40,
      small: 32,
      'extra small': 24,
    },
  };

  const labelClasess = {
    size: {
      'extra large': 'text-reg-body',
      large: 'text-reg-body',
      medium: 'text-reg-body',
      small: 'text-reg-body-sm',
      'extra small': 'text-reg-body-xs',
    },
  };

  if (noImage) {
    const userName = label.split(' ');
    const firstName = userName[0][0] ?? '^_^';
    const lastName = userName[userName.length - 1][0] ?? '';
    return (
      <>
        <div
          className={` text-reg-body-01 relative flex items-center justify-center bg-gray-60 text-white
    ${boxClasses.size[size]}
    ${rounded ? 'rounded-full' : 'rounded-[0.4rem]'} 
    `}
        >
          <span
            className={` ${labelClasess.size[size]} flex items-center justify-center uppercase`}
          >
            {userName.length === 1 ? firstName : firstName + lastName}
          </span>
        </div>
      </>
    );
  }

  return (
    <div className='flex items-center justify-center'>
      <div className={`${!hideLabel ? 'mr-[0.8rem]' : ''}`}>
        <Image
          id={id}
          className={`
          mr-[2.8rem] inline object-cover
          ${imageClasses.size[size]}
          ${rounded ? 'rounded-full' : 'rounded-[0.4rem]'}
          `}
          width={imageClasses.size[size]}
          height={imageClasses.size[size]}
          src={src}
          alt={alt}
        />
      </div>
      {!hideLabel && (
        <label
          className={`${labelClasess.size[size]}  text-gray-70 dark:text-dark-gray-80`}
          htmlFor={id}
        >
          {label}
        </label>
      )}
    </div>
  );
}
