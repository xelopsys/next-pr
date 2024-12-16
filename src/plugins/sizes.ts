import plugin from "tailwindcss/plugin";

export default plugin.withOptions<{ prefix?: string }>(({ prefix = "size" } = {}) => {
    return ({ addVariant }) => {
        for (let size of ["sm", "md", "lg", "xl"]) {
            // TODO: Once `:has()` is properly supported, then we can switch to this version:
            // addVariant(`${prefix}-${size}`, [
            //   `&[data-size~="${size}"]`,
            //   `:where([data-size~="${size}"]):not(:has([data-size])) &`,
            // ])

            // But for now, this will do:
            addVariant(`${prefix}-${size}`, [`&[data-size~="${size}"]`, `:where([data-size~="${size}"]) &`]);

            addVariant(`${prefix}-not-${size}`, [
                `&[data-size]:not([data-size~="${size}"])`,
                `:where([data-size]:not([data-size~="${size}"])) &:not([data-size])`,
            ]);
        }
    };
});
