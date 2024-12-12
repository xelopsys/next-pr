import { cx } from "@/components/utils";
import { Toaster as SonnerToaster, ToasterProps, useSonner } from "sonner";

export const DEFAULT_TOAST_POSITION = "bottom-right";

export const ToastsOverlay = () => {
    const { toasts } = useSonner();

    const styles = {
        "top-right": {
            className: "top-0 right-0",
            background: "linear-gradient(215deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.00) 50%)",
        },
        "top-left": {
            className: "top-0 left-0",
            background: "linear-gradient(139deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.00) 40.64%)",
        },
        "bottom-right": {
            className: "bottom-0 right-0",
            background: "linear-gradient(148deg, rgba(0, 0, 0, 0.00) 58.58%, rgba(0, 0, 0, 0.10) 97.86%)",
        },
        "bottom-left": {
            className: "bottom-0 left-0",
            background: "linear-gradient(214deg, rgba(0, 0, 0, 0.00) 54.54%, rgba(0, 0, 0, 0.10) 95.71%)",
        },
    };

    // Deduplicated list of positions
    const positions = toasts.reduce<NonNullable<ToasterProps["position"]>[]>((acc, t) => {
        acc.push(t.position || DEFAULT_TOAST_POSITION);
        return acc;
    }, []);

    return (
        <>
            {Object.entries(styles).map(([position, style]) => (
                <div
                    key={position}
                    className={cx(
                        "pointer-events-none fixed z-40 hidden h-[290px] w-[520px] transition duration-500 xs:block",
                        style.className,
                        positions.includes(position as keyof typeof styles) ? "visible opacity-100" : "invisible opacity-0",
                    )}
                    style={{
                        background: style.background,
                    }}
                />
            ))}
            <div
                className={cx(
                    "pointer-events-none fixed bottom-0 left-0 right-0 z-40 h-[270px] w-full bg-gradient-to-t from-black/10 to-transparent transition duration-500 xs:hidden",
                    positions.length > 0 ? "visible opacity-100" : "invisible opacity-0",
                )}
            />
        </>
    );
};

export const Toaster = () => (
    <>
        <SonnerToaster
            position={DEFAULT_TOAST_POSITION}
            style={{
                // @ts-expect-error This works but not sure why TS doesn't work here.
                "--width": "400px",
            }}
        />
        <ToastsOverlay />
    </>
);
