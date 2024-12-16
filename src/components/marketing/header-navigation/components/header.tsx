import { ChevronDown } from '@a-peak-works/untitledui-icons';
import { type ElementRef, ReactNode, useRef, useState } from 'react';
import {
  Button as AriaButton,
  Dialog,
  DialogTrigger,
  Popover,
} from 'react-aria-components';

import Button from '@/components/shared/buttons/button';
import UntitledLogo from '@/components/UntitledLogo';
import UntitledLogoMinimal from '@/components/UntitledLogoMinimal';
import { cx } from '@/components/utils';
import {
  DropdownMenuFeatureCard,
  DropdownMenuSimpleWithFooter,
  DropdownMenuWithTwoColsAndLinksAndFooter,
} from '../dropdown-header-navigation';

type HeaderNavItem = {
  label: string;
  href?: string;
  menu?: ReactNode;
};

const headerNavItems: HeaderNavItem[] = [
  {
    label: 'Products',
    href: '/products',
    menu: <DropdownMenuSimpleWithFooter />,
  },
  { label: 'Services', href: '/Services', menu: <DropdownMenuFeatureCard /> },
  { label: 'Pricing', href: '/pricing' },
  {
    label: 'Resources',
    href: '/resources',
    menu: <DropdownMenuWithTwoColsAndLinksAndFooter />,
  },
  { label: 'About', href: '/about' },
];

const footerNavItems = [
  { label: 'About us', href: '/' },
  { label: 'Press', href: '/products' },
  { label: 'Careers', href: '/resources' },
  { label: 'Legal', href: '/pricing' },
  { label: 'Support', href: '/pricing' },
  { label: 'Contact', href: '/pricing' },
  { label: 'Sitemap', href: '/pricing' },
  { label: 'Cookie settings', href: '/pricing' },
];

