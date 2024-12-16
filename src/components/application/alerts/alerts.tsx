import {
  AlertCircle,
  CheckCircle,
  InfoCircle,
} from '@a-peak-works/untitledui-icons';
import Button from '@/components/shared/buttons/button';
import { FeaturedIconBase } from '@/components/foundations/featured-icon/featured-icons';
import { CloseButton } from '@/components/shared/buttons/close-button';
import { cx } from '@/components/utils';
import { ReactNode } from 'react';

const iconMap = {
  default: InfoCircle,
  brand: InfoCircle,
  gray: InfoCircle,
  error: AlertCircle,
  warning: AlertCircle,
  success: CheckCircle,
};

interface AlertProps {
  title: string;
  description: ReactNode;
  confirmLabel: string;
  color?: 'default' | 'brand' | 'gray' | 'error' | 'warning' | 'success';
  onClose?: () => void;
  onConfirm?: () => void;
}

export const AlertFloating = ({
  title,
  description,
  confirmLabel,
  onClose,
  onConfirm,
  color = 'default',
}: AlertProps) => {
  return (
    <div className='relative flex flex-col gap-4 rounded-xl border border-primary bg-primary_alt p-4 shadow-xs md:flex-row'>
      <FeaturedIconBase
        icon={iconMap[color]}
        color={color === 'default' ? 'gray' : color}
        theme={color === 'default' ? 'modern' : 'outline'}
        size='md'
      />

      <div className='flex flex-1 flex-col gap-3 md:w-0'>
        <div className='flex flex-col gap-1 overflow-auto'>
          <p className='pr-8 text-secondary tt-sm-semi md:truncate md:pr-0'>
            {title}
          </p>
          <p className='text-tertiary tt-sm md:truncate'>{description}</p>
        </div>

        <div className='flex gap-3'>
          <Button
            onClick={onClose}
            size='sm'
            color='link-gray'>
            Dismiss
          </Button>
          <Button
            onClick={onConfirm}
            size='sm'
            color='link-color'>
            {confirmLabel}
          </Button>
        </div>
      </div>

      <div className='absolute right-2 top-2 flex items-center justify-center'>
        <CloseButton
          onClick={onClose}
          size='sm'
          label='Dismiss'
        />
      </div>
    </div>
  );
};

AlertFloating.parameters = {
  design: {
    urls: {
      desktop:
        'https://www.figma.com/design/BXDc9uTbY80aquiwCK1FYs?node-id=4050-412599',
      mobile:
        'https://www.figma.com/design/BXDc9uTbY80aquiwCK1FYs?node-id=4050-412610',
    },
  },
};

export const AlertFullWidth = ({
  title,
  description,
  confirmLabel,
  onClose,
  onConfirm,
  color = 'default',
  actionType = 'button',
}: AlertProps & { actionType?: 'button' | 'link' }) => {
  return (
    <div className='relative border-t border-primary bg-secondary_subtle md:border-b md:border-t-0'>
      <div className='mx-auto flex max-w-container flex-col gap-4 p-4 md:flex-row md:items-center md:gap-3 md:px-8 md:py-3'>
        <div className='flex flex-1 flex-col gap-4 md:w-0 md:flex-row md:items-center'>
          <FeaturedIconBase
            className='hidden md:flex'
            icon={iconMap[color]}
            color={color === 'default' ? 'gray' : color}
            theme={color === 'default' ? 'modern' : 'outline'}
            size='md'
          />

          <div className='flex flex-col gap-0.5 overflow-hidden lg:flex-row lg:gap-1.5'>
            <p className='pr-8 text-secondary tt-sm-semi md:truncate md:pr-0'>
              {title}
            </p>
            <p className='text-tertiary tt-sm md:truncate'>{description}</p>
          </div>
        </div>
        <div className='flex gap-2'>
          <div
            className={cx(
              'flex w-full gap-3',
              actionType === 'button'
                ? 'flex-col-reverse md:flex-row'
                : 'flex-row'
            )}>
            <Button
              onClick={onClose}
              color={actionType === 'button' ? 'secondary-gray' : 'link-gray'}
              size={actionType === 'button' ? 'md' : 'sm'}>
              Dismiss
            </Button>
            <Button
              onClick={onConfirm}
              color={actionType === 'button' ? 'primary' : 'link-color'}
              size={actionType === 'button' ? 'md' : 'sm'}>
              {confirmLabel}
            </Button>
          </div>
          <div className='absolute right-2 top-2 flex shrink-0 items-center justify-center md:static'>
            <CloseButton
              onClick={onClose}
              size='sm'
              label='Dismiss'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

AlertFullWidth.parameters = {
  design: {
    urls: {
      desktop:
        'https://www.figma.com/design/BXDc9uTbY80aquiwCK1FYs?node-id=4893-410873',
      mobile:
        'https://www.figma.com/design/BXDc9uTbY80aquiwCK1FYs?node-id=4893-411092',
    },
  },
};
