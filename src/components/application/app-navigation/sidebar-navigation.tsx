import Button from '@/components/shared/buttons/button';
import { Avatar } from '@/components/shared/avatar/avatar';
import { AvatarLabelGroup } from '@/components/shared/avatar/avatar-label-group';
import { Badge, BadgeWithDot } from '@/components/shared/badges/badges';
import { Input } from '@/components/shared/inputs/input';
import UntitledLogo from '@/components/foundations/logo/UntitledLogo';
import UntitledLogoMinimal from '@/components/foundations/logo/UntitledLogoMinimal';
import { cx } from '@/components/utils';
import {
  BarChartSquare02,
  Calendar,
  CheckDone01,
  ChevronRight,
  X as CloseIcon,
  File05,
  Folder,
  HomeLine,
  LayoutAlt01,
  LifeBuoy01,
  LogOut01,
  Menu02,
  MessageChatCircle,
  PieChart03,
  Rows01,
  SearchLg,
  Settings01,
  Users01,
} from '@a-peak-works/untitledui-icons';
import { AnimatePresence, motion } from 'motion/react';
import { PropsWithChildren, ReactNode, useEffect, useState } from 'react';
import {
  Button as AriaButton,
  Dialog,
  DialogTrigger,
  Modal,
  ModalOverlay,
  Popover,
} from 'react-aria-components';
import {
  NavAccountCard,
  NavAccountMenu,
} from './base-components/nav-account-card';
import { NavItemBase, NavItemButton } from './base-components/nav-item';
import {
  footerNavItems,
  NavItemDividerType,
  navItems,
  NavItemType,
} from './config';
import { Tooltip } from '@/components/shared/tooltips/tooltips';

interface NavListProps {
  activeUrl?: string;
  items?: (NavItemType | NavItemDividerType)[];
  className?: string;
}

export const NavList = ({
  activeUrl,
  items = navItems,
  className,
}: NavListProps) => {
  const [open, setOpen] = useState(false);
  const activeItem = items.find(
    (item) =>
      item.href === activeUrl ||
      item.items?.some((subItem) => subItem.href === activeUrl)
  );
  const [currentItem, setCurrentItem] = useState(activeItem);

  return (
    <ul className={cx('mt-4 flex flex-col px-2 lg:px-4', className)}>
      {items.map((item, idx) => {
        if (item.divider) {
          return (
            <li
              key={idx}
              className='w-full px-0.5 py-2'>
              <hr className='h-px w-full border-none bg-border-secondary' />
            </li>
          );
        }

        // TODO: remove details when RAC implements accordion/disclosure components
        if (item.items?.length) {
          return (
            <details
              key={item.label}
              open={activeItem?.href === item.href}
              className='appearance-none py-0.5'
              onToggle={(e) => {
                setOpen(e.currentTarget.open);
                setCurrentItem(item);
              }}>
              <NavItemBase
                href={item.href}
                badge={item.badge}
                label={item.label}
                icon={item.icon}
                type='collapsible'
                open={open && item?.href === item.href}
              />

              <dd>
                <ul className='pb-1'>
                  {item.items.map((item) => (
                    <li
                      key={item.label}
                      className='py-0.5'>
                      <NavItemBase
                        href={item.href}
                        badge={item.badge}
                        label={item.label}
                        type='collapsible-child'
                        open={open}
                        current={activeUrl === item.href}
                      />
                    </li>
                  ))}
                </ul>
              </dd>
            </details>
          );
        }

        return (
          <li
            key={item.label}
            className='py-0.5'>
            <NavItemBase
              badge={item.badge}
              label={item.label}
              icon={item.icon}
              href={item.href}
              type='link'
              current={currentItem?.href === item.href}
              open={open && currentItem?.href === item.href}
            />
          </li>
        );
      })}
    </ul>
  );
};

