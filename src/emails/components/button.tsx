import { cx } from "@/components/utils";
import { ButtonProps as EmailButtonProps, Button as EmailButton } from "@react-email/components";

const variants = {
    primary: "bg-button-primary-bg border border-solid text-button-primary-fg  border-violet-700",
    "secondary-gray": "bg-button-secondary-bg text-button-secondary-fg border border-solid border-button-secondary-border",
};

const sizes = {
    lg: "px-4.5 py-2.5 tt-md-semi",
};

interface ButtonProps extends EmailButtonProps {
    variant?: keyof typeof variants;
    size?: keyof typeof sizes;
}

export const Button = ({ variant = "primary", size = "lg", ...props }: ButtonProps) => {
    return (
        <EmailButton {...props} className={cx("rounded-lg", variants[variant], sizes[size], props.className)}>
            {props.children}
        </EmailButton>
    );
};
