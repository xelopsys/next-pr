import { Badge } from "@/components/shared/badges/badges";
import { Tooltip, TooltipTrigger } from "@/components/shared/tooltips/tooltips";
import { cx, sortCx } from "@/components/utils";
import { ChevronDown, Share04 } from "@a-peak-works/untitledui-icons";
import { FC, HTMLAttributes, MouseEventHandler, ReactNode } from "react";

interface NavItemButtonProps {
    open?: boolean;
    href?: string;
    label: string;
    icon: FC<{ className?: string }>;
    current?: boolean;
    size?: "md" | "lg";
    onClick?: MouseEventHandler;
    className?: string;
}

export const NavItemButton = ({ current: current, label, href, icon: Icon, size = "md", className, onClick }: NavItemButtonProps) => {
    const styles = {
        md: {
            root: "size-10",
            icon: "size-5",
        },
        lg: {
            root: "size-12",
            icon: "size-6",
        },
    };

    return (
        <Tooltip title={label} placement="right" arrow={false}>
            <TooltipTrigger asChild>
                <a
                    href={href}
                    aria-label={label}
                    onClick={onClick}
                    className={cx(
                        "relative flex w-full cursor-pointer select-none items-center justify-center rounded-md bg-primary p-2 hover:bg-primary_hover focus:z-10 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-focus-ring",
                        current && "bg-active hover:bg-secondary_hover",
                        styles[size].root,
                        className,
                    )}
                >
                    <Icon
                        aria-hidden="true"
                        className={cx("shrink-0 text-nav-item-button-icon-fg", current && "text-nav-item-button-icon-fg_active", styles[size].icon)}
                    />
                </a>
            </TooltipTrigger>
        </Tooltip>
    );
};

interface NavItemBaseProps {
    iconOnly?: boolean;
    open?: boolean;
    href?: string;
    type: "link" | "collapsible" | "collapsible-child";
    label: string;
    icon?: FC<HTMLAttributes<HTMLOrSVGElement>>;
    badge?: ReactNode;
    current?: boolean;
    onClick?: MouseEventHandler;
}

export const NavItemBase = ({ current, label, type, badge, href, icon: Icon, open, onClick }: NavItemBaseProps) => {
    const styles = sortCx({
        root: "group relative flex w-full cursor-pointer select-none items-center rounded-md bg-primary hover:bg-primary_hover focus:z-10 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-focus-ring",
        rootSelected: "bg-active hover:bg-secondary_hover",
    });

    const iconElement = Icon && (
        <Icon
            aria-hidden="true"
            className={cx("mr-2.5 size-5 shrink-0 text-nav-item-icon-fg transition-inherit-all", current && "text-nav-item-icon-fg_active")}
        />
    );

    const badgeElement =
        badge && (typeof badge === "string" || typeof badge === "number") ? (
            <Badge className="ml-3" color="gray" type="pill-color" size="sm">
                {badge}
            </Badge>
        ) : (
            badge
        );

    const labelElement = (
        <span
            className={cx(
                "flex-1 truncate text-secondary tt-md-semi transition-inherit-all group-hover:text-secondary_hover",
                current && "text-secondary_hover",
            )}
        >
            {label}
        </span>
    );

    const isExternal = href && href.startsWith("http");
    const externalIcon = isExternal && <Share04 className="size-4 stroke-[2.5px] text-fg-quinary" />;

    if (type === "collapsible") {
        return (
            <summary className={cx("px-3 py-2", styles.root, current && styles.rootSelected)} onClick={onClick}>
                {iconElement}

                {labelElement}

                {badgeElement}

                <div className="ml-3 flex">
                    <ChevronDown aria-hidden="true" className={cx("size-4 text-fg-quinary", open ? "-scale-y-100" : "scale-y-1")} />
                </div>
            </summary>
        );
    }

    if (type === "collapsible-child") {
        return (
            <a
                href={href}
                target={isExternal ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className={cx("py-2 pl-10.5 pr-3", styles.root, current && styles.rootSelected)}
                onClick={onClick}
            >
                {labelElement}
                {externalIcon}
                {badgeElement}
            </a>
        );
    }

    return (
        <a
            href={href}
            target={isExternal ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className={cx("px-3 py-2", styles.root, current && styles.rootSelected)}
            onClick={onClick}
        >
            {iconElement}
            {labelElement}
            {externalIcon}
            {badgeElement}
        </a>
    );
};
