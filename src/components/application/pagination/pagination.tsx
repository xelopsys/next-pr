import { ArrowLeft, ArrowRight } from "@a-peak-works/untitledui-icons";

import Button from "@/components/shared/buttons/button";
import { ButtonGroup, ButtonGroupBase } from "@/components/shared/button-groups/button-groups";
import useBreakpoint from "@/components/utils/useBreakpoint";
import { Pagination, PaginationRootProps } from "./pagination-primitive";
import { cx } from "@/components/utils";
import { useState } from "react";

interface PaginationProps extends Partial<Omit<PaginationRootProps, "children">> {
    rounded?: boolean;
}

const PaginationItem = ({ value, rounded, isCurrent }: { value: number; rounded?: boolean; isCurrent: boolean }) => {
    return (
        <Pagination.Item
            value={value}
            isCurrent={isCurrent}
            className={({ isSelected }) =>
                cx(
                    "flex size-10 items-center justify-center p-3 text-tertiary transition duration-200 ease-in-out tt-sm-md hover:bg-primary_hover hover:text-secondary_hover focus:z-10 focus:bg-primary_hover focus:outline-none focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-focus-ring",
                    rounded ? "rounded-full" : "rounded-lg",
                    isSelected && "bg-primary_hover text-secondary_hover",
                )
            }
        >
            {value}
        </Pagination.Item>
    );
};

interface MobilePaginationProps {
    page?: number;
    total?: number;
    className?: string;
    onPageChange?: (page: number) => void;
}

const MobilePagination = ({ page = 1, total = 10, className, onPageChange }: MobilePaginationProps) => {
    return (
        <nav aria-label="Pagination" className={cx("flex items-center justify-between md:hidden", className)}>
            <Button
                aria-label="Go to previous page"
                iconLeading={ArrowLeft}
                color="secondary-gray"
                size="sm"
                onClick={() => onPageChange?.(Math.max(0, page - 1))}
            />

            <span className="text-fg-secondary tt-sm">
                Page <span className="font-medium">{page}</span> of <span className="font-medium">{total}</span>
            </span>

            <Button
                aria-label="Go to next page"
                iconLeading={ArrowRight}
                color="secondary-gray"
                size="sm"
                onClick={() => onPageChange?.(Math.min(total, page + 1))}
            />
        </nav>
    );
};

export const PaginationPageDefault = ({ rounded, page = 1, total = 10, className, ...props }: PaginationProps) => {
    const isDesktop = useBreakpoint("md");

    return (
        <Pagination.Root
            {...props}
            page={page}
            total={total}
            className={cx("flex w-full items-center justify-between gap-3 border-t border-secondary pt-4 md:pt-5", className)}
        >
            <div className="hidden flex-1 justify-start md:flex">
                <Pagination.PrevTrigger asChild>
                    <Button children={isDesktop ? "Previous" : undefined} iconLeading={ArrowLeft} color="link-gray" size="sm" />
                </Pagination.PrevTrigger>
            </div>

            <Pagination.PrevTrigger asChild className="md:hidden">
                <Button children={isDesktop ? "Previous" : undefined} iconLeading={ArrowLeft} color="secondary-gray" size="sm" />
            </Pagination.PrevTrigger>

            <Pagination.Context>
                {({ pages, currentPage, total }) => (
                    <>
                        <div className="hidden justify-center gap-0.5 md:flex">
                            {pages.map((page, index) =>
                                page.type === "page" ? (
                                    <PaginationItem key={index} rounded={rounded} {...page} />
                                ) : (
                                    <Pagination.Ellipsis
                                        key={index}
                                        children="&#8230;"
                                        className="flex size-10 shrink-0 items-center justify-center text-tertiary"
                                    />
                                ),
                            )}
                        </div>

                        <div className="flex justify-center whitespace-pre text-fg-secondary tt-sm md:hidden">
                            Page <span className="font-medium">{currentPage}</span> of <span className="font-medium">{total}</span>
                        </div>
                    </>
                )}
            </Pagination.Context>

            <div className="hidden flex-1 justify-end md:flex">
                <Pagination.NextTrigger asChild>
                    <Button children={isDesktop ? "Next" : undefined} iconTrailing={ArrowRight} color="link-gray" size="sm" />
                </Pagination.NextTrigger>
            </div>
            <Pagination.NextTrigger asChild className="md:hidden">
                <Button children={isDesktop ? "Next" : undefined} iconTrailing={ArrowRight} color="secondary-gray" size="sm" />
            </Pagination.NextTrigger>
        </Pagination.Root>
    );
};

