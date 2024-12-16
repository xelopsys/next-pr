import Button from '@/components/shared/buttons/button';
import { Avatar } from '@/components/shared/avatar/avatar';
import { BadgeWithDot } from '@/components/shared/badges/badges';
import { Input } from '@/components/shared/inputs/input';
import UntitledLogo from '@/components/foundations/logo/UntitledLogo';
import {
  Bell01,
  LifeBuoy01,
  SearchLg,
  Settings01,
  Zap,
} from '@a-peak-works/untitledui-icons';
import {
  NavAccountCard,
  NavAccountMenu,
} from './base-components/nav-account-card';
import { NavItemBase, NavItemButton } from './base-components/nav-item';
import { navItems } from './config';
import { MobileNavigationHeader, NavList } from './sidebar-navigation';
import { FC, ReactNode } from 'react';
import {
  DialogTrigger,
  Popover,
  Button as AriaButton,
} from 'react-aria-components';
import { cx } from '@/components/utils';

type NavItem = {
  label: string;
  href: string;
  current?: boolean;
  icon?: FC<{ className?: string }>;
  badge?: ReactNode;
  items?: NavItem[];
};

interface HeaderNavigationBaseProps {
  activeUrl?: string;
  items: NavItem[];
  subItems?: NavItem[];
  trailingContent?: ReactNode;
  showAvatarDropdown?: boolean;
}

export const HeaderNavigationBase = ({
  activeUrl,
  items,
  subItems,
  trailingContent,
  showAvatarDropdown = true,
}: HeaderNavigationBaseProps) => {
  const activeSubNavItems =
    subItems ||
    items.find((item) => item.current && item.items && item.items.length > 0)
      ?.items;

  return (
    <>
      <MobileNavigationHeader>
        <aside className='flex h-full w-[296px] max-w-full flex-col justify-between overflow-auto border-r border-secondary bg-primary pt-4 lg:pt-6'>
          <div className='flex flex-col gap-5 px-4 lg:px-5'>
            <UntitledLogo className='h-8' />
            <Input
              size='sm'
              placeholder='Search'
              icon={SearchLg}
            />
          </div>

          <NavList items={navItems} />

          <div className='mt-auto flex flex-col gap-4 px-2 py-4 lg:px-4 lg:py-6'>
            <div className='flex flex-col gap-1'>
              <NavItemBase
                label='Support'
                type='link'
                href='#'
                icon={LifeBuoy01}
              />
              <NavItemBase
                label='Settings'
                type='link'
                href='#'
                icon={Settings01}
                badge={
                  <BadgeWithDot
                    color='success'
                    type='modern'
                    size='sm'>
                    Online
                  </BadgeWithDot>
                }
              />
              <NavItemBase
                label='Open in browser'
                type='link'
                href='https://google.com'
                icon={Settings01}
              />
            </div>

            <NavAccountCard />
          </div>
        </aside>
      </MobileNavigationHeader>

      <header className='hidden lg:block'>
        <section className='flex h-16 w-full items-center justify-center border-b border-secondary bg-primary md:h-18'>
          <div className='flex w-full max-w-container justify-between pl-4 pr-3 md:px-8'>
            <div className='flex flex-1 items-center gap-4'>
              <a
                aria-label='Go to homepage'
                href='/'
                className='rounded-sm focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-focus-ring'>
                <UntitledLogo className='h-8' />
              </a>

              <nav>
                <ul className='flex items-center gap-0.5'>
                  {items.map((item) => (
                    <li
                      key={item.label}
                      className='py-0.5'>
                      <NavItemBase
                        icon={item.icon}
                        label={item.label}
                        href={item.href}
                        current={item.current}
                        badge={item.badge}
                        type='link'
                      />
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className='flex items-center gap-4'>
              {trailingContent}

              <div className='flex gap-1'>
                <NavItemButton
                  current={activeUrl === '/settings-01'}
                  size='md'
                  icon={Settings01}
                  label='Settings'
                  href='/settings-01'
                />
                <NavItemButton
                  current={activeUrl === '/notifications-01'}
                  size='md'
                  icon={Bell01}
                  label='Notifications'
                  href='/notifications-01'
                />
              </div>

              {showAvatarDropdown && (
                <DialogTrigger>
                  <AriaButton
                    className={({ isPressed, isFocused }) =>
                      cx(
                        'group relative inline-flex',
                        (isPressed || isFocused) &&
                          'rounded-full outline outline-2 outline-offset-2 outline-focus-ring'
                      )
                    }>
                    <Avatar
                      alt='Olivia Rhye'
                      src='/avatars/olivia_rhye.jpg'
                      size='md'
                    />
                  </AriaButton>
                  <Popover
                    placement='bottom right'
                    offset={8}
                    className={({ isEntering, isExiting }) =>
                      cx(
                        'will-change-transform',
                        isEntering &&
                          'duration-300 ease-out animate-in fade-in placement-right:slide-in-from-left-2 placement-top:slide-in-from-bottom-2 placement-bottom:slide-in-from-top-2',
                        isExiting &&
                          'duration-150 ease-in animate-out fade-out placement-right:slide-out-to-left-2 placement-top:slide-out-to-bottom-2 placement-bottom:slide-out-to-top-2'
                      )
                    }>
                    <NavAccountMenu />
                  </Popover>
                </DialogTrigger>
              )}
            </div>
          </div>
        </section>

        {activeSubNavItems && activeSubNavItems.length > 0 && (
          <section className='flex h-16 w-full items-center justify-center border-b border-secondary bg-primary'>
            <div className='flex w-full max-w-container items-center justify-between gap-8 px-8'>
              <nav>
                <ul className='flex items-center gap-0.5'>
                  {activeSubNavItems.map((item) => (
                    <li
                      key={item.label}
                      className='py-0.5'>
                      <NavItemBase
                        icon={item.icon}
                        label={item.label}
                        href={item.href}
                        current={item.current}
                        badge={item.badge}
                        type='link'
                      />
                    </li>
                  ))}
                </ul>
              </nav>

              <Input
                placeholder='Search'
                icon={SearchLg}
                size='sm'
                className='max-w-xs'
              />
            </div>
          </section>
        )}
      </header>
    </>
  );
};