const MobileNavItem = (props: {
  className?: string;
  label: string;
  href?: string;
  children?: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  if (props.href) {
    return (
      <li>
        <a
          href={props.href}
          className='flex items-center justify-between px-4 py-3 text-primary tt-md-semi hover:bg-primary_hover'>
          {props.label}
        </a>
      </li>
    );
  }

  return (
    <li className='flex flex-col gap-0.5'>
      <button
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className='flex w-full items-center justify-between px-4 py-3 text-primary tt-md-semi hover:bg-primary_hover'>
        {props.label}{' '}
        <ChevronDown
          className={cx(
            isOpen ? '-rotate-180' : 'rotate-0',
            'size-5 text-quaternary transition duration-200 ease-out'
          )}
        />
      </button>
      {isOpen && <div>{props.children}</div>}
    </li>
  );
};

const MobileFooter = () => {
  return (
    <div className='flex flex-col gap-8 border-t border-secondary px-4 py-6'>
      <div>
        <ul className='grid grid-flow-col grid-cols-2 grid-rows-4 gap-x-6 gap-y-3'>
          {footerNavItems.map((navItem) => (
            <li key={navItem.label}>
              <Button
                color='link-gray'
                size='lg'
                href={navItem.href}>
                {navItem.label}
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex flex-col gap-3'>
        <Button
          href='/signup'
          size='lg'>
          Sign up
        </Button>
        <Button
          href='/login'
          color='secondary-gray'
          size='lg'>
          Log in
        </Button>
      </div>
    </div>
  );
};

interface HeaderProps {
  items?: HeaderNavItem[];
  isFullWidth?: boolean;
  isFloating?: boolean;
  className?: string;
  // Used only for easily testing menus in Storybook.
  autoOpenMenu?: boolean;
}

export const Header = ({
  items = headerNavItems,
  isFullWidth,
  isFloating,
  className,
  autoOpenMenu,
}: HeaderProps) => {
  const headerRef = useRef<ElementRef<'header'>>(null);

  return (
    <header
      ref={headerRef}
      className={cx(
        'relative flex h-[72px] w-full items-center justify-center md:h-20',
        isFloating && 'h-16 md:h-[76px] md:pt-3',
        isFullWidth && !isFloating
          ? 'has-[[aria-expanded=true]]:bg-primary'
          : 'max-md:has-[[aria-expanded=true]]:bg-primary',
        className
      )}>
      <div className='flex size-full max-w-container flex-1 items-center pl-4 pr-3 md:px-8'>
        <div
          className={cx(
            'flex w-full justify-between',
            isFloating &&
              'ring-inset ring-border-secondary md:rounded-2xl md:bg-primary md:py-3 md:pl-4 md:pr-3 md:shadow-xs md:ring-1'
          )}>
          <div className='flex flex-1 items-center gap-8'>
            <UntitledLogo className='md:hidden lg:inline-block' />
            <UntitledLogoMinimal className='hidden md:inline-block lg:hidden' />

            {/* Desktop navigation */}
            <nav className='hidden md:block'>
              <ul className='flex items-center gap-5'>
                {items.map((navItem, index) => (
                  <li key={index}>
                    {navItem.menu ? (
                      <DialogTrigger defaultOpen={autoOpenMenu}>
                        <Button
                          size='lg'
                          color='link-gray'
                          className='group gap-1'
                          iconTrailing={
                            <ChevronDown className='size-5 rotate-0 transition duration-200 ease-out group-aria-expanded:-rotate-180' />
                          }>
                          {navItem.label}
                        </Button>
                        <Popover
                          className={({ isEntering, isExiting }) =>
                            cx(
                              'hidden will-change-transform md:block',
                              isFullWidth && 'w-full',
                              isEntering &&
                                'duration-300 ease-out animate-in fade-in slide-in-from-top-2',
                              isExiting &&
                                'duration-200 ease-in animate-out fade-out slide-out-to-top-2'
                            )
                          }
                          offset={isFloating || isFullWidth ? 0 : 12}
                          containerPadding={0}
                          triggerRef={
                            (isFloating && isFullWidth) || isFullWidth
                              ? headerRef
                              : undefined
                          }>
                          <Dialog
                            className={cx(
                              'mx-auto outline-none',
                              isFloating && 'max-w-7xl px-8 pt-3'
                            )}>
                            {navItem.menu}
                          </Dialog>
                        </Popover>
                      </DialogTrigger>
                    ) : (
                      <Button
                        href={navItem.href}
                        size='lg'
                        color='link-gray'
                        className='rounded-md focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-focus-ring'>
                        {navItem.label}
                      </Button>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className='hidden items-center gap-3 md:flex'>
            <Button
              color='secondary-gray'
              href='/login'
              size={isFloating ? 'md' : 'lg'}>
              Log in
            </Button>
            <Button
              href='/signup'
              color='primary'
              size={isFloating ? 'md' : 'lg'}>
              Sign up
            </Button>
          </div>

          {/* Mobile Menu and Menu Trigger */}
          <DialogTrigger defaultOpen={false}>
            <AriaButton
              className={({ isFocused, isHovered }) =>
                cx(
                  'group ml-auto rounded-lg p-2 md:hidden',
                  isHovered && 'bg-primary_hover',
                  isFocused &&
                    'outline outline-2 outline-offset-2 outline-focus-ring'
                )
              }>
              <svg
                aria-hidden='true'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'>
                <path
                  className='hidden text-secondary group-aria-expanded:block'
                  d='M18 6L6 18M6 6L18 18'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  className='text-secondary group-aria-expanded:hidden'
                  d='M3 12H21M3 6H21M3 18H21'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </AriaButton>
            <Popover
              triggerRef={headerRef}
              className='h-calc(100%-72px) scrollbar-hide w-full overflow-y-auto shadow-lg md:hidden'
              offset={0}
              crossOffset={20}
              containerPadding={0}
              placement='bottom left'>
              <Dialog className='outline-none'>
                <nav className='w-full bg-primary shadow-lg'>
                  <ul className='flex flex-col gap-0.5 py-5'>
                    {items.map((navItem) =>
                      navItem.menu ? (
                        <MobileNavItem
                          key={navItem.label}
                          label={navItem.label}>
                          {navItem.menu}
                        </MobileNavItem>
                      ) : (
                        <MobileNavItem
                          key={navItem.label}
                          label={navItem.label}
                          href={navItem.href}
                        />
                      )
                    )}
                  </ul>

                  <MobileFooter />
                </nav>
              </Dialog>
            </Popover>
          </DialogTrigger>
        </div>
      </div>
    </header>
  );
};
