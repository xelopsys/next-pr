import { FeaturedIconBase } from "@/components/foundations/featured-icon/featured-icons";
import { Dropdown } from "@/components/shared/dropdowns/dropdowns";
import { cx } from "@/components/utils";
import {
    ArrowDown,
    ArrowDownRight,
    ArrowUp,
    ArrowUpRight,
    Copy01,
    DotsVertical,
    Eye,
    Share01,
    TrendDown01,
    TrendUp01,
    Zap,
} from "@a-peak-works/untitledui-icons";
import { FC, ReactNode, useId } from "react";
import { Button as AriaButton } from "react-aria-components";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { CurveType } from "recharts/types/shape/Curve";
import { Props as DotProps } from "recharts/types/shape/Dot";

const ActionsDropdown = () => (
    <Dropdown.Root>
        <Dropdown.DotsButton />

        <Dropdown.Popover className="w-[200px]">
            <Dropdown.Menu>
                <Dropdown.Item label="View more" icon={Eye} />
                <Dropdown.Item label="Share" icon={Share01} />
                <Dropdown.Item label="Copy link" icon={Copy01} />
            </Dropdown.Menu>
        </Dropdown.Popover>
    </Dropdown.Root>
);

interface MetricChangeIndicatorProps {
    type: "simple" | "trend" | "modern";
    trend: "positive" | "negative";
    value?: string;
    className?: string;
}

export const MetricChangeIndicator = ({ type, trend, value, className }: MetricChangeIndicatorProps) => {
    const icons = {
        positive: {
            simple: ArrowUp,
            trend: TrendUp01,
            modern: ArrowUpRight,
        },
        negative: {
            simple: ArrowDown,
            trend: TrendDown01,
            modern: ArrowDownRight,
        },
    };

    const Icon = icons[trend][type];

    return (
        <div
            className={cx(
                "flex items-center",
                type === "simple" ? "gap-0.5" : "gap-1",
                type === "modern" && "rounded-md bg-primary py-0.5 pl-1.5 pr-2 shadow-xs ring-1 ring-inset ring-border-primary",
                className,
            )}
        >
            <Icon
                className={cx(
                    "stroke-[3px] text-fg-success-secondary",
                    type === "modern" ? "size-3" : "size-4",
                    trend === "negative" ? "text-fg-error-secondary" : "text-fg-success-secondary",
                )}
            />
            <span
                className={cx(
                    "text-secondary tt-sm-md",
                    type === "modern" ? "text-secondary" : trend === "negative" ? "text-error-primary" : "text-success-primary",
                )}
            >
                {value}
            </span>
        </div>
    );
};

export const MetricsSimple = ({
    title = "2,000",
    subtitle = "View 24 hours",
    type,
    trend,
    change,
    footer,
}: {
    title?: string;
    subtitle?: string;
    type: "simple" | "trend" | "modern";
    trend: "positive" | "negative";
    change?: string;
    footer?: ReactNode;
}) => {
    return (
        <div className="rounded-xl bg-primary shadow-xs ring-1 ring-inset ring-border-secondary">
            <div className="relative flex flex-col gap-2 px-4 py-5 md:px-5">
                <h3 className="text-tertiary tt-sm-md">{subtitle}</h3>

                <div className="flex items-end gap-4">
                    <p className="flex-1 text-primary td-sm-semi">{title}</p>
                    <MetricChangeIndicator type={type} trend={trend} value={change} />
                </div>

                <div className="absolute right-4 top-4 md:right-5 md:top-5">
                    <ActionsDropdown />
                </div>
            </div>

            {footer && <div className="flex items-center justify-end border-t border-secondary p-4 md:px-5">{footer}</div>}
        </div>
    );
};

