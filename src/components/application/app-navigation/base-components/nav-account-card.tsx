import Button from '@/components/shared/buttons/button';
import { AvatarLabelGroup } from '@/components/shared/avatar/avatar-label-group';
import { RadioButtonBase } from '@/components/shared/radio-buttons/radio-buttons';
import { cx } from '@/components/utils';
import useBreakpoint from '@/components/utils/useBreakpoint';
import {
  BookOpen01,
  ChevronSelectorVertical,
  LogOut01,
  Plus,
  Settings01,
} from '@a-peak-works/untitledui-icons';
import { FC, HTMLAttributes, useEffect, useRef } from 'react';
import {
  Button as AriaButton,
  Dialog,
  DialogProps,
  DialogTrigger,
  Popover,
} from 'react-aria-components';
import { Placement } from '@react-types/overlays';
import { useFocusManager } from 'react-aria';
import { signOut } from 'next-auth/react';

type NavAccountType = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  status: 'online' | 'offline';
};

const placeholderAccounts: NavAccountType[] = [
  {
    id: 'olivia',
    name: 'Olivia Rhye',
    email: 'olivia@untitledui.com',
    avatar: '/avatars/olivia_rhye.jpg',
    status: 'online',
  },
  {
    id: 'sienna',
    name: 'Sienna Hewitt',
    email: 'sienna@untitledui.com',
    avatar: '/avatars/Sienna Hewitt.jpg',
    status: 'online',
  },
];

export const NavAccountMenu = ({
  className,
  accounts = placeholderAccounts,
  selectedAccountId = 'olivia',
  ...dialogProps
}: DialogProps & {
  className?: string;
  accounts?: NavAccountType[];
  selectedAccountId?: string;
}) => {
  const focusManager = useFocusManager();
  const dialogRef = useRef<HTMLDivElement>(null);

  const onKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        focusManager?.focusNext({ tabbable: true, wrap: true });
        break;
      case 'ArrowUp':
        focusManager?.focusPrevious({ tabbable: true, wrap: true });
        break;
    }
  };

  useEffect(() => {
    dialogRef.current?.addEventListener('keydown', onKeyDown);

    return () => {
      dialogRef.current?.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <Dialog
      {...dialogProps}
      ref={dialogRef}
      className={cx(
        'w-[264px] rounded-xl bg-secondary_alt shadow-lg outline-none ring-1 ring-inset ring-border-secondary',
        className
      )}>
      <div className='rounded-xl bg-primary ring-1 ring-inset ring-border-secondary'>
        <div className='flex flex-col gap-0.5 py-1.5'>
          <NavAccountCardMenuItem
            label='View profile'
            icon={LogOut01}
            shortcut='⌘K->P'
          />
          <NavAccountCardMenuItem
            label='Account settings'
            icon={Settings01}
            shortcut='⌘S'
          />
          <NavAccountCardMenuItem
            label='Documentation'
            icon={BookOpen01}
          />
        </div>
        <div className='flex flex-col gap-0.5 border-t border-secondary py-1.5'>
          <div className='px-3 pb-1 pt-1.5 text-tertiary tt-xs-semi'>
            Switch account
          </div>

          <div className='px-1.5'>
            {placeholderAccounts.map((account) => (
              <button
                key={account.id}
                className={cx(
                  'relative w-full rounded-md px-2 py-1.5 text-left hover:bg-primary_hover focus:z-10 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-focus-ring',
                  account.id === selectedAccountId && 'bg-primary_hover'
                )}>
                <AvatarLabelGroup
                  status='online'
                  size='md'
                  src={account.avatar}
                  title={account.name}
                  subtitle={account.email}
                />

                <RadioButtonBase
                  isSelected={account.id === selectedAccountId}
                  className='absolute right-1.5 top-1.5'
                />
              </button>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-2 px-2 pb-2 pt-0.5'>
          <Button
            iconLeading={Plus}
            color='secondary-gray'
            size='sm'>
            Add account
          </Button>
        </div>
      </div>

      <div className='pb-1.5 pt-1'>
        <NavAccountCardMenuItem
          label='Sign out'
          icon={LogOut01}
          shortcut='⌥⇧Q'
          onClick={() => signOut()}
        />
      </div>
    </Dialog>
  );
};

const NavAccountCardMenuItem = ({
  icon: Icon,
  label,
  shortcut,
  ...buttonProps
}: {
  icon?: FC<{ className?: string }>;
  label: string;
  shortcut?: string;
} & HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...buttonProps}
      className={cx(
        'group/item w-full px-1.5 focus:outline-none',
        buttonProps.className
      )}>
      <div
        className={cx(
          'flex w-full items-center justify-between gap-3 rounded-md p-2 group-hover/item:bg-primary_hover',
          'group-focus/item:outline group-focus/item:outline-2 group-focus/item:outline-offset-2 group-focus/item:outline-focus-ring'
        )}>
        <div className='flex gap-2 text-secondary tt-sm-semi group-hover/item:text-secondary_hover'>
          {Icon && <Icon className='size-5 text-nav-item-icon-fg' />} {label}
        </div>

        {shortcut && (
          <kbd className='flex rounded px-1 py-[1px] font-body text-tertiary ring-1 ring-inset ring-border-secondary tt-xs-md'>
            {shortcut}
          </kbd>
        )}
      </div>
    </button>
  );
};

export const NavAccountCard = ({
  popoverPlacement,
  selectedAccountId = 'olivia',
}: {
  popoverPlacement?: Placement;
  selectedAccountId?: string;
}) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const isDesktop = useBreakpoint('lg');

  const selectedAccount = placeholderAccounts.find(
    (account) => account.id === selectedAccountId
  );

  if (!selectedAccount) {
    console.warn(
      `Account with ID ${selectedAccountId} not found in <NavAccountCard />`
    );
    return null;
  }

  return (
    <div
      ref={triggerRef}
      className='relative flex items-center gap-3 rounded-xl p-3 shadow-xs ring-1 ring-inset ring-border-secondary'>
      <AvatarLabelGroup
        size='md'
        src={selectedAccount.avatar}
        title={selectedAccount.name}
        subtitle={selectedAccount.email}
        status={selectedAccount.status}
      />

      <div className='absolute right-1.5 top-1.5'>
        <DialogTrigger>
          <AriaButton className='flex size-8 items-center justify-center rounded-md p-4 text-fg-quinary hover:bg-button-tertiary-bg_hover hover:text-fg-quinary_hover focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-focus-ring'>
            <ChevronSelectorVertical className='size-5 shrink-0' />
          </AriaButton>
          <Popover
            placement={
              popoverPlacement ?? (isDesktop ? 'right bottom' : 'top right')
            }
            triggerRef={triggerRef}
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
            <NavAccountMenu
              selectedAccountId={selectedAccountId}
              accounts={placeholderAccounts}
            />
          </Popover>
        </DialogTrigger>
      </div>
    </div>
  );
};
