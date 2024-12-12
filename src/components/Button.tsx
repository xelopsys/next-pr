'use client';

import { cx, sortCx } from '@/components/utils';
import { isReactComponent } from '@/components/utils/isReactComponent';
import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
} from 'react-aria-components';
import React, {
  FC,
  ReactNode,
  forwardRef,
  isValidElement,
  DetailedHTMLProps,
} from 'react';
import Link from 'next/link';

export const styles = sortCx({
  common: {
    root: 'group relative inline-flex h-max items-center justify-center whitespace-nowrap font-semibold transition duration-100 ease-linear before:absolute cursor-pointer focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-brand data-[disabled=true]:cursor-not-allowed data-[disabled=true]:stroke-fg-disabled data-[disabled=true]:text-fg-disabled *:data-[disabled=true]:text-fg-disabled',
    icon: 'pointer-events-none shrink-0 text-current transition-inherit-all',
  },

  sizes: {
    sm: {
      root: 'gap-1 rounded-lg px-3 py-2 text-sm leading-sm before:rounded-[7px] data-[icon-only=true]:p-2',
      linkRoot: 'gap-1.5',
      icon: 'size-5',
    },
    md: {
      root: 'gap-1 rounded-lg px-3.5 py-2.5 text-sm leading-sm before:rounded-[7px] data-[icon-only=true]:p-2.5',
      linkRoot: 'gap-1.5',
      icon: 'size-5',
    },
    lg: {
      root: 'gap-1.5 rounded-lg px-xl py-2.5 text-md leading-md before:rounded-[7px] data-[icon-only=true]:p-3',
      linkRoot: 'gap-2',
      icon: 'size-5',
    },
    xl: {
      root: 'gap-1.5 rounded-lg px-4.5 py-3 text-md leading-md before:rounded-[7px] data-[icon-only=true]:p-3.5',
      linkRoot: 'gap-2',
      icon: 'size-5',
    },
    '2xl': {
      root: 'gap-2 rounded-[10px] px-5.5 py-4 text-lg leading-lg before:rounded-[9px] data-[icon-only=true]:p-4',
      linkRoot: 'gap-2',
      icon: 'size-6',
    },
  },

  colors: {
    primary: {
      root: 'bg-button-primary-bg text-button-primary-fg ring-1 ring-inset ring-transparent before:absolute before:inset-px before:border before:border-white before:border-opacity-[.12] before:mask-image-b enabled:shadow-xs-skeumorphic enabled:hover:bg-button-primary-bg_hover data-[disabled=true]:bg-disabled data-[disabled=true]:shadow-xs data-[disabled=true]:ring-border-disabled_subtle',
    },
    'secondary-gray': {
      root: 'bg-button-secondary-bg text-button-secondary-fg ring-1 ring-inset ring-button-secondary-border enabled:shadow-xs-skeumorphic enabled:hover:bg-button-secondary-bg_hover enabled:hover:text-button-secondary-fg_hover data-[disabled=true]:shadow-xs data-[disabled=true]:ring-border-disabled_subtle',
    },
    'secondary-color': {
      root: 'bg-button-secondary-color-bg text-button-secondary-color-fg ring-1 ring-inset ring-button-secondary-color-border enabled:shadow-xs-skeumorphic enabled:hover:bg-button-secondary-color-bg_hover enabled:hover:text-button-secondary-color-fg_hover enabled:hover:ring-button-secondary-color-border_hover data-[disabled=true]:shadow-xs data-[disabled=true]:ring-border-disabled_subtle',
    },
    'tertiary-gray': {
      root: 'text-button-tertiary-fg enabled:hover:bg-button-tertiary-bg_hover enabled:hover:text-button-tertiary-fg_hover',
    },
    'tertiary-color': {
      root: 'text-button-tertiary-color-fg enabled:hover:bg-button-tertiary-color-bg_hover enabled:hover:text-button-tertiary-color-fg_hover',
    },
    'link-gray': {
      root: 'bg-button-tertiary-bg justify-normal rounded-xs !p-0 text-button-tertiary-fg enabled:hover:text-button-tertiary-fg_hover',
    },
    'link-color': {
      root: 'bg-button-tertiary-color-bg justify-normal rounded-xs !p-0 text-button-tertiary-color-fg enabled:hover:text-button-tertiary-color-fg_hover',
    },
    'primary-destructive': {
      root: 'bg-button-primary-error-bg text-button-primary-error-fg ring-1 ring-inset ring-transparent before:absolute before:inset-px before:border before:border-white before:border-opacity-[.12] before:mask-image-b enabled:shadow-xs-skeumorphic enabled:hover:bg-button-primary-error-bg_hover focus:outline-error data-[disabled=true]:bg-disabled data-[disabled=true]:shadow-xs data-[disabled=true]:ring-border-disabled_subtle',
    },
    'secondary-destructive': {
      root: 'bg-button-secondary-error-bg text-button-secondary-error-fg ring-1 ring-inset ring-button-secondary-error-border enabled:shadow-xs-skeumorphic enabled:hover:bg-button-secondary-error-bg_hover enabled:hover:text-button-secondary-error-fg_hover enabled:hover:ring-button-secondary-error-border_hover focus:outline-error data-[disabled=true]:bg-primary data-[disabled=true]:shadow-xs data-[disabled=true]:ring-border-disabled_subtle',
    },
    'tertiary-destructive': {
      root: 'text-button-tertiary-error-fg enabled:hover:bg-button-tertiary-error-bg_hover enabled:hover:text-button-tertiary-error-fg_hover focus:outline-2 focus:outline-error',
    },
    'link-destructive': {
      root: 'justify-normal rounded-xs !p-0 text-button-tertiary-error-fg enabled:hover:text-button-tertiary-error-fg_hover focus:outline-2 focus:outline-error',
    },
  },
});

