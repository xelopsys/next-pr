const plugin = require("tailwindcss/plugin");

module.exports = plugin.withOptions(({ prefix = "radix" } = {}) => {
    return ({ addVariant }) => {
        addVariant(`${prefix}-disabled`, [`&[data-disabled]`, `:where([data-disabled]) &`]);

        for (let state of ["open", "checked", "unchecked", "indeterminate", "selected", "active"]) {
            // TODO: Once `:has()` is properly supported, then we can switch to this version:
            // addVariant(`${prefix}-${state}`, [
            //   `&[data-state~="${state}"]`,
            //   `:where([data-state~="${state}"]):not(:has([data-state])) &`,
            // ])

            // But for now, this will do:
            addVariant(`${prefix}-${state}`, [`&[data-state~="${state}"]`, `:where([data-state~="${state}"]) &`]);

            addVariant(`${prefix}-not-${state}`, [
                `&[data-state]:not([data-state~="${state}"])`,
                `:where([data-state]:not([data-state~="${state}"])) &:not([data-state])`,
            ]);
        }
    };
});
