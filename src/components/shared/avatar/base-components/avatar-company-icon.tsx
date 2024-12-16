import { cx } from "@/components/utils";

interface AvatarCompanyIconProps {
    size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
    src: string;
    alt?: string;
}

const sizes = {
    xs: "size-2",
    sm: "size-3",
    md: "size-3.5",
    lg: "size-4",
    xl: "size-4.5",
    "2xl": "size-5 ring-[1.67px]",
};

export const AvatarCompanyIcon = ({ size, src, alt }: AvatarCompanyIconProps) => (
    <img src={src} alt={alt} className={cx("bg-primary-25 absolute -bottom-0.5 -right-0.5 rounded-full object-cover ring-[1.5px] ring-white", sizes[size])} />
);
