import { cx, sortCx } from "@/components/utils";
import { isReactComponent } from "@/components/utils/isReactComponent";
import { ArrowRight } from "@a-peak-works/untitledui-icons";
import { FC, isValidElement, ReactNode } from "react";

type Size = "md" | "lg";
type Color = "brand" | "warning" | "error" | "gray" | "success";
type Theme = "light" | "outline" | "modern";
type Align = "leading" | "trailing";

const baseClasses: Record<Theme, { root?: string; addon?: string; icon?: string }> = {
    light: {
        root: "rounded-full ring-1 ring-inset",
        addon: "rounded-full ring-1 ring-inset",
    },
    outline: {
        root: "rounded-full ring-[1.5px] ring-inset",
        addon: "rounded-full ring-[1.5px] ring-inset",
    },
    modern: {
        root: "rounded-[10px] bg-primary text-secondary shadow-xs ring-1 ring-inset ring-border-primary hover:bg-secondary",
        addon: "flex items-center rounded-md bg-primary shadow-xs ring-1 ring-inset ring-border-primary",
        icon: "text-fg-quaternary",
    },
};

const getSizeClasses = (
    theme?: Theme,
    text?: boolean,
    icon?: boolean,
): Record<Align, Record<Size, { root?: string; addon?: string; icon?: string; dot?: string }>> => ({
    leading: {
        md: {
            root: cx("py-1 pl-1 pr-2.5 tt-xs-md", !text && !icon && "pr-1"),
            addon: cx("px-2 py-0.5", theme === "modern" && "gap-1 px-1.5", text && "mr-2"),
            icon: "ml-1 size-4",
        },
        lg: {
            root: cx("py-1 pl-1 pr-2.5 tt-sm-md", !text && !icon && "pr-1"),
            addon: cx("px-2.5 py-0.5", theme === "modern" && "gap-1.5 px-2", text && "mr-3"),
            icon: "ml-1 size-4",
        },
    },
    trailing: {
        md: {
            root: cx("py-1 pl-3 pr-1 tt-xs-md", theme === "modern" && "pl-2.5"),
            addon: cx("py-0.5 pl-2 pr-1.5", theme === "modern" && "pl-1.5 pr-1", text && "ml-2"),
            icon: "ml-1 size-3 stroke-[3px]",
            dot: "mr-1.5",
        },
        lg: {
            root: cx("py-1 pl-3.5 pr-1 tt-sm-md", theme === "modern" && "pl-3"),
            addon: cx("py-0.5 pl-2.5 pr-2", theme === "modern" && "pl-2 pr-1.5", text && "ml-3"),
            icon: "ml-1 size-3 stroke-[3px]",
            dot: "mr-2",
        },
    },
});

