import PlayButtonIcon from "@/components/shared/video/play-button-icon";
import { type ReactNode } from "react";

interface ImageCardProps {
    imgSrc?: string;
    title: string;
    subtitle: string;
    actionsContent?: ReactNode;
}

export const ImageCardHorizontal = (props: ImageCardProps) => {
    return (
        <a
            href="#"
            className="flex flex-col gap-4 rounded-lg px-4 py-3 transition hover:bg-primary_hover focus:outline-none focus:ring-2 focus:ring-focus-ring sm:flex-row md:gap-3 md:px-3"
        >
            {props.imgSrc ? (
                <img src={props.imgSrc} className="h-[200px] w-full shrink-0 rounded-md bg-secondary object-cover sm:h-[88px] sm:w-[144px]" />
            ) : (
                <div className="h-[200px] w-full shrink-0 rounded-md bg-secondary sm:h-[88px] sm:w-[144px]" />
            )}

            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                    <h4 className="line-clamp-2 overflow-hidden text-ellipsis text-primary tt-md-semi">{props.title}</h4>
                    <p className="line-clamp-2 text-ellipsis text-tertiary tt-sm">{props.subtitle}</p>
                </div>
                {props.actionsContent}
            </div>
        </a>
    );
};

export const ImageCardVertical = (props: ImageCardProps) => {
    return (
        <a
            href="#"
            className="flex w-full flex-col gap-4 rounded-lg px-4 py-3 transition hover:bg-primary_hover focus:outline-none focus:ring-2 focus:ring-focus-ring sm:max-w-[320px]"
        >
            {props.imgSrc ? (
                <img src={props.imgSrc} className="h-[200px] w-full shrink-0 rounded-md bg-secondary object-cover sm:h-[136px] sm:max-w-[240px]" />
            ) : (
                <div className="h-[200px] w-full shrink-0 rounded-md bg-secondary sm:h-[136px] sm:max-w-[240px]" />
            )}

            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                    <h4 className="line-clamp-1 overflow-hidden text-ellipsis text-primary tt-md-semi">{props.title}</h4>
                    <p className="line-clamp-2 text-ellipsis text-tertiary tt-sm">{props.subtitle}</p>
                </div>
                {props.actionsContent}
            </div>
        </a>
    );
};

interface VideoCardProps {
    imgSrc: string;
    title: string;
    description: string;
    actionsContent?: ReactNode;
}

export const VideoCardHorizontal = (props: VideoCardProps) => {
    return (
        <a
            href="#"
            className="flex flex-col gap-4 rounded-lg px-4 py-3 transition hover:bg-primary_hover focus:outline-none focus:ring-2 focus:ring-focus-ring sm:flex-row md:gap-3 md:px-3"
        >
            <div className="relative h-[136px] w-[240px] shrink-0 overflow-hidden rounded-md sm:h-[104px] sm:w-[176px]">
                <img alt={props.title} src={props.imgSrc} className="size-full object-cover" />

                <div className="absolute bottom-3 left-3">
                    <PlayButtonIcon className="size-10" />
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                    <h4 className="line-clamp-2 overflow-hidden text-ellipsis text-primary tt-md-semi">{props.title}</h4>
                    <p className="line-clamp-2 text-ellipsis text-tertiary tt-sm">{props.description}</p>
                </div>
                {props.actionsContent}
            </div>
        </a>
    );
};

export const VideoCardVertical = (props: VideoCardProps) => {
    return (
        <a
            href="#"
            className="flex flex-col gap-4 rounded-lg px-4 py-3 transition hover:bg-primary_hover focus:outline-none focus:ring-2 focus:ring-focus-ring sm:max-w-[320px]"
        >
            <div className="relative h-[136px] w-[240px] shrink-0 overflow-hidden rounded-md">
                <img alt={props.title} src={props.imgSrc} className="size-full object-cover" />

                <div className="absolute bottom-3 left-3">
                    <PlayButtonIcon className="size-10" />
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                    <h4 className="line-clamp-1 overflow-hidden text-ellipsis text-primary tt-md-semi">{props.title}</h4>
                    <p className="line-clamp-2 text-ellipsis text-tertiary tt-sm">{props.description}</p>
                </div>
                {props.actionsContent}
            </div>
        </a>
    );
};

interface FeatureCardProps {
    imgSrc: string;
    title: string;
    description: string;
    actionsContent?: ReactNode;
}

export const FeatureCardHorizontal = (props: FeatureCardProps) => {
    return (
        <a
            href="#"
            className="flex flex-col gap-4 rounded-lg px-4 py-3 transition hover:bg-primary_hover focus:outline-none focus:ring-2 focus:ring-focus-ring sm:flex-row"
        >
            <div className="relative h-[200px] shrink-0 overflow-hidden rounded-md sm:h-[104px] sm:w-[176px]">
                <img alt={props.title} src={props.imgSrc} className="size-full object-cover" />

                <div className="absolute bottom-3 left-3 md:bottom-2 md:left-2">
                    <PlayButtonIcon className="size-14 md:size-12" />
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                    <h4 className="line-clamp-2 overflow-hidden text-ellipsis text-primary tt-md-semi">{props.title}</h4>
                    <p className="line-clamp-2 text-ellipsis text-tertiary tt-sm">{props.description}</p>
                </div>
                {props.actionsContent}
            </div>
        </a>
    );
};

export const FeatureCardVertical = (props: FeatureCardProps) => {
    return (
        <a
            href="#"
            className="flex w-full flex-col gap-4 rounded-lg p-3 transition hover:bg-primary_hover focus:outline-none focus:ring-2 focus:ring-focus-ring"
        >
            <div className="relative h-[200px] shrink-0 overflow-hidden rounded-md sm:h-[160px]">
                <img alt={props.title} src={props.imgSrc} className="size-full object-cover" />

                <div className="absolute bottom-3 left-3 md:bottom-2 md:left-2">
                    <PlayButtonIcon className="size-14 md:size-12" />
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                    <h4 className="line-clamp-1 overflow-hidden text-ellipsis text-primary tt-md-semi">{props.title}</h4>
                    <p className="line-clamp-2 text-ellipsis text-wrap text-tertiary tt-sm">{props.description}</p>
                </div>
                {props.actionsContent}
            </div>
        </a>
    );
};
