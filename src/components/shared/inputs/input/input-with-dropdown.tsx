import { cx, sortCx } from '@/components/utils';
import Label from '@/components/shared/inputs/label';
import React, { ElementRef, forwardRef } from 'react';
import { TextField, Key } from 'react-aria-components';
import HintText from '@/components/shared/inputs/hint-text';
import { ChevronDown } from '@a-peak-works/untitledui-icons';
import { InputBase, InputBaseProps } from '@/components/shared/inputs/input';

interface SelectorComponentProps {
  size: 'sm' | 'md';
  options: Option[];
  selectedKey?: Key;
  className?: string;
  isInvalid?: boolean;
  selectName?: string;
  isDisabled?: boolean;
  iconClassName?: string;
  onSelectionChange?: (value: Key) => void;
}

const SelectorComponent = forwardRef<HTMLDivElement, SelectorComponentProps>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        className='relative inline-flex h-full items-center'>
        <select
          name={props.selectName}
          value={props.selectedKey}
          disabled={props.isDisabled}
          autoComplete='input-dropdown'
          onChange={(e) => props.onSelectionChange?.(e.target.value)}
          className={cx(
            'flex h-full w-min appearance-none items-center gap-xs bg-inherit px-lg py-md text-secondary outline-none ring-inset tt-md focus:ring-2 focus:ring-border-brand disabled:cursor-not-allowed',
            props.isInvalid && 'focus:ring-2 focus:ring-border-error',
            props.className
          )}>
          {props.options.map((option) => (
            <option
              key={option.value}
              value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown
          className={cx(
            'pointer-events-none absolute right-0 size-5 text-fg-quinary',
            props.iconClassName
          )}
        />
      </div>
    );
  }
);

SelectorComponent.displayName = 'SelectorComponent';

type Option = {
  label: string;
  value: string | number;
};

interface InputWithDropdownProps extends Omit<InputBaseProps, 'icon'> {
  selectedKey?: Key;
  selectName?: string;
  leadingText?: string;
  leadingOptions?: Option[];
  trailingOptions?: Option[];
  onSelectionChange?: (value: Key) => void; // Dropdown value change
}

export const InputWithDropdown = forwardRef<
  ElementRef<typeof TextField>,
  InputWithDropdownProps
>(
  (
    {
      size = 'sm',
      leadingOptions,
      trailingOptions,
      leadingText,
      className,
      selectedKey,
      label,
      hint,
      onChange,
      onSelectionChange,
      ...props
    },
    ref
  ) => {
    const hasLeadingDropdown = !!leadingOptions?.length;
    const hasTrailingDropdown = !!trailingOptions?.length;

    const paddings = sortCx({
      sm: {
        input: cx(
          hasLeadingDropdown && 'px-2.5 pl-2.5',
          hasTrailingDropdown && (leadingText ? '!pr-6 pl-0' : '!pr-6 pl-lg')
        ),
        leadingText: 'pl-lg',
        dropdownLeading: 'rounded-l-lg py-md pl-lg pr-4.5',
        dropdownTrailing: 'rounded-r-lg py-md pl-lg pr-9',
        dropdownTrailingIcon: 'right-lg',
      },
      md: {
        input: cx(
          hasLeadingDropdown && 'px-3 pl-3',
          hasTrailingDropdown && (leadingText ? '!pl-0 !pr-6' : '!pl-lg !pr-6')
        ),
        leadingText: 'pl-3.5',
        dropdownLeading: 'rounded-l-lg py-2.5 pl-3.5 pr-4.5',
        dropdownTrailing: 'rounded-r-lg py-2.5 pl-3.5 pr-9.5',
        dropdownTrailingIcon: 'right-3.5',
      },
    });

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

            <div
              className={cx(
                'relative flex h-max w-full flex-row justify-start rounded-lg bg-primary shadow-xs ring-1 ring-inset ring-border-primary transition-all duration-100 ease-linear',

                // Only apply focus ring when child input is focused
                'has-[input:focus]:ring-2 has-[input:focus]:ring-border-brand',

                isDisabled &&
                  'cursor-not-allowed bg-disabled_subtle ring-border-disabled',
                isInvalid &&
                  'ring-border-error_subtle has-[input:focus]:ring-border-error'
              )}>
              {/* leading dropdown with padding style */}
              {hasLeadingDropdown && (
                <SelectorComponent
                  {...{
                    size,
                    isInvalid,
                    isDisabled,
                    selectedKey,
                    onSelectionChange,
                    options: leadingOptions,
                    className: paddings[size].dropdownLeading,
                    name: props.selectName,
                  }}
                />
              )}

              {/* leading text if trailing dropdown is applied */}
              {leadingText && (
                <span
                  className={cx(
                    'my-auto grow pr-md',
                    paddings[size].leadingText
                  )}>
                  <p className='text-secondary tt-md'>{leadingText}</p>
                </span>
              )}

              <InputBase
                {...props}
                {...{ isDisabled, isInvalid }}
                wrapperClassName={cx(
                  'bg-transparent !shadow-none ring-0 focus-within:ring-0'
                )}
                inputClassName={cx(paddings[size].input)}
                tooltipClassName={cx(hasTrailingDropdown && 'right-0')}
              />

              {/* trailing dropdown with padding style */}
              {hasTrailingDropdown && (
                <SelectorComponent
                  {...{
                    size,
                    isInvalid,
                    isDisabled,
                    selectedKey,
                    onSelectionChange,
                    options: trailingOptions,
                    iconClassName: paddings[size].dropdownTrailingIcon,
                    className: paddings[size].dropdownTrailing,
                    name: props.selectName,
                  }}
                />
              )}
            </div>

            {hint && <HintText {...{ isInvalid }}>{hint}</HintText>}
          </>
        )}
      </TextField>
    );
  }
);

InputWithDropdown.displayName = 'InputWithDropdown';
