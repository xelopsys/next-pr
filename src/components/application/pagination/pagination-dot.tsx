import { cx } from "@/components/utils";
import { Pagination, PaginationRootProps } from "./pagination-primitive";

interface PaginationDotProps extends Omit<PaginationRootProps, "children"> {
    size?: "md" | "lg";
    isBrand?: boolean;
    framed?: boolean;
}

export const PaginationDot = ({ framed, className, size = "md", isBrand, ...props }: PaginationDotProps) => {
    const sizes = {
        md: {
            root: cx("gap-3", framed && "p-2"),
            button: "h-2 w-2 after:-inset-x-1.5 after:-inset-y-2",
        },
        lg: {
            root: cx("gap-4", framed && "p-3"),
            button: "h-2.5 w-2.5 after:-inset-x-2 after:-inset-y-3",
        },
    };

    return (
        <Pagination.Root {...props} className={cx("flex h-max w-max", sizes[size].root, framed && "bg-alpha-white/90 rounded-full backdrop-blur", className)}>
            <Pagination.Context>
                {({ pages }) =>
                    pages.map((page, index) =>
                        page.type === "page" ? (
                            <Pagination.Item
                                {...page}
                                asChild
                                key={index}
                                className={cx(
                                    "relative cursor-pointer rounded-full bg-quaternary after:absolute focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-focus-ring",
                                    sizes[size].button,
                                    page.isCurrent && "bg-fg-brand-primary_alt",
                                    isBrand && "bg-fg-brand-secondary",
                                    isBrand && page.isCurrent && "bg-fg-white",
                                )}
                            ></Pagination.Item>
                        ) : (
                            <Pagination.Ellipsis {...page} />
                        ),
                    )
                }
            </Pagination.Context>
        </Pagination.Root>
    );
};
