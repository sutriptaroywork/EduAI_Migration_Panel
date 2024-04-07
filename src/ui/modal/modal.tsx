/* eslint-disable @typescript-eslint/no-empty-function */
import { Close } from '@/assets/icons';
import { StatusIndicator } from '@/shared/field-indicators/status-indicator';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, ReactNode, SVGProps } from 'react';
import { Button } from '../button';

/*
 * @usage
 *
 * ```tsx
 *
 * const [open, setOpen] = useState(false);
 * return (
 *
 * <Modal
 *   title='Modal title'
 *   variant='small'
 *   description={
 *     'Modal description'
 *   }
 *   open={open}
 *   handleClose={() => setOpen(false)}
 *   cancelCallback={() => console.log('cancel')}
 *   confirmCallback={() => console.log('confirm')}
 * >
 *   <div className='h-full w-full bg-red-40'>Child Components go here</div>
 * </Modal>
 * );
 * ```
 */

const modalTypeColor = {
  info: 'bg-primary-10 text-primary-60 ',
  success: 'bg-green-10 text-green-60',
  warning: 'bg-orange-05 text-orange-70 ',
  error: 'bg-red-05 text-red-60 ',
};
const btnColor = {
  error:
    'bg-red-60 hover:bg-red-50 active:bg-red-70 text-white dark:bg-red-50 dark:hover:bg-red-60 dark:active:bg-red-70 disabled:bg-gray-20 disabled:text-gray-40 dark:disabled:bg-dark-gray-30 dark:disabled:text-dark-gray-50',
};
interface ModalProps {
  children?: ReactNode;
  type?: 'success' | 'error' | 'warning' | 'info';
  customTitle?: ReactNode;
  title?: ReactNode;
  variant?: 'small' | 'medium' | 'large' | 'extraLarge';
  resetPosition?: boolean;
  overlayColor?: string;
  open: boolean;
  handleClose: () => void;
  overFlow?: boolean;
  description?: ReactNode;
  customFooter?: ReactNode;
  onCancel?: () => void;
  onConfirm?: () => void;
  icon?: ReactNode;
  otherBtn?: ReactNode;
  hasFooter?: boolean;
  disableOutsideClick?: boolean;
  headerWithoutIcon?: boolean;
}

export function Modal({
  title = '',
  disableOutsideClick = false,
  type = 'info',
  handleClose,
  open,
  children,
  resetPosition = false,
  variant = 'medium',
  overFlow = false,
  description,
  customFooter = undefined,
  customTitle = undefined,
  onCancel: cancelCallback = () => {},
  onConfirm: confirmCallback = () => {},
  icon,
  otherBtn,
  hasFooter = true,
  headerWithoutIcon = false,
}: ModalProps) {
  const classes = {
    size: {
      small: 'w-[36rem]',
      medium: 'w-[48rem]',
      large: 'w-[50rem]',
      extraLarge: 'w-[64rem]',
    },
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        static
        className='fixed inset-0 z-[300] overflow-y-auto'
        open={open}
        onClose={() => {
          disableOutsideClick ? null : handleClose();
        }}
      >
        <div className='flex  min-h-screen items-center justify-center overflow-y-auto px-4 pb-20 pt-4 text-center sm:block sm:p-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay
              className={`fixed inset-0 bg-gray-100 bg-opacity-[48%] transition-opacity`}
            />
          </Transition.Child>
          {/* This element is to trick the browser into centering the modal contents. */}
          {resetPosition ? null : (
            <span className='hidden sm:inline-block sm:h-screen sm:align-middle' aria-hidden='true'>
              &#8203;
            </span>
          )}

          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300 transition-all'
            // enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            // enterTo='opacity-100 translate-y-0 sm:scale-100'
            // leave='ease-in duration-200'
            // leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            // leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-4 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div
              id='modal_container'
              className={`
             inline-block max-h-[75vh] w-[36rem] overflow-hidden overflow-y-auto rounded-[8px] border  border-gray-20 bg-white  text-left align-bottom shadow-xl  transition-all dark:border-dark-gray-20 dark:bg-white  sm:align-middle ${classes.size[variant]} `}
            >
              {headerWithoutIcon ? (
                <div className='flex items-center justify-between p-[2.4rem] print:hidden'>
                  {customTitle && customTitle}
                  <Button
                    onlyIcon
                    variant='ghost-light'
                    onClick={() => handleClose()}
                    className='w-max'
                  >
                    <Close
                      width={16}
                      height={16}
                      className='cursor-pointer'
                      // onClick={() => handleClose()}
                    />
                  </Button>
                </div>
              ) : (
                <div className='flex items-center justify-between px-[1.6rem] pb-[0.8rem] pt-[1.6rem] print:hidden'>
                  {customTitle ? (
                    customTitle
                  ) : (
                    <div
                      className={`${modalTypeColor[type]} grid h-[3.2rem] w-[3.2rem] place-items-center rounded-full `}
                    >
                      {/* <CheckBorderIcon className='z-10' /> */}
                      {icon ? icon : <StatusIndicator status={type} />}
                    </div>
                  )}
                  <Button
                    onlyIcon
                    variant='ghost-light'
                    onClick={() => handleClose()}
                    className='w-max'
                  >
                    <Close
                      width={16}
                      height={16}
                      className='cursor-pointer'
                      // onClick={() => handleClose()}
                    />
                  </Button>
                </div>
              )}
              <div className='px-[1.6rem] py-[0.8rem]  '>
                <h2 className='text-med-sub-02'>{title}</h2>
              </div>

              {description && (
                <div className='px-[1.6rem] pb-[2.4rem]  pt-[0.8rem] text-gray-60 text-reg-body dark:text-gray-60'>
                  <p>{description}</p>
                </div>
              )}

              {children && (
                <div className={` ${overFlow ? 'h-[90%] overflow-y-scroll' : ''}`}>{children}</div>
              )}
              {hasFooter && (
                <div
                  id='modal-footer'
                  className={` flex items-center  ${
                    otherBtn ? 'justify-between' : 'justify-end'
                  } border-t border-gray-20 bg-gray-05 p-[1.6rem] dark:border-dark-gray-20 dark:bg-gray-05`}
                >
                  {customFooter ? (
                    customFooter
                  ) : (
                    <>
                      {otherBtn && otherBtn}
                      <div className='flex items-center gap-[0.8rem]'>
                        <Button
                          variant={'ghost-light'}
                          onClick={() => {
                            cancelCallback();
                            handleClose();
                          }}
                        >
                          Cancel
                        </Button>
                        <Button
                          onClick={() => {
                            confirmCallback();
                            handleClose();
                          }}
                          className={`${type === 'error' && btnColor[type]}`}
                        >
                          Confirm
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

const CheckBorderIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill='currentColor' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#a)' fill='currentColor'>
      <path d='m7 10.707-2.5-2.5.707-.707L7 9.293 10.793 5.5l.707.707-4.5 4.5Z' />
      <path d='M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm0 13A6 6 0 1 1 8 2a6 6 0 0 1 0 12Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
