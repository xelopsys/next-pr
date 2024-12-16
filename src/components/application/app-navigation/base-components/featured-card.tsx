import { ProgressBarCircle } from "@/components/application/progress-indicators/progress-circles";
import { ProgressBar } from "@/components/application/progress-indicators/progress-indicators";
import Button from "@/components/shared/buttons/button";
import { FeaturedIconBase } from "@/components/foundations/featured-icon/featured-icons";
import { GradientScan, QRCode } from "@/components/shared-assets/qr-code";
import { Avatar } from "@/components/shared/avatar/avatar";
import { AvatarAddButton } from "@/components/shared/avatar/base-components";
import { Badge, BadgeWithDot } from "@/components/shared/badges/badges";
import { CloseButton } from "@/components/shared/buttons/close-button";
import { Input } from "@/components/shared/inputs/input";
import PlayButtonIcon from "@/components/shared-assets/video-player/play-button-icon";
import { cx } from "@/components/utils";
import { useClipboard } from "@/hooks/use-clipboard";
import { AlertCircle, ArrowRight, Check, Copy01, Link03, MessageChatCircle } from "@a-peak-works/untitledui-icons";
import { FC, HTMLAttributes, ReactNode, useState } from "react";

interface CommonFeaturedCardProps {
    title: string;
    description: ReactNode;
    confirmLabel: string;
    className?: string;
    onDismiss: () => void;
    onConfirm: () => void;
}

export const FeaturedCardProgressBar = ({
    title,
    description,
    confirmLabel,
    progress,
    className,
    onDismiss,
    onConfirm,
}: CommonFeaturedCardProps & {
    progress: number;
}) => {
    return (
        <div className={cx("relative flex flex-col rounded-lg bg-secondary p-4", className)}>
            <p className="text-primary tt-sm-semi">{title}</p>
            <p className="mt-1 text-tertiary tt-sm">{description}</p>
            <div className="absolute right-2 top-2">
                <CloseButton onClick={onDismiss} size="sm" />
            </div>
            <div className="mt-4 flex">
                <ProgressBar value={progress} />
            </div>
            <div className="mt-4 flex gap-3">
                <Button onClick={onDismiss} color="link-gray" size="sm">
                    Dismiss
                </Button>
                <Button onClick={onConfirm} color="link-color" size="sm">
                    {confirmLabel}
                </Button>
            </div>
        </div>
    );
};
FeaturedCardProgressBar.parameters = {
    design: {
        urls: {
            desktop: "https://www.figma.com/design/BXDc9uTbY80aquiwCK1FYs?node-id=1157-99074",
        },
    },
};

export const FeaturedCardProgressCircle = ({
    title,
    description,
    confirmLabel,
    progress,
    className,
    onDismiss,
    onConfirm,
}: CommonFeaturedCardProps & {
    progress: number;
}) => {
    return (
        <div className={cx("relative flex flex-col rounded-lg bg-secondary p-4", className)}>
            <div className="w-16">
                <ProgressBarCircle value={progress} size="xxs" />
            </div>

            <div className="absolute right-2 top-2">
                <CloseButton onClick={onDismiss} size="sm" />
            </div>
            <div className="mt-3">
                <p className="text-primary tt-sm-semi">{title}</p>
                <p className="mt-1 text-tertiary tt-sm">{description}</p>
            </div>
            <div className="mt-4 flex gap-3">
                <Button onClick={onDismiss} color="link-gray" size="sm">
                    Dismiss
                </Button>
                <Button onClick={onConfirm} color="link-color" size="sm">
                    {confirmLabel}
                </Button>
            </div>
        </div>
    );
};
FeaturedCardProgressCircle.parameters = {
    design: {
        urls: {
            desktop: "https://www.figma.com/design/BXDc9uTbY80aquiwCK1FYs?node-id=1157-99042",
        },
    },
};

export const FeaturedCardImage = ({
    title,
    description,
    confirmLabel,
    imageSrc,
    className,
    onDismiss,
    onConfirm,
}: CommonFeaturedCardProps & {
    imageSrc: string;
}) => {
    return (
        <div className={cx("relative flex flex-col rounded-lg bg-secondary p-4", className)}>
            <p className="text-primary tt-sm-semi">{title}</p>
            <p className="mt-1 text-tertiary tt-sm">{description}</p>

            <div className="absolute right-2 top-2">
                <CloseButton onClick={onDismiss} size="sm" />
            </div>

            <div className="relative mt-4 h-[144px] w-full overflow-hidden rounded-md">
                <img
                    src={imageSrc}
                    className="size-full rounded-md object-cover outline outline-1 -outline-offset-1 outline-avatar-contrast-border"
                    alt={title}
                />

                <PlayButtonIcon className="absolute bottom-3 left-3 size-12" />
            </div>

            <div className="mt-4 flex gap-3">
                <Button onClick={onDismiss} color="link-gray" size="sm">
                    Dismiss
                </Button>
                <Button onClick={onConfirm} color="link-color" size="sm">
                    {confirmLabel}
                </Button>
            </div>
        </div>
    );
};
FeaturedCardImage.parameters = {
    design: {
        urls: {
            desktop: "https://www.figma.com/design/BXDc9uTbY80aquiwCK1FYs?node-id=1157-99053",
        },
    },
};

