import { cx } from "@/components/utils";
import { Avatar, type AvatarProps } from "./avatar";
import { type ReactNode } from "react";

const styles = {
    sm: { root: "gap-2", title: "tt-sm-semi", subtitle: "tt-xs" },
    md: { root: "gap-2", title: "tt-sm-semi", subtitle: "tt-sm" },
    lg: { root: "gap-3", title: "tt-md-semi", subtitle: "tt-md" },
    xl: { root: "gap-4", title: "tt-lg-semi", subtitle: "tt-md" },
};

type AvatarLabelGroupProps = AvatarProps & {
    size: "sm" | "md" | "lg" | "xl";
    title: string | ReactNode;
    subtitle: string | ReactNode;
};

export const AvatarLabelGroup = ({ title, subtitle, className, ...props }: AvatarLabelGroupProps) => {
    return (
        <div className={cx("group flex items-center", styles[props.size].root, className)}>
            <Avatar {...props} />
            <div>
                <p className={cx("text-primary", styles[props.size].title)}>{title}</p>
                <p className={cx("text-tertiary", styles[props.size].subtitle)}>{subtitle}</p>
            </div>
        </div>
    );
};
