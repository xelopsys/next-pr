import { cx } from "@/components/utils";
import { ReactNode } from "react";
import { Switch, SwitchProps } from "react-aria-components";

interface ToggleBaseProps {
    size?: "sm" | "md";
    slim?: boolean;
    className?: string;
    isHovered?: boolean;
    isFocused?: boolean;
    isSelected?: boolean;
    isDisabled?: boolean;
}

export const ToggleBase = ({ className, isHovered, isDisabled, isFocused, isSelected, slim, size = "sm" }: ToggleBaseProps) => {
    const styles = {
        default: {
            sm: {
                root: "h-5 w-9 p-0.5",
                switch: cx("size-4", isSelected && "translate-x-4"),
            },
            md: {
                root: "h-6 w-11 p-0.5",
                switch: cx("size-5", isSelected && "translate-x-5"),
            },
        },
        slim: {
            sm: {
                root: "h-4 w-8",
                switch: cx("size-4", isSelected && "translate-x-4"),
            },
            md: {
                root: "h-5 w-10",
                switch: cx("size-5", isSelected && "translate-x-5"),
            },
        },
    };

    const classes = slim ? styles.slim[size] : styles.default[size];

    return (
        <div
            className={cx(
                "cursor-pointer rounded-full bg-tertiary transition duration-200 ease-in-out",
                isSelected && "bg-brand-solid",
                isSelected && isHovered && "bg-brand-solid_hover",
                isDisabled && "cursor-not-allowed bg-disabled",
                isFocused && "outline outline-2 outline-offset-2 outline-focus-ring",

                slim && "ring-1 ring-inset ring-border-secondary",
                slim && isSelected && "ring-transparent",
                classes.root,
                className,
            )}
        >
            <div
                className={cx(
                    "rounded-full bg-fg-white shadow-sm transition-inherit",
                    isDisabled && "bg-toggle-button-fg_disabled",

                    slim && "shadow-xs",
                    slim && "ring-toggle-border ring-1 ring-inset",
                    slim && isSelected && "ring-toggle-border_pressed",
                    slim && isSelected && isHovered && "ring-toggle-border_pressed-hover",

                    classes.switch,
                )}
            />
        </div>
    );
};

interface ToggleProps extends SwitchProps {
    size?: "sm" | "md";
    label?: string;
    hint?: ReactNode;
    slim?: boolean;
}

export const Toggle = ({ label, hint, className, size = "sm", slim, ...ariaSwitchProps }: ToggleProps) => {
    const sizes = {
        sm: {
            root: "gap-2",
            textWrapper: "",
            label: "tt-sm-md",
            hint: "tt-sm",
        },
        md: {
            root: "gap-3",
            textWrapper: "gap-0.5",
            label: "tt-md-md",
            hint: "tt-md",
        },
    };

    return (
        <Switch
            {...ariaSwitchProps}
            className={(renderProps) =>
                cx(
                    "flex items-start",
                    renderProps.isDisabled && "cursor-not-allowed",
                    sizes[size].root,
                    typeof className === "function" ? className(renderProps) : className,
                )
            }
        >
            {({ isSelected, isDisabled, isFocused, isHovered }) => (
                <>
                    <ToggleBase
                        slim={slim}
                        size={size}
                        isHovered={isHovered}
                        isDisabled={isDisabled}
                        isFocused={isFocused}
                        isSelected={isSelected}
                        className={slim ? "mt-0.5" : ""}
                    />

                    {(label || hint) && (
                        <div className={cx("flex flex-col", sizes[size].textWrapper)}>
                            {label && <p className={cx("select-none text-secondary", sizes[size].label)}>{label}</p>}
                            {hint && (
                                <span className={cx("text-tertiary", sizes[size].hint)} onClick={(event) => event.stopPropagation()}>
                                    {hint}
                                </span>
                            )}
                        </div>
                    )}
                </>
            )}
        </Switch>
    );
};
