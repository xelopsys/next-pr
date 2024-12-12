import { type FC, type ReactNode, isValidElement } from "react";
import { isReactComponent } from "@/components/utils/isReactComponent";

import { cx } from "@/components/utils";

interface NavMenuItemLinkProps {
    href: string;
    icon?: FC<{ className?: string }> | ReactNode;
    iconClassName?: string;
    className?: string;
    title: string;
    subtitle?: string;
    badge?: ReactNode;
    actionsContent?: ReactNode;
}

export const NavMenuItemLink = ({ href, icon: Icon, iconClassName, title, badge, subtitle, className, actionsContent }: NavMenuItemLinkProps) => (
    <a
        href={href}
        className={cx(
            "inline-flex w-full gap-3 px-4 py-3 transition hover:bg-primary_hover focus:outline-none focus:ring-2 focus:ring-focus-ring sm:max-w-80 sm:p-3 md:rounded-lg",
            className,
        )}
    >
        {isValidElement(Icon) && Icon}
        {isReactComponent(Icon) && <Icon className={cx("size-6 shrink-0 text-fg-brand-primary", iconClassName)} />}

        <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <span className="text-primary tt-md-semi">{title}</span>
                    {badge}
                </div>

                {subtitle && <span className="line-clamp-2 text-tertiary tt-sm">{subtitle}</span>}
            </div>
            {actionsContent}
        </div>
    </a>
);
