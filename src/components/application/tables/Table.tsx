import { Badge } from "@/components/shared/badges/badges";
import { Checkbox } from "@/components/shared/checkbox/checkbox";
import { Dropdown } from "@/components/shared/dropdowns/dropdowns";
import { Tooltip, TooltipTrigger } from "@/components/shared/tooltips/tooltips";
import { cx } from "@/components/utils";
import { ArrowDown, ChevronSelectorVertical, Copy01, DotsVertical, Edit01, Eye, HelpCircle, Share01, Trash02 } from "@a-peak-works/untitledui-icons";
import { forwardRef, HTMLAttributes, isValidElement, ReactNode, RefAttributes, TdHTMLAttributes, ThHTMLAttributes } from "react";
import {
    Button as AriaButton,
    Table as AriaTable,
    TableBody as AriaTableBody,
    TableHeader as AriaTableHeader,
    Cell,
    type CellProps,
    Collection,
    Column,
    type ColumnProps,
    Group,
    Row,
    type RowProps,
    TableHeaderProps,
    type TableProps,
    useTableOptions,
} from "react-aria-components";

export const TableRowActionsDropdown = () => (
    <Dropdown.Root>
        <Dropdown.DotsButton />

        <Dropdown.Popover className="w-[200px]">
            <Dropdown.Menu>
                <Dropdown.Item label="Edit" icon={Edit01} />
                <Dropdown.Item label="Copy link" icon={Copy01} />
                <Dropdown.Item label="Delete" icon={Trash02} />
            </Dropdown.Menu>
        </Dropdown.Popover>
    </Dropdown.Root>
);

