import { Circle } from "./circle";
import { Square } from "./square";
import { Grid } from "./grid";
import { GridCheck } from "./grid-check";
import { cx } from "@/components/utils";

const patterns = {
    circle: Circle,
    square: Square,
    grid: Grid,
    "grid-check": GridCheck,
};

export interface BackgroundPatternProps {
    size?: "sm" | "md" | "lg";
    className?: string;
    pattern: keyof typeof patterns;
}

export const BackgroundPattern = (props: BackgroundPatternProps) => {
    const { pattern } = props;
    const Pattern = patterns[pattern];
    return <Pattern {...(props as any)} className={cx("pointer-events-none", props.className)} />;
};