export const FeaturedCardCookiePrefrences = ({ title, description, confirmLabel, className, onDismiss, onConfirm }: CommonFeaturedCardProps) => {
    return (
        <div className={cx("relative flex flex-col rounded-lg bg-secondary p-4", className)}>
            <FeaturedIconBase color="brand" icon={AlertCircle} theme="outline" size="md" />
            <div className="absolute right-2 top-2">
                <CloseButton onClick={onDismiss} size="sm" />
            </div>
            <div className="mt-3">
                <p className="text-primary tt-sm-semi">{title}</p>
                <p className="mt-1 text-tertiary tt-sm">{description}</p>
            </div>
            <div className="mt-4 flex gap-3">
                <Button onClick={onDismiss} color="link-gray" size="sm">
                    Reject all
                </Button>
                <Button onClick={onConfirm} color="link-color" size="sm">
                    {confirmLabel}
                </Button>
            </div>
        </div>
    );
};
FeaturedCardCookiePrefrences.parameters = {
    design: {
        urls: {
            desktop: "https://www.figma.com/design/BXDc9uTbY80aquiwCK1FYs?node-id=7910-530582",
        },
    },
};

export const FeaturedCardReferallLink = ({
    title,
    description,
    onDismiss,
    className,
}: Pick<CommonFeaturedCardProps, "title" | "description" | "onDismiss" | "className">) => {
    const { copy, copied } = useClipboard();
    const [value, setValue] = useState("uui.com/4060020");

    return (
        <div className={cx("relative flex flex-col rounded-xl bg-primary p-4 shadow-xs ring-1 ring-inset ring-border-secondary", className)}>
            <FeaturedIconBase color="gray" icon={Link03} theme="modern" size="md" />
            <div className="absolute right-2 top-2">
                <CloseButton onClick={onDismiss} size="sm" />
            </div>
            <div className="mt-3">
                <p className="text-primary tt-sm-semi">{title}</p>
                <p className="mt-1 text-tertiary tt-sm">{description}</p>
            </div>
            <div className="mt-4 flex gap-1">
                <Input value={value} onChange={setValue} isReadOnly size="sm" />
                <Button iconLeading={copied ? Check : Copy01} onClick={() => copy(value)} size="md" color="tertiary-gray" />
            </div>
        </div>
    );
};
FeaturedCardReferallLink.parameters = {
    design: {
        urls: {
            desktop: "https://www.figma.com/design/BXDc9uTbY80aquiwCK1FYs?node-id=7910-530589",
        },
    },
};

export const FeaturedCardOnboardingSteps = ({
    title,
    supportingText,
    progress,
    description,
    confirmLabel,
    onConfirm,
}: CommonFeaturedCardProps & { supportingText: string; progress: number }) => {
    return (
        <div className="relative flex flex-col gap-4 rounded-xl bg-primary p-4 shadow-xs ring-1 ring-inset ring-border-secondary">
            <div className="flex flex-col gap-3">
                <div className="flex justify-between">
                    <span className="text-primary tt-sm-semi">{title}</span>
                    <span className="text-quaternary tt-sm">{supportingText}</span>
                </div>

                <div className="flex">
                    <ProgressBar value={progress} />
                </div>
            </div>
            {description}
            <Button size="sm" color="secondary-gray" onClick={onConfirm}>
                {confirmLabel}
            </Button>
        </div>
    );
};
FeaturedCardOnboardingSteps.parameters = {
    design: {
        urls: {
            desktop: "https://www.figma.com/design/BXDc9uTbY80aquiwCK1FYs?node-id=7910-530594",
        },
    },
};

