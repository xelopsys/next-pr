import { colors, lightModeColors, darkModeColors } from "./variables";

// Swap this with `darkModeColors` to switch to dark mode.
const variables = lightModeColors;

export const themeColors = {
    backgroundColor: {
        quaternary: variables["bg-quaternary"],
        "brand-solid": variables["bg-brand-solid"],
        disabled: variables["bg-disabled"],
        primary: variables["bg-primary"],
        "primary-solid": variables["bg-primary-solid"],
        primary_alt: variables["bg-primary_alt"],
        primary_hover: variables["bg-primary_hover"],
        secondary: {
            DEFAULT: variables["bg-secondary"],
            solid: variables["bg-secondary-solid"],
        },
        secondary_alt: variables["bg-secondary_alt"],
        secondary_hover: variables["bg-secondary_hover"],
        secondary_subtle: variables["bg-secondary_subtle"],
        tertiary: variables["bg-tertiary"],
        active: variables["bg-active"],
        disabled_subtle: variables["bg-disabled_subtle"],
        overlay: variables["bg-overlay"],
        brand: {
            primary: variables["bg-brand-primary"],
            primary_alt: variables["bg-brand-primary_alt"],
            secondary: variables["bg-brand-secondary"],
            solid: variables["bg-brand-solid"],
            solid_hover: variables["bg-brand-solid_hover"],
            section: variables["bg-brand-section"],
            section_subtle: variables["bg-brand-section_subtle"],
        },
        error: {
            primary: variables["bg-error-primary"],
            secondary: variables["bg-error-secondary"],
            solid: variables["bg-error-solid"],
        },
        warning: {
            primary: variables["bg-warning-primary"],
            secondary: variables["bg-warning-secondary"],
            solid: variables["bg-warning-solid"],
        },
        success: {
            primary: variables["bg-success-primary"],
            secondary: variables["bg-success-secondary"],
            solid: variables["bg-success-solid"],
        },
        "border-brand": variables["border-brand"],
        "border-brand_alt": variables["border-brand_alt"],
    },

    textColor: {
        primary: {
            DEFAULT: variables["text-primary"],
        },
        primary_on: {
            brand: variables["text-primary_on-brand"],
        },
        secondary: variables["text-secondary"],
        secondary_hover: variables["text-secondary_hover"],
        secondary_on: {
            brand: variables["text-secondary_on-brand"],
        },
        tertiary: variables["text-tertiary"],
        tertiary_hover: variables["text-tertiary_hover"],
        tertiary_on: {
            brand: variables["text-tertiary_on-brand"],
        },
        quaternary: variables["text-quaternary"],
        quaternary_on: {
            brand: variables["text-quaternary_on-brand"],
        },
        disabled: variables["text-disabled"],
        placeholder: variables["text-placeholder"],
        placeholder_subtle: variables["text-placeholder_subtle"],
        brand: {
            primary: variables["text-brand-primary"],
            secondary: variables["text-brand-secondary"],
            tertiary: variables["text-brand-tertiary"],
            tertiary_alt: variables["text-brand-tertiary_alt"],
        },
        error: {
            primary: variables["text-error-primary"],
        },
        warning: {
            primary: variables["text-warning-primary"],
        },
        success: {
            primary: variables["text-success-primary"],
        },
        tooltip: {
            "supporting-text": variables["tooltip-supporting-text"],
        },
    },
    borderColor: {
        primary: {
            DEFAULT: variables["border-primary"],
        },
        secondary: variables["border-secondary"],
        tertiary: variables["border-tertiary"],
        disabled: variables["border-disabled"],
        brand: {
            DEFAULT: variables["border-brand"],
            solid: variables["bg-brand-solid"],
            solid_hover: variables["bg-brand-solid_hover"],
        },
        error: {
            DEFAULT: variables["border-error"],
        },
        disabled_subtle: variables["border-disabled_subtle"],
        brand_alt: variables["border-brand_alt"],
        error_subtle: variables["border-error_subtle"],
    },
    ringColor: {
        bg: {
            brand: {
                solid: variables["bg-brand-solid"],
            },
        },
        border: {
            primary: variables["border-primary"],
            secondary: variables["border-secondary"],
            tertiary: variables["border-tertiary"],
            disabled: variables["border-disabled"],
            brand: variables["border-brand"],
            error: variables["border-error"],
            disabled_subtle: variables["border-disabled_subtle"],
            brand_alt: variables["border-brand_alt"],
            error_subtle: variables["border-error_subtle"],
        },
    },
    outlineColor: {
        brand: {
            DEFAULT: variables["border-brand"],
        },
        primary: {
            DEFAULT: variables["border-primary"],
        },
        secondary: {
            DEFAULT: variables["border-secondary"],
        },
        error: {
            DEFAULT: variables["border-error"],
        },
    },
    colors: {
        ...colors,

        // tertiary: variables["tertiary"],
        // overlay: variables["overlay"],
        button: {
            primary: {
                fg: variables["button-primary-fg"],
                fg_hover: variables["button-primary-fg_hover"],
                bg: variables["button-primary-bg"],
                bg_hover: variables["button-primary-bg_hover"],
                error: {
                    fg: variables["button-primary-error-fg"],
                    fg_hover: variables["button-primary-error-fg_hover"],
                    bg: variables["button-primary-error-bg"],
                    bg_hover: variables["button-primary-error-bg_hover"],
                },
            },
            secondary: {
                fg: variables["button-secondary-fg"],
                fg_hover: variables["button-secondary-fg_hover"],
                bg: variables["button-secondary-bg"],
                bg_hover: variables["button-secondary-bg_hover"],
                border: variables["button-secondary-border"],
                border_hover: variables["button-secondary-border_hover"],
                color: {
                    fg: variables["button-secondary-color-fg"],
                    fg_hover: variables["button-secondary-color-fg_hover"],
                    bg: variables["button-secondary-color-bg"],
                    bg_hover: variables["button-secondary-color-bg_hover"],
                    border: variables["button-secondary-color-border"],
                    border_hover: variables["button-secondary-color-border_hover"],
                },
                error: {
                    fg: variables["button-secondary-error-fg"],
                    fg_hover: variables["button-secondary-error-fg_hover"],
                    bg: variables["button-secondary-error-bg"],
                    bg_hover: variables["button-secondary-error-bg_hover"],
                    border: variables["button-secondary-error-border"],
                    border_hover: variables["button-secondary-error-border_hover"],
                },
            },
            tertiary: {
                fg: variables["button-tertiary-fg"],
                fg_hover: variables["button-tertiary-fg_hover"],
                bg_hover: variables["button-tertiary-bg_hover"],
                color: {
                    fg: variables["button-tertiary-color-fg"],
                    fg_hover: variables["button-tertiary-color-fg_hover"],
                    bg_hover: variables["button-tertiary-color-bg_hover"],
                },
                error: {
                    fg: variables["button-tertiary-error-fg"],
                    fg_hover: variables["button-tertiary-error-fg_hover"],
                    bg_hover: variables["button-tertiary-error-bg_hover"],
                },
            },
        },
        bg: {
            primary: variables["bg-primary"],
            "primary-solid": variables["bg-primary-solid"],
            secondary: variables["bg-secondary"],
            tertiary: variables["bg-tertiary"],
            quaternary: variables["bg-quaternary"],
            success: {
                solid: variables["bg-success-solid"],
            },
        },
        fg: {
            primary: variables["fg-primary"],
            secondary: variables["fg-secondary"],
            secondary_hover: variables["fg-secondary_hover"],
            tertiary: variables["fg-tertiary"],
            tertiary_hover: variables["fg-tertiary_hover"],
            quaternary: variables["fg-quaternary"],
            quaternary_hover: variables["fg-quaternary_hover"],
            quinary: variables["fg-quinary"],
            quinary_hover: variables["fg-quinary_hover"],
            senary: variables["fg-senary"],
            white: variables["fg-white"],
            disabled: variables["fg-disabled"],
            disabled_subtle: variables["fg-disabled_subtle"],
            brand: {
                primary: variables["fg-brand-primary"],
                primary_alt: variables["fg-brand-primary_alt"],
                secondary: variables["fg-brand-secondary"],
            },
            error: {
                primary: variables["fg-error-primary"],
                secondary: variables["fg-error-secondary"],
            },
            warning: {
                primary: variables["fg-warning-primary"],
                secondary: variables["fg-warning-secondary"],
            },
            success: {
                primary: variables["fg-success-primary"],
                secondary: variables["fg-success-secondary"],
            },
        },
        focus: {
            ring: {
                DEFAULT: variables["focus-ring"],
                error: variables["focus-ring-error"],
            },
        },
        border: {
            secondary: variables["border-secondary"],
        },
        slider: {
            handle: {
                bg: variables["slider-handle-bg"],
                border: variables["slider-handle-border"],
            },
        },
        utility: {
            gray: {
                50: variables["utility-gray-50"],
                100: variables["utility-gray-100"],
                200: variables["utility-gray-200"],
                300: variables["utility-gray-300"],
                400: variables["utility-gray-400"],
                500: variables["utility-gray-500"],
                600: variables["utility-gray-600"],
                700: variables["utility-gray-700"],
                800: variables["utility-gray-800"],
                900: variables["utility-gray-900"],
                blue: {
                    50: variables["utility-gray-blue-50"],
                    100: variables["utility-gray-blue-100"],
                    200: variables["utility-gray-blue-200"],
                    300: variables["utility-gray-blue-300"],
                    400: variables["utility-gray-blue-400"],
                    500: variables["utility-gray-blue-500"],
                    600: variables["utility-gray-blue-600"],
                    700: variables["utility-gray-blue-700"],
                },
            },
            brand: {
                50: variables["utility-brand-50"],
                100: variables["utility-brand-100"],
                200: variables["utility-brand-200"],
                300: variables["utility-brand-300"],
                400: variables["utility-brand-400"],
                500: variables["utility-brand-500"],
                600: variables["utility-brand-600"],
                700: variables["utility-brand-700"],
                800: variables["utility-brand-800"],
                900: variables["utility-brand-900"],
                "50_alt": variables["utility-brand-50_alt"],
                "100_alt": variables["utility-brand-100_alt"],
                "200_alt": variables["utility-brand-200_alt"],
                "300_alt": variables["utility-brand-300_alt"],
                "400_alt": variables["utility-brand-400_alt"],
                "500_alt": variables["utility-brand-500_alt"],
                "600_alt": variables["utility-brand-600_alt"],
                "700_alt": variables["utility-brand-700_alt"],
                "800_alt": variables["utility-brand-800_alt"],
                "900_alt": variables["utility-brand-900_alt"],
            },
            error: {
                50: variables["utility-error-50"],
                100: variables["utility-error-100"],
                200: variables["utility-error-200"],
                300: variables["utility-error-300"],
                400: variables["utility-error-400"],
                500: variables["utility-error-500"],
                600: variables["utility-error-600"],
                700: variables["utility-error-700"],
            },
            warning: {
                50: variables["utility-warning-50"],
                100: variables["utility-warning-100"],
                200: variables["utility-warning-200"],
                300: variables["utility-warning-300"],
                400: variables["utility-warning-400"],
                500: variables["utility-warning-500"],
                600: variables["utility-warning-600"],
                700: variables["utility-warning-700"],
            },
            success: {
                50: variables["utility-success-50"],
                100: variables["utility-success-100"],
                200: variables["utility-success-200"],
                300: variables["utility-success-300"],
                400: variables["utility-success-400"],
                500: variables["utility-success-500"],
                600: variables["utility-success-600"],
                700: variables["utility-success-700"],
            },
            blue: {
                50: variables["utility-blue-50"],
                100: variables["utility-blue-100"],
                200: variables["utility-blue-200"],
                300: variables["utility-blue-300"],
                400: variables["utility-blue-400"],
                500: variables["utility-blue-500"],
                600: variables["utility-blue-600"],
                700: variables["utility-blue-700"],
                light: {
                    50: variables["utility-blue-light-50"],
                    100: variables["utility-blue-light-100"],
                    200: variables["utility-blue-light-200"],
                    300: variables["utility-blue-light-300"],
                    400: variables["utility-blue-light-400"],
                    500: variables["utility-blue-light-500"],
                    600: variables["utility-blue-light-600"],
                    700: variables["utility-blue-light-700"],
                },
                dark: {
                    50: variables["utility-blue-dark-50"],
                    100: variables["utility-blue-dark-100"],
                    200: variables["utility-blue-dark-200"],
                    300: variables["utility-blue-dark-300"],
                    400: variables["utility-blue-dark-400"],
                    500: variables["utility-blue-dark-500"],
                    600: variables["utility-blue-dark-600"],
                    700: variables["utility-blue-dark-700"],
                },
            },
            green: {
                50: variables["utility-green-50"],
                100: variables["utility-green-100"],
                200: variables["utility-green-200"],
                300: variables["utility-green-300"],
                400: variables["utility-green-400"],
                500: variables["utility-green-500"],
                600: variables["utility-green-600"],
                700: variables["utility-green-700"],
            },
            yellow: {
                50: variables["utility-yellow-50"],
                100: variables["utility-yellow-100"],
                200: variables["utility-yellow-200"],
                300: variables["utility-yellow-300"],
                400: variables["utility-yellow-400"],
                500: variables["utility-yellow-500"],
                600: variables["utility-yellow-600"],
                700: variables["utility-yellow-700"],
            },
            indigo: {
                50: variables["utility-indigo-50"],
                100: variables["utility-indigo-100"],
                200: variables["utility-indigo-200"],
                300: variables["utility-indigo-300"],
                400: variables["utility-indigo-400"],
                500: variables["utility-indigo-500"],
                600: variables["utility-indigo-600"],
                700: variables["utility-indigo-700"],
            },
            purple: {
                50: variables["utility-purple-50"],
                100: variables["utility-purple-100"],
                200: variables["utility-purple-200"],
                300: variables["utility-purple-300"],
                400: variables["utility-purple-400"],
                500: variables["utility-purple-500"],
                600: variables["utility-purple-600"],
                700: variables["utility-purple-700"],
            },
            fuchsia: {
                50: variables["utility-fuchsia-50"],
                100: variables["utility-fuchsia-100"],
                200: variables["utility-fuchsia-200"],
                300: variables["utility-fuchsia-300"],
                400: variables["utility-fuchsia-400"],
                500: variables["utility-fuchsia-500"],
                600: variables["utility-fuchsia-600"],
                700: variables["utility-fuchsia-700"],
            },
            pink: {
                50: variables["utility-pink-50"],
                100: variables["utility-pink-100"],
                200: variables["utility-pink-200"],
                300: variables["utility-pink-300"],
                400: variables["utility-pink-400"],
                500: variables["utility-pink-500"],
                600: variables["utility-pink-600"],
                700: variables["utility-pink-700"],
            },
            orange: {
                50: variables["utility-orange-50"],
                100: variables["utility-orange-100"],
                200: variables["utility-orange-200"],
                300: variables["utility-orange-300"],
                400: variables["utility-orange-400"],
                500: variables["utility-orange-500"],
                600: variables["utility-orange-600"],
                700: variables["utility-orange-700"],
                dark: {
                    50: variables["utility-orange-dark-50"],
                    100: variables["utility-orange-dark-100"],
                    200: variables["utility-orange-dark-200"],
                    300: variables["utility-orange-dark-300"],
                    400: variables["utility-orange-dark-400"],
                    500: variables["utility-orange-dark-500"],
                    600: variables["utility-orange-dark-600"],
                    700: variables["utility-orange-dark-700"],
                },
            },
        },
        "app-store-badge": {
            border: variables["app-store-badge-border"],
        },
        "nav-item": {
            button: {
                icon: {
                    fg: variables["nav-item-button-icon-fg"],
                    fg_active: variables["nav-item-button-icon-fg_active"],
                },
            },
            icon: {
                fg: variables["nav-item-icon-fg"],
                fg_active: variables["nav-item-icon-fg_active"],
            },
        },

        breadcrumb: {
            fg: variables["breadcrumb-fg"],
            fg_hover: variables["breadcrumb-fg_hover"],
            bg_hover: variables["breadcrumb-bg_hover"],
            brand: {
                fg_hover: variables["breadcrumb-brand-fg_hover"],
                bg_hover: variables["breadcrumb-brand-bg_hover"],
                icon: {
                    fg_hover: variables["breadcrumb-brand-icon-fg_hover"],
                },
            },
            icon: {
                fg: variables["breadcrumb-icon-fg"],
                fg_hover: variables["breadcrumb-icon-fg_hover"],
            },
        },
        footer: {
            button: {
                fg: variables["footer-button-fg"],
                fg_hover: variables["footer-button-fg_hover"],
            },
            badge: {
                fg: variables["footer-badge-fg"],
                bg: variables["footer-badge-bg"],
                border: variables["footer-badge-border"],
            },
        },
        header: {
            abstract: {
                50: {
                    bg: variables["header-abstract-50-bg"],
                },
                100: {
                    bg: variables["header-abstract-100-bg"],
                },
                200: {
                    bg: variables["header-abstract-200-bg"],
                },
                300: {
                    bg: variables["header-abstract-300-bg"],
                },
            },
        },
        icon: {
            fg: {
                brand: variables["icon-fg-brand"],
                brand_on: {
                    brand: variables["icon-fg-brand_on-brand"],
                },
            },
        },
        "featured-icon": {
            light: {
                fg: {
                    brand: variables["featured-icon-light-fg-brand"],
                    gray: variables["featured-icon-light-fg-gray"],
                    error: variables["featured-icon-light-fg-error"],
                    warning: variables["featured-icon-light-fg-warning"],
                    success: variables["featured-icon-light-fg-success"],
                },
            },
            dark: {
                fg: {
                    brand: variables["featured-icon-dark-fg-brand"],
                    gray: variables["featured-icon-dark-fg-gray"],
                    error: variables["featured-icon-dark-fg-error"],
                    warning: variables["featured-icon-dark-fg-warning"],
                    success: variables["featured-icon-dark-fg-success"],
                },
            },
            modern: {
                border: variables["featured-icon-modern-border"],
            },
        },
        "social-icon": {
            fg: {
                x: variables["social-icon-fg-x"],
                instagram: variables["social-icon-fg-instagram"],
                apple: variables["social-icon-fg-apple"],
                github: variables["social-icon-fg-github"],
                angellist: variables["social-icon-fg-angellist"],
                tumblr: variables["social-icon-fg-tumblr"],
            },
        },
        "screen-mockup": {
            border: variables["screen-mockup-border"],
        },
        "slider-handle": {
            bg: variables["slider-handle-bg"],
            border: variables["slider-handle-border"],
        },
        "thumbnail-badge": {
            brand: {
                fg: variables["thumbnail-badge-brand-fg"],
            },
            success: {
                fg: variables["thumbnail-badge-success-fg"],
            },
        },
        toggle: {
            button: {
                fg_disabled: variables["toggle-button-fg_disabled"],
            },
        },
        "wysiwyg-editor-icon": {
            fg: variables["wysiwyg-editor-icon-fg"],
            fg_active: variables["wysiwyg-editor-icon-fg_active"],
        },
    },
};
