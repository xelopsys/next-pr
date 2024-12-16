import {
    Activity,
    BarChart01,
    BarChartSquare02,
    BarLineChart,
    CheckDone01,
    Clock,
    ClockFastForward,
    HomeLine,
    LifeBuoy01,
    NotificationBox,
    PieChart03,
    Rows01,
    Settings01,
    Settings03,
    Star01,
    Users01,
    UserSquare,
} from "@a-peak-works/untitledui-icons";

export type NavItemType = {
    label: string;
    href?: string;
    icon?: any;
    badge?: any;
    items?: { label: string; href: string; icon?: any; badge?: any }[];
    divider?: boolean;
};

export type NavItemDividerType = Omit<NavItemType, "label" | "divider"> & {
    label?: string;
    divider: true;
};

export const navItems: NavItemType[] = [
    {
        label: "Home",
        href: "/",
        icon: HomeLine,
        badge: 10,
        items: [
            { label: "Overview", href: "/overview", icon: Users01 },
            { label: "Notifications", href: "/notifications", icon: BarChart01, badge: 6 },
            { label: "Analytics", href: "/analytics", icon: Clock },
            { label: "Reports", href: "/reports", icon: Star01, badge: 4 },
        ],
    },
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: BarChartSquare02,
        items: [
            { label: "Overview", href: "/dashboard/overview", icon: Activity },
            { label: "Notifications", href: "/dashboard/notifications", icon: NotificationBox, badge: 10 },
            { label: "Analytics", href: "/dashboard/analytics", icon: BarLineChart },
            { label: "Saved reports", href: "/dashboard/saved-reports", icon: Star01 },
            { label: "Scheduled reports", href: "/dashboard/scheduled-reports", icon: ClockFastForward },
            { label: "User reports", href: "/dashboard/user-reports", icon: UserSquare },
            { label: "Manage notifications", href: "/dashboard/manage-notifications", icon: Settings03 },
        ],
    },
    {
        label: "Projects",
        href: "/projects",
        icon: Rows01,
        items: [
            { label: "Overview", href: "/projects/overview" },
            { label: "Notifications", href: "/projects/notifications" },
            { label: "Analytics", href: "/projects/analytics" },
            { label: "Reports", href: "/projects/reports" },
        ],
    },
    {
        label: "Tasks",
        href: "/tasks",
        icon: CheckDone01,
        // items: [
        //     { label: "Overview", href: "#" },
        //     { label: "Notifications", href: "#" },
        //     { label: "Analytics", href: "#" },
        //     { label: "Reports", href: "#" },
        // ],
    },
    {
        label: "Reporting",
        href: "/reporting",
        icon: PieChart03,
        // items: [
        //     { label: "Overview", href: "#" },
        //     { label: "Notifications", href: "#" },
        //     { label: "Analytics", href: "#" },
        //     { label: "Reports", href: "#" },
        // ],
    },
    {
        label: "Users",
        href: "/users",
        icon: Users01,
        // items: [
        //     { label: "Overview", href: "#" },
        //     { label: "Notifications", href: "#" },
        //     { label: "Analytics", href: "#" },
        //     { label: "Reports", href: "#" },
        // ],
    },
];

export const footerNavItems: NavItemType[] = [
    {
        label: "Support",
        href: "/support",
        icon: LifeBuoy01,
    },
    {
        label: "Settings",
        href: "/settings",
        icon: Settings01,
    },
];
