import { cx } from "@/components/utils";
import { TickIcon } from "./tick-icon";
import { FeaturedIconBase } from "@/components/foundations/featured-icon/featured-icons";
import { StepBaseProps, ComponentType } from "./progress-types";

export const statuses = {
    incomplete: {
        icon: "bg-disabled_subtle ring-[1.5px] ring-inset ring-border-disabled_subtle",
        dot: "bg-fg-disabled_subtle",
        connector: "border-secondary",
        title: "text-secondary",
        description: "text-tertiary",
    },
    current: {
        icon: "bg-brand-solid ring-2 ring-focus-ring ring-offset-bg-primary ring-offset-2",
        dot: "bg-fg-white",
        connector: "border-secondary",
        title: "text-brand-secondary",
        description: "text-brand-tertiary",
    },
    complete: {
        icon: "bg-brand-solid",
        dot: "hidden",
        connector: "border-brand",
        title: "text-secondary",
        description: "text-tertiary",
    },
};

export const sizes = {
    sm: {
        dot: "size-2",
        icon: "size-6",
        tick: "w-auto h-auto",
        content: "pb-3xl pt-xxs",
    },
    md: {
        dot: "size-2.5",
        icon: "size-8",
        tick: "w-4 h-[14.01px]",
        content: "pb-4xl pt-xs gap-xxs",
    },
    lg: {
        dot: "size-3",
        icon: "size-10",
        tick: "w-[19.99px] h-[17.51px]",
        content: "pb-4xl pt-sm gap-xxs",
    },
};

export const IconOnly = <T extends ComponentType>({ status = "incomplete", size = "sm" }: StepBaseProps<T>) => {
    return (
        <span className={cx("z-10 flex items-center justify-center rounded-full", statuses[status].icon, sizes[size].icon)}>
            <span className={cx("rounded-full", statuses[status].dot, sizes[size].dot)} />
            <TickIcon className={cx("hidden", status === "complete" && "block", sizes[size].tick)} />
        </span>
    );
};

export const IconTop = <T extends ComponentType>({ status = "incomplete", connector = true, size = "sm", ...rest }: StepBaseProps<T>) => {
    return (
        <div className={cx("flex w-full flex-col items-center justify-center gap-xl", size === "sm" && "gap-lg")}>
            <div className="relative flex w-full flex-col items-center self-stretch">
                <IconOnly {...rest} size={size} status={status} />
                <span
                    className={cx(
                        "absolute left-[53%] top-1/2 z-0 w-full flex-1 -translate-y-1/2 rounded-sm border-t-2",
                        statuses[status].connector,
                        !connector && "hidden",
                    )}
                />
            </div>
            <div className={cx("flex w-full flex-col items-start gap-xxs self-stretch", size === "sm" && "gap-0")}>
                <p className={cx("w-full text-center", statuses[status].title, size === "sm" ? "tt-sm-semi" : "tt-md-semi")}>{rest.title}</p>
                <p className={cx("w-full text-center", statuses[status].description, size === "sm" ? "tt-sm" : "tt-md")}>{rest.description}</p>
            </div>
        </div>
    );
};

export const TextLine = <T extends ComponentType>({ status = "incomplete", size = "sm", ...props }: StepBaseProps<T>) => {
    const gaps = {
        sm: "gap-lg",
        md: "gap-xl",
        lg: "gap-2xl",
    };

    return (
        <div
            className={cx(
                "flex w-full flex-col items-center justify-center border-t-4 border-fg-brand-primary_alt pt-2",
                status === "incomplete" && "border-bg-quaternary",
                gaps[size],
            )}
        >
            <div className={cx("flex w-full flex-col items-start gap-xxs self-stretch", size === "sm" && "gap-0")}>
                <p className={cx("text-secondary", status === "current" && "text-brand-secondary", size === "sm" ? "tt-sm-semi" : "tt-md-semi")}>
                    {props.title}
                </p>
                <p className={cx("text-tertiary", status === "current" && "text-brand-tertiary", size === "sm" ? "tt-sm" : "tt-md")}>{props.description}</p>
            </div>
        </div>
    );
};

export const FeaturedIconTop = <T extends ComponentType>({ status = "incomplete", connector = true, size = "sm", icon: Icon, ...rest }: StepBaseProps<T>) => {
    return (
        <div className={cx("flex w-full flex-col items-center justify-center gap-xl", size === "sm" && "gap-lg")}>
            <div className={cx("relative flex w-full flex-col items-center self-stretch")}>
                <FeaturedIconBase size="md" color="gray" className="z-10" theme="modern">
                    {Icon && <Icon />}
                </FeaturedIconBase>
                <span
                    className={cx(
                        "absolute left-[53%] top-1/2 z-0 w-full flex-1 -translate-y-1/2 rounded-sm border-t-2 border-secondary",
                        status === "complete" && "border-fg-secondary",
                        !connector && "hidden",
                    )}
                />
            </div>
            <div className={cx("flex w-full flex-col items-start gap-xxs self-stretch", size === "sm" && "gap-0", status === "incomplete" && "opacity-60")}>
                <p className={cx("w-full text-center text-secondary", size === "sm" ? "tt-sm-semi" : "tt-md-semi")}>{rest.title}</p>
                <p className={cx("w-full text-center text-tertiary", size === "sm" ? "tt-sm" : "tt-md")}>{rest.description}</p>
            </div>
        </div>
    );
};

export const IconLeft = <T extends ComponentType>({ status = "incomplete", connector = true, size = "sm", ...rest }: StepBaseProps<T>) => {
    return (
        <div className={cx("flex h-max flex-row items-start justify-start gap-xl", size === "sm" && "gap-lg")}>
            <div className="flex flex-col items-center gap-xs self-stretch pb-xs">
                <IconOnly {...rest} size={size} status={status} />
                <span className={cx("flex-1 rounded-sm border-l-2", statuses[status].connector, !connector && "hidden")} />
            </div>
            <div className={cx("flex flex-col items-start", sizes[size].content)}>
                <p className={cx(statuses[status].title, size === "sm" ? "tt-sm-semi" : "tt-md-semi")}>{rest.title}</p>
                <p className={cx(statuses[status].description, size === "sm" ? "tt-sm" : "tt-md")}>{rest.description}</p>
            </div>
        </div>
    );
};

export const FeaturedIconLeft = <T extends ComponentType>({ status = "incomplete", connector = true, size = "sm", icon: Icon, ...rest }: StepBaseProps<T>) => {
    return (
        <div className={cx("flex flex-row gap-xl", status !== "current" && "opacity-60", size === "sm" && "gap-lg")}>
            <div className="flex flex-col items-center gap-xs self-stretch pb-xs">
                <FeaturedIconBase size="lg" color="gray" theme="modern">
                    {Icon && <Icon />}
                </FeaturedIconBase>
                <span className={cx("flex-1 rounded-sm border-l-2 border-secondary", !connector && "hidden")} />
            </div>
            <div className={cx("flex flex-col items-start gap-xxs pb-4xl", size === "sm" && "pb-3xl pt-xs")}>
                <p className={cx("text-secondary", size === "sm" ? "tt-sm-semi" : "tt-md-semi")}>{rest.title}</p>
                <p className={cx("text-tertiary", size === "sm" ? "tt-sm" : "tt-md")}>{rest.description}</p>
            </div>
        </div>
    );
};
