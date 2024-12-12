import React, { DetailedHTMLProps, FC, forwardRef, isValidElement, ReactNode } from "react";

import { cx, sortCx } from "@/components/utils";
import { isReactComponent } from "@/components/utils/isReactComponent";
import { Button as AriaButton, ButtonProps as AriaButtonProps } from "react-aria-components";
import { Tooltip } from "../tooltips/tooltips";

export const styles = sortCx({
    common: {
        root: "group relative inline-flex h-max items-center justify-center transition duration-100 ease-linear focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-brand disabled:cursor-not-allowed disabled:text-fg-disabled_subtle",
        icon: "pointer-events-none shrink-0 text-current transition-inherit-all",
    },

    sizes: {
        xs: {
            root: "rounded-md p-1.5",
            icon: "size-4",
        },
        sm: {
            root: "rounded-md p-1.5",
            icon: "size-5",
        },
    },

    colors: {
        secondary: {
            root: "bg-button-secondary-bg text-fg-quinary ring-1 ring-inset ring-button-secondary-border enabled:shadow-xs-skeumorphic enabled:hover:bg-button-secondary-bg_hover enabled:hover:text-fg-quinary_hover enabled:hover:ring-button-secondary-border_hover disabled:shadow-xs disabled:ring-border-disabled_subtle",
        },
        tertiary: {
            root: "text-fg-quinary enabled:hover:bg-button-tertiary-bg_hover enabled:hover:text-fg-quinary_hover",
        },
    },
});

export interface CommonProps {
    disabled?: boolean;
    color?: keyof typeof styles.colors;
    size?: keyof typeof styles.sizes;
    icon?: FC<{ className?: string }> | ReactNode;
}

export interface ButtonProps extends CommonProps, DetailedHTMLProps<Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color" | "slot">, HTMLButtonElement> {
    slot?: AriaButtonProps["slot"];
    tooltip?: string;
}

const ButtonUtility = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            size = "sm",
            color = "secondary",
            className,
            icon: Icon,
            children,
            onClick,
            disabled,
            tooltip,

            ...rest
        },
        ref,
    ) => {
        const Component = "href" in rest ? "a" : AriaButton;

        const content = (
            <Component
                isDisabled={disabled}
                type="button"
                // Remove `any` type assertion after splitting
                // Component into Link and Button.
                {...(rest as any)}
                onPress={(event) => {
                    // @ts-expect-error FIX ME
                    rest.onPress?.(event);
                    onClick?.(event as any);
                }}
                ref={ref}
                className={cx(
                    styles.common.root,
                    styles.sizes[size].root,
                    styles.colors[color].root,

                    color === "tertiary" && size === "xs" && "p-2",
                    className,
                )}
            >
                {isReactComponent(Icon) && <Icon data-icon="leading" className={cx(styles.common.icon, styles.sizes[size].icon)} />}
                {isValidElement(Icon) && Icon}
            </Component>
        );

        if (tooltip) {
            return (
                <Tooltip title={tooltip} offset={size === "xs" ? 4 : 6} arrow={false}>
                    {content}
                </Tooltip>
            );
        }

        return content;
    },
);

export default ButtonUtility;