export const PaginationPageMinimalCenter = ({ rounded, page = 1, total = 10, className, ...props }: PaginationProps) => {
    const isDesktop = useBreakpoint("md");

    return (
        <Pagination.Root
            {...props}
            page={page}
            total={total}
            className={cx("flex w-full items-center justify-between gap-3 border-t border-secondary pt-4 md:pt-5", className)}
        >
            <div className="flex flex-1 justify-start">
                <Pagination.PrevTrigger asChild>
                    <Button children={isDesktop ? "Previous" : undefined} iconLeading={ArrowLeft} color="secondary-gray" size="sm" />
                </Pagination.PrevTrigger>
            </div>

            <Pagination.Context>
                {({ pages, currentPage, total }) => (
                    <>
                        <div className="hidden justify-center gap-0.5 md:flex">
                            {pages.map((page, index) =>
                                page.type === "page" ? (
                                    <PaginationItem key={index} rounded={rounded} {...page} />
                                ) : (
                                    <Pagination.Ellipsis
                                        key={index}
                                        children="&#8230;"
                                        className="flex size-10 shrink-0 items-center justify-center text-tertiary"
                                    />
                                ),
                            )}
                        </div>

                        <div className="flex justify-center whitespace-pre text-fg-secondary tt-sm md:hidden">
                            Page <span className="font-medium">{currentPage}</span> of <span className="font-medium">{total}</span>
                        </div>
                    </>
                )}
            </Pagination.Context>

            <div className="flex flex-1 justify-end">
                <Pagination.NextTrigger asChild>
                    <Button children={isDesktop ? "Next" : undefined} iconTrailing={ArrowRight} color="secondary-gray" size="sm" />
                </Pagination.NextTrigger>
            </div>
        </Pagination.Root>
    );
};

export const PaginationCardDefault = ({ rounded, page = 1, total = 10, ...props }: PaginationProps) => {
    const isDesktop = useBreakpoint("md");

    return (
        <Pagination.Root
            {...props}
            page={page}
            total={total}
            className="flex w-full items-center justify-between gap-3 border-t border-secondary px-4 py-3 md:px-6 md:pb-4 md:pt-3"
        >
            <div className="flex flex-1 justify-start">
                <Pagination.PrevTrigger asChild>
                    <Button children={isDesktop ? "Previous" : undefined} iconLeading={ArrowLeft} color="secondary-gray" size="sm" />
                </Pagination.PrevTrigger>
            </div>

            <Pagination.Context>
                {({ pages, currentPage, total }) => (
                    <>
                        <div className="hidden justify-center gap-0.5 md:flex">
                            {pages.map((page, index) =>
                                page.type === "page" ? (
                                    <PaginationItem key={index} rounded={rounded} {...page} />
                                ) : (
                                    <Pagination.Ellipsis
                                        key={index}
                                        children="&#8230;"
                                        className="flex size-10 shrink-0 items-center justify-center text-tertiary"
                                    />
                                ),
                            )}
                        </div>

                        <div className="flex justify-center whitespace-pre text-fg-secondary tt-sm md:hidden">
                            Page <span className="font-medium">{currentPage}</span> of <span className="font-medium">{total}</span>
                        </div>
                    </>
                )}
            </Pagination.Context>

            <div className="flex flex-1 justify-end">
                <Pagination.NextTrigger asChild>
                    <Button children={isDesktop ? "Next" : undefined} iconTrailing={ArrowRight} color="secondary-gray" size="sm" />
                </Pagination.NextTrigger>
            </div>
        </Pagination.Root>
    );
};

interface PaginationCardMinimalProps {
    page?: number;
    total?: number;
    align?: "left" | "center" | "right";
    className?: string;
    onPageChange?: (page: number) => void;
}

export const PaginationCardMinimal = ({ page = 1, total = 10, align = "left", onPageChange, className }: PaginationCardMinimalProps) => {
    return (
        <div className={cx("border-t border-secondary px-4 py-3 md:px-6 md:pb-4 md:pt-3", className)}>
            <MobilePagination page={page} total={total} onPageChange={onPageChange} />

            <nav aria-label="Pagination" className={cx("hidden items-center gap-3 md:flex", align === "center" && "justify-between")}>
                <div className={cx(align === "center" && "flex flex-1 justify-start")}>
                    <Button color="secondary-gray" size="sm" onClick={() => onPageChange?.(Math.max(0, page - 1))}>
                        Previous
                    </Button>
                </div>

                <span className={cx("text-fg-secondary tt-sm-md", align === "right" && "order-first mr-auto", align === "left" && "order-last ml-auto")}>
                    Page {page} of {total}
                </span>

                <div className={cx(align === "center" && "flex flex-1 justify-end")}>
                    <Button color="secondary-gray" size="sm" onClick={() => onPageChange?.(Math.min(total, page + 1))}>
                        Next
                    </Button>
                </div>
            </nav>
        </div>
    );
};

