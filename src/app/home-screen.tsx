'use client';

import dynamic from 'next/dynamic';
import Button from '@/components/shared/buttons/button';
import Image from 'next/image';
import { Fragment } from 'react';
import { ArrowRight } from '@a-peak-works/untitledui-icons';
// import { Header } from '@/components/marketing/header-navigation/components/header';
import { BadgeGroup } from '@/components/shared/badges/badge-groups';
import { Input } from '@/components/shared/inputs/input';
import { HookForm, FormField } from '@/components/shared/inputs/form/hook-form';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import {
  HomeScreenValidationType,
  homeValidation,
} from '@/schemes/home-screen';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useTheme } from 'next-themes';
import { cx } from '@/components/utils';
import Spiral from '../../public/marketing/spirals.webp';

const Header = dynamic(
  () =>
    import('@/components/marketing/header-navigation/components/header').then(
      (mod) => mod.Header
    ),
  { ssr: false }
);

export const HomeScreen = () => {
  const { systemTheme } = useTheme();

  const form = useForm<HomeScreenValidationType>({
    resolver: zodResolver(homeValidation),
    shouldFocusError: true,
  });

  const onSubmit = (data: HomeScreenValidationType) => {
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
    <Fragment>
      <Header />

      <section className='relative  bg-primary py-16 lg:flex lg:min-h-[720px] lg:items-center lg:py-24'>
        <div className='mx-auto flex w-full max-w-container items-center px-4 md:px-8'>
          <div className='flex flex-col items-start md:max-w-3xl lg:w-1/2 lg:pr-8'>
            <Link
              href='#'
              className='rounded-[10px] focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-focus-ring'>
              <BadgeGroup
                className='hidden md:flex'
                size='lg'
                addonText="We're hiring!"
                text='Join our remote team'
                iconTrailing={ArrowRight}
                theme='modern'
                color='brand'
              />
              <BadgeGroup
                className='md:hidden'
                size='md'
                addonText="We're hiring!"
                text='Join our remote team'
                iconTrailing={ArrowRight}
                theme='modern'
                color='brand'
              />
            </Link>

            <h1 className='mt-4 text-primary td-md-semi md:td-lg-semi lg:td-xl-semi'>
              People who care about your growth
            </h1>
            <p className='mt-4 text-tertiary tt-lg md:mt-6 md:max-w-lg md:tt-xl'>
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more.
            </p>

            <HookForm
              form={form}
              onSubmit={form.handleSubmit(onSubmit)}
              className='mt-8 flex w-full flex-col items-stretch gap-4 md:mt-12 md:max-w-[480px] md:flex-row md:items-start'>
              <FormField
                name='email'
                control={form.control}>
                {({ field, formState }) => (
                  <Input
                    {...field}
                    size='md'
                    type='email'
                    isRequired
                    isInvalid={!!formState.errors.email?.message}
                    wrapperClassName='py-0.5'
                    placeholder='Enter your email'
                    hint={
                      <span>
                        We care about your data in our{' '}
                        <a
                          href='#'
                          className='rounded-sm underline underline-offset-3 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-focus-ring'>
                          privacy policy
                        </a>
                        .
                      </span>
                    }
                  />
                )}
              </FormField>
              <Button
                type='submit'
                size='xl'>
                Get started
              </Button>
            </HookForm>
          </div>
        </div>
        <div className='relative mt-16 h-[240px] w-full px-4 md:h-[380px] md:px-8 lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-full lg:w-1/2 lg:px-0'>
          <Image
            fill
            className='inset-0 size-full object-cover lg:absolute'
            src={Spiral}
            alt='Spirals'
            priority
            sizes='(min-width: 1024px) 50vw, 100vw'
          />
        </div>
      </section>
    </Fragment>
  );
};