const colorClasses: Record<Theme, Record<Color, { root?: string; addon?: string; icon?: string; dot?: string }>> = sortCx({
    light: {
        brand: {
            root: "bg-utility-brand-50 text-utility-brand-700 ring-utility-brand-200 hover:bg-utility-brand-100",
            addon: "bg-primary text-current ring-utility-brand-200",
            icon: "text-utility-brand-500",
        },
        gray: {
            root: "bg-utility-gray-50 text-utility-gray-700 ring-utility-gray-200 hover:bg-utility-gray-100",
            addon: "bg-primary text-current ring-utility-gray-200",
            icon: "text-utility-gray-500",
        },
        error: {
            root: "bg-utility-error-50 text-utility-error-700 ring-utility-error-200 hover:bg-utility-error-100",
            addon: "bg-primary text-current ring-utility-error-200",
            icon: "text-utility-error-500",
        },
        warning: {
            root: "bg-utility-warning-50 text-utility-warning-700 ring-utility-warning-200 hover:bg-utility-warning-100",
            addon: "bg-primary text-current ring-utility-warning-200",
            icon: "text-utility-warning-500",
        },
        success: {
            root: "bg-utility-success-50 text-utility-success-700 ring-utility-success-200 hover:bg-utility-success-100",
            addon: "bg-primary text-current ring-utility-success-200",
            icon: "text-utility-success-500",
        },
    },
    outline: {
        brand: {
            root: "bg-primary text-utility-brand-700 ring-utility-brand-600 hover:bg-utility-gray-50",
            addon: "bg-primary text-current ring-utility-brand-600",
            icon: "text-utility-brand-500",
        },
        gray: {
            root: "bg-primary text-utility-gray-700 ring-utility-gray-600 hover:bg-utility-gray-50",
            addon: "bg-primary text-current ring-utility-gray-600",
            icon: "text-utility-gray-500",
        },
        error: {
            root: "bg-primary text-utility-error-700 ring-utility-error-600 hover:bg-utility-error-50",
            addon: "bg-primary text-current ring-utility-error-600",
            icon: "text-utility-error-500",
        },
        warning: {
            root: "bg-primary text-utility-warning-700 ring-utility-warning-600 hover:bg-utility-warning-50",
            addon: "bg-primary text-current ring-utility-warning-600",
            icon: "text-utility-warning-500",
        },
        success: {
            root: "bg-primary text-utility-success-700 ring-utility-success-600 hover:bg-utility-success-50",
            addon: "bg-primary text-current ring-utility-success-600",
            icon: "text-utility-success-500",
        },
    },
    modern: {
        brand: {
            dot: "bg-utility-brand-500 outline outline-3 -outline-offset-1 outline-utility-brand-100",
        },
        gray: {
            dot: "bg-utility-gray-500 outline outline-3 -outline-offset-1 outline-utility-gray-100",
        },
        error: {
            dot: "bg-utility-error-500 outline outline-3 -outline-offset-1 outline-utility-error-100",
        },
        warning: {
            dot: "bg-utility-warning-500 outline outline-3 -outline-offset-1 outline-utility-warning-100",
        },
        success: {
            dot: "bg-utility-success-500 outline outline-3 -outline-offset-1 outline-utility-success-100",
        },
    },
});

interface BadgeGroupProps {
    text?: string;
    addonText: string;
    size?: Size;
    color: Color;
    theme?: Theme;
    align?: Align;
    iconTrailing?: FC<{ className?: string }> | ReactNode;
    className?: string;
}

export const BadgeGroup = ({
    text,
    addonText,
    size = "md",
    color = "brand",
    theme = "light",
    align = "leading",
    className,
    iconTrailing: IconTrailing = ArrowRight,
}: BadgeGroupProps) => {
    const colors = colorClasses[theme][color];
    const sizes = getSizeClasses(theme, !!text, !!IconTrailing)[align][size];

    const rootClasses = cx("inline-flex w-max items-center transition duration-100 ease-in-out", baseClasses[theme].root, sizes.root, colors.root, className);
    const addonClasses = cx("inline-flex items-center", baseClasses[theme].addon, sizes.addon, colors.addon);
    const dotClasses = cx("inline-block size-2 shrink-0 rounded-full", sizes.dot, colors.dot);
    const iconClasses = cx(baseClasses[theme].icon, sizes.icon, colors.icon);

    if (align === "trailing") {
        return (
            <div className={rootClasses}>
                {theme === "modern" && <span className={dotClasses} />}

                {text}

                <span className={addonClasses}>
                    {addonText}

                    {/* Trailing icon */}
                    {isReactComponent(IconTrailing) && <IconTrailing className={iconClasses} />}
                    {isValidElement(IconTrailing) && IconTrailing}
                </span>
            </div>
        );
    }

    return (
        <div className={rootClasses}>
            <span className={addonClasses}>
                {theme === "modern" && <span className={dotClasses} />}
                {addonText}
            </span>

            {text}

            {/* Trailing icon */}
            {isReactComponent(IconTrailing) && <IconTrailing className={iconClasses} />}
            {isValidElement(IconTrailing) && IconTrailing}
        </div>
    );
};
