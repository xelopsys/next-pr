import { HTMLAttributes } from "react";

const sizes = {
    sm: {
        wh: 8,
        c: 4,
        r: 3,
    },
    md: {
        wh: 10,
        c: 5,
        r: 4,
    },
};

const Dot = (props: HTMLAttributes<HTMLOrSVGElement> & { size?: "sm" | "md" }) => {
    const { size = "md" } = props;
    return (
        <svg width={sizes[size].wh} height={sizes[size].wh} viewBox={`0 0 ${sizes[size].wh} ${sizes[size].wh}`} fill="none" {...props}>
            <circle cx={sizes[size].c} cy={sizes[size].c} r={sizes[size].r} fill="currentColor" />
        </svg>
    );
};

export default Dot;
