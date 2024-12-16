import { Fragment, ReactNode } from "react";
import {
    Tab as TabComponent,
    TabList as TabListComponent,
    TabListProps,
    TabPanel as TabPanelComponent,
    TabProps,
    TabRenderProps,
    Tabs as TabsComponent,
    TabsContext,
    TabsProps,
    useSlottedContext,
} from "react-aria-components";

import { BadgeColors } from "@/components/shared/badges/badge-types";
import { Badge } from "@/components/shared/badges/badges";
import { cx } from "@/components/utils";

type Orientation = "horizontal" | "vertical";

// Types for different orientations
type HorizontalTypes = "button-brand" | "button-gray" | "button-white" | "button-minimal" | "underline";
type VerticalTypes = "button-brand" | "button-gray" | "button-white" | "button-minimal" | "line";
type TabTypeColors<T> = T extends "horizontal" ? HorizontalTypes : VerticalTypes;

// Styles for different types of tab
const tabStyles = ({ isFocused, isSelected, isHovered }: TabRenderProps) => ({
    // For primary tabs
    "button-brand": cx(
        isFocused && "outline outline-2 -outline-offset-2 outline-focus-ring",
        (isSelected || isHovered) && "bg-brand-primary_alt text-brand-secondary",
    ),

    // For gray tabs
    "button-gray": cx(
        isHovered && "bg-primary_hover text-secondary",
        isFocused && "outline outline-2 -outline-offset-2 outline-focus-ring",
        isSelected && "bg-active text-secondary",
    ),

    // For tabs with white background
    "button-white": cx(
        (isSelected || isHovered) && "bg-primary_alt text-secondary shadow-sm",
        isFocused && "outline outline-2 -outline-offset-2 outline-focus-ring",
    ),

    // For tabs with background and border
    "button-minimal": cx(
        "rounded-lg",
        isHovered && "text-secondary",
        isFocused && "outline outline-2 -outline-offset-2 outline-focus-ring",
        isSelected && "bg-primary_alt text-secondary shadow-xs ring-1 ring-inset ring-border-primary",
    ),

    // For tabs with underline (horizontally)
    underline: cx(
        "rounded-none border-b-2 border-transparent",
        (isSelected || isHovered) && "border-fg-brand-primary_alt text-brand-secondary",
        isFocused && "outline outline-2 -outline-offset-2 outline-focus-ring",
    ),

    // For tabs with line (vertically)
    line: cx(
        "rounded-none border-l-2 border-transparent",
        (isSelected || isHovered) && "border-fg-brand-primary_alt text-brand-secondary",
        isFocused && "outline outline-2 -outline-offset-2 outline-focus-ring",
    ),
});

// Sizes for different types of tab
const sm = "tt-sm-semi py-md px-lg";
const md = "tt-md-semi py-2.5 px-lg";
const sizes = {
    sm: {
        "button-brand": sm,
        "button-gray": sm,
        "button-white": sm,
        "button-minimal": sm,
        underline: "tt-sm-semi px-xs pb-2.5 pt-0",
        line: "tt-sm-semi pl-2.5 pr-lg py-md",
    },
    md: {
        "button-brand": md,
        "button-gray": md,
        "button-white": md,
        "button-minimal": md,
        underline: "tt-md-semi px-xs pb-2.5 pt-0",
        line: "tt-md-semi pr-3.5 pl-lg py-2.5",
    },
};

// Styles for different types of horizontal tabs
const horizontal = ({ size, fullwidth, orientation }: { size?: "sm" | "md"; fullwidth?: boolean; orientation?: "horizontal" | "vertical" }) => ({
    "button-brand": "gap-xs",
    "button-gray": "gap-xs",
    "button-white": cx("gap-xs rounded-[10px] bg-secondary_alt p-xs ring-1 ring-inset ring-border-secondary", size === "md" && "rounded-xl p-sm"),
    "button-minimal": "gap-xxs rounded-lg bg-secondary_alt ring-1 ring-inset ring-border-secondary",
    underline: cx("gap-lg", fullwidth && "w-full gap-xl"),
    line: "gap-1",
});

