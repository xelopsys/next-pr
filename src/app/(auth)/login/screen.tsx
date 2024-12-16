'use client';

import Button from '@/components/shared/buttons/button';
import { Input } from '@/components/shared/inputs/input';
import { BackgroundPattern } from '@/components/shared-assets/background-elements/patterns';
import { LogoMark } from '@/components/shared-assets/auth/logomark';
import SocialButton from '@/components/shared/buttons/social-button';
import { FormField, HookForm } from '@/components/shared/inputs/form/hook-form';
import { cx } from '@/components/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTheme } from 'next-themes';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import {
  LoginScreenValidationType,
  loginValidation,
} from '@/schemes/login-screen';
import { signIn } from 'next-auth/react';
import { ContentDivider } from '@/components/application/content-dividers/content-dividers';
import { FeaturedIconBase } from '@/components/foundations/featured-icon/featured-icons';
import { CheckCircle, Loading03 } from '@a-peak-works/untitledui-icons';
import { CloseButton } from '@/components/shared/buttons/close-button';
import { useState } from 'react';

export const LoginScreen = () => {
  const { systemTheme } = useTheme();
  const [loading, setLoading] = useState(false);

  const form = useForm<LoginScreenValidationType>({
    resolver: zodResolver(loginValidation),
  });

  const onSubmit = async (data: LoginScreenValidationType) => {
    setLoading(true);
    await signIn('email', {
      email: data.email,
      redirect: false, // Prevent immediate redirect to handle feedback
      callbackUrl: '/dashboard', // Change to your desired post-login route
    }).then(() => {
      toast.custom((t) => (
        <div
          key={t}
          className={cx(
            'relative light-mode z-[var(--z-index)] flex max-w-full flex-col gap-4 rounded-xl border border-primary bg-primary_alt p-4 shadow-lg xs:w-[var(--width)] xs:flex-row',
            systemTheme === 'dark' && 'dark-mode'
          )}>
          <FeaturedIconBase
            icon={CheckCircle}
            color='success'
            theme='modern'
            size='md'
          />

          <div className='flex flex-1 flex-col gap-3 md:pr-8'>
            <div className='flex flex-col gap-1'>
              <p className='text-fg-primary tt-sm-semi'>Awesome!</p>
              <p className='text-fg-secondary tt-sm'>
                Check your email for a link to log in
              </p>
            </div>

            <div className='flex gap-3'>
              <Button
                onClick={() => toast.dismiss(t)}
                size='sm'
                color='link-gray'>
                Dismiss
              </Button>
            </div>
          </div>

          <div className='absolute right-2 top-2 flex items-center justify-center'>
            <CloseButton
              onClick={() => toast.dismiss(t)}
              size='sm'
              label='Dismiss'
            />
          </div>
        </div>
      ));
      form.reset();
      setLoading(false);
    });
  };

  return (
    <section className='relative min-h-screen overflow-hidden bg-primary px-xl py-6xl md:px-4xl md:pt-9xl'>
      <div className='relative z-10 mx-auto flex w-full flex-col gap-4xl sm:max-w-[360px]'>
        <div className='flex flex-col items-center gap-3xl text-center'>
          <div className='relative'>
            <LogoMark
              size='lg'
              className='hidden md:block'
            />
            <LogoMark
              size='md'
              className='md:hidden'
            />
            <BackgroundPattern
              pattern='circle'
              className='absolute left-1/2 top-1/2 z-0 hidden -translate-x-1/2 -translate-y-1/2 md:block'
            />
            <BackgroundPattern
              pattern='circle'
              size='md'
              className='absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 md:hidden'
            />
          </div>
          <div className='z-10 flex flex-col gap-md md:gap-lg'>
            <h1 className='text-primary td-xs-semi md:td-sm-semi'>
              Log in to your account
            </h1>
            <p className='text-tertiary tt-md'>
              Welcome back! Please enter your details.
            </p>
          </div>
        </div>

        <HookForm
          form={form}
          onSubmit={form.handleSubmit(onSubmit)}
          className='z-10 flex flex-col gap-3xl'>
          <div className='flex flex-col gap-xl'>
            <FormField
              control={form.control}
              name='email'>
              {({ field, formState }) => (
                <Input
                  {...field}
                  isRequired
                  type='email'
                  name='email'
                  placeholder='Enter your email'
                  size='md'
                  isInvalid={!!formState.errors.email?.message}
                />
              )}
            </FormField>
            <Button
              iconLeading={
                loading ? <Loading03 className='animate-spin' /> : undefined
              }
              type='submit'
              size='lg'>
              {!loading && 'Continue with email'}
            </Button>
          </div>

          <ContentDivider type='single-line'>
            <span className='text-tertiary tt-sm-md'>OR</span>
          </ContentDivider>

          <div className='flex flex-col gap-lg'>
            <SocialButton
              social='google'
              theme='color'>
              Continue with Google
            </SocialButton>
            <SocialButton
              social='facebook'
              theme='color'>
              Continue with Facebook
            </SocialButton>
            <SocialButton
              social='apple'
              theme='color'>
              Continue with Apple
            </SocialButton>
          </div>
        </HookForm>

        <div className='z-10 flex justify-center gap-xs text-center'>
          <span className='text-tertiary tt-sm'>Don't have an account?</span>
          <Button
            color='link-color'
            size='md'
            href='/signup'>
            Sign up
          </Button>
        </div>
      </div>
    </section>
  );
};
