import { cx } from "@/components/utils";
import { X as CloseIcon } from "@a-peak-works/untitledui-icons";

interface CloseButtonProps {
    theme?: "light" | "dark";
    size?: "sm" | "md" | "lg";
    className?: string;
    onClick?: () => void;
    label?: string;
}

export const CloseButton = ({ label, onClick, className, size = "sm", theme = "light" }: CloseButtonProps) => {
    const sizes = {
        sm: { button: "size-9", icon: "size-5" },
        md: { button: "size-10", icon: "size-5" },
        lg: { button: "size-11", icon: "size-6" },
    };

    const styles = {
        light: "text-fg-quinary hover:bg-primary_hover hover:text-fg-quinary_hover focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-focus-ring",
        dark: "text-fg-white/70 hover:bg-white/20 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-focus-ring",
    };

    return (
        <button
            onClick={onClick}
            aria-label={label || "Close"}
            className={cx(
                "flex cursor-pointer items-center justify-center rounded-lg p-2 transition duration-100 ease-in-out focus:outline-none",
                sizes[size].button,
                styles[theme],
                className,
            )}
        >
            <CloseIcon aria-hidden="true" className={cx("shrink-0 transition-inherit-all", sizes[size].icon)} />
        </button>
    );
};