export const MetricsIcon01 = ({ title = "2,000", subtitle = "View 24 hours", footer }: { title?: string; subtitle?: string; footer?: ReactNode }) => {
    return (
        <div className="rounded-xl bg-primary shadow-xs ring-1 ring-inset ring-border-secondary">
            <div className="relative flex flex-col gap-4 px-4 py-5 md:gap-5 md:px-5">
                <FeaturedIconBase color="success" theme="light" icon={TrendUp01} size="lg" />

                <div className="flex flex-col gap-2">
                    <h3 className="text-tertiary tt-sm-md">{subtitle}</h3>

                    <div className="flex items-end gap-4">
                        <p className="flex-1 text-primary td-sm-semi">{title}</p>
                        <MetricChangeIndicator type="modern" trend="positive" value="100%" />
                    </div>
                </div>

                <div className="absolute right-4 top-4 md:right-5 md:top-5">
                    <ActionsDropdown />
                </div>
            </div>

            {footer && <div className="flex items-center justify-end border-t border-secondary p-4 md:px-5">{footer}</div>}
        </div>
    );
};

export const MetricsIcon02 = ({ title = "2,000", subtitle = "View 24 hours", footer }: { title?: string; subtitle?: string; footer?: ReactNode }) => {
    return (
        <div className="rounded-xl bg-primary shadow-xs ring-1 ring-inset ring-border-secondary">
            <div className="relative flex flex-col gap-4 px-4 py-5 md:gap-5 md:px-5">
                <div className="flex items-center gap-3">
                    <FeaturedIconBase color="brand" theme="light" size="lg" icon={Zap} />
                    <h3 className="text-primary tt-md-semi">{subtitle}</h3>
                </div>

                <div className="flex flex-col gap-3">
                    <p className="flex-1 text-primary td-sm-semi">{title}</p>
                    <div className="flex gap-2">
                        <MetricChangeIndicator type="simple" trend="positive" value="100%" />
                        <span className="text-tertiary tt-sm-md">vs last month</span>
                    </div>
                </div>

                <div className="absolute right-4 top-4 md:right-5 md:top-5">
                    <ActionsDropdown />
                </div>
            </div>

            {footer && <div className="flex items-center justify-end border-t border-secondary p-4 md:px-5">{footer}</div>}
        </div>
    );
};

export const MetricsIcon03 = ({
    icon = TrendUp01,
    title = "2,000",
    subtitle = "View 24 hours",
    change = "100%",
    changeTrend = "positive",
    actions = true,
    className,
    footer,
}: {
    icon?: FC<{ className?: string }>;
    title?: string;
    subtitle?: string;
    change?: string;
    changeTrend?: "positive" | "negative";
    actions?: boolean;
    footer?: ReactNode;
    className?: string;
}) => {
    return (
        <div className={cx("rounded-xl bg-primary shadow-xs ring-1 ring-inset ring-border-secondary", className)}>
            <div className="relative flex flex-col gap-4 px-4 py-5 md:gap-5 md:px-5">
                <FeaturedIconBase color="gray" theme="modern" icon={icon || TrendUp01} size="lg" />

                <div className="flex flex-col gap-2">
                    <h3 className="text-tertiary tt-sm-semi">{subtitle}</h3>

                    <div className="flex flex-wrap items-center gap-3 lg:gap-4">
                        <p className="flex-1 text-primary td-sm-semi">{title}</p>
                        <div className="flex gap-2">
                            <MetricChangeIndicator type="trend" trend={changeTrend} value={change} />
                            <span className="text-tertiary tt-sm-md">vs last month</span>
                        </div>
                    </div>
                </div>

                {actions && (
                    <div className="absolute right-4 top-4 md:right-5 md:top-5">
                        <ActionsDropdown />
                    </div>
                )}
            </div>

            {footer && <div className="flex items-center justify-end border-t border-secondary p-3 pr-4 md:p-4 md:pr-6">{footer}</div>}
        </div>
    );
};

