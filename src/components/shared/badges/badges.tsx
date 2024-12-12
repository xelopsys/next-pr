import Dot from "@/components/Dot";
import { cx } from "@/components/utils";
import { X as CloseX } from "@a-peak-works/untitledui-icons";
import { MouseEventHandler, ReactNode } from "react";
import { BadgeColors, BadgeTypes, badgeTypes, BadgeTypeToColorMap, FlagTypes, IconComponentType, Sizes } from "./badge-types";

export const filledColors: Record<BadgeColors, { root: string; addon: string; addonButton: string }> = {
    gray: {
        root: "bg-utility-gray-50 text-utility-gray-700 ring-utility-gray-200",
        addon: "text-utility-gray-500",
        addonButton: "hover:bg-utility-gray-100 text-utility-gray-400 hover:text-utility-gray-500",
    },
    brand: {
        root: "bg-utility-brand-50 text-utility-brand-700 ring-utility-brand-200",
        addon: "text-utility-brand-500",
        addonButton: "hover:bg-utility-brand-100 text-utility-brand-400 hover:text-utility-brand-500",
    },
    error: {
        root: "bg-utility-error-50 text-utility-error-700 ring-utility-error-200",
        addon: "text-utility-error-500",
        addonButton: "hover:bg-utility-error-100 text-utility-error-400 hover:text-utility-error-500",
    },
    warning: {
        root: "bg-utility-warning-50 text-utility-warning-700 ring-utility-warning-200",
        addon: "text-utility-warning-500",
        addonButton: "hover:bg-utility-warning-100 text-utility-warning-400 hover:text-utility-warning-500",
    },
    success: {
        root: "bg-utility-success-50 text-utility-success-700 ring-utility-success-200",
        addon: "text-utility-success-500",
        addonButton: "hover:bg-utility-success-100 text-utility-success-400 hover:text-utility-success-500",
    },
    "gray-blue": {
        root: "bg-utility-gray-blue-50 text-utility-gray-blue-700 ring-utility-gray-blue-200",
        addon: "text-utility-gray-blue-500",
        addonButton: "hover:bg-utility-gray-blue-100 text-utility-gray-blue-400 hover:text-utility-gray-blue-500",
    },
    "blue-light": {
        root: "bg-utility-blue-light-50 text-utility-blue-light-700 ring-utility-blue-light-200",
        addon: "text-utility-blue-light-500",
        addonButton: "hover:bg-utility-blue-light-100 text-utility-blue-light-400 hover:text-utility-blue-light-500",
    },
    blue: {
        root: "bg-utility-blue-50 text-utility-blue-700 ring-utility-blue-200",
        addon: "text-utility-blue-500",
        addonButton: "hover:bg-utility-blue-100 text-utility-blue-400 hover:text-utility-blue-500",
    },
    indigo: {
        root: "bg-utility-indigo-50 text-utility-indigo-700 ring-utility-indigo-200",
        addon: "text-utility-indigo-500",
        addonButton: "hover:bg-utility-indigo-100 text-utility-indigo-400 hover:text-utility-indigo-500",
    },
    purple: {
        root: "bg-utility-purple-50 text-utility-purple-700 ring-utility-purple-200",
        addon: "text-utility-purple-500",
        addonButton: "hover:bg-utility-purple-100 text-utility-purple-400 hover:text-utility-purple-500",
    },
    pink: {
        root: "bg-utility-pink-50 text-utility-pink-700 ring-utility-pink-200",
        addon: "text-utility-pink-500",
        addonButton: "hover:bg-utility-pink-100 text-utility-pink-400 hover:text-utility-pink-500",
    },
    orange: {
        root: "bg-utility-orange-50 text-utility-orange-700 ring-utility-orange-200",
        addon: "text-utility-orange-500",
        addonButton: "hover:bg-utility-orange-100 text-utility-orange-400 hover:text-utility-orange-500",
    },
};