export const MobileNavigationHeader = ({ children }: PropsWithChildren) => {
  return (
    <DialogTrigger>
      <header className='flex h-16 items-center justify-between border-b border-secondary bg-primary py-3 pl-4 pr-2 lg:hidden'>
        <UntitledLogo />

        <AriaButton
          aria-label='Expand navigation menu'
          className='group flex items-center justify-center rounded-lg bg-primary p-2 text-fg-secondary hover:bg-primary_hover hover:text-fg-secondary_hover focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-focus-ring'>
          <Menu02 className='size-6 transition duration-200 ease-in-out group-aria-expanded:opacity-0' />
          <CloseIcon className='absolute size-6 opacity-0 transition duration-200 ease-in-out group-aria-expanded:opacity-100' />
        </AriaButton>
      </header>

      <ModalOverlay
        className={({ isEntering, isExiting }) =>
          cx(
            'fixed inset-0 z-50 bg-overlay/70 pr-16 backdrop-blur-md',
            isEntering && 'duration-300 ease-in-out animate-in fade-in',
            isExiting && 'duration-200 ease-in-out animate-out fade-out'
          )
        }>
        {({ state }) => (
          <>
            <AriaButton
              aria-label='Close navigation menu'
              onPress={() => state.close()}
              className='fixed right-2 top-3 flex items-center justify-center rounded-lg p-2 text-fg-white/70 hover:bg-white/10 hover:text-fg-white focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-focus-ring'>
              <CloseIcon className='size-6' />
            </AriaButton>

            <Modal
              className={({ isEntering, isExiting }) =>
                cx(
                  'w-full will-change-transform'
                  // isEntering && "duration-300 ease-in-out animate-in slide-in-from-left-2",
                  // isExiting && "duration-200 ease-in-out animate-out slide-out-to-left-2",
                )
              }>
              <Dialog className='h-dvh outline-none focus:outline-none'>
                {children}
              </Dialog>
            </Modal>
          </>
        )}
      </ModalOverlay>
    </DialogTrigger>
  );
};

interface SidebarNavigationProps {
  activeUrl?: string;
  items?: NavItemType[];
  footerItems?: NavItemType[];
  featureCard?: ReactNode;
  showAccountCard?: boolean;
  className?: string;
}

export const SidebarNavigationSimple = ({
  activeUrl,
  items = navItems,
  footerItems = footerNavItems,
  featureCard,
  showAccountCard = true,
  className,
}: SidebarNavigationProps) => {
  const content = (
    <aside
      className={cx(
        'flex h-full w-[296px] max-w-full flex-col justify-between overflow-auto border-r border-secondary bg-primary pt-4 lg:pt-6',
        className
      )}>
      <div className='flex flex-col gap-5 px-4 lg:px-5'>
        <UntitledLogo className='h-8' />
        <Input
          size='sm'
          placeholder='Search'
          icon={SearchLg}
        />
      </div>

      <NavList
        activeUrl={activeUrl}
        items={items}
      />

      <div className='mt-auto flex flex-col gap-4 px-2 py-4 lg:px-4 lg:py-6'>
        {footerItems.length > 0 && (
          <ul className='flex flex-col'>
            {footerItems.map((item) => (
              <li className='py-0.5'>
                <NavItemBase
                  badge={item.badge}
                  label={item.label}
                  icon={item.icon}
                  href={item.href}
                  type='link'
                  current={item.href === activeUrl}
                />
              </li>
            ))}
          </ul>
        )}

        {featureCard}

        {showAccountCard && <NavAccountCard />}
      </div>
    </aside>
  );

  return (
    <>
      <div className='relative hidden h-screen overflow-visible lg:sticky lg:top-0 lg:inline-block'>
        {content}
      </div>
      <MobileNavigationHeader>{content}</MobileNavigationHeader>
    </>
  );
};

SidebarNavigationSimple.parameters = {
  design: {
    urls: {
      desktop:
        'https://www.figma.com/design/BXDc9uTbY80aquiwCK1FYs?node-id=1161-8593',
    },
  },
};

interface SidebarNavigationDualTierProps {
  activeUrl?: string;
  featureCard?: ReactNode;
  items?: NavItemType[];
  footerItems?: NavItemType[];
  hideBorder?: boolean;
}

