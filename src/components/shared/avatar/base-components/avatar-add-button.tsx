import { Plus } from "@a-peak-works/untitledui-icons";
import { Tooltip, TooltipTrigger } from "../../tooltips/tooltips";
import { cx } from "@/components/utils";

interface AvatarAddButtonProps {
    size: "xs" | "sm" | "md";
    className?: string;
}

const sizes = {
    xs: "size-6",
    sm: "size-8",
    md: "size-10",
};

export const AvatarAddButton = ({ size, className }: AvatarAddButtonProps) => (
    <Tooltip title="Add user">
        <TooltipTrigger
            className={cx(
                "flex items-center justify-center rounded-full border border-dashed border-primary bg-primary text-fg-quinary transition hover:bg-primary_hover hover:text-fg-quinary_hover focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-focus-ring disabled:border-gray-200 disabled:bg-secondary disabled:text-gray-200",
                sizes[size],
                className,
            )}
        >
            <Plus className="size-4 text-current transition-inherit-all" />
        </TooltipTrigger>
    </Tooltip>
);
