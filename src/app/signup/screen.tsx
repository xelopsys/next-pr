'use client';

import Button from '@/components/Button';
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

export const SignupScreen = () => {
  const { systemTheme } = useTheme();

  const form = useForm<LoginScreenValidationType>({
    resolver: zodResolver(loginValidation),
  });

  const onSubmit = (data: LoginScreenValidationType) => {
    toast.custom((t) => (
      <div
        key={t}
        className={cx(
          'relative light-mode z-[var(--z-index)] flex max-w-full flex-col gap-4 rounded-xl border border-primary bg-primary p-4 shadow-lg xs:w-[var(--width)] xs:flex-row',
          systemTheme === 'dark' && 'dark-mode'
        )}>
        <pre className='text-primary bg-secondary p-4 w-full rounded-lg'>
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      </div>
    ));
  };

  return (
    <section className='min-h-screen overflow-hidden bg-primary px-xl py-6xl md:px-4xl md:pt-9xl'>
      <div className='mx-auto flex w-full flex-col gap-4xl sm:max-w-[360px]'>
        <div className='flex flex-col items-center gap-3xl text-center'>
          <div className='relative'>
            <BackgroundPattern
              pattern='circle'
              className='absolute left-1/2 top-1/2 z-0 hidden -translate-x-1/2 -translate-y-1/2 md:block'
            />
            <BackgroundPattern
              pattern='circle'
              size='md'
              className='absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 md:hidden'
            />
            <LogoMark
              size='lg'
              className='relative z-10 hidden md:block'
            />
            <LogoMark
              size='md'
              className='relative z-10 md:hidden'
            />
          </div>
          <div className='z-10 flex flex-col gap-md md:gap-lg'>
            <h1 className='text-primary td-xs-semi md:td-sm-semi'>
              Create an account
            </h1>
            <p className='text-tertiary tt-md'>Start your 30-day free trial.</p>
          </div>
        </div>

        <HookForm
          form={form}
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col gap-3xl'>
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
              type='submit'
              size='lg'>
              Get started
            </Button>
          </div>

          <div className='flex items-center gap-x-2'>
            <div className='flex-1 border-t border-secondary'></div>
            <span className='text-tertiary tt-sm-md'>OR</span>
            <div className='flex-1 border-t border-secondary'></div>
          </div>

          <div className='flex flex-col gap-lg'>
            <SocialButton
              social='google'
              theme='color'>
              Sign up with Google
            </SocialButton>
            <SocialButton
              social='facebook'
              theme='color'>
              Sign up with Facebook
            </SocialButton>
            <SocialButton
              social='apple'
              theme='color'>
              Sign up with Apple
            </SocialButton>
          </div>
        </HookForm>

        <div className='flex justify-center gap-xs text-center'>
          <span className='text-tertiary tt-sm'>Already have an account?</span>
          <Button
            href='/login'
            color='link-color'
            size='md'>
            Log in
          </Button>
        </div>
      </div>
    </section>
  );
};