export const SidebarNavigationDualTier = ({
  activeUrl,
  hideBorder,
  items = navItems,
  footerItems = footerNavItems,
  featureCard,
}: SidebarNavigationDualTierProps) => {
  const activeItem = [...items, ...footerItems].find(
    (item) =>
      item.href === activeUrl ||
      item.items?.some((subItem) => subItem.href === activeUrl)
  );
  const [currentItem, setCurrentItem] = useState(activeItem || items[1]);

  const isSecondarySidebarVisible = currentItem.items?.length;

  const primarySidebar = (
    <aside className='group flex h-full max-h-full max-w-full overflow-y-auto bg-primary'>
      <div
        className={cx(
          'relative flex w-[296px] flex-col border-r border-secondary pt-4 transition duration-300 lg:pt-6',
          hideBorder && !isSecondarySidebarVisible && 'border-transparent'
        )}>
        <div className='flex flex-col gap-5 px-4 lg:px-5'>
          <UntitledLogo className='h-8' />
          <Input
            size='sm'
            placeholder='Search'
            icon={SearchLg}
          />
        </div>

        <NavList
          activeUrl={activeUrl}
          items={items}
          className='lg:hidden'
        />

        <ul className='mt-4 hidden flex-col px-4 lg:flex'>
          {items.map((item, idx) => (
            <li
              key={item.label}
              className='py-0.5'>
              <NavItemBase
                current={currentItem.href === item.href}
                href={item.href}
                badge={item.badge}
                label={item.label}
                icon={item.icon}
                type='link'
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();

                  setCurrentItem(item);
                }}
              />
            </li>
          ))}
        </ul>
        <div className='mt-auto flex flex-col gap-4 px-2 py-4 lg:px-4 lg:py-6'>
          {footerItems.length > 0 && (
            <ul className='flex flex-col'>
              {footerItems.map((item) => (
                <li className='py-0.5'>
                  <NavItemBase
                    current={currentItem.href === item.href}
                    href={item.href}
                    badge={item.badge}
                    label={item.label}
                    icon={item.icon}
                    type='link'
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();

                      setCurrentItem(item);
                    }}
                  />
                </li>
              ))}
            </ul>
          )}

          {featureCard}

          <NavAccountCard />
        </div>
      </div>
    </aside>
  );

  const secondarySidebar = (
    <AnimatePresence initial={false}>
      {isSecondarySidebarVisible && (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 256 }}
          exit={{ width: 0 }}
          transition={{
            type: 'spring',
            damping: 26,
            stiffness: 220,
            bounce: 0,
          }}
          className={cx(
            'h-full overflow-y-auto bg-primary',
            !hideBorder && 'border-r border-secondary'
          )}>
          <motion.div
            style={{ width: 256 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: 'spring',
              damping: 26,
              stiffness: 220,
              bounce: 0,
            }}
            className='flex h-full flex-col p-4 pt-6'>
            <ul>
              {currentItem.items?.map((item, idx) => (
                <li
                  key={item.label}
                  className='py-0.5'>
                  <NavItemBase
                    current={activeUrl === item.href}
                    href={item.href}
                    label={item.label}
                    icon={item.icon}
                    badge={item.badge}
                    type='link'
                  />
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <div className='hidden h-screen lg:sticky lg:top-0 lg:flex'>
        {primarySidebar}
        {secondarySidebar}
      </div>
      <MobileNavigationHeader>{primarySidebar}</MobileNavigationHeader>
    </>
  );
};

SidebarNavigationDualTier.parameters = {
  design: {
    urls: {
      desktop:
        'https://www.figma.com/design/BXDc9uTbY80aquiwCK1FYs?node-id=1161-17322',
    },
  },
};

interface SidebarNavigationSlimProps {
  activeUrl?: string;
  items?: (NavItemType | NavItemDividerType)[];
  footerItems?: (NavItemType | NavItemDividerType)[];
  hideBorder?: boolean;
  hideRightBorder?: boolean;
}

export const SidebarNavigationSlim = ({
  activeUrl,
  items = navItems,
  footerItems = footerNavItems,
  hideBorder,
  hideRightBorder,
}: SidebarNavigationSlimProps) => {
  const activeItem = [...items, ...footerItems].find(
    (item) =>
      item.href === activeUrl ||
      item.items?.some((subItem) => subItem.href === activeUrl)
  );
  const [currentItem, setCurrentItem] = useState(activeItem || items[1]);
  const isSecondarySidebarVisible = currentItem.items?.length;

  const mainSidebar = (
    <aside className='group flex h-full max-h-full max-w-full overflow-y-auto bg-primary py-1 pl-1'>
      <div
        className={cx(
          'flex w-auto flex-col justify-between rounded-xl pt-5 ring-1 ring-inset ring-border-secondary transition duration-300',
          hideBorder && !isSecondarySidebarVisible && 'ring-transparent'
        )}>
        <div className='flex justify-center px-3'>
          <UntitledLogoMinimal className='size-8' />
        </div>

        <ul className='mt-4 flex flex-col gap-0.5 px-3'>
          {items.map((item) => (
            <li key={item.label}>
              <NavItemButton
                size='md'
                current={currentItem.href === item.href}
                href={item.href}
                label={item.label || ''}
                icon={item.icon}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();

                  setCurrentItem(item);
                }}
              />
            </li>
          ))}
        </ul>
        <div className='mt-auto flex flex-col gap-4 px-3 py-5'>
          {footerItems.length > 0 && (
            <ul className='flex flex-col'>
              {footerItems.map((item) => (
                <li className='py-0.5'>
                  <NavItemButton
                    size='md'
                    current={activeUrl === item.href}
                    label={item.label || ''}
                    href={item.href}
                    icon={item.icon}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();

                      setCurrentItem(item);
                    }}
                  />
                </li>
              ))}
            </ul>
          )}

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
                status='online'
                src='/avatars/olivia_rhye.jpg'
                size='md'
                alt='Olivia Rhye'
              />
            </AriaButton>
            <Popover
              placement='right bottom'
              offset={8}
              crossOffset={6}
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
        </div>
      </div>
    </aside>
  );

  const secondarySidebar = (
    <AnimatePresence initial={false}>
      {currentItem.items && currentItem.items.length > 0 && (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 268 }}
          exit={{ width: 0 }}
          transition={{
            type: 'spring',
            damping: 26,
            stiffness: 220,
            bounce: 0,
          }}
          className={cx(
            'h-full overflow-y-auto bg-primary',
            !(hideBorder || hideRightBorder) && 'border-r border-secondary'
          )}>
          <motion.div
            style={{ width: 268 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: 'spring',
              damping: 26,
              stiffness: 220,
              bounce: 0,
            }}
            className='flex h-full flex-col px-4 pb-5 pt-6'>
            <h3 className='text-brand-secondary tt-sm-semi'>
              {currentItem.label}
            </h3>
            <ul className='mt-2'>
              {currentItem.items?.map((item) => (
                <li
                  key={item.label}
                  className='py-0.5'>
                  <NavItemBase
                    current={activeUrl === item.href}
                    href={item.href}
                    label={item.label}
                    icon={item.icon}
                    badge={item.badge}
                    type='link'
                  />
                </li>
              ))}
            </ul>
            <div className='relative mt-auto flex justify-between border-t border-secondary px-2 pt-5'>
              <div>
                <p className='text-primary tt-sm-semi'>Olivia Rhye</p>
                <p className='text-tertiary tt-sm'>olivia@untitledui.com</p>
              </div>
              <div className='absolute right-0 top-2.5'>
                <Tooltip
                  title='Log out'
                  arrow={false}>
                  <Button
                    size='sm'
                    color='tertiary-gray'
                    iconLeading={
                      <LogOut01 className='size-5 text-fg-quinary transition-inherit-all group-hover:text-fg-quinary_hover' />
                    }
                    className='!p-1.5'
                  />
                </Tooltip>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <div className='hidden h-screen lg:sticky lg:top-0 lg:flex'>
        {mainSidebar}
        {secondarySidebar}
      </div>

      <MobileNavigationHeader>
        <aside className='group flex h-full max-h-full w-[296px] max-w-full flex-col justify-between overflow-y-auto border-r border-secondary bg-primary pt-4'>
          <div className='px-4'>
            <UntitledLogo className='h-8' />
          </div>

          <NavList items={items} />

          <div className='mt-auto flex flex-col gap-5 px-2 py-4'>
            <div className='flex flex-col gap-2'>
              <NavItemBase
                current={activeUrl === '/support'}
                type='link'
                label='Support'
                href='/support'
                icon={LifeBuoy01}
              />
              <NavItemBase
                current={activeUrl === '/settings'}
                type='link'
                label='Settings'
                href='/settings'
                icon={Settings01}
              />
            </div>

            <div className='relative flex items-center gap-3 border-t border-secondary pl-2 pr-8 pt-6'>
              <AvatarLabelGroup
                status='online'
                size='md'
                src='/avatars/olivia_rhye.jpg'
                title='Olivia Rhye'
                subtitle='olivia@untitledui.com'
              />

              <div className='absolute right-0 top-1/2 -translate-y-1/2'>
                <Button
                  size='sm'
                  color='tertiary-gray'
                  iconLeading={
                    <LogOut01 className='size-5 text-fg-quinary transition-inherit-all group-hover:text-fg-quinary_hover' />
                  }
                  className='!p-1.5'
                />
              </div>
            </div>
          </div>
        </aside>
      </MobileNavigationHeader>
    </>
  );
};