export const FeaturedCardUpgradeCTA = ({
    icon,
    title,
    badge,
    description,
    confirmLabel,
    onConfirm,
    onDismiss,
}: CommonFeaturedCardProps & { icon: FC<HTMLAttributes<HTMLOrSVGElement>>; badge?: string }) => {
    return (
        <div className="relative flex flex-col gap-4 rounded-xl bg-primary p-4 shadow-xs ring-1 ring-inset ring-border-secondary">
            <div className="absolute right-2 top-2">
                <CloseButton size="sm" onClick={onDismiss} />
            </div>

            <div className="flex flex-col gap-3">
                <FeaturedIconBase color="gray" icon={icon} theme="modern" size="md" />
                <div className="flex flex-col gap-1">
                    <p className="flex items-center gap-1.5 text-primary tt-sm-semi">
                        {title}
                        {badge && (
                            <Badge size="sm" type="modern" color="gray">
                                {badge}
                            </Badge>
                        )}
                    </p>
                    <p className="text-tertiary tt-sm">{description}</p>
                </div>
            </div>
            <Button size="sm" color="primary" onClick={onConfirm}>
                {confirmLabel}
            </Button>
        </div>
    );
};
FeaturedCardUpgradeCTA.parameters = {
    design: {
        urls: {
            desktop: "https://www.figma.com/design/BXDc9uTbY80aquiwCK1FYs?node-id=7910-530597",
        },
    },
};

export const FeaturedCardSupportCTA = ({ badge, title, description, confirmLabel, onConfirm, onDismiss }: CommonFeaturedCardProps & { badge?: string }) => {
    return (
        <div className="relative flex flex-col gap-4 rounded-xl bg-primary p-4 shadow-xs ring-1 ring-inset ring-border-secondary">
            <div className="absolute right-2 top-2">
                <CloseButton size="sm" onClick={onDismiss} />
            </div>

            <div className="flex flex-col gap-3">
                {badge && (
                    <BadgeWithDot color="success" type="modern" size="sm">
                        {badge}
                    </BadgeWithDot>
                )}
                <div className="flex flex-col gap-1">
                    <p className="flex items-center gap-1.5 text-primary tt-sm-semi">{title}</p>
                    <p className="text-tertiary tt-sm">{description}</p>
                </div>
            </div>
            <Button iconLeading={MessageChatCircle} size="sm" color="secondary-gray" onClick={onConfirm}>
                {confirmLabel}
            </Button>
        </div>
    );
};
FeaturedCardSupportCTA.parameters = {
    design: {
        urls: {
            desktop: "https://www.figma.com/design/BXDc9uTbY80aquiwCK1FYs?node-id=7910-530600",
        },
    },
};

export const FeaturedCardEventCTA = ({ title, badge, description, confirmLabel, onConfirm, onDismiss }: CommonFeaturedCardProps & { badge?: string }) => {
    return (
        <div className="relative flex flex-col gap-4 rounded-xl bg-primary p-4 shadow-xs ring-1 ring-inset ring-border-secondary">
            <div className="absolute right-2 top-2">
                <CloseButton size="sm" onClick={onDismiss} />
            </div>

            <div className="flex gap-2">
                <div className="flex -space-x-1">
                    <Avatar className="ring-[1.5px] ring-bg-primary" size="xs" src="/avatars/Olivia Rhye.jpg" alt="Olivia Rhye" />
                    <Avatar className="ring-[1.5px] ring-bg-primary" size="xs" src="/avatars/Phoenix Baker.jpg" alt="Phoenix Baker" />
                    <Avatar className="ring-[1.5px] ring-bg-primary" size="xs" src="/avatars/Lana Steiner.jpg" alt="Lana Steiner" />
                    <Avatar className="ring-[1.5px] ring-bg-primary" size="xs" src="/avatars/Demi Wilkinson.jpg" alt="Demi Wilkinson" />

                    <Avatar
                        size="xs"
                        className="ring-[1.5px] ring-bg-primary"
                        placeholder={<span className="flex items-center justify-center text-tertiary tt-xs-semi">+5</span>}
                    />
                </div>
                <AvatarAddButton size="xs" className="pointer-events-none" />
            </div>

            <div className="flex flex-col gap-1">
                <p className="flex items-center gap-1.5 text-primary tt-sm-semi">
                    {title}
                    {badge && (
                        <BadgeWithDot color="success" type="modern" size="sm">
                            {badge}
                        </BadgeWithDot>
                    )}
                </p>
                <p className="text-tertiary tt-sm">{description}</p>
            </div>

            <div className="flex items-center gap-3">
                <Button color="link-gray" size="sm" onClick={onDismiss}>
                    Dismiss
                </Button>
                <Button color="link-color" size="sm" onClick={onConfirm}>
                    {confirmLabel}
                </Button>
            </div>
        </div>
    );
};
FeaturedCardEventCTA.parameters = {
    design: {
        urls: {
            desktop: "https://www.figma.com/design/BXDc9uTbY80aquiwCK1FYs?node-id=7910-530602",
        },
    },
};

