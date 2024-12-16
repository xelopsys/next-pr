import { type FC, useState, type ReactNode } from "react";
import { cx } from "@/components/utils";
import { AvatarOnlineIndicator, VerifiedTick } from "./base-components";
import { User01 } from "@a-peak-works/untitledui-icons";

type AvatarSize = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export interface AvatarProps {
    size?: AvatarSize;
    className?: string;
    contrastBorder?: boolean;
    badge?: ReactNode;
    status?: "online" | "offline";
    verified?: boolean;

    // For AvatarImage
    src?: string | null;
    alt?: string;

    // For AvatarIcon
    placeholderIcon?: FC<{ className?: string }>;

    // For AvatarInitials
    initials?: string;

    // For AvatarPlaceholder
    placeholder?: ReactNode;
}

const styles = {
    xxs: { root: "size-4 outline-[0.5px] -outline-offset-[0.5px]", initials: "tt-xs-semi", icon: "size-3" },
    xs: { root: "size-6 outline-[0.5px] -outline-offset-[0.5px]", initials: "tt-xs-semi", icon: "size-4" },
    sm: { root: "size-8 outline-[0.5px] -outline-offset-[0.5px]", initials: "tt-sm-semi", icon: "size-5" },
    md: { root: "size-10 outline-[0.75px] -outline-offset-[0.75px]", initials: "tt-md-semi", icon: "size-6" },
    lg: { root: "size-12 outline-[0.75px] -outline-offset-[0.75px]", initials: "tt-lg-semi", icon: "size-7" },
    xl: { root: "size-14 outline-[0.75px] -outline-offset-[0.75px]", initials: "tt-xl-semi", icon: "size-8" },
    "2xl": { root: "size-16 outline-[0.75px] -outline-offset-[0.75px]", initials: "td-xs-semi", icon: "size-8" },
};

export const Avatar = ({
    contrastBorder = true,
    size = "md",
    src,
    alt,
    initials,
    placeholder,
    placeholderIcon: PlaceholderIcon,
    badge,
    status,
    verified,
    className,
}: AvatarProps) => {
    const [isFailed, setIsFailed] = useState(false);

    const renderMainContent = () => {
        if (src && !isFailed) {
            return <img className="size-full rounded-full object-cover" src={src} alt={alt} onError={() => setIsFailed(true)} />;
        }

        if (initials) {
            return <span className={cx("text-fg-quaternary", styles[size].initials)}>{initials}</span>;
        }

        if (PlaceholderIcon) {
            return <PlaceholderIcon className={cx("text-fg-quaternary", styles[size].icon)} />;
        }

        return placeholder || <User01 className={cx("text-fg-quaternary", styles[size].icon)} />;
    };
    const renderBadgeContent = () => {
        if (status) {
            return <AvatarOnlineIndicator isOnline={status === "online"} size={size === "xxs" ? "xs" : size} />;
        }

        if (verified) {
            return (
                <VerifiedTick
                    size={size === "xxs" ? "xs" : size}
                    className={cx("absolute bottom-0 right-0", (size === "xxs" || size === "xs") && "-bottom-px -right-px")}
                />
            );
        }

        return badge;
    };

    return (
        <div
            className={cx(
                "relative inline-flex shrink-0 items-center justify-center rounded-full bg-avatar-bg",
                // Focus styles
                "group-focus:outline group-focus:outline-2 group-focus:outline-offset-2 group-focus:outline-focus-ring",
                contrastBorder && "outline outline-avatar-contrast-border",
                styles[size].root,
                className,
            )}
        >
            {renderMainContent()}
            {renderBadgeContent()}
        </div>
    );
};
