import { cx } from "@/components/utils";
import { DotsVertical } from "@a-peak-works/untitledui-icons";
import { FC, forwardRef } from "react";
import {
    Button as AriaButton,
    ButtonProps as AriaButtonProps,
    MenuProps as AriaMenuProps,
    PopoverProps as AriaPopoverProps,
    Menu,
    MenuItem,
    MenuItemProps,
    MenuSection,
    MenuTrigger,
    Popover,
    Separator,
    SeparatorProps,
} from "react-aria-components";

interface DropdownItemProps extends MenuItemProps {
    label: string;
    addon?: string;
    unstyled?: boolean;
    icon?: FC<{ className?: string }>;
}

const DropdownItem = ({ label, addon, icon: Icon, unstyled, ...props }: DropdownItemProps) => {
    if (unstyled) {
        return <MenuItem id={label} textValue={label} {...props} />;
    }

    return (
        <MenuItem
            {...props}
            id={label}
            textValue={label}
            className={(values) =>
                cx(
                    "group cursor-pointer px-1.5 py-px outline-none",
                    values.isDisabled && "cursor-not-allowed",
                    typeof props.className === "function" ? props.className(values) : props.className,
                )
            }
        >
            {({ isDisabled, isFocused, isFocusVisible }) => (
                <div
                    className={cx(
                        "relative flex items-center rounded-md px-2.5 py-2",
                        !isDisabled && "group-hover:bg-primary_hover",
                        isFocused && "bg-primary_hover",
                        isFocusVisible && "ring-2 ring-inset ring-focus-ring",
                    )}
                >
                    {Icon && <Icon className={cx("mr-2 size-4 shrink-0", isDisabled ? "text-fg-disabled" : "text-fg-quaternary")} aria-hidden="true" />}
                    <span className={cx("grow truncate tt-sm-semi", isDisabled ? "text-disabled" : "text-secondary", isFocused && "text-secondary_hover")}>
                        {label}
                    </span>
                    {addon && (
                        <span
                            className={cx(
                                "ml-3 shrink-0 rounded px-1 py-px ring-1 ring-inset ring-border-secondary tt-xs-md",
                                isDisabled ? "text-disabled" : "text-quaternary",
                            )}
                        >
                            {addon}
                        </span>
                    )}
                </div>
            )}
        </MenuItem>
    );
};

interface DropdownMenuProps<T extends object> extends AriaMenuProps<T> {}

const DropdownMenu = <T extends object>(props: DropdownMenuProps<T>) => {
    return (
        <Menu selectionMode="single" disallowEmptySelection {...props} className={cx("h-min select-none overflow-y-auto py-1 outline-none", props.className)} />
    );
};

interface DropdownPopoverProps extends AriaPopoverProps {}

const DropdownPopover = (props: DropdownPopoverProps) => {
    return (
        <Popover
            placement="bottom right"
            {...props}
            className={(values) =>
                cx(
                    "w-[240px] rounded-lg border border-secondary bg-primary shadow-lg will-change-transform",
                    values.isEntering &&
                        "animation-duration-300 ease-out animate-in fade-in placement-right:slide-in-from-left-2 placement-top:slide-in-from-bottom-2 placement-bottom:slide-in-from-top-2",
                    values.isExiting &&
                        "animation-duration-150 ease-in animate-out fade-out placement-right:slide-out-to-left-2 placement-top:slide-out-to-bottom-2 placement-bottom:slide-out-to-top-2",
                    typeof props.className === "function" ? props.className(values) : props.className,
                )
            }
        />
    );
};

const DropdownSeparator = (props: SeparatorProps) => {
    return <Separator {...props} className={cx("my-1 h-px w-full bg-border-secondary", props.className)} />;
};

const DropdownDotsButton = forwardRef<HTMLButtonElement, AriaButtonProps>((props, ref) => {
    return (
        <AriaButton
            ref={ref}
            aria-label="Open menu"
            className={(state) =>
                cx(
                    "rounded-md text-fg-quinary transition duration-200 ease-in-out",
                    (state.isPressed || state.isHovered) && "text-fg-quinary_hover",
                    (state.isPressed || state.isFocused) && "outline outline-2 outline-offset-2 outline-focus-ring",
                    typeof props.className === "function" ? props.className(state) : props.className,
                )
            }
        >
            <DotsVertical className="size-5 transition-inherit-all" />
        </AriaButton>
    );
});

export const Dropdown = {
    Root: MenuTrigger,
    Popover: DropdownPopover,
    Menu: DropdownMenu,
    Section: MenuSection,
    Item: DropdownItem,
    Separator: DropdownSeparator,
    DotsButton: DropdownDotsButton,
};