const outlinedColors: Record<BadgeColors | "white", { root: string; addon: string; addonButton: string }> = {
    gray: {
        root: "ring-utility-gray-600 text-utility-gray-700",
        addon: "text-utility-gray-500",
        addonButton: "hover:bg-utility-gray-100 text-utility-gray-400 hover:text-utility-gray-500",
    },
    brand: {
        root: "ring-utility-brand-600 text-utility-brand-700",
        addon: "text-utility-brand-500",
        addonButton: "hover:bg-utility-brand-100 text-utility-brand-400 hover:text-utility-brand-500",
    },
    error: {
        root: "ring-utility-error-600 text-utility-error-700",
        addon: "text-utility-error-500",
        addonButton: "hover:bg-utility-error-100 text-utility-error-400 hover:text-utility-error-500",
    },
    warning: {
        root: "ring-utility-warning-600 text-utility-warning-700",
        addon: "text-utility-warning-500",
        addonButton: "hover:bg-utility-warning-100 text-utility-warning-400 hover:text-utility-warning-500",
    },
    success: {
        root: "ring-utility-success-600 text-utility-success-700",
        addon: "text-utility-success-500",
        addonButton: "hover:bg-utility-success-100 text-utility-success-400 hover:text-utility-success-500",
    },
    "gray-blue": {
        root: "ring-utility-gray-blue-600 text-utility-gray-blue-700",
        addon: "text-utility-gray-blue-500",
        addonButton: "hover:bg-utility-gray-blue-100 text-utility-gray-blue-400 hover:text-utility-gray-blue-500",
    },
    "blue-light": {
        root: "ring-utility-blue-light-600 text-utility-blue-light-700",
        addon: "text-utility-blue-light-500",
        addonButton: "hover:bg-utility-blue-light-100 text-utility-blue-light-400 hover:text-utility-blue-light-500",
    },
    blue: {
        root: "ring-utility-blue-600 text-utility-blue-700",
        addon: "text-utility-blue-500",
        addonButton: "hover:bg-utility-blue-100 text-utility-blue-400 hover:text-utility-blue-500",
    },
    indigo: {
        root: "ring-utility-indigo-600 text-utility-indigo-700",
        addon: "text-utility-indigo-500",
        addonButton: "hover:bg-utility-indigo-100 text-utility-indigo-400 hover:text-utility-indigo-500",
    },
    purple: {
        root: "ring-utility-purple-600 text-utility-purple-700",
        addon: "text-utility-purple-500",
        addonButton: "hover:bg-utility-purple-100 text-utility-purple-400 hover:text-utility-purple-500",
    },
    pink: {
        root: "ring-utility-pink-600 text-utility-pink-700",
        addon: "text-utility-pink-500",
        addonButton: "hover:bg-utility-pink-100 text-utility-pink-400 hover:text-utility-pink-500",
    },
    orange: {
        root: "ring-utility-orange-600 text-utility-orange-700",
        addon: "text-utility-orange-500",
        addonButton: "hover:bg-utility-orange-100 text-utility-orange-400 hover:text-utility-orange-500",
    },
    white: {
        root: "ring-fg-white text-fg-white",
        addon: "text-fg-white",
        addonButton: "hover:bg-utility-gray-100 text-utility-gray-400 hover:text-utility-gray-500",
    },
};

const addonOnlyColors = Object.fromEntries(Object.entries(outlinedColors).map(([key, value]) => [key, { root: "", addon: value.addon }])) as Record<
    BadgeColors,
    { root: string; addon: string }
>;

const withPillTypes = {
    [badgeTypes.pillColor]: {
        common: "size-max flex items-center whitespace-nowrap rounded-full ring-1 ring-inset",
        styles: filledColors,
    },
    [badgeTypes.pillOutline]: {
        common: "size-max flex items-center whitespace-nowrap rounded-full ring-[1.5px] ring-inset",
        styles: outlinedColors,
    },
    [badgeTypes.badgeColor]: {
        common: "size-max flex items-center whitespace-nowrap rounded-md ring-1 ring-inset",
        styles: filledColors,
    },
    [badgeTypes.badgeModern]: {
        common: "size-max flex items-center whitespace-nowrap rounded-md ring-1 ring-inset shadow-xs",
        styles: {
            gray: {
                root: "bg-primary text-secondary ring-border-primary",
                addon: "text-gray-500",
                addonButton: "hover:bg-utility-gray-100 text-utility-gray-400 hover:text-utility-gray-500",
            },
        },
    },
};

const withBadgeTypes = {
    [badgeTypes.pillColor]: {
        common: "size-max flex items-center whitespace-nowrap rounded-full ring-1 ring-inset",
        styles: filledColors,
    },
    [badgeTypes.pillOutline]: {
        common: "size-max flex items-center whitespace-nowrap rounded-full ring-[1.5px] ring-inset",
        styles: outlinedColors,
    },
    [badgeTypes.badgeColor]: {
        common: "size-max flex items-center whitespace-nowrap rounded-md ring-1 ring-inset",
        styles: filledColors,
    },
    [badgeTypes.badgeModern]: {
        common: "size-max flex items-center whitespace-nowrap rounded-md ring-1 ring-inset bg-primary text-secondary ring-border-primary shadow-xs",
        styles: addonOnlyColors,
    },
};

