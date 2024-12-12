import { cx } from '@/components/utils';
import Label from '@/components/shared/inputs/label';
import HintText from '@/components/shared/inputs/hint-text';
import { ElementRef, forwardRef, HTMLAttributes } from 'react';
import {
  InputBase,
  InputBaseProps,
  TextField,
} from '@/components/shared/inputs/input';

interface InputPrefixProps extends HTMLAttributes<HTMLDivElement> {
  position?: 'leading' | 'trailing';
  size?: 'sm' | 'md';
  isDisabled?: boolean;
}

export const InputPrefix = forwardRef<HTMLDivElement, InputPrefixProps>(
  (
    { position = 'leading', size = 'sm', isDisabled, children, ...props },
    ref
  ) => {
    const styles = {
      sm: 'px-lg py-md',
      md: 'py-2.5 pl-3.5 pr-lg',
    };

    return (
      <div
        ref={ref}
        {...props}
        className={cx(
          'flex text-fg-tertiary shadow-xs ring-1 ring-inset ring-border-primary tt-md',
          styles[size],
          position === 'leading' && '-mr-px rounded-l-lg',
          position === 'trailing' && '-ml-px rounded-r-lg',

          // Disabled state styles
          isDisabled && 'border-disabled bg-disabled_subtle',
          'group-disabled:border-disabled group-disabled:bg-disabled_subtle',

          props.className
        )}>
        {children}
      </div>
    );
  }
);

InputPrefix.displayName = 'InputPrefix';

interface InputWithPrefixProps extends Omit<InputBaseProps, 'icon'> {
  leadingText?: string;
  trailingText?: string;
}

export const InputWithPrefix = forwardRef<
  ElementRef<typeof TextField>,
  InputWithPrefixProps
>(
  (
    {
      size = 'sm',
      placeholder,
      leadingText,
      trailingText,
      className,
      label,
      hint,
      ...props
    },
    ref
  ) => {
    return (
      <TextField
        ref={ref}
        aria-label={!label ? placeholder : undefined}
        {...props}
        className={className}>
        {label && <Label>{label}</Label>}

        <div className='flex w-full'>
          {leadingText && (
            <InputPrefix
              position='leading'
              size={size}>
              {leadingText}
            </InputPrefix>
          )}

          <InputBase
            {...props}
            {...{ size, placeholder }}
            wrapperClassName={cx(
              trailingText && 'rounded-r-none',
              leadingText && 'rounded-l-none'
            )}
          />

          {trailingText && (
            <InputPrefix
              position='trailing'
              size={size}>
              {trailingText}
            </InputPrefix>
          )}
        </div>

        {hint && <HintText>{hint}</HintText>}
      </TextField>
    );
  }
);

InputWithPrefix.displayName = 'InputWithPrefix';
