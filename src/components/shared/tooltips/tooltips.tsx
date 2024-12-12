import { cx } from "@/components/utils";
import { FocusableElement } from "@react-types/shared";
import { cloneElement, DetailedReactHTMLElement, ReactNode, RefAttributes, useRef } from "react";
import { mergeProps, useFocusable } from "react-aria";
import type { TooltipProps as AriaTooltipProps, ButtonProps } from "react-aria-components";
import { Tooltip as AriaTooltip, TooltipTrigger as AriaTooltipTrigger, Button, OverlayArrow, TooltipTriggerComponentProps } from "react-aria-components";

const padding = {
    "top left": "px-2.5",
    "top right": "px-2.5",
    "bottom left": "px-2.5",
    "bottom right": "px-2.5",
    left: "-ml-px",
    "left top": "-ml-px",
    "left bottom": "-ml-px",
    start: "-ml-px",
    "start top": "-ml-px",
    "start bottom": "-ml-px",
    right: "-mr-px",
    "right top": "-mr-px",
    "right bottom": "-mr-px",
    end: "-mr-px",
    "end top": "-mr-px",
    "end bottom": "-mr-px",
};

interface TooltipProps extends TooltipTriggerComponentProps, Omit<AriaTooltipProps, "children"> {
    title: ReactNode;
    description?: ReactNode;
    arrow?: boolean;
    delay?: number;
}

export const Tooltip = ({ title, description, children, arrow = true, delay = 500, closeDelay, isDisabled, ...tooltipProps }: TooltipProps) => {
    return (
        <AriaTooltipTrigger {...{ delay, closeDelay, isDisabled }}>
            {children}

            <AriaTooltip offset={6} {...tooltipProps}>
                {arrow && (
                    <OverlayArrow className={cx(tooltipProps.placement && padding[tooltipProps.placement as keyof typeof padding], "group")}>
                        <svg
                            width={8}
                            height={8}
                            viewBox="0 0 8 8"
                            className="fill-bg-primary-solid group-data-[placement=bottom]:rotate-180 group-data-[placement=left]:-rotate-90 group-data-[placement=right]:rotate-90 group-data-[placement=top]:rotate-0"
                        >
                            <path d="M0 0 L4 4 L8 0" />
                        </svg>
                    </OverlayArrow>
                )}
                <div className={cx("z-50 flex max-w-xs flex-col items-start gap-1 rounded-lg bg-primary-solid px-3 shadow-lg", description ? "py-3" : "py-2")}>
                    <span className="text-white tt-xs-semi">{title}</span>

                    {description && <span className="text-tooltip-supporting-text tt-xs-md">{description}</span>}
                </div>
            </AriaTooltip>
        </AriaTooltipTrigger>
    );
};

type TooltipTriggerProps =
    | (ButtonProps & RefAttributes<HTMLButtonElement> & { asChild?: never })
    | { asChild: true; isDisabled?: boolean; children: Omit<DetailedReactHTMLElement<any, any>, "ref"> };

export const TooltipTrigger = (props: TooltipTriggerProps) => {
    if (props.asChild) {
        const triggerRef = useRef<FocusableElement>(null);

        const { focusableProps } = useFocusable(
            {
                isDisabled: props.isDisabled,
            },
            triggerRef,
        );

        return cloneElement(props.children, mergeProps(focusableProps, props.children.props, { ref: triggerRef }));
    }

    const { asChild: _, className, ...buttonProps } = props;

    return (
        <Button {...buttonProps} className={(values) => cx("h-max w-max outline-none", typeof className === "function" ? className(values) : className)}>
            {props.children}
        </Button>
    );
};
