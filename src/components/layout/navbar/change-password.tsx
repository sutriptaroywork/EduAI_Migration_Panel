// import { useState } from 'react';
// import { SubmitHandler, useForm } from 'react-hook-form';

// import { ErrorStateWrapper } from '@/features/auth-flow/error-state-wrapper';
// import { sessionLogout } from '@/lib/i-logout';
// import { API_URL, SHiKSKA_BASE_URL } from '@/services/shiksha-ml';
// import { PasswordWrapper } from '@/shared/forms/password-wrapper';
// import { ModalFooter } from '@/shared/modal-footer';
// import { Button } from '@/ui';
// import { sendData } from '@/utils/send-data';
// import { useQueryClient } from '@tanstack/react-query';
// import { toast } from 'react-toastify';

// interface ChangePasswordProps {
//   handleClose: () => void;
// }

// const initialValue = {
//   current_password: '',
//   new_password: '',
//   confirm_password: '',
// };
// export function ChangePassword(props: ChangePasswordProps) {
//   const { handleClose } = props;

//   // const { userDetail } = useUserStore();
//   // const { code } = userDetail;

//   const [view, setView] = useState(false);
//   const [currentView, setCurrentView] = useState(false);
//   const [confirmView, setConfirmView] = useState(false);
//   const [confirmWarnning, setConfirmWarnning] = useState('');

//   const method = useForm({
//     mode: 'onChange',
//     reValidateMode: 'onChange',
//     defaultValues: initialValue,
//   });
//   const { register, handleSubmit, formState } = method;
//   const queryClient = useQueryClient();

//   const onSubmit: SubmitHandler<{
//     current_password: string;
//     new_password: string;
//     confirm_password: string;
//   }> = async value => {
//     const { confirm_password, new_password, current_password } = value;
//     const call_api = new_password === confirm_password ? true : false;

//     //eslint-disable-next-line
//     if (call_api) {
//       const res = { old_pass: current_password, new_pass: new_password };
//       await sendData({ url: SS_BASE_URL + API_URL.CHANGE_PASSWORD, method: 'POST', body: res });
//       // await sessionLogout();
//       await sessionLogout(undefined, undefined, queryClient);
//     } else {
//       toast.error('password do not match');
//     }
//   };

//   return (
//     <>
//       <div className='' id='form-section'>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className='mb-[2.4rem] flex flex-col gap-[1.6rem] px-[1.6rem]'>
//             <div className=''>
//               <label
//                 htmlFor='current-password'
//                 className='mb-[4px] block text-gray-60 text-med-body-sm dark:text-dark-gray-70'
//               >
//                 Current password
//               </label>
//               <PasswordWrapper view={currentView} handleView={() => setCurrentView(!currentView)}>
//                 <input
//                   id='current-password'
//                   placeholder='Enter your password'
//                   type={currentView ? 'text' : 'password'}
//                   className={ErrorStateWrapper(formState.errors.current_password, true)}
//                   {...register('current_password', {
//                     required: 'Required field',
//                   })}
//                 />
//               </PasswordWrapper>
//               <div
//                 className={`${
//                   formState.errors.current_password
//                     ? ' text-red-60'
//                     : 'text-gray-70 dark:text-dark-gray-80'
//                 } mt-1 text-reg-body-sm `}
//               >
//                 {formState.errors.current_password?.message}
//               </div>
//             </div>

//             <div className={`  `}>
//               <label
//                 htmlFor='new-password'
//                 className='mb-[4px] block text-gray-60 text-med-body-sm dark:text-dark-gray-70'
//               >
//                 New password
//               </label>
//               <PasswordWrapper view={view} handleView={() => setView(!view)}>
//                 <input
//                   id='new-password'
//                   placeholder='Enter your password'
//                   type={view ? 'text' : 'password'}
//                   className={ErrorStateWrapper(formState.errors.new_password, true)}
//                   {...register('new_password', {
//                     required: 'Required field',
//                   })}
//                 />
//               </PasswordWrapper>
//             </div>

//             <div className={` `}>
//               <label
//                 htmlFor='confirm-password'
//                 className='mb-[4px] block text-gray-60 text-med-body-sm dark:text-dark-gray-70'
//               >
//                 Confirm new password
//               </label>
//               <PasswordWrapper view={confirmView} handleView={() => setConfirmView(!confirmView)}>
//                 <input
//                   id='confirm-password'
//                   placeholder='Enter your password'
//                   type={confirmView ? 'text' : 'password'}
//                   className={ErrorStateWrapper(formState.errors.confirm_password, true)}
//                   {...register('confirm_password', {
//                     required: 'Required field',
//                   })}
//                 />
//               </PasswordWrapper>
//               <div className='mt-1 text-red-60 text-reg-body-sm'>
//                 {formState.errors.confirm_password
//                   ? formState.errors.confirm_password?.message
//                   : confirmWarnning}
//               </div>
//             </div>

//             <div className='rounded-[.8rem] bg-orange-10 p-[1.6rem] text-orange-100 text-reg-body dark:bg-orange-100 dark:text-orange-30'>
//               For enhanced account security, setting a new password will automatically log you out
//               from all devices.
//             </div>
//           </div>
//           <ModalFooter>
//             <Button
//               variant='ghost-light'
//               size='large'
//               className='w-max'
//               type='button'
//               onClick={() => handleClose()}
//             >
//               Cancel
//             </Button>
//             <Button type='submit' variant='filled' size='large' className='w-max'>
//               Confirm
//             </Button>
//           </ModalFooter>
//         </form>
//       </div>
//     </>
//   );
// }

export {};
