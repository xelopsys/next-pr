'use client';

import Button from '@/components/Button';
import { FeaturedIconBase } from '@/components/foundations/featured-icon/featured-icons';
import { BackgroundPattern } from '@/components/shared-assets/background-elements/patterns';
import {
  SearchLg,
  ArrowLeft,
  CodeSquare02,
  BookOpen01,
  MessageChatCircle,
  Zap,
  ArrowRight,
} from '@a-peak-works/untitledui-icons';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <section className='flex min-h-screen items-center justify-center overflow-hidden bg-primary py-7xl md:py-9xl'>
      <div className='mx-auto w-full max-w-container grow px-xl md:px-4xl'>
        <div className='mx-auto flex w-full max-w-5xl flex-col items-center gap-7xl text-center'>
          <div className='flex flex-col items-center justify-center gap-4xl md:gap-6xl'>
            <div className='z-10 flex flex-col items-center justify-center gap-xl md:gap-3xl'>
              <div className='relative'>
                <FeaturedIconBase
                  color='gray'
                  theme='modern'
                  size='xl'
                  className='z-10 hidden md:flex'
                  icon={SearchLg}
                />
                <FeaturedIconBase
                  color='gray'
                  theme='modern'
                  size='lg'
                  className='z-10 md:hidden'
                  icon={SearchLg}
                />

                <BackgroundPattern
                  pattern='grid'
                  className='absolute left-1/2 top-1/2 z-0 hidden -translate-x-1/2 -translate-y-1/2 md:block'
                />
                <BackgroundPattern
                  pattern='grid'
                  size='md'
                  className='absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 md:hidden'
                />
              </div>

              <h1 className='z-10 text-primary td-md-semi md:td-lg-semi lg:td-xl-semi'>
                Page not found
              </h1>
              <p className='z-10 text-tertiary tt-lg md:tt-xl'>
                The page you are looking for doesn't exist.{' '}
                <br className='hidden md:block' /> Here are some helpful links:
              </p>
            </div>

            <div className='z-10 flex flex-col-reverse gap-lg self-stretch md:flex-row md:self-auto'>
              <Button
                iconLeading={ArrowLeft}
                color='secondary-gray'
                size='xl'
                className='lg:hidden'
                onClick={() => router.back()}>
                Go back
              </Button>
              <Button
                iconLeading={ArrowLeft}
                color='secondary-gray'
                size='2xl'
                className='hidden lg:flex'
                onClick={() => router.back()}>
                Go back
              </Button>
              <Button
                href='/'
                size='xl'
                className='lg:hidden'>
                Take me home
              </Button>
              <Button
                href='/'
                size='2xl'
                className='hidden lg:flex'>
                Take me home
              </Button>
            </div>
          </div>

          <div className='z-10 md:hidden'>
            <ul className='grid w-full grid-cols-1 justify-items-center gap-x-4xl gap-y-5xl sm:grid-cols-2 lg:grid-cols-3'>
              {[
                {
                  title: 'Documentation',
                  subtitle: 'Dive in to learn all about our product.',
                  icon: CodeSquare02,
                  cta: 'Start learning',
                  href: '#',
                },
                {
                  title: 'Our blog',
                  subtitle: 'Read the latest posts on our blog.',
                  icon: BookOpen01,
                  cta: 'View lastest posts',
                  href: '#',
                },
                {
                  title: 'Chat to us',
                  subtitle: 'Can’t find what you’re looking for?',
                  icon: MessageChatCircle,
                  cta: 'Chat to our team',
                  href: '#',
                },
              ].map((item) => (
                <li
                  key={item.title}
                  className='flex max-w-sm flex-col items-center gap-xl text-center'>
                  <FeaturedIconBase
                    color='gray'
                    theme='modern'
                    size='md'
                    icon={Zap}
                  />

                  <div className='flex flex-col gap-xs text-center'>
                    <h3 className='text-primary tt-lg-semi'>{item.title}</h3>
                    <p className='text-tertiary tt-md'>{item.subtitle}</p>
                  </div>
                  <Button
                    color='link-color'
                    size='lg'
                    href={item.href}
                    className='whitespace-pre'
                    iconTrailing={<ArrowRight className='size-5' />}>
                    {item.cta}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