export type BadgeColor<T extends BadgeTypes> = BadgeTypeToColorMap<typeof withPillTypes>[T];

type BadgeProps<T extends BadgeTypes> = {
    type?: T;
    size?: Sizes;
    color?: BadgeColor<T>;
    children: ReactNode;
    className?: string;
};

export const Badge = <T extends BadgeTypes>(props: BadgeProps<T>) => {
    const { type = "pill-color", size = "md", color = "gray", children } = props;
    const colors = withPillTypes[type];

    const pillSizes = {
        sm: {
            root: "py-0.5 px-2 tt-xs-md",
        },
        md: {
            root: "py-0.5 px-2.5 tt-sm-md",
        },
        lg: {
            root: "py-1 px-3 tt-sm-md",
        },
    };
    const badgeSizes = {
        sm: {
            root: "py-0.5 px-1.5 tt-xs-md",
        },
        md: {
            root: "py-0.5 px-2 tt-sm-md",
        },
        lg: {
            root: "py-1 px-2.5 tt-sm-md rounded-lg",
        },
    };

    const sizes = {
        [badgeTypes.pillColor]: pillSizes,
        [badgeTypes.pillOutline]: pillSizes,
        [badgeTypes.badgeColor]: badgeSizes,
        [badgeTypes.badgeModern]: badgeSizes,
    };

    return <span className={cx(colors.common, sizes[type][size].root, (colors.styles[color] as { root: string }).root, props.className)}>{children}</span>;
};

type BadgeWithDotProps<T extends BadgeTypes> = {
    type?: T;
    size?: Sizes;
    color?: BadgeTypeToColorMap<typeof withBadgeTypes>[T];
    className?: string;
    children: ReactNode;
};

export const BadgeWithDot = <T extends BadgeTypes>(props: BadgeWithDotProps<T>) => {
    const { size = "md", color = "gray", type = "pill-color", className, children } = props;

    const colors = withBadgeTypes[type];

    const pillSizes = {
        sm: {
            root: "gap-1 py-0.5 pl-1.5 pr-2 tt-xs-md",
        },
        md: {
            root: "gap-1.5 py-0.5 pl-2 pr-2.5 tt-sm-md",
        },
        lg: {
            root: "gap-1.5 py-1 pl-2.5 pr-3 tt-sm-md",
        },
    };
    const badgeSizes = {
        sm: {
            root: "gap-1 py-0.5 px-1.5 tt-xs-md",
        },
        md: {
            root: "gap-1.5 py-0.5 px-2 tt-sm-md",
        },
        lg: {
            root: "gap-1.5 py-1 px-2.5 tt-sm-md rounded-lg",
        },
    };

    const sizes = {
        [badgeTypes.pillColor]: pillSizes,
        [badgeTypes.pillOutline]: pillSizes,
        [badgeTypes.badgeColor]: badgeSizes,
        [badgeTypes.badgeModern]: badgeSizes,
    };

    return (
        <span className={cx(colors.common, sizes[type][size].root, colors.styles[color].root, className)}>
            <Dot className={colors.styles[color].addon} size="sm" />
            {children}
        </span>
    );
};

type BadgeWithIconProps<T extends BadgeTypes> = {
    type?: T;
    size?: Sizes;
    color?: BadgeTypeToColorMap<typeof withBadgeTypes>[T];
    iconLeading?: IconComponentType;
    iconTrailing?: IconComponentType;
    children: ReactNode;
    className?: string;
};

