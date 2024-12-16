import { cx } from "@/components/utils";
import { type AvatarProps } from "./avatar";
import { AvatarOnlineIndicator, VerifiedTick } from "./base-components";
import { useState } from "react";
import { User01 } from "@a-peak-works/untitledui-icons";

const styles = {
    sm: { root: "size-18", icon: "size-9", initials: "td-sm-semi", ring: "ring-3 shadow-md", status: "bottom-0.5 right-0.5", tick: "bottom-0 right-0" },
    md: { root: "size-24", icon: "size-12", initials: "td-md-semi", ring: "ring-4 shadow-lg", status: "bottom-1 right-1", tick: "bottom-0.5 right-0.5" },
    lg: { root: "size-40", icon: "size-20", initials: "td-xl-semi", ring: "ring-4 shadow-lg", status: "bottom-3 right-3", tick: "bottom-1 right-1" },
};

const tickSizeMap = {
    sm: "2xl",
    md: "3xl",
    lg: "4xl",
} as const;

export const AvatarProfilePhoto = ({
    contrastBorder = true,
    size = "md",
    src,
    alt,
    initials,
    placeholder,
    placeholderIcon: PlaceholderIcon,
    verified,
    badge,
    status,
    className,
}: AvatarProps & { size: "sm" | "md" | "lg" }) => {
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
            return <AvatarOnlineIndicator isOnline={status === "online"} size={tickSizeMap[size]} className={styles[size].status} />;
        }

        if (verified) {
            return <VerifiedTick size={tickSizeMap[size]} className={cx("absolute", styles[size].tick)} />;
        }

        return badge;
    };

    return (
        <div
            className={cx(
                "relative inline-flex shrink-0 items-center justify-center rounded-full bg-avatar-bg",
                contrastBorder && "outline outline-1 -outline-offset-1 outline-avatar-contrast-border",
                styles[size].root,
                className,
            )}
        >
            {renderMainContent()}
            {renderBadgeContent()}
            <div className={cx("absolute inset-0 rounded-full ring-avatar-profile-photo-border", styles[size].ring)}></div>
        </div>
    );
};