export const MetricsIcon04 = ({
    icon = TrendUp01,
    title = "2,000",
    subtitle = "View 24 hours",
    change = "100%",
    changeTrend = "positive",
    actions = true,
    footer,
    className,
}: {
    icon?: FC<{ className?: string }>;
    title?: string;
    subtitle?: string;
    change?: string;
    changeTrend?: "positive" | "negative";
    actions?: boolean;
    footer?: ReactNode;
    className?: string;
}) => {
    return (
        <div className={cx("min-w-[280px] rounded-xl bg-primary shadow-xs ring-1 ring-inset ring-border-secondary", className)}>
            <div className="relative flex flex-col gap-4 px-4 py-5 md:flex-row md:px-5">
                <FeaturedIconBase color="gray" theme="modern" icon={icon} size="md" />

                <div className="flex w-full flex-col gap-2">
                    <h3 className="text-tertiary tt-sm-semi">{subtitle}</h3>

                    <div className="flex w-full flex-wrap items-center justify-between gap-4">
                        <p className="flex-1 text-primary td-sm-semi">{title}</p>

                        <MetricChangeIndicator type="modern" trend={changeTrend} value={change} />
                    </div>
                </div>

                {actions && (
                    <div className="absolute right-4 top-4 md:right-5 md:top-5">
                        <ActionsDropdown />
                    </div>
                )}
            </div>

            {footer && <div className="flex items-center justify-end border-t border-secondary p-3 pr-4 md:p-4 md:pr-6">{footer}</div>}
        </div>
    );
};

const CustomizedDot = (props: DotProps & { payload?: any; dotColor?: string }) => {
    if (!props.payload.highlight) {
        return null;
    }

    const size = 20;

    return (
        <svg
            x={Number(props.cx) - size / 2}
            y={Number(props.cy) - size / 2}
            width={size}
            height={size}
            viewBox="0 0 20 20"
            fill="none"
            className={cx("text-fg-success-secondary", props.dotColor)}
        >
            <rect x="1.75" y="1.625" width="17.25" height="17.25" rx="8.625" className="stroke-current" strokeOpacity={0.2} strokeWidth="2" />
            <rect x="6.125" y="6" width="8.5" height="8.5" rx="4.25" className="fill-bg-primary stroke-current" strokeWidth="2" />
        </svg>
    );
};

const lineData = [
    { value: 10 },
    { value: 15 },
    { value: 12 },
    { value: 20 },
    { value: 18 },
    { value: 25 },
    { value: 30 },
    { value: 28 },
    { value: 32 },
    { value: 35 },
    { value: 40, highlight: true },
    { value: 32 },
    { value: 40 },
    { value: 50 },
    { value: 55 },
];

export const MetricsChart01 = ({
    title = "2,000",
    subtitle = "View 24 hours",
    change = "100%",
    changeDescription = "vs last month",
    actions = true,
    chartData = lineData,
    trend = "positive",
    footer,
}: {
    title?: string;
    subtitle?: string;
    change?: string;
    changeDescription?: string;
    actions?: boolean;
    trend?: "positive" | "negative";
    chartData?: { value: number; highlight?: boolean }[];
    footer?: ReactNode;
}) => {
    const id = useId();

    const chartColor = trend === "positive" ? "text-fg-success-secondary" : "text-fg-error-secondary";

    return (
        <div className="rounded-xl bg-primary shadow-xs ring-1 ring-inset ring-border-secondary">
            <div className="relative flex flex-col gap-5 px-4 py-5 md:px-5">
                <h3 className="text-primary tt-md-semi">{subtitle}</h3>

                <div className="flex items-end justify-between gap-4">
                    <div className="flex flex-col gap-3">
                        <p className="flex-1 text-primary td-sm-semi">{title}</p>
                        <div className="flex gap-2">
                            <MetricChangeIndicator type="simple" trend={trend} value={change} />
                            <span className="text-tertiary tt-sm-md">{changeDescription}</span>
                        </div>
                    </div>

                    <ResponsiveContainer height={56} width={112}>
                        <AreaChart
                            data={chartData}
                            margin={{
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                            }}
                        >
                            <defs>
                                <linearGradient id={`gradient-${id}`} x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="currentColor" className={chartColor} stopOpacity="1" />
                                    <stop offset="95%" stopColor="currentColor" className={chartColor} stopOpacity="0" />
                                </linearGradient>
                            </defs>

                            <Area
                                isAnimationActive={false}
                                className={chartColor}
                                dataKey="value"
                                type="monotone"
                                stroke="currentColor"
                                strokeWidth={2}
                                fill={`url(#gradient-${id})`}
                                fillOpacity={0.2}
                                dot={<CustomizedDot dotColor={chartColor} />}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                {actions && (
                    <div className="absolute right-4 top-4 md:right-5 md:top-5">
                        <ActionsDropdown />
                    </div>
                )}
            </div>

            {footer && <div className="flex items-center justify-end border-t border-secondary p-4 md:px-6">{footer}</div>}
        </div>
    );
};