export const BadgeWithIcon = <T extends BadgeTypes>(props: BadgeWithIconProps<T>) => {
    const { size = "md", color = "gray", type = "pill-color", iconLeading: IconLeading, iconTrailing: IconTrailing, children, className } = props;

    const colors = withBadgeTypes[type];

    const icon = IconLeading ? "leading" : "trailing";

    const pillSizes = {
        sm: {
            trailing: "gap-1 py-0.5 pl-2 pr-1.5 tt-xs-md",
            leading: "gap-1 py-0.5 pr-2 pl-1.5 tt-xs-md",
        },
        md: {
            trailing: "gap-1 py-0.5 pl-2.5 pr-2 tt-sm-md",
            leading: "gap-1 py-0.5 pr-2.5 pl-2 tt-sm-md",
        },
        lg: {
            trailing: "gap-1 py-1 pl-3 pr-2.5 tt-sm-md",
            leading: "gap-1 py-1 pr-3 pl-2.5 tt-sm-md",
        },
    };
    const badgeSizes = {
        sm: {
            trailing: "gap-1 py-0.5 pl-1.5 pr-1 tt-xs-md",
            leading: "gap-1 py-0.5 pr-1.5 pl-1 tt-xs-md",
        },
        md: {
            trailing: "gap-1 py-0.5 pl-2 pr-1.5 tt-sm-md",
            leading: "gap-1 py-0.5 pr-2 pl-1.5 tt-sm-md",
        },
        lg: {
            trailing: "gap-1 py-1 pl-2.5 pr-2 tt-sm-md rounded-lg",
            leading: "gap-1 py-1 pr-2.5 pl-2 tt-sm-md rounded-lg",
        },
    };

    const sizes = {
        [badgeTypes.pillColor]: pillSizes,
        [badgeTypes.pillOutline]: pillSizes,
        [badgeTypes.badgeColor]: badgeSizes,
        [badgeTypes.badgeModern]: badgeSizes,
    };

    return (
        <span className={cx(colors.common, sizes[type][size][icon], colors.styles[color].root, className)}>
            {IconLeading && <IconLeading className={cx(colors.styles[color].addon, "size-3")} strokeWidth={3} />}
            {children}
            {IconTrailing && <IconTrailing className={cx(colors.styles[color].addon, "size-3")} strokeWidth={3} />}
        </span>
    );
};

type BadgeWithFlagProps<T extends BadgeTypes> = {
    type?: T;
    size?: Sizes;
    flag?: FlagTypes;
    color?: BadgeTypeToColorMap<typeof withPillTypes>[T];
    children: ReactNode;
};

export const BadgeWithFlag = <T extends BadgeTypes>(props: BadgeWithFlagProps<T>) => {
    const { size = "md", color = "gray", flag = "AU", type = "pill-color", children } = props;

    const colors = withPillTypes[type];

    const pillSizes = {
        sm: {
            root: "gap-1 py-0.5 pl-[3px] pr-2 tt-xs-md",
        },
        md: {
            root: "gap-1.5 py-0.5 pl-1 pr-2.5 tt-sm-md",
        },
        lg: {
            root: "gap-1.5 py-1 pl-1.5 pr-3 tt-sm-md",
        },
    };
    const badgeSizes = {
        sm: {
            root: "gap-1 py-0.5 pl-1 pr-1.5 tt-xs-md",
        },
        md: {
            root: "gap-1.5 py-0.5 pl-1.5 pr-2 tt-sm-md",
        },
        lg: {
            root: "gap-1.5 py-1 pl-2 pr-2.5 tt-sm-md rounded-lg",
        },
    };

    const sizes = {
        [badgeTypes.pillColor]: pillSizes,
        [badgeTypes.pillOutline]: pillSizes,
        [badgeTypes.badgeColor]: badgeSizes,
        [badgeTypes.badgeModern]: badgeSizes,
    };

    return (
        <span className={cx(colors.common, sizes[type][size].root, colors.styles[color].root)}>
            <img src={`/flags/${flag}.svg`} className="size-4 max-w-none rounded-full" />
            {children}
        </span>
    );
};

type BadgeWithImageProps<T extends BadgeTypes> = {
    type?: T;
    size?: Sizes;
    imgSrc: string;
    color?: BadgeTypeToColorMap<typeof withPillTypes>[T];
    children: ReactNode;
};

