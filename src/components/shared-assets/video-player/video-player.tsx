import { useEffect, useRef, useState } from "react";
import { PauseIcon, PlayIcon } from "./icons";
import { cx } from "@/components/utils";
import PlayButtonIcon from "./play-button-icon";

interface VideoPlayerProps {
    src: string;
    type?: string;
    autoPlay?: boolean;
    className?: string;
    thumbnailUrl?: string;
    thumbnailAlt?: string;
    showThumbnailOverlay?: boolean;
    thumbnailButtonClassName?: string;
}

const VideoPlayer = ({
    src,
    type = "video/mp4",
    autoPlay = false,
    thumbnailUrl,
    thumbnailAlt,
    showThumbnailOverlay,
    className,
    thumbnailButtonClassName,
}: VideoPlayerProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [buffered, setBuffered] = useState<TimeRanges | null>(null);
    const [hoverTime, setHoverTime] = useState<number | null>(null);
    const [hoverPosition, setHoverPosition] = useState<number | null>(null);
    const [showThumbnail, setShowThumbnail] = useState(true);

    const formatTime = (time: number): string => {
        const minutes = Math.max(Math.floor(time / 60), 0);
        const seconds = Math.max(Math.floor(time % 60), 0);
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    const togglePlay = () => {
        setIsPlaying((prevPlaying) => {
            prevPlaying ? videoRef.current?.pause() : videoRef.current?.play();

            return !prevPlaying;
        });
        setShowThumbnail(false);
    };

    const handleProgressClick = (e: React.MouseEvent) => {
        if (progressRef.current && videoRef.current) {
            const rect = progressRef.current.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            videoRef.current.currentTime = pos * duration;
        }
    };

    const handleProgressHover = (e: React.MouseEvent) => {
        if (progressRef.current && videoRef.current) {
            const rect = progressRef.current.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            setHoverTime(pos * duration);
            setHoverPosition(e.clientX - rect.left);
        }
    };

    const handleProgress = () => {
        if (videoRef.current) {
            setBuffered(videoRef.current.buffered);
        }
    };

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleTimeUpdate = () => setCurrentTime(video.currentTime);
        const handleDurationChange = () => setDuration(video.duration);
        const handleEnded = () => {
            setIsPlaying(false);
            setShowThumbnail(true);
        };
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === "Space" || e.code === "KeyK") {
                e.preventDefault();
                togglePlay();
            }
        };

        video.addEventListener("timeupdate", handleTimeUpdate);
        video.addEventListener("durationchange", handleDurationChange);
        video.addEventListener("ended", handleEnded);
        video.addEventListener("progress", handleProgress);
        video.addEventListener("keydown", handleKeyDown);

        return () => {
            video.removeEventListener("timeupdate", handleTimeUpdate);
            video.removeEventListener("durationchange", handleDurationChange);
            video.removeEventListener("ended", handleEnded);
            video.removeEventListener("progress", handleProgress);
            video.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const renderBuffered = () => {
        if (!buffered) return null;

        const segments = [];
        for (let i = 0; i < buffered.length; i++) {
            const start = (buffered.start(i) / duration) * 100;
            const end = (buffered.end(i) / duration) * 100;
            segments.push(
                <div
                    key={i}
                    className="pointer-events-none absolute h-full min-w-2 rounded-full bg-fg-white/50"
                    style={{
                        left: `${start}%`,
                        width: `${end - start}%`,
                    }}
                />,
            );
        }
        return segments;
    };

    const canShowTrickPlayTime = hoverTime !== null && hoverPosition !== null;

    return (
        <div
            className={cx(
                "group/video relative",
                // Add focus ring when video is focused
                "has-[video:focus]:outline has-[video:focus]:outline-2 has-[video:focus]:outline-offset-4 has-[video:focus]:outline-focus-ring",
                className,
            )}
        >
            {/* Thumbnail */}
            <div
                onClick={togglePlay}
                className={cx(
                    "group absolute inset-0 z-10 cursor-pointer rounded-[inherit] transition-all duration-300 ease-in",
                    thumbnailUrl && showThumbnail ? "visible opacity-100" : "pointer-events-none invisible opacity-0",
                )}
            >
                <img src={thumbnailUrl} alt={thumbnailAlt} className="size-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <PlayButtonIcon className={cx(thumbnailButtonClassName, thumbnailUrl && showThumbnail ? "scale-100" : "scale-90 duration-500")} />
                </div>

                {showThumbnailOverlay && (
                    <div className="absolute inset-0 rounded-[inherit] bg-black/10 outline outline-2 -outline-offset-1 outline-black/10" />
                )}
            </div>

            {/* Video */}
            <video ref={videoRef} tabIndex={0} autoPlay={autoPlay} className="h-full w-full bg-black outline-none">
                <source src={src} type={type} />
                Your browser does not support the video tag.
            </video>

            {/* Video Controls */}
            <div
                style={{
                    transition: "opacity .4s cubic-bezier(0.4, 0, 0.6, 1) .05s, transform .5s cubic-bezier(0.4, 0, 0.6, 1)",
                }}
                className={cx(
                    "absolute bottom-0 left-0 right-0 h-[116px] translate-y-8 transform bg-gradient-to-t from-black/20 to-transparent opacity-0 will-change-transform",
                    // Make it visible when video is hovered
                    "group-hover/video:translate-y-0 group-hover/video:opacity-100",
                    // Make it visible when video is focused
                    "group-has-[video:focus]/video:translate-y-0 group-has-[video:focus]/video:opacity-100",
                )}
            >
                <div className="absolute bottom-0 left-0 right-0 px-3 pb-2">
                    <div className="flex items-center gap-3">
                        {/* Play/Pause Button */}
                        <button
                            // Disable tab focus because the whole video element is already focusable.
                            tabIndex={-1}
                            onClick={togglePlay}
                            className="group/play relative flex cursor-pointer items-center justify-center text-white outline-none transition-colors before:absolute before:size-6 hover:text-white/80"
                            aria-label={isPlaying ? "Pause" : "Play"}
                        >
                            <div className="relative size-4">
                                <PauseIcon
                                    className={cx(
                                        "absolute inset-0 size-4 text-fg-white transition duration-200 ease-in-out group-active/play:scale-[0.8]",
                                        isPlaying ? "scale-100 opacity-100" : "pointer-events-none scale-[0.8] opacity-0",
                                    )}
                                />
                                <PlayIcon
                                    className={cx(
                                        "absolute inset-0 size-4 text-fg-white transition duration-200 ease-in-out group-active/play:scale-[0.8]",
                                        isPlaying ? "pointer-events-none scale-[0.8] opacity-0" : "scale-100 opacity-100",
                                    )}
                                />
                            </div>
                        </button>

                        {/* Progress Bar */}
                        <div
                            ref={progressRef}
                            onClick={handleProgressClick}
                            onMouseMove={handleProgressHover}
                            className="group/progress -my-8 flex-1 cursor-pointer py-8"
                        >
                            <div className="relative h-2 flex-1 rounded-full bg-fg-white/30">
                                {/* Buffered Progress */}
                                {renderBuffered()}

                                {/* Current Progress */}
                                <div
                                    className="pointer-events-none absolute h-full min-w-2 rounded-full bg-fg-white"
                                    style={{ width: `${(currentTime / duration) * 100}%` }}
                                />

                                {/* Hover Time Indicator */}
                                <div
                                    className={cx(
                                        "pointer-events-none absolute bottom-4 -translate-x-1/2 translate-y-2 transform text-fg-white opacity-0 tt-xs-semi group-hover/progress:translate-y-0 group-hover/progress:opacity-100",
                                    )}
                                    style={{
                                        left: hoverPosition || 0,
                                        transition: "opacity .3s cubic-bezier(0.4, 0, 0.6, 1), transform .3s cubic-bezier(0.4, 0, 0.6, 1)",
                                    }}
                                >
                                    {canShowTrickPlayTime ? formatTime(hoverTime) : ""}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Time Display */}
                    <div className="pointer-events-none mt-1 flex justify-between text-white tt-xs-semi">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;
