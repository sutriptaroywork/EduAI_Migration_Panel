import { AppLinks } from '@/constants/app-links';
import { VALIDATION_CONSTANTS } from '@/constants/form-validators';
import { ErrorStateWrapper } from '@/features/auth-flow/error-state-wrapper';
import { InputWrapper } from '@/features/auth-flow/input-wrapper';
import { LoginContainer } from '@/features/auth-flow/login-container';
import { InputFieldWrapper, LabelWrapper } from '@/shared/forms';
import { PasswordWrapper } from '@/shared/forms/password-wrapper';
import { SEO } from '@/shared/seo';
import { Button, ToastContainer } from '@/ui';
import { sendData } from '@/utils/send-data';
import { useUserSession } from '@store/userSession';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const initialValue = {
  username: '',
  password: '',
};

export default function Login() {
  const { push } = useRouter();

  const [view, setView] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const { setUserSession } = useUserSession();

  const method = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: initialValue,
  });
  const { register, handleSubmit, formState } = method;

  const onSubmit: SubmitHandler<{
    username: string;
    password: string;
  }> = async value => {
    const { username, password } = value;
    setLoading(true);
    const session: any = await sendData({
      url:
        process.env.NODE_ENV === 'production'
          ? '/' + process.env.REVERSE_PROXY_BASE_URL + '/api/login'
          : '/api/login',
      body: {
        username,
        password,
      },
      method: 'POST',
      showToast: false,
    });

    //console.log('session', session);

    if (session?.token) {
      setUserSession(session);
      localStorage.setItem('ml_token', session?.token);
      localStorage.setItem('name', session?.name);
      push(AppLinks.dashboard);
      setLoading(false);
    } else {
      setShowError(true);
      setLoading(false);
      // toast.error('User not found! Please enter correct email and password...');
    }
  };

  return (
    <>
      <SEO title='ShikshaML &#10095; Login' />
      <div>
        {showError && (
          <ToastContainer
            title={'The login information you provided is invalid.'}
            variant={'red'}
            className='mb-[1.6rem] border-red-70'
          />
        )}
        <LoginContainer heading='Login to your account'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col gap-[2.4rem]'>
              <InputFieldWrapper
                label='Mobile No'
                register={{
                  ...register('username', {
                    required: 'Required field',
                    pattern: VALIDATION_CONSTANTS.MOBILE_NUMBER,
                    onChange() {
                      setShowError(false);
                    },
                  }),
                }}
                error={formState.errors.username?.message}
              // onChange={() => {
              //   setShowError(false);
              // }}
              />
              <InputWrapper>
                <div className='flex items-center justify-between'>
                  <LabelWrapper label='Password' id='password' />
                  {/* <Link href={AppLinks?.forgot_pass?.index} passHref>
                <Button variant='text' className='w-max'>
                  Forgot password?
                </Button>
              </Link> */}
                </div>
                <PasswordWrapper view={view} handleView={() => setView(!view)}>
                  <input
                    id='password'
                    placeholder='Enter your password'
                    type={view ? 'text' : 'password'}
                    autoComplete={'off'}
                    className={ErrorStateWrapper(formState.errors.password, true)}
                    {...register('password', {
                      required: 'Required field',
                      onChange() {
                        setShowError(false);
                      },

                      // pattern: VALIDATION_CONSTANTS.PASSWORD,
                    })}
                  // onChange={() => {
                  //   setShowError(false);
                  // }}
                  />
                </PasswordWrapper>
                <div className='mt-1 text-red-60 text-reg-body-sm'>
                  {formState.errors.password?.message}
                </div>
              </InputWrapper>

              <div>
                <Button
                  type='submit'
                  className='w-full'
                  variant='filled'
                  size='large'
                  disabled={loading}
                >
                  {loading ? 'Logging in' : 'Login'}
                </Button>
                <Link href='mailto:support@midasfintechsolutions.com' passHref>
                  <Button variant={'ghost'} className='mt-[.8rem]' type='button'>
                    Trouble logging in?
                  </Button>
                </Link>
              </div>
            </div>
          </form>
        </LoginContainer>
      </div>
    </>
  );
}