export const BadgeWithImage = <T extends BadgeTypes>(props: BadgeWithImageProps<T>) => {
    const { size = "md", color = "gray", type = "pill-color", imgSrc, children } = props;

    const colors = withPillTypes[type];

    const pillSizes = {
        sm: {
            root: "gap-1 py-0.5 pl-[3px] pr-2 tt-xs-md",
        },
        md: {
            root: "gap-1.5 py-0.5 pl-1 pr-2.5 tt-sm-md",
        },
        lg: {
            root: "gap-1.5 py-1 pl-1.5 pr-3 tt-sm-md",
        },
    };
    const badgeSizes = {
        sm: {
            root: "gap-1 py-0.5 pl-1 pr-1.5 tt-xs-md",
        },
        md: {
            root: "gap-1.5 py-0.5 pl-1.5 pr-2 tt-sm-md",
        },
        lg: {
            root: "gap-1.5 py-1 pl-2 pr-2.5 tt-sm-md rounded-lg",
        },
    };

    const sizes = {
        [badgeTypes.pillColor]: pillSizes,
        [badgeTypes.pillOutline]: pillSizes,
        [badgeTypes.badgeColor]: badgeSizes,
        [badgeTypes.badgeModern]: badgeSizes,
    };

    return (
        <span className={cx(colors.common, sizes[type][size].root, colors.styles[color].root)}>
            <img src={imgSrc} className="size-4 max-w-none rounded-full" />
            {children}
        </span>
    );
};

type BadgeWithButtonProps<T extends BadgeTypes> = {
    type?: T;
    size?: Sizes;
    icon?: IconComponentType;
    color?: BadgeTypeToColorMap<typeof withPillTypes>[T];
    onButtonClick?: MouseEventHandler<HTMLButtonElement>;
    children: ReactNode;
};

export const BadgeWithButton = <T extends BadgeTypes>(props: BadgeWithButtonProps<T>) => {
    const { size = "md", color = "gray", type = "pill-color", icon: Icon = CloseX, children } = props;

    const colors = withPillTypes[type];

    const pillSizes = {
        sm: {
            root: "gap-0.5 py-0.5 pl-2 pr-[3px] tt-xs-md",
        },
        md: {
            root: "gap-0.5 py-0.5 pl-2.5 pr-1 tt-sm-md",
        },
        lg: {
            root: "gap-0.5 py-1 pl-3 pr-1.5 tt-sm-md",
        },
    };
    const badgeSizes = {
        sm: {
            root: "gap-0.5 py-0.5 pl-1.5 pr-[3px] tt-xs-md",
        },
        md: {
            root: "gap-0.5 py-0.5 pl-2 pr-1 tt-sm-md",
        },
        lg: {
            root: "gap-0.5 py-1 pl-2.5 pr-1.5 tt-sm-md rounded-lg",
        },
    };

    const sizes = {
        [badgeTypes.pillColor]: pillSizes,
        [badgeTypes.pillOutline]: pillSizes,
        [badgeTypes.badgeColor]: badgeSizes,
        [badgeTypes.badgeModern]: badgeSizes,
    };

    return (
        <span className={cx(colors.common, sizes[type][size].root, colors.styles[color].root)}>
            {children}
            <button
                type="button"
                className={cx(
                    "flex cursor-pointer items-center justify-center p-0.5 focus:outline focus:outline-2 focus:outline-focus-ring",
                    colors.styles[color].addonButton,
                    type === "pill-color" || type === "pill-outline" ? "rounded-full" : "rounded-[3px]",
                )}
                onClick={props.onButtonClick}
            >
                <Icon className="size-3 stroke-[3px]" />
            </button>
        </span>
    );
};

type BadgeIconProps<T extends BadgeTypes> = {
    type?: T;
    size?: Sizes;
    icon: IconComponentType;
    color?: BadgeTypeToColorMap<typeof withPillTypes>[T];
    children?: ReactNode;
};

export const BadgeIcon = <T extends BadgeTypes>(props: BadgeIconProps<T>) => {
    const { size = "md", color = "gray", type = "pill-color", icon: Icon } = props;

    const colors = withPillTypes[type];

    const pillSizes = {
        sm: {
            root: "p-[5px]",
        },
        md: {
            root: "p-1.5",
        },
        lg: {
            root: "p-2",
        },
    };
    const badgeSizes = {
        sm: {
            root: "p-[5px]",
        },
        md: {
            root: "p-1.5",
        },
        lg: {
            root: "p-2 rounded-lg",
        },
    };

    const sizes = {
        [badgeTypes.pillColor]: pillSizes,
        [badgeTypes.pillOutline]: pillSizes,
        [badgeTypes.badgeColor]: badgeSizes,
        [badgeTypes.badgeModern]: badgeSizes,
    };

    return (
        <span className={cx(colors.common, sizes[type][size].root, colors.styles[color].root)}>
            <Icon className={cx("size-3 stroke-[3px]", colors.styles[color].addon)} />
        </span>
    );
};
