import { cx } from "@/components/utils";
import { forwardRef, HTMLAttributes } from "react";

const SectionFooterRoot = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & { isCard?: boolean }>(({ isCard, ...props }, ref) => (
    <div
        ref={ref}
        {...props}
        className={cx("flex items-center border-t border-secondary", isCard ? "gap-4 px-4 py-3 md:py-4 lg:px-6" : "gap-5 pt-4 md:pt-5", props.className)}
    >
        {props.children}
    </div>
));

const SectionFooterActions = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => (
    <div ref={ref} {...props} className={cx("flex flex-1 justify-end gap-3", props.className)}>
        {props.children}
    </div>
));

const SectionFooter = {
    Root: SectionFooterRoot,
    Actions: SectionFooterActions,
};

export default SectionFooter;