SidebarNavigationSlim.parameters = {
  design: {
    urls: {
      desktop:
        'https://www.figma.com/design/BXDc9uTbY80aquiwCK1FYs?node-id=1165-2013',
    },
  },
};

const navItemsWithDividers: (NavItemType | NavItemDividerType)[] = [
  {
    label: 'Home',
    href: '#',
    icon: HomeLine,
  },
  {
    label: 'Dashboard',
    href: '/dashboards',
    icon: BarChartSquare02,
  },
  {
    label: 'Projects',
    href: '#',
    icon: Rows01,
  },
  { divider: true },
  {
    label: 'Folders',
    icon: Folder,
    items: [
      { label: 'View all', badge: 18, href: '#' },
      { label: 'Recent', badge: 8, href: '#' },
      { label: 'Favorites', badge: 6, href: '#' },
      { label: 'Shared', badge: 4, href: '#' },
    ],
  },
  { divider: true },
  {
    label: 'Reporting',
    href: '#',
    icon: PieChart03,
  },
  {
    label: 'Settings',
    href: '#',
    icon: Settings01,
  },
  {
    label: 'Support',
    href: '#',
    icon: MessageChatCircle,
    badge: (
      <BadgeWithDot
        color='success'
        type='modern'
        size='sm'>
        Online
      </BadgeWithDot>
    ),
  },
  {
    label: 'Open in browser',
    href: 'https://google.com',
    icon: LayoutAlt01,
  },
];

