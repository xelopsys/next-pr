import { cx } from "@/components/utils";
import { ProgressIconsCenteredProps, ComponentType, ProgressMinimalIconsProps, CommonProps } from "./progress-types";
import { IconTop, FeaturedIconTop, IconLeft, FeaturedIconLeft, IconOnly, TextLine, statuses } from "./step-base";

const progressIcons = {
    desktop: {
        icon: IconTop,
        "featured-icon": FeaturedIconTop,
    },
    mobile: {
        icon: IconLeft,
        "featured-icon": FeaturedIconLeft,
    },
};

const IconsWithText = <T extends ComponentType>(props: ProgressIconsCenteredProps<T>) => {
    const { type = "icon", breakpoint = "mobile", size = "sm", connector = true, items } = props;
    const length = items.length;
    // single step component based on the type
    const StepBase = progressIcons[breakpoint][type];

    return (
        <div
            className={cx("grid w-full items-start justify-start", breakpoint === "desktop" && "gap-xl", breakpoint === "mobile" && "!grid-cols-1")}
            style={{
                gridTemplateColumns: `repeat(${length}, minmax(0, 1fr))`,
            }}
        >
            {items.map((item, index) => {
                return (
                    <StepBase key={index} {...(item as any)} size={size} connector={!connector ? false : item.connector || index !== length - 1} type={type} />
                );
            })}
        </div>
    );
};

const MinimalIcons = ({ text = false, size = "sm", ...rest }: ProgressMinimalIconsProps) => {
    const gaps = {
        sm: "gap-lg",
        md: "gap-xl",
        lg: "gap-2xl",
    };

    const completed = rest.items.filter((item) => item.status === "complete").length;
    const total = rest.items.length;

    return (
        <div className={cx("flex w-full flex-row items-center justify-center", gaps[size])}>
            {text && (
                <p className="text-secondary tt-sm-md">
                    Step {completed} of {total}
                </p>
            )}
            {rest.items.map((item, index) => (
                <IconOnly key={index} {...item} size={size} />
            ))}
        </div>
    );
};

const MinimalIconsConnected = ({ size = "sm", breakpoint = "mobile", ...rest }: CommonProps) => {
    const length = rest.items.length;

    return (
        <div>
            <div className="flex w-full items-center justify-center">
                {rest.items.map((item, index) => (
                    <div key={index} className="flex items-center justify-center">
                        <IconOnly {...item} size={size} />
                        <span
                            className={cx(
                                "w-20 flex-1 border-t-2",
                                statuses[item.status].connector,
                                breakpoint === "mobile" && "w-12",
                                index === length - 1 && "hidden",
                            )}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

const TextWithLine = ({ breakpoint = "mobile", size = "sm", ...rest }: CommonProps) => {
    const length = rest.items.length;

    return (
        <div
            className={cx(
                "grid w-full items-start justify-start",
                breakpoint === "desktop" ? "gap-xl" : "gap-2xl",
                breakpoint === "mobile" && "!grid-cols-1",
                size === "lg" && "gap-3xl",
            )}
            style={{
                gridTemplateColumns: `repeat(${length}, minmax(0, 1fr))`,
            }}
        >
            {rest.items.map((item, index) => (
                <TextLine key={index} {...item} size={size} />
            ))}
        </div>
    );
};

export const Progress = {
    IconsWithText,
    MinimalIcons,
    MinimalIconsConnected,
    TextWithLine,
};

export default Progress;
