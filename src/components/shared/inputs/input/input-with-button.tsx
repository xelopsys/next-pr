import { cx } from '@/components/utils';
import { TextField } from 'react-aria-components';
import Label from '@/components/shared/inputs/label';
import React, { ElementRef, forwardRef, ReactNode } from 'react';
import { Copy01 } from '@a-peak-works/untitledui-icons';
import Button, { CommonProps } from '@/components/Button';
import HintText from '@/components/shared/inputs/hint-text';
import { InputBaseProps, InputBase } from '@/components/shared/inputs/input';

interface InputWithButtonProps extends Omit<InputBaseProps, 'icon'> {
  buttonText: string;
  onClick?: () => void;
  buttonColor?: CommonProps['color'];
  iconLeading?: CommonProps['iconLeading'];
  iconTrailing?: CommonProps['iconTrailing'];
  hint?: ReactNode;
}

export const InputWithButton = forwardRef<
  ElementRef<typeof TextField>,
  InputWithButtonProps
>(
  (
    {
      size = 'sm',
      buttonColor = 'secondary-gray',
      iconLeading = Copy01,
      onClick,
      className,
      buttonText,
      label,
      hint,
      ...props
    },
    ref
  ) => {
    return (
      <TextField
        ref={ref}
        aria-label={!label ? props?.placeholder : undefined}
        {...props}
        className={(state) =>
          cx(
            'flex h-max w-full flex-col items-start justify-start gap-sm',
            typeof className === 'function' ? className(state) : className
          )
        }>
        {({ isDisabled, isInvalid, isRequired }) => (
          <>
            {label && <Label {...{ isRequired }}>{label}</Label>}

            <div className='flex h-max w-full flex-row justify-center'>
              <InputBase
                {...props}
                {...{ isDisabled, isInvalid }}
                wrapperClassName='rounded-r-none'
              />

              <Button
                onClick={onClick}
                color={buttonColor}
                iconLeading={iconLeading}
                size={size === 'sm' ? 'md' : 'lg'}
                className='-ml-px rounded-l-none !shadow-xs ring-1 ring-inset ring-border-primary focus:z-10'>
                {buttonText}
              </Button>
            </div>

            {hint && <HintText {...{ isInvalid }}>{hint}</HintText>}
          </>
        )}
      </TextField>
    );
  }
);

InputWithButton.displayName = 'InputWithButton';