interface SidebarNavigationSectionDividersProps {
  activeUrl?: string;
  items?: (NavItemType | NavItemDividerType)[];
}

export const SidebarNavigationSectionDividers = ({
  activeUrl,
  items = navItemsWithDividers,
}: SidebarNavigationSectionDividersProps) => {
  const content = (
    <aside className='flex h-full w-[292px] max-w-full flex-col justify-between overflow-auto border-r border-secondary bg-primary pt-4 shadow-xs lg:rounded-xl lg:border lg:pt-5'>
      <div className='flex flex-col gap-5 px-4 lg:px-5'>
        <UntitledLogo className='h-8' />
        <Input
          size='sm'
          placeholder='Search'
          icon={SearchLg}
        />
      </div>

      <NavList
        activeUrl={activeUrl}
        items={items}
        className='mt-5'
      />

      <div className='mt-auto flex flex-col gap-5 px-2 py-4 lg:gap-6 lg:px-4 lg:py-4'>
        <NavAccountCard />
      </div>
    </aside>
  );

  return (
    <>
      <div className='relative hidden h-screen overflow-visible lg:sticky lg:top-0 lg:inline-block lg:py-1 lg:pl-1'>
        {content}
      </div>
      <MobileNavigationHeader>{content}</MobileNavigationHeader>
    </>
  );
};

SidebarNavigationSectionDividers.parameters = {
  design: {
    urls: {
      desktop:
        'https://www.figma.com/design/BXDc9uTbY80aquiwCK1FYs?node-id=7893-127251',
    },
  },
};