export interface CommonProps {
  disabled?: boolean;
  noTextPadding?: boolean;
  size?: keyof typeof styles.sizes;
  color?: keyof typeof styles.colors;
  iconLeading?: FC<{ className?: string }> | ReactNode;
  iconTrailing?: FC<{ className?: string }> | ReactNode;
}

export interface ButtonProps
  extends CommonProps,
    DetailedHTMLProps<
      Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color' | 'slot'>,
      HTMLButtonElement
    > {
  slot?: AriaButtonProps['slot'];
}

interface LinkProps
  extends CommonProps,
    DetailedHTMLProps<
      Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'color'>,
      HTMLAnchorElement
    > {}

export type Props = ButtonProps | LinkProps;

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      size = 'sm',
      color = 'primary',
      className,
      noTextPadding,
      iconLeading: IconLeading,
      iconTrailing: IconTrailing,
      children,
      onClick,
      disabled,
      ...rest
    },
    ref
  ) => {
    const Component = 'href' in rest ? Link : AriaButton;

    const disabledLink =
      'href' in rest && disabled && 'pointer-events-none cursor-not-allowed';

    const isIcon = (IconLeading || IconTrailing) && !children;

    const isLinkType = ['link-gray', 'link-color', 'link-destructive'].includes(
      color
    );
    noTextPadding = isLinkType || noTextPadding;

    return (
      <Component
        data-disabled={disabled}
        isDisabled={disabled}
        type='button'
        // Remove `any` type assertion after splitting
        // Component into Link and Button.
        {...(rest as any)}
        onPress={(event) => {
          // @ts-expect-error FIX ME
          rest.onPress?.(event);
          onClick?.(event as any);
        }}
        ref={ref}
        data-icon-only={isIcon}
        className={cx(
          styles.common.root,
          styles.sizes[size].root,
          isLinkType && styles.sizes[size].linkRoot,
          styles.colors[color].root,
          disabledLink,
          className
        )}>
        {/* Leading icon */}
        {isReactComponent(IconLeading) && (
          <IconLeading
            data-icon='leading'
            className={cx(styles.common.icon, styles.sizes[size].icon)}
          />
        )}
        {isValidElement(IconLeading) && IconLeading}

        {children && (
          <span className={cx(!noTextPadding && 'px-0.5')}>{children}</span>
        )}

        {/* Trailing icon */}
        {isReactComponent(IconTrailing) && (
          <IconTrailing
            data-icon='trailing'
            className={cx(styles.common.icon, styles.sizes[size].icon)}
          />
        )}
        {isValidElement(IconTrailing) && IconTrailing}
      </Component>
    );
  }
);

export default Button;