const lineData2 = [
    { a: 10, b: 0 },
    { a: 5, b: 30 },
    { a: 30, b: 20 },
    { a: 20, b: 35 },
];

export const MetricsChart02 = ({
    icon = Eye,
    title = "2,000",
    subtitle = "View 24 hours",
    change = "100%",
    changeTrend = "positive",
    footer,
}: {
    icon?: FC<{ className?: string }>;
    title?: string;
    subtitle?: string;
    change?: string;
    changeTrend?: "positive" | "negative";
    footer?: ReactNode;
}) => {
    const id = useId();
    const chartColor = changeTrend === "positive" ? "text-fg-success-secondary" : "text-fg-error-secondary";

    return (
        <div className="rounded-xl bg-primary shadow-xs ring-1 ring-inset ring-border-secondary">
            <div className="relative flex flex-col gap-4 px-4 py-5 md:gap-5 md:px-5">
                <div className="flex items-center gap-3">
                    <FeaturedIconBase color="gray" theme="modern" size="lg" icon={icon} />
                    <h3 className="text-primary tt-md-semi">{subtitle}</h3>
                </div>

                <div className="flex items-end justify-between gap-4">
                    <div className="flex items-start gap-2">
                        <p className="flex-1 text-primary td-sm-semi lg:td-md-semi">{title}</p>
                        <MetricChangeIndicator type="trend" trend={changeTrend} value={change} />
                    </div>

                    <ResponsiveContainer height={56} width={128}>
                        <AreaChart
                            data={lineData2}
                            margin={{
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                            }}
                        >
                            <defs>
                                <linearGradient id={`gradient-${id}`} x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="currentColor" className={chartColor} stopOpacity="1" />
                                    <stop offset="95%" stopColor="currentColor" className={chartColor} stopOpacity="0" />
                                </linearGradient>
                            </defs>

                            <Area
                                className={chartColor}
                                dataKey="a"
                                type="monotone"
                                strokeWidth={0}
                                fill="currentColor"
                                fillOpacity={0.2}
                                isAnimationActive={false}
                            />
                            <Area dataKey="b" type="monotone" strokeWidth={0} fill={`url(#gradient-${id})`} fillOpacity={0.2} isAnimationActive={false} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                <div className="absolute right-4 top-4 md:right-5 md:top-5">
                    <ActionsDropdown />
                </div>
            </div>

            {footer && <div className="flex items-center justify-end border-t border-secondary p-3 pr-4 md:p-4 md:pr-6">{footer}</div>}
        </div>
    );
};

const lineData3 = [{ value: 0 }, { value: 9 }, { value: 6 }, { value: 15 }];