export const FeaturedCardMessage = ({
    title,
    supportingText,
    description,
    confirmLabel,
    onConfirm,
    onDismiss,
}: CommonFeaturedCardProps & { supportingText: string }) => {
    return (
        <div className="relative flex flex-col gap-4 rounded-xl bg-primary p-4 shadow-xs ring-1 ring-inset ring-border-secondary">
            <div className="absolute right-2 top-2">
                <CloseButton size="sm" onClick={onDismiss} />
            </div>

            <div className="flex flex-col gap-3">
                <Avatar size="md" src="/avatars/Mathilde Lewis.jpg" alt="Mathilde Lewis" status="online" />

                <div className="flex flex-col gap-1">
                    <p className="flex items-center gap-2 text-primary tt-sm-semi">
                        {title}
                        <span className="text-fg-quaternary tt-sm">{supportingText}</span>
                    </p>

                    <p className="text-tertiary tt-sm">{description}</p>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <Button color="link-gray" size="sm" onClick={onDismiss}>
                    Dismiss
                </Button>
                <Button color="link-color" size="sm" onClick={onConfirm}>
                    {confirmLabel}
                </Button>
            </div>
        </div>
    );
};
FeaturedCardMessage.parameters = {
    design: {
        urls: {
            desktop: "https://www.figma.com/design/BXDc9uTbY80aquiwCK1FYs?node-id=7910-530613",
        },
    },
};

export const FeaturedCardCurrentProjects = ({ title, description, confirmLabel, onConfirm, onDismiss }: CommonFeaturedCardProps) => {
    return (
        <div className="relative flex flex-col gap-4 rounded-xl bg-primary p-4 shadow-xs ring-1 ring-inset ring-border-secondary">
            <div className="absolute right-2 top-2">
                <CloseButton size="sm" onClick={onDismiss} />
            </div>

            <div className="flex flex-col gap-3">
                <p className="flex items-center gap-2 text-primary tt-sm-semi">{title}</p>
                {description}
            </div>

            <div className="flex items-center gap-3">
                <Button color="link-color" size="sm" iconTrailing={ArrowRight} onClick={onConfirm}>
                    {confirmLabel}
                </Button>
            </div>
        </div>
    );
};
FeaturedCardCurrentProjects.parameters = {
    design: {
        urls: {
            desktop: "https://www.figma.com/design/BXDc9uTbY80aquiwCK1FYs?node-id=7910-530587",
        },
    },
};

export const FeaturedCardFreeTrialCTA = ({
    title,
    supportingText,
    progress,
    confirmLabel,
    onConfirm,
}: Omit<CommonFeaturedCardProps, "description"> & { supportingText: string; progress: number }) => {
    return (
        <div className="relative flex flex-col gap-4 rounded-xl bg-primary p-4 shadow-xs ring-1 ring-inset ring-border-secondary">
            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-1">
                    <span className="text-primary tt-sm-semi">{title}</span>
                    <span className="text-quaternary tt-sm">{supportingText}</span>
                </div>
                <div className="flex">
                    <ProgressBar value={progress} />
                </div>
            </div>

            <Button color="secondary-gray" size="sm" onClick={onConfirm}>
                {confirmLabel}
            </Button>
        </div>
    );
};
FeaturedCardFreeTrialCTA.parameters = {
    design: {
        urls: {
            desktop: "https://www.figma.com/design/BXDc9uTbY80aquiwCK1FYs?node-id=7910-530618",
        },
    },
};

export const FeaturedCardQRCode = ({ title, description, confirmLabel, onConfirm, onDismiss }: CommonFeaturedCardProps) => {
    return (
        <div className="relative flex flex-col gap-4 rounded-xl bg-primary p-4 shadow-xs ring-1 ring-inset ring-border-secondary">
            <div className="absolute right-2 top-2">
                <CloseButton size="sm" onClick={onDismiss} />
            </div>

            <div className="flex flex-col gap-1">
                <p className="text-primary tt-sm-semi">{title}</p>
                <p className="text-tertiary tt-sm">{description}</p>
            </div>
            <div className="relative flex w-full items-center justify-center">
                <QRCode url="https://www.untitledui.com" size="md" />
                <GradientScan />
            </div>
            <Button color="secondary-gray" size="sm" onClick={onConfirm}>
                {confirmLabel}
            </Button>
        </div>
    );
};
FeaturedCardQRCode.parameters = {
    design: {
        urls: {
            desktop: "https://www.figma.com/design/BXDc9uTbY80aquiwCK1FYs?node-id=7912-554836",
        },
    },
};