interface PaginationButtonGroupProps extends Partial<Omit<PaginationRootProps, "children">> {
    align?: "left" | "center" | "right";
}

export const PaginationButtonGroup = ({ align = "left", page = 1, total = 10, ...props }: PaginationButtonGroupProps) => {
    const isDesktop = useBreakpoint("md");

    return (
        <div
            className={cx(
                "flex border-t border-secondary px-4 py-3 md:px-6 md:pb-4 md:pt-3",
                align === "left" && "justify-start",
                align === "center" && "justify-center",
                align === "right" && "justify-end",
            )}
        >
            <Pagination.Root {...props} page={page} total={total}>
                <Pagination.Context>
                    {({ pages }) => (
                        <ButtonGroup size="md">
                            <Pagination.PrevTrigger asChild>
                                <ButtonGroupBase iconLeading={ArrowLeft} children={isDesktop ? "Previous" : undefined} />
                            </Pagination.PrevTrigger>

                            {pages.map((page, index) =>
                                page.type === "page" ? (
                                    <Pagination.Item key={index} {...page} asChild>
                                        <ButtonGroupBase isSelected={page.isCurrent} className="size-10 items-center justify-center">
                                            {page.value}
                                        </ButtonGroupBase>
                                    </Pagination.Item>
                                ) : (
                                    <Pagination.Ellipsis key={index}>
                                        <ButtonGroupBase className="pointer-events-none size-10 items-center justify-center !rounded-none">
                                            &#8230;
                                        </ButtonGroupBase>
                                    </Pagination.Ellipsis>
                                ),
                            )}

                            <Pagination.NextTrigger asChild>
                                <ButtonGroupBase iconTrailing={ArrowRight} children={isDesktop ? "Next" : undefined} />
                            </Pagination.NextTrigger>
                        </ButtonGroup>
                    )}
                </Pagination.Context>
            </Pagination.Root>
        </div>
    );
};

export const PaginationButtonGroup2 = ({ align = "left", page = 1, total = 10, ...props }: PaginationButtonGroupProps) => {
    const isDesktop = useBreakpoint("md");

    return (
        <div
            className={cx(
                "flex border-t border-secondary px-4 py-3 md:px-6 md:pb-4 md:pt-3",
                align === "left" && "justify-start",
                align === "center" && "justify-center",
                align === "right" && "justify-end",
            )}
        >
            <Pagination.Root
                {...props}
                page={page}
                total={total}
                siblingCount={isDesktop ? 2 : 1}
                className="relative z-0 inline-flex -space-x-px rounded-lg shadow-xs ring-1 ring-inset ring-border-primary"
            >
                <Pagination.PrevTrigger className="flex items-center gap-2 rounded-l-lg bg-primary px-4 py-2 text-fg-secondary shadow-skeumorphic ring-1 ring-inset ring-border-primary tt-sm-semi hover:bg-primary_hover hover:text-secondary_hover focus:z-10 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-focus-ring disabled:cursor-not-allowed disabled:text-disabled">
                    <ArrowLeft className="size-5" /> <span className="hidden md:inline-block">Previous</span>
                </Pagination.PrevTrigger>

                <Pagination.Context>
                    {({ pages }) =>
                        pages.map((page, index) =>
                            page.type === "page" ? (
                                <Pagination.Item
                                    key={index}
                                    {...page}
                                    className={({ isSelected }) =>
                                        cx(
                                            "flex size-10 items-center justify-center gap-2 bg-primary p-2 text-fg-secondary shadow-skeumorphic ring-1 ring-inset ring-border-primary tt-sm-semi hover:bg-primary_hover hover:text-secondary_hover focus:z-10 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-focus-ring disabled:cursor-not-allowed disabled:text-disabled",
                                            isSelected && "bg-primary_hover",
                                        )
                                    }
                                >
                                    {page.value}
                                </Pagination.Item>
                            ) : (
                                <Pagination.Ellipsis
                                    key={index}
                                    children="&#8230;"
                                    className="flex size-10 items-center justify-center rounded-none bg-primary p-2 text-fg-secondary shadow-skeumorphic ring-1 ring-inset ring-border-primary"
                                />
                            ),
                        )
                    }
                </Pagination.Context>

                <Pagination.NextTrigger className="flex items-center gap-2 rounded-r-lg bg-primary px-4 py-2 text-fg-secondary shadow-skeumorphic ring-1 ring-inset ring-border-primary tt-sm-semi hover:bg-primary_hover hover:text-secondary_hover focus:z-10 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-focus-ring disabled:cursor-not-allowed disabled:text-disabled">
                    <span className="hidden md:inline-block">Next</span>
                    <ArrowRight className="size-5" />
                </Pagination.NextTrigger>
            </Pagination.Root>
        </div>
    );
};