export const MetricsChart03 = ({
    title = "2,000",
    subtitle = "View 24 hours",
    type = "trend",
    change,
    changeTrend,
    changeDescription,
    chartColor,
    chartAreaFill,
    chartCurveType,
    chartData = lineData3,
    footer,
}: {
    title?: string;
    subtitle?: string;
    type?: "simple" | "trend" | "modern";
    change: string;
    changeTrend: "positive" | "negative";
    changeDescription?: string;
    chartColor?: string;
    chartAreaFill?: string;
    chartCurveType?: CurveType;
    chartData?: { value: number }[];
    footer?: ReactNode;
}) => {
    const id = useId();

    chartColor = chartColor ?? (changeTrend === "positive" ? "text-fg-success-secondary" : "text-fg-error-secondary");

    return (
        <div className="rounded-xl bg-primary shadow-xs ring-1 ring-inset ring-border-secondary">
            <div className="relative flex flex-col gap-4 px-4 py-5 md:gap-5 md:px-5">
                <div className="flex flex-col gap-2">
                    <h3 className="text-tertiary tt-sm-md">{subtitle}</h3>

                    <div className="flex items-center gap-4">
                        <p className="flex-1 text-primary td-sm-semi">{title}</p>
                        <div className="flex gap-2">
                            <MetricChangeIndicator type={type} trend={changeTrend} value={change} />
                            {changeDescription && <span className="text-tertiary tt-sm-md">{changeDescription}</span>}
                        </div>
                    </div>
                </div>

                <ResponsiveContainer height={72}>
                    <AreaChart
                        data={chartData}
                        margin={{
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                        }}
                    >
                        <defs>
                            <linearGradient id={`gradient-${id}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="currentColor" className={chartColor} stopOpacity="1" />
                                <stop offset="95%" stopColor="currentColor" className={chartColor} stopOpacity="0" />
                            </linearGradient>
                        </defs>

                        <Area
                            isAnimationActive={false}
                            className={chartColor}
                            dataKey="value"
                            type={chartCurveType || "monotone"}
                            stroke="currentColor"
                            strokeWidth={2}
                            fill={chartAreaFill || `url(#gradient-${id})`}
                            fillOpacity={0.2}
                        />
                    </AreaChart>
                </ResponsiveContainer>

                <div className="absolute right-4 top-4 md:right-5 md:top-5">
                    <ActionsDropdown />
                </div>
            </div>

            {footer && <div className="flex items-center justify-end border-t border-secondary p-3 pr-4 md:p-4 md:pr-6">{footer}</div>}
        </div>
    );
};

export const MetricsChart04 = ({
    title,
    subtitle,
    type = "trend",
    change,
    changeTrend,
    changeDescription,
    chartColor = "text-fg-success-secondary",
    chartAreaFill,
    chartCurveType,
    chartData = lineData3,
    footer,
}: {
    title: string;
    subtitle: string;
    type?: "simple" | "trend" | "modern";
    change: string;
    changeTrend: "positive" | "negative";
    changeDescription?: string;
    chartColor?: string;
    chartAreaFill?: string;
    chartCurveType?: CurveType;
    chartData?: { value: number }[];
    footer?: ReactNode;
}) => {
    const id = useId();

    chartColor = chartColor ?? (changeTrend === "positive" ? "text-fg-success-secondary" : "text-fg-error-secondary");

    return (
        <div className="flex flex-col overflow-hidden rounded-xl bg-secondary_subtle shadow-xs ring-1 ring-inset ring-border-secondary">
            <div className="mb-0.5 px-4 pb-2 pt-3 md:px-5">
                <h3 className="text-primary tt-sm-semi">{subtitle}</h3>
            </div>
            <div className="relative flex flex-col gap-4 rounded-xl bg-primary px-4 py-5 shadow-xs ring-1 ring-inset ring-border-secondary md:gap-5 md:px-5">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                        <p className="text-primary td-sm-semi">{title}</p>
                        <div className="flex gap-2">
                            <MetricChangeIndicator type={type} trend={changeTrend} value={change} />
                            {changeDescription && <span className="text-tertiary tt-sm-md">{changeDescription}</span>}
                        </div>
                    </div>
                </div>

                <ResponsiveContainer height={56}>
                    <AreaChart
                        data={chartData}
                        margin={{
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                        }}
                        className={chartColor}
                    >
                        <defs>
                            <linearGradient id={`gradient-${id}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="currentColor" className={chartColor} stopOpacity="1" />
                                <stop offset="95%" stopColor="currentColor" className={chartColor} stopOpacity="0" />
                            </linearGradient>
                        </defs>

                        <Area
                            isAnimationActive={false}
                            className={chartColor}
                            dataKey="value"
                            type={chartCurveType || "monotone"}
                            stroke="currentColor"
                            strokeWidth={2}
                            fill={chartAreaFill || `url(#gradient-${id})`}
                            fillOpacity={0.2}
                        />
                    </AreaChart>
                </ResponsiveContainer>

                <div className="absolute right-4 top-4 md:right-5 md:top-5">
                    <ActionsDropdown />
                </div>
            </div>
            {footer && <div className="flex items-center justify-end py-3 pl-3 pr-4 md:pl-4 md:pr-5">{footer}</div>}
        </div>
    );
};
