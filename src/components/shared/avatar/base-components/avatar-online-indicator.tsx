import { cx } from "@/components/utils";

interface AvatarOnlineIndicatorProps {
    size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
    isOnline: boolean;
    className?: string;
}

const sizes = {
    xs: "size-1.5",
    sm: "size-2",
    md: "size-2.5",
    lg: "size-3",
    xl: "size-3.5",
    "2xl": "size-4",
    "3xl": "size-4.5",
    "4xl": "size-5",
};

export const AvatarOnlineIndicator = ({ size, isOnline, className }: AvatarOnlineIndicatorProps) => (
    <span
        className={cx(
            "absolute bottom-0 right-0 z-10 rounded-full ring-[1.5px] ring-bg-primary",
            isOnline ? "bg-fg-success-secondary" : "bg-fg-disabled_subtle",
            sizes[size],
            className,
        )}
    />
);
