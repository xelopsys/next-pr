import { createContext, forwardRef, useContext, type ReactNode } from "react";
import { RadioGroupProps as AriaRadioGroupProps, Radio, RadioGroup, type RadioProps as AriaRadioProps } from "react-aria-components";

import { cx } from "@/components/utils";

export interface RadioButtonGroupContextType {
    size?: "sm" | "md";
}

const RadioButtonGroupContext = createContext<RadioButtonGroupContextType | null>(null);

export interface RadioButtonBaseProps {
    size?: "sm" | "md";
    className?: string;
    isFocused?: boolean;
    isSelected?: boolean;
    isDisabled?: boolean;
}

export const RadioButtonBase = ({ className, isFocused, isSelected, isDisabled, size = "sm" }: RadioButtonBaseProps) => {
    return (
        <div
            className={cx(
                "flex size-4 min-h-4 min-w-4 cursor-pointer appearance-none items-center justify-center rounded-full bg-primary ring-1 ring-inset ring-border-primary",
                size === "md" && "size-5 min-h-5 min-w-5",
                isSelected && !isDisabled && "bg-brand-solid ring-bg-brand-solid",
                isDisabled && "cursor-not-allowed border-disabled bg-disabled_subtle",
                isFocused && "outline outline-2 outline-offset-2 outline-focus-ring",
                className,
            )}
        >
            <div
                className={cx(
                    "size-1.5 rounded-full bg-fg-white opacity-0 transition-inherit-all",
                    size === "md" && "size-2",
                    isDisabled && "bg-fg-disabled_subtle",
                    isSelected && "opacity-100",
                )}
            />
        </div>
    );
};
RadioButtonBase.displayName = "RadioButtonBase";

interface RadioButtonProps extends AriaRadioProps {
    size?: "sm" | "md";
    label?: ReactNode;
    hint?: ReactNode;
}

export const RadioButton = forwardRef<HTMLLabelElement, RadioButtonProps>(({ label, hint, className, size = "sm", ...ariaRadioProps }, ref) => {
    const context = useContext(RadioButtonGroupContext);

    size = context?.size ?? size;

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
        <Radio
            {...ariaRadioProps}
            ref={ref}
            className={(renderProps) =>
                cx(
                    "flex items-start",
                    renderProps.isDisabled && "cursor-not-allowed",
                    sizes[size].root,
                    typeof className === "function" ? className(renderProps) : className,
                )
            }
        >
            {({ isSelected, isDisabled, isFocused }) => (
                <>
                    <RadioButtonBase
                        size={size}
                        isSelected={isSelected}
                        isDisabled={isDisabled}
                        isFocused={isFocused}
                        className={label || hint ? "mt-0.5" : ""}
                    />
                    {(label || hint) && (
                        <div className={cx("inline-flex flex-col", sizes[size].textWrapper)}>
                            {label && <p className={cx("select-none text-secondary", sizes[size].label)}>{label}</p>}
                            {hint && (
                                <span className={cx("pointer-events-none text-tertiary", sizes[size].hint)} onClick={(event) => event.stopPropagation()}>
                                    {hint}
                                </span>
                            )}
                        </div>
                    )}
                </>
            )}
        </Radio>
    );
});
RadioButton.displayName = "Checkbox";

interface RadioButtonGroupProps extends RadioButtonGroupContextType, AriaRadioGroupProps {
    children: ReactNode;
    className?: string;
}

export const RadioButtonGroup = ({ children, className, size = "sm", ...props }: RadioButtonGroupProps) => {
    return (
        <RadioButtonGroupContext.Provider value={{ size }}>
            <RadioGroup {...props} className={cx("flex flex-col gap-1.5", size === "md" && "gap-2", className)}>
                {children}
            </RadioGroup>
        </RadioButtonGroupContext.Provider>
    );
};
