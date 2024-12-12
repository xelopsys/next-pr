import { cx, sortCx } from "@/components/utils";
import { isReactComponent } from "@/components/utils/isReactComponent";
import { ComponentType, FC, HTMLAttributes, ReactNode, forwardRef, isValidElement } from "react";

const iconsSizes = {
    sm: "size-4",
    md: "size-5",
    lg: "size-6",
    xl: "size-7",
};

const styles = sortCx({
    light: {
        base: "rounded-full",
        sizes: {
            sm: "size-8",
            md: "size-10",
            lg: "size-12",
            xl: "size-14",
        },
        colors: {
            brand: "bg-brand-secondary text-featured-icon-light-fg-brand",
            gray: "bg-tertiary text-featured-icon-light-fg-gray",
            error: "bg-error-secondary text-featured-icon-light-fg-error",
            warning: "bg-warning-secondary text-featured-icon-light-fg-warning",
            success: "bg-success-secondary text-featured-icon-light-fg-success",
        },
    },

    gradient: {
        base: "rounded-full text-fg-white before:absolute before:inset-0 before:size-full before:rounded-full before:border before:mask-image-b after:absolute after:block after:rounded-full",
        sizes: {
            sm: "size-8 after:size-6",
            md: "size-10 after:size-7",
            lg: "size-12 after:size-8",
            xl: "size-14 after:size-10",
        },
        colors: {
            brand: "before:border-utility-brand-200 before:bg-utility-brand-50 after:bg-brand-solid",
            gray: "before:border-utility-gray-200 before:bg-utility-gray-50 after:bg-secondary-solid",
            error: "before:border-utility-error-200 before:bg-utility-error-50 after:bg-error-solid",
            warning: "before:border-utility-warning-200 before:bg-utility-warning-50 after:bg-warning-solid",
            success: "before:border-utility-success-200 before:bg-utility-success-50 after:bg-success-solid",
        },
    },

    dark: {
        base: "text-fg-white shadow-xs-skeumorphic before:absolute before:inset-px before:border before:border-white before:border-opacity-[.12] before:mask-image-b",
        sizes: {
            sm: "size-8 rounded-md before:rounded-[5px]",
            md: "size-10 rounded-lg before:rounded-[7px]",
            lg: "size-12 rounded-[10px] before:rounded-[9px]",
            xl: "size-14 rounded-xl before:rounded-[11px]",
        },
        colors: {
            brand: "bg-brand-solid before:border-utility-brand-200",
            gray: "bg-secondary-solid before:border-utility-gray-200",
            error: "bg-error-solid before:border-utility-error-200",
            warning: "bg-warning-solid before:border-utility-warning-200",
            success: "bg-success-solid before:border-utility-success-200",
        },
    },

    glass: {
        base: "text-fg-white before:absolute before:z-0 before:size-full before:rotate-[15deg] before:rounded-[inherit] after:absolute after:inset-0 after:size-full after:rounded-[inherit] after:border after:border-white/60 after:bg-white/60 after:backdrop-blur-lg",
        sizes: {
            sm: "size-8 rounded-md before:-right-1 before:-top-1",
            md: "size-10 rounded-lg before:-right-1.5 before:-top-1.5",
            lg: "size-12 rounded-[10px] before:-right-2 before:-top-2",
            xl: "size-14 rounded-xl before:-right-2.5 before:-top-2.5",
        },
        colors: {
            brand: "before:bg-brand-solid",
            gray: "before:bg-secondary-solid",
            error: "before:bg-error-solid",
            warning: "before:bg-warning-solid",
            success: "before:bg-success-solid",
        },
    },

    modern: {
        base: "shadow-xs-skeumorphic",
        sizes: {
            sm: "size-8 rounded-md",
            md: "size-10 rounded-lg",
            lg: "size-12 rounded-[10px]",
            xl: "size-14 rounded-xl",
        },
        colors: {
            brand: "",
            gray: "bg-primary text-fg-secondary ring-1 ring-inset ring-featured-icon-modern-border",
            error: "",
            warning: "",
            success: "",
        },
    },

    outline: {
        base: "before:absolute before:rounded-full before:border-2 after:absolute after:rounded-full after:border-2",
        sizes: {
            sm: "size-4 before:size-6 after:size-8.5",
            md: "size-5 before:size-7 after:size-9.5",
            lg: "size-6 before:size-8 after:size-10.5",
            xl: "size-7 before:size-9 after:size-11.5",
        },
        colors: {
            brand: "text-fg-brand-primary before:border-fg-brand-primary/30 after:border-fg-brand-primary/10",
            gray: "text-fg-tertiary before:border-fg-tertiary/30 after:border-fg-tertiary/10",
            error: "text-fg-error-primary before:border-fg-error-primary/30 after:border-fg-error-primary/10",
            warning: "text-fg-warning-primary before:border-fg-warning-primary/30 after:border-fg-warning-primary/10",
            success: "text-fg-success-primary before:border-fg-success-primary/30 after:border-fg-success-primary/10",
        },
    },
});

interface FeaturedIconProps {
    theme?: "light" | "gradient" | "dark" | "glass" | "outline" | "modern";
    size?: "sm" | "md" | "lg" | "xl";
    color: "brand" | "gray" | "success" | "warning" | "error";
    children?: ReactNode;
    className?: string;
    icon?: FC<{ className?: string }>;
}

export const FeaturedIconBase = forwardRef<HTMLDivElement, FeaturedIconProps>((props, ref) => {
    const { size = "sm", theme: variant = "light", color = "brand", icon: Icon } = props;

    return (
        <div
            ref={ref}
            data-featured-icon
            className={cx(
                "relative flex shrink-0 items-center justify-center",

                styles[variant].base,
                styles[variant].sizes[size],
                styles[variant].colors[color],

                props.className,
            )}
        >
            {isReactComponent(Icon) && <Icon className={cx("z-[1]", iconsSizes[size])} />}
            {isValidElement(Icon) && <div className="z-[1]">Icon</div>}

            {props.children}
        </div>
    );
});
