import { cx } from "@/components/utils";
import { ReactNode } from "react";

type DividerType = "single-line" | "dual-line" | "background-fill";

interface ContentDividerProps {
    type: DividerType;
    children: ReactNode;
    className?: string;
}

export const ContentDivider = ({ type, children, className }: ContentDividerProps) => {
    const styles = {
        "single-line": "flex items-center gap-x-2",
        "dual-line": "flex justify-center gap-x-2 border-y border-secondary py-3",
        "background-fill": "flex justify-center gap-x-2 rounded-lg bg-secondary py-2",
    };

    return (
        <div className={cx(styles[type], className)}>
            {type === "single-line" && <div className="h-px flex-1 bg-border-secondary" />}
            {children}
            {type === "single-line" && <div className="h-px flex-1 bg-border-secondary" />}
        </div>
    );
};