const navItemsWithSectionsSubheadings: Array<{
  label: string;
  items: NavItemType[];
}> = [
  {
    label: 'General',
    items: [
      {
        label: 'Dashboard',
        href: '/',
        icon: BarChartSquare02,
      },
      {
        label: 'Projects',
        href: '/projects',
        icon: Rows01,
      },
      {
        label: 'Documents',
        href: '/documents',
        icon: File05,
      },
      {
        label: 'Calendar',
        href: '/calendar',
        icon: Calendar,
      },
    ],
  },
  {
    label: 'Untitled UI',
    items: [
      {
        label: 'Reporting',
        href: '#',
        icon: PieChart03,
      },
      {
        label: 'Tasks',
        href: '#',
        icon: CheckDone01,
        badge: (
          <Badge
            size='sm'
            type='modern'>
            8
          </Badge>
        ),
      },
      {
        label: 'Users',
        href: '#',
        icon: Users01,
      },
    ],
  },
  {
    label: 'Your teams',
    items: [
      {
        label: 'Catalog',
        href: '#',
        icon: () => (
          <Avatar
            src='/logos/images/Catalog.jpg'
            className='mr-2.5 size-5'
          />
        ),
        badge: (
          <div className='flex items-center gap-3'>
            <Badge
              size='sm'
              type='modern'>
              ⌘1
            </Badge>
            <ChevronRight
              size={16}
              className='text-fg-quinary'
            />
          </div>
        ),
      },
      {
        label: 'Warpspeed',
        href: '#',
        icon: () => (
          <Avatar
            src='/logos/images/Warpspeed.jpg'
            className='mr-2.5 size-5'
          />
        ),
        badge: (
          <div className='flex items-center gap-3'>
            <Badge
              size='sm'
              type='modern'>
              ⌘2
            </Badge>
            <ChevronRight
              size={16}
              className='text-fg-quinary'
            />
          </div>
        ),
      },
      {
        label: 'Boltshift',
        href: '#',
        icon: () => (
          <Avatar
            src='/logos/images/Boltshift.jpg'
            className='mr-2.5 size-5'
          />
        ),
        badge: (
          <div className='flex items-center gap-3'>
            <Badge
              size='sm'
              type='modern'>
              ⌘3
            </Badge>
            <ChevronRight
              size={16}
              className='text-fg-quinary'
            />
          </div>
        ),
      },
      {
        label: 'Sisyphus',
        href: '#',
        icon: () => (
          <Avatar
            src='/logos/images/Sisyphus.jpg'
            className='mr-2.5 size-5'
          />
        ),
        badge: (
          <div className='flex items-center gap-3'>
            <Badge
              size='sm'
              type='modern'>
              ⌘4
            </Badge>
            <ChevronRight
              size={16}
              className='text-fg-quinary'
            />
          </div>
        ),
      },
    ],
  },
];

interface SidebarNavigationSectionsSubheadingsProps {
  activeUrl?: string;
  items?: Array<{ label: string; items: NavItemType[] }>;
}

export const SidebarNavigationSectionsSubheadings = ({
  activeUrl = '/',
  items = navItemsWithSectionsSubheadings,
}: SidebarNavigationSectionsSubheadingsProps) => {
  const content = (
    <aside className='flex h-full w-[292px] max-w-full flex-col justify-between overflow-auto border-r border-secondary bg-primary pt-4 shadow-xs lg:rounded-xl lg:border lg:pt-5'>
      <div className='flex flex-col gap-5 px-4 lg:px-5'>
        <UntitledLogo className='h-8' />
      </div>

      <ul className='mt-8'>
        {items.map((group) => (
          <li>
            <div className='px-5 pb-1'>
              <p className='text-xs font-bold uppercase text-quaternary'>
                {group.label}
              </p>
            </div>
            <ul className='px-4 pb-5'>
              {group.items.map((item) => (
                <li
                  key={item.label}
                  className='py-0.5'>
                  <NavItemBase
                    label={item.label}
                    icon={item.icon}
                    href={item.href}
                    badge={item.badge}
                    type='link'
                    current={item.href === activeUrl}
                  />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <div className='mt-auto flex flex-col gap-5 px-2 py-4 lg:gap-6 lg:px-4 lg:py-4'>
        <NavAccountCard />
      </div>
    </aside>
  );

  return (
    <>
      <div className='relative hidden h-screen overflow-visible lg:sticky lg:top-0 lg:inline-block lg:py-1 lg:pl-1'>
        {content}
      </div>
      <MobileNavigationHeader>{content}</MobileNavigationHeader>
    </>
  );
};

SidebarNavigationSectionsSubheadings.parameters = {
  design: {
    urls: {
      desktop:
        'https://www.figma.com/design/BXDc9uTbY80aquiwCK1FYs/?node-id=7901-412479',
    },
  },
};