const TableCardRoot = ({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) => {
    return (
        <div {...props} className={cx("overflow-hidden rounded-xl bg-primary shadow-xs ring-1 ring-border-secondary", className)}>
            {children}
        </div>
    );
};

interface TableCardHeaderProps {
    title: string;
    badge?: ReactNode;
    description?: string;
    contentTrailing?: ReactNode;
    className?: string;
}

const TableCardHeader = ({ title, badge, description, contentTrailing, className }: TableCardHeaderProps) => {
    return (
        <div className={cx("relative flex flex-col items-start gap-4 border-b border-secondary bg-primary px-4 py-5 md:flex-row md:px-6 md:pt-5", className)}>
            <div className="flex flex-1 flex-col gap-0.5">
                <div className="flex items-center gap-2">
                    <h2 className="text-primary tt-lg-semi">{title}</h2>
                    {badge ? (
                        isValidElement(badge) ? (
                            badge
                        ) : (
                            <Badge color="purple" size="sm">
                                {badge}
                            </Badge>
                        )
                    ) : null}
                </div>
                {description && <p className="text-tertiary tt-sm">{description}</p>}
            </div>
            {contentTrailing}
        </div>
    );
};

const Root = forwardRef<HTMLTableElement, TableProps & HTMLAttributes<HTMLTableElement>>(({ className, ...props }, ref) => (
    <div className="overflow-x-scroll">
        <AriaTable ref={ref} className={cx("w-full overflow-x-hidden", className)} {...props} />
    </div>
));
Root.displayName = "Table";

const TableHeader = <T extends object>({
    columns,
    children,
    bordered = true,
    className,
    ...props
}: TableHeaderProps<T> & RefAttributes<HTMLTableSectionElement> & { bordered?: boolean }) => {
    const { selectionBehavior, selectionMode } = useTableOptions();

    return (
        <AriaTableHeader
            {...props}
            className={(state) =>
                cx(
                    "relative h-11 bg-secondary",

                    // Row border — using an "after" pseudo-element to avoid the border taking up space.
                    bordered &&
                        "[&>tr>th]:after:pointer-events-none [&>tr>th]:after:absolute [&>tr>th]:after:inset-x-0 [&>tr>th]:after:bottom-0 [&>tr>th]:after:h-px [&>tr>th]:after:bg-border-secondary focus:[&>tr>th]:after:bg-transparent",

                    typeof className === "function" ? className(state) : className,
                )
            }
        >
            {selectionBehavior === "toggle" && (
                <Column className="relative w-11 py-2 pl-6 pr-0">
                    {selectionMode === "multiple" && (
                        <div className="flex items-start">
                            <Checkbox slot="selection" size="md" />
                        </div>
                    )}
                </Column>
            )}
            <Collection items={columns}>{children}</Collection>
        </AriaTableHeader>
    );
};

TableHeader.displayName = "TableHeader";

const TableHead = forwardRef<
    HTMLTableCellElement,
    ColumnProps & ThHTMLAttributes<HTMLTableCellElement> & { label?: string; tooltip?: string; verticalSortArrows?: boolean }
>(({ className, verticalSortArrows, tooltip, ...props }, ref) => {
    const { selectionBehavior } = useTableOptions();

    return (
        <Column
            ref={ref}
            className={({ allowsSorting }) =>
                cx(
                    "relative p-0 px-6 py-2 outline-none focus:z-1 focus:ring-2 focus:ring-inset focus:ring-focus-ring",
                    selectionBehavior === "toggle" && "[&:nth-child(2)]:pl-3",
                    allowsSorting && "cursor-pointer",
                    className,
                )
            }
            {...props}
        >
            {({ allowsSorting, sortDirection }) => (
                <Group className="flex items-center gap-1">
                    <div className="flex items-center gap-1">
                        {props.label && <span className="whitespace-nowrap text-quaternary tt-xs-semi">{props.label}</span>}
                        {props.children}
                    </div>
                    {tooltip && (
                        <Tooltip title={tooltip} placement="top">
                            <TooltipTrigger className="cursor-pointer text-fg-quinary transition duration-200 hover:text-fg-quinary_hover focus:text-fg-quinary_hover">
                                <HelpCircle className="size-4" />
                            </TooltipTrigger>
                        </Tooltip>
                    )}
                    {allowsSorting &&
                        (verticalSortArrows && !sortDirection ? (
                            <ChevronSelectorVertical size={12} strokeWidth={3} className="text-fg-quinary" />
                        ) : (
                            <ArrowDown className={cx("size-3 stroke-[3px] text-fg-quinary", sortDirection === "descending" && "rotate-180")} />
                        ))}
                </Group>
            )}
        </Column>
    );
});
TableHead.displayName = "TableHead";

const TableRow = <T extends object>({
    columns,
    children,
    className,
    highlightSelectedRow = true,
    ...props
}: RowProps<T> & RefAttributes<HTMLTableRowElement> & { highlightSelectedRow?: boolean }) => {
    const { selectionBehavior } = useTableOptions();

    return (
        <Row
            {...props}
            className={(state) =>
                cx(
                    "relative h-[72px] outline-none transition-colors after:pointer-events-none hover:bg-secondary",

                    highlightSelectedRow && "selected:bg-secondary",

                    // Using `outline` instead of `ring-inset` because Safari does not support `box-shadow` on `tr`.
                    "focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-focus-ring",

                    // Row border — using an "after" pseudo-element to avoid the border taking up space.
                    "[&>td]:after:absolute [&>td]:after:inset-x-0 [&>td]:after:bottom-0 [&>td]:after:h-px [&>td]:after:w-full [&>td]:after:bg-border-secondary [&>td]:last:after:hidden [&>td]:focus:after:opacity-0 focus:[&>td]:after:opacity-0",

                    typeof className === "function" ? className(state) : className,
                )
            }
        >
            {selectionBehavior === "toggle" && (
                <Cell className="relative py-2 pl-6 pr-0">
                    <div className="flex items-end">
                        <Checkbox slot="selection" size="md" />
                    </div>
                </Cell>
            )}
            <Collection items={columns}>{children}</Collection>
        </Row>
    );
};

TableRow.displayName = "TableRow";

const TableCell = forwardRef<HTMLTableCellElement, CellProps & TdHTMLAttributes<HTMLTableCellElement>>(({ className, children, ...props }, ref) => {
    const { selectionBehavior } = useTableOptions();

    return (
        <Cell
            ref={ref}
            {...props}
            className={cx(
                "relative px-6 py-4 text-tertiary outline-none tt-sm focus:z-1",

                "focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-focus-ring",
                selectionBehavior === "toggle" && "[&:nth-child(2)]:pl-3",
                className,
            )}
        >
            {children}
        </Cell>
    );
});
TableCell.displayName = "TableCell";

const TableCard = {
    Root: TableCardRoot,
    Header: TableCardHeader,
};

const Table = Root as typeof Root & {
    Body: typeof AriaTableBody;
    Cell: typeof TableCell;
    Head: typeof TableHead;
    Header: typeof TableHeader;
    Row: typeof TableRow;
};
Table.Body = AriaTableBody;
Table.Cell = TableCell;
Table.Head = TableHead;
Table.Header = TableHeader;
Table.Row = TableRow;

export { Table, TableCard };