const colors = ({ isSelected, isHovered }: Partial<TabRenderProps>) => ({
    "button-brand": isSelected || isHovered ? "brand" : "gray",
    "button-gray": "gray",
    "button-white": "gray",
    "button-minimal": "gray",
    underline: isSelected || isHovered ? "brand" : "gray",
    line: isSelected || isHovered ? "brand" : "gray",
});

export const Tabs = (props: TabsProps) => {
    return (
        <TabsComponent
            keyboardActivation="manual"
            {...props}
            className={(values) => cx("relative", typeof props.className === "function" ? props.className(values) : props.className)}
        />
    );
};

interface TabListComponentProps<T extends object, K extends Orientation> extends TabListProps<T> {
    size?: keyof typeof sizes;
    type?: TabTypeColors<K>;
    orientation?: K;
    items: T[];
    fullwidth?: boolean;
}

interface TabListItemProps {
    id: string | number;
    label: ReactNode | string;
    badge?: number | string;
}

export const TabList = <T extends Orientation>(props: TabListComponentProps<TabListItemProps, T>) => {
    const context = useSlottedContext(TabsContext);

    const { size = "sm", type = "button-brand", orientation: orientationProp, fullwidth, ...rest } = props;

    const orientation = orientationProp ?? context?.orientation ?? "horizontal";

    return (
        <>
            {/* Only horizontal tabs with underline type has bottom border  */}
            {orientation === "horizontal" && type === "underline" && <div className="absolute inset-x-0 bottom-0 h-px bg-border-secondary"></div>}
            <TabListComponent
                {...rest}
                className={(prop) =>
                    cx(
                        "group flex overflow-auto",
                        horizontal(props)[type as HorizontalTypes],
                        orientation === "vertical" && "w-max flex-col",
                        typeof props.className === "function" ? props.className(prop) : props.className,
                    )
                }
            >
                {(item) => (
                    <Tab
                        key={item.id}
                        label={item.label}
                        badge={item.badge}
                        {...{
                            size,
                            type,
                            orientation,
                            fullwidth,
                        }}
                    />
                )}
            </TabListComponent>
        </>
    );
};

export const TabPanel = TabPanelComponent;

interface TabComponentProps<T extends Orientation> extends TabProps {
    size: keyof typeof sizes;
    type: keyof ReturnType<typeof tabStyles>;
    label: ReactNode;
    badge?: number | string;
    orientation?: T;
    fullwidth?: boolean;
}

export const Tab = <T extends Orientation>(props: TabComponentProps<T>) => {
    const { size, type, label, badge, orientation, ...rest } = props;

    return (
        <TabComponent
            {...rest}
            className={(prop) =>
                cx(
                    "z-10 flex h-max cursor-pointer items-center justify-center gap-md whitespace-nowrap rounded-md text-quaternary transition duration-100 ease-linear",

                    // TODO: For some reason, the `orientation` prop is
                    // being changed somewhere betweent the `TabList` and `Tab` components.
                    // That's why I had to add duplicate styles only via CSS below.
                    orientation === "vertical" && "justify-start",
                    "group-orientation-vertical:justify-start",

                    rest.fullwidth && "w-full flex-1",
                    sizes[size][type],
                    tabStyles(prop)[type],
                    typeof props.className === "function" ? props.className(prop) : props.className,
                )
            }
        >
            {({ isSelected, isHovered }) => (
                <Fragment>
                    {label}
                    {badge && (
                        <Badge
                            className={cx("hidden transition-inherit md:flex", size === "sm" && "-my-px")}
                            size={size}
                            color={colors({ isSelected, isHovered })[type] as BadgeColors}
                            type="pill-color"
                        >
                            {badge}
                        </Badge>
                    )}
                </Fragment>
            )}
        </TabComponent>
    );
};
