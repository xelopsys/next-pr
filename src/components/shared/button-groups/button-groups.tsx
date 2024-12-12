import { type ReactNode, createContext, isValidElement, useContext } from "react";

import { cx, sortCx } from "@/components/utils";
import { isReactComponent } from "@/components/utils/isReactComponent";

export const styles = sortCx({
    common: {
        root: "inline-flex h-max whitespace-nowrap bg-primary font-semibold text-secondary shadow-skeumorphic ring-1 ring-inset ring-border-primary transition duration-100 ease-linear hover:bg-primary_hover hover:text-secondary_hover focus:z-10 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-brand disabled:cursor-not-allowed disabled:bg-primary *:disabled:text-disabled",
        icon: "pointer-events-none text-current transition-[inherit]",
    },

    sizes: {
        sm: {
            root: "gap-1 py-2 pl-3.5 pr-4 text-sm leading-sm first:rounded-l-lg last:rounded-r-lg data-[icon-only=true]:p-2",
            icon: "size-5",
        },
        md: {
            root: "gap-1 py-2.5 pl-4 pr-4.5 text-sm leading-sm first:rounded-l-lg last:rounded-r-lg data-[icon-only=true]:px-3",
            icon: "size-5",
        },
        lg: {
            root: "gap-1.5 py-2.5 pl-4.5 pr-5 text-md leading-md first:rounded-l-lg last:rounded-r-lg data-[icon-only=true]:p-3",
            icon: "size-5",
        },
        xl: {
            root: "gap-1.5 py-3 pl-5 pr-5.5 text-md leading-md first:rounded-l-lg last:rounded-r-lg data-[icon-only=true]:p-3.5",
            icon: "size-5",
        },
    },
});

type ButtonSize = keyof typeof styles.sizes;

const ButtonGroupContext = createContext<{ size: ButtonSize }>({ size: "md" });

interface ButtonGroupBaseProps extends React.DetailedHTMLProps<Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">, HTMLButtonElement> {
    isSelected?: boolean;
    size?: ButtonSize;
    iconLeading?: React.FC<{ className?: string }> | React.ReactNode;
    iconTrailing?: React.FC<{ className?: string }> | React.ReactNode;
}

export const ButtonGroupBase = ({ isSelected, iconLeading: IconLeading, iconTrailing: IconTrailing, children, ...props }: ButtonGroupBaseProps) => {
    const context = useContext(ButtonGroupContext);
    if (!context) {
        throw new Error("ButtonGroupBase must be used within a ButtonGroup component");
    }

    const { size } = context;

    const isIcon = (IconLeading || IconTrailing) && !children;

    return (
        <button
            {...(props as any)}
            data-icon-only={isIcon}
            className={cx(styles.common.root, styles.sizes[size].root, isSelected && "bg-active disabled:bg-disabled_subtle", props.className)}
        >
            {isReactComponent(IconLeading) && <IconLeading className={cx(styles.common.icon, styles.sizes[size].icon)} />}
            {isValidElement(IconLeading) && IconLeading}

            {children}

            {isReactComponent(IconTrailing) && <IconTrailing className={cx(styles.common.icon, styles.sizes[size].icon)} />}
            {isValidElement(IconTrailing) && IconTrailing}
        </button>
    );
};

interface ButtonGroupProps {
    size?: ButtonSize;
    children: ReactNode;
    className?: string;
}

export const ButtonGroup = ({ children, size = "md", className }: ButtonGroupProps) => {
    return (
        <ButtonGroupContext.Provider value={{ size }}>
            <div className={cx("relative z-0 inline-flex w-max -space-x-0.5 rounded-lg shadow-xs", className)}>{children}</div>
        </ButtonGroupContext.Provider>
    );
};
