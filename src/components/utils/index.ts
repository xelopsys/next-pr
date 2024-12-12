import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge<"spacing">({
    extend: {
        theme: {
            spacing: ["xxs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"],
        },
    },
});

export const cx = twMerge;

export function sortCx<T extends Record<string, string | number | Record<string, string | number | Record<string, string | number>>>>(classes: T): T {
    return classes;
}
