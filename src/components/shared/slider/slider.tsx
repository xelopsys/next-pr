import { cx, sortCx } from "@/components/utils";
import { Label, Slider as AriaSlider, SliderOutput, SliderThumb, SliderTrack, SliderProps as AriaSliderProps } from "react-aria-components";

const styles = sortCx({
    default: "hidden",
    bottom: "absolute left-1/2 top-2 -translate-x-1/2 translate-y-full text-md font-medium leading-md text-primary",
    "top-floating":
        "absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full rounded-lg bg-primary px-3 py-2 text-xs font-semibold leading-xs text-secondary shadow-lg ring-1 ring-inset ring-border-secondary",
});

interface SliderProps extends AriaSliderProps {
    labelPosition?: keyof typeof styles;
    labelFormatter?: (value: number) => string;
}

export const Slider = ({
    labelPosition = "default",
    minValue = 0,
    maxValue = 100,
    defaultValue = [minValue, maxValue],
    labelFormatter,
    formatOptions,
    ...rest
}: SliderProps) => {
    // Format thumb value as percentage by default.
    const defaultFormatOptions: Intl.NumberFormatOptions = {
        style: "percent",
        maximumFractionDigits: 0,
    };

    return (
        <AriaSlider {...rest} {...{ minValue, maxValue, defaultValue }} formatOptions={formatOptions ?? defaultFormatOptions}>
            <Label />
            <SliderTrack className="relative h-2 w-full rounded-full bg-quaternary">
                {({ state: { values, getThumbValue, getThumbPercent, getFormattedValue, getThumbValueLabel } }) => {
                    const left = getThumbPercent(0);
                    const width = getThumbPercent(1) - left;

                    return (
                        <>
                            <span
                                className="absolute z-10 h-2 w-full rounded-full bg-brand-solid"
                                style={{
                                    left: `${left * 100}%`,
                                    width: `${width * 100}%`,
                                }}
                            />
                            {values.map((_, index) => {
                                return (
                                    <SliderThumb
                                        key={index}
                                        index={index}
                                        className="absolute top-1/2 z-50 box-border size-6 -translate-y-1/2 cursor-pointer rounded-full bg-slider-handle-bg shadow-md outline-brand ring-2 ring-inset ring-slider-handle-border"
                                    >
                                        <SliderOutput className={cx("whitespace-nowrap", styles[labelPosition])}>
                                            {labelFormatter ? labelFormatter(getThumbValue(index)) : getFormattedValue(getThumbValue(index) / 100)}
                                        </SliderOutput>
                                    </SliderThumb>
                                );
                            })}
                        </>
                    );
                }}
            </SliderTrack>
        </AriaSlider>
    );
};
