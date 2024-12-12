import { cx, sortCx } from '@/components/utils';
import Label from '@/components/shared/inputs/label';
import HintText from '@/components/shared/inputs/hint-text';
import { Tooltip, TooltipTrigger } from '@/components/tooltips/tooltips';
import { HelpCircle, InfoCircle } from '@a-peak-works/untitledui-icons';
import {
  ComponentType,
  ElementRef,
  forwardRef,
  HTMLAttributes,
  ReactNode,
  useId,
} from 'react';
import {
  Input as AriaInput,
  TextField as AriaTextField,
  Group,
  TextFieldProps,
} from 'react-aria-components';

export interface InputBaseProps extends TextFieldProps {
  label?: string;
  hint?: ReactNode;
  tooltip?: string;
  size?: 'sm' | 'md';
  placeholder?: string;
  iconClassName?: string;
  inputClassName?: string;
  wrapperClassName?: string;
  tooltipClassName?: string;
  icon?: ComponentType<HTMLAttributes<HTMLOrSVGElement>>;
}

export const InputBase = forwardRef<ElementRef<typeof Group>, InputBaseProps>(
  (
    {
      size = 'sm',
      placeholder,
      icon: Icon,
      isDisabled,
      isInvalid,
      tooltip,
      ...props
    },
    ref
  ) => {
    // Check if the input has a leading icon or tooltip
    const hasTrailingIcon = tooltip || isInvalid;
    const hasLeadingIcon = Icon;

    const inputProps: Record<string, unknown> = { placeholder };

    const _id = 'input-' + useId();
    const inputId = props.id || _id;
    inputProps['id'] = inputId;

    const sizes = sortCx({
      sm: {
        root: cx(
          'px-lg py-md',
          hasTrailingIcon && 'pr-9',
          hasLeadingIcon && 'pl-10'
        ),
        iconLeading: 'left-3',
        iconTrailing: 'right-3',
      },
      md: {
        root: cx(
          'px-3.5 py-2.5',
          hasTrailingIcon && 'pr-9.5',
          hasLeadingIcon && 'pl-10.5'
        ),
        iconLeading: 'left-3.5',
        iconTrailing: 'right-3.5',
      },
    });

    return (
      <Group
        ref={ref}
        {...{ isDisabled, isInvalid }}
        className={({ isFocusWithin, isDisabled, isInvalid }) =>
          cx(
            'relative flex w-full flex-row place-content-center place-items-center rounded-lg bg-primary shadow-xs ring-1 ring-inset ring-border-primary transition-all duration-100 ease-linear',

            isFocusWithin && !isDisabled && 'ring-2 ring-border-brand',

            // Disabled state styles
            isDisabled &&
              'cursor-not-allowed bg-disabled_subtle ring-border-disabled',
            'group-disabled:cursor-not-allowed group-disabled:bg-disabled_subtle group-disabled:ring-border-disabled',

            // Invalid state styles
            isInvalid && 'ring-border-error_subtle',
            'group-invalid:ring-border-error_subtle',

            // Invalid state with focus-within styles
            isInvalid && isFocusWithin && 'ring-2 ring-border-error',
            isFocusWithin &&
              'group-invalid:ring-2 group-invalid:ring-border-error',

            props.wrapperClassName
          )
        }>
        {/* for leading icon or payment icon */}

        {Icon && (
          <Icon
            className={cx(
              'pointer-events-none absolute size-5 text-fg-quaternary',
              sizes[size].iconLeading,
              props.iconClassName
            )}
          />
        )}

        {/* input field, where all padding styles are applied */}
        <AriaInput
          {...inputProps}
          className={cx(
            'm-0 w-full bg-transparent text-primary outline-none ring-0 tt-md placeholder:text-placeholder placeholder:select-none autofill:rounded-lg autofill:text-primary',
            isDisabled && 'cursor-not-allowed text-disabled',
            sizes[size].root,
            props.inputClassName
          )}
        />

        {/* for tooltip and helping icon */}
        {tooltip && !isInvalid && (
          <Tooltip
            title={tooltip}
            placement='top'>
            <TooltipTrigger
              className={cx(
                'absolute cursor-pointer text-fg-quinary',
                sizes[size].iconTrailing,
                props.tooltipClassName
              )}>
              <HelpCircle className='size-4' />
            </TooltipTrigger>
          </Tooltip>
        )}

        {/* for invalid icon */}
        {isInvalid && (
          <InfoCircle
            className={cx(
              'pointer-events-none absolute size-4 text-fg-error-secondary',
              sizes[size].iconTrailing
            )}
          />
        )}
      </Group>
    );
  }
);

InputBase.displayName = 'InputBase';

export const TextField = forwardRef<
  ElementRef<typeof AriaTextField>,
  TextFieldProps
>(({ className, ...props }, ref) => {
  return (
    <AriaTextField
      ref={ref}
      {...props}
      className={(state) =>
        cx(
          'group flex h-max w-full flex-col items-start justify-start gap-1.5',
          typeof className === 'function' ? className(state) : className
        )
      }>
      {props.children}
    </AriaTextField>
  );
});

TextField.displayName = 'TextField';

interface InputProps extends InputBaseProps {
  hideRequiredIndicator?: boolean;
}

export const Input = forwardRef<ElementRef<typeof TextField>, InputProps>(
  (
    {
      size = 'sm',
      placeholder = 'olivia@untitledui.com',
      icon: Icon,
      label,
      hint,
      hideRequiredIndicator,
      className,
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
        {label && (
          <Label
            isRequired={
              hideRequiredIndicator ? !hideRequiredIndicator : undefined
            }>
            {label}
          </Label>
        )}

        <InputBase
          {...props}
          {...{ size, placeholder, icon: Icon }}
        />

        {hint && <HintText>{hint}</HintText>}
      </TextField>
    );
  }
);

Input.displayName = 'Input';
