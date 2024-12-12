// const resolveConfig = require("tailwindcss/resolveConfig");
// const tailwindConfig = require("../tailwind.config.js");
const defaultTheme = require("../src/theme/default");
// const config = resolveConfig(tailwindConfig);

const theme = (property) => defaultTheme[property];

const colors = theme("colors");

const round = (num) =>
    num
        .toFixed(7)
        .replace(/(\.[0-9]+?)0+$/, "$1")
        .replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;

let defaultModifiers = {
    base: {
        css: [
            {
                fontSize: theme("fontSize").md,
                lineHeight: theme("lineHeight").md,
                p: {
                    marginTop: theme("spacing")[4],
                    marginBottom: theme("spacing")[4],
                },
                '[class~="lead"]': {
                    fontSize: theme("fontSize").md,
                    lineHeight: theme("lineHeight").md,
                    marginTop: em(24, 20),
                    marginBottom: em(24, 20),
                },
                blockquote: {
                    paddingLeft: em(20, 20),
                    marginTop: theme("spacing")[10],
                    marginBottom: theme("spacing")[10],
                    borderLeftWidth: "2px",
                    borderLeftColor: "var(--tw-prose-quote-borders)",
                },
                "blockquote p": {
                    margin: 0,
                    fontSize: theme("fontSize")["xl"],
                    lineHeight: theme("lineHeight")["xl"],
                    fontWeight: 500,
                    fontStyle: "italic",
                },
                h1: {
                    fontSize: theme("fontSize")["display-sm"],
                    lineHeight: theme("lineHeight")["display-sm"],
                    fontWeight: 600,
                    marginBottom: theme("spacing")[5],
                    marginTop: theme("spacing")[10],
                },
                h2: {
                    fontSize: theme("fontSize")["display-xs"],
                    lineHeight: theme("lineHeight")["display-xs"],
                    fontWeight: 600,
                    marginBottom: theme("spacing")[4],
                    marginTop: theme("spacing")[8],
                },
                h3: {
                    fontSize: theme("fontSize")["xl"],
                    lineHeight: theme("lineHeight")["xl"],
                    fontWeight: 600,
                    marginBottom: theme("spacing")[3],
                    marginTop: theme("spacing")[8],
                },
                h4: {
                    fontSize: theme("fontSize")["lg"],
                    lineHeight: theme("lineHeight")["lg"],
                    fontWeight: 600,
                    marginBottom: theme("spacing")[2],
                    marginTop: theme("spacing")[5],
                },
                img: {
                    marginTop: em(32, 16),
                    marginBottom: em(32, 16),
                },
                video: {
                    marginTop: em(32, 16),
                    marginBottom: em(32, 16),
                },
                figure: {
                    marginTop: theme("spacing")[10],
                    marginBottom: theme("spacing")[10],
                },
                "figure > *": {
                    marginTop: "0",
                    marginBottom: "0",
                },
                "figure:has(> blockquote)": {
                    paddingTop: theme("spacing")[2],
                    paddingBottom: theme("spacing")[2],
                    paddingLeft: theme("spacing")[4],
                    borderLeftWidth: "2px",
                    borderLeftColor: "var(--tw-prose-quote-borders)",
                },
                "figure:has(> blockquote) blockquote": {
                    paddingLeft: 0,
                    border: "none",
                },
                "img + figcaption": {
                    marginTop: theme("spacing")[3],
                    display: "flex",
                    gap: theme("spacing")[1.5],
                    alignItems: "center",
                    fontSize: theme("fontSize")["sm"],
                    lineHeight: theme("lineHeight")["sm"],
                },
                figcaption: {
                    fontSize: em(14, 16),
                    lineHeight: round(20 / 14),
                    marginTop: em(12, 14),
                },
                code: {
                    fontSize: em(14, 16),
                },
                "h2 code": {
                    fontSize: em(21, 24),
                },
                "h3 code": {
                    fontSize: em(18, 20),
                },
                pre: {
                    fontSize: em(14, 16),
                    lineHeight: round(24 / 14),
                    marginTop: em(24, 14),
                    marginBottom: em(24, 14),
                    borderRadius: rem(6),
                    paddingTop: em(12, 14),
                    paddingRight: em(16, 14),
                    paddingBottom: em(12, 14),
                    paddingLeft: em(16, 14),
                },
                ol: {
                    marginTop: theme("spacing")[4],
                    marginBottom: theme("spacing")[4],
                    paddingLeft: "23px",
                },
                ul: {
                    marginTop: theme("spacing")[4],
                    marginBottom: theme("spacing")[4],
                    paddingLeft: "23px",
                },
                li: {
                    marginTop: em(8, 16),
                    marginBottom: em(8, 16),
                },
                "ol > li": {
                    paddingLeft: theme("spacing").px,
                    marginTop: 0,
                    marginBottom: 0,
                },
                "ul > li": {
                    paddingLeft: theme("spacing").px,
                    marginTop: 0,
                    marginBottom: 0,
                },
                "> ul > li p": {
                    marginTop: em(12, 16),
                    marginBottom: em(12, 16),
                },
                "> ul > li > *:first-child": {
                    marginTop: em(20, 16),
                },
                "> ul > li > *:last-child": {
                    marginBottom: em(20, 16),
                },
                "> ol > li > *:first-child": {
                    marginTop: em(20, 16),
                },
                "> ol > li > *:last-child": {
                    marginBottom: em(20, 16),
                },
                "ul ul, ul ol, ol ul, ol ol": {
                    marginTop: em(12, 16),
                    marginBottom: em(12, 16),
                },
                hr: {
                    marginTop: theme("spacing")[8],
                    marginBottom: theme("spacing")[8],
                },

                "h2 + *": {
                    marginTop: "0",
                },
                "h3 + *": {
                    marginTop: "0",
                },
                "h4 + *": {
                    marginTop: "0",
                },
                table: {
                    fontSize: em(14, 16),
                    lineHeight: round(24 / 14),
                },
                "thead th": {
                    paddingRight: em(8, 14),
                    paddingBottom: em(8, 14),
                    paddingLeft: em(8, 14),
                },
                "thead th:first-child": {
                    paddingLeft: "0",
                },
                "thead th:last-child": {
                    paddingRight: "0",
                },
                "tbody td, tfoot td": {
                    paddingTop: em(8, 14),
                    paddingRight: em(8, 14),
                    paddingBottom: em(8, 14),
                    paddingLeft: em(8, 14),
                },
                "tbody td:first-child, tfoot td:first-child": {
                    paddingLeft: "0",
                },
                "tbody td:last-child, tfoot td:last-child": {
                    paddingRight: "0",
                },
            },
            {
                "> :first-child": {
                    marginTop: "0",
                },
                "> :last-child": {
                    marginBottom: "0",
                },
            },
        ],
    },
    lg: {
        css: [
            {
                fontSize: theme("fontSize").lg,
                lineHeight: theme("lineHeight").lg,
                p: {
                    marginTop: theme("spacing")[4.5],
                    marginBottom: theme("spacing")[4.5],
                },
                '[class~="lead"]': {
                    fontSize: theme("fontSize").xl,
                    lineHeight: theme("lineHeight").xl,
                    marginTop: em(24, 22),
                    marginBottom: em(24, 22),
                },
                blockquote: {
                    marginTop: theme("spacing")[12],
                    marginBottom: theme("spacing")[12],
                    borderLeftWidth: "2px",
                    borderLeftColor: "var(--tw-prose-quote-borders)",
                    paddingLeft: em(24, 24),
                },
                "blockquote p": {
                    margin: 0,
                    fontSize: theme("fontSize")["display-xs"],
                    lineHeight: theme("lineHeight")["display-xs"],
                    fontWeight: 500,
                    fontStyle: "italic",
                },
                h1: {
                    fontSize: theme("fontSize")["display-md"],
                    lineHeight: theme("lineHeight")["display-md"],
                    fontWeight: 600,
                    marginBottom: theme("spacing")[6],
                    marginTop: theme("spacing")[12],
                },
                h2: {
                    fontSize: theme("fontSize")["display-sm"],
                    lineHeight: theme("lineHeight")["display-sm"],
                    fontWeight: 600,
                    marginBottom: theme("spacing")[5],
                    marginTop: theme("spacing")[10],
                },
                h3: {
                    fontSize: theme("fontSize")["display-xs"],
                    lineHeight: theme("lineHeight")["display-xs"],
                    fontWeight: 600,
                    marginBottom: theme("spacing")[4],
                    marginTop: theme("spacing")[8],
                },
                h4: {
                    fontSize: theme("fontSize")["xl"],
                    lineHeight: theme("lineHeight")["xl"],
                    fontWeight: 600,
                    marginBottom: theme("spacing")[3],
                    marginTop: theme("spacing")[8],
                },
                img: {
                    marginTop: em(32, 18),
                    marginBottom: em(32, 18),
                },
                video: {
                    marginTop: em(32, 18),
                    marginBottom: em(32, 18),
                },
                figure: {
                    marginTop: theme("spacing")[12],
                    marginBottom: theme("spacing")[12],
                },
                "figure > *": {
                    marginTop: "0",
                    marginBottom: "0",
                },
                "figure:has(> blockquote)": {
                    paddingTop: theme("spacing")[2],
                    paddingBottom: theme("spacing")[2],
                    paddingLeft: theme("spacing")[5],
                    borderLeftWidth: "2px",
                    borderLeftColor: "var(--tw-prose-quote-borders)",
                },
                "figure:has(> blockquote) blockquote": {
                    paddingLeft: 0,
                    border: "none",
                },
                figcaption: {
                    fontSize: em(16, 18),
                    lineHeight: round(24 / 16),
                    marginTop: em(16, 16),
                },
                "img + figcaption": {
                    marginTop: theme("spacing")[4],
                    display: "flex",
                    gap: theme("spacing")[1.5],
                    alignItems: "center",
                    fontSize: theme("fontSize")["sm"],
                    lineHeight: theme("lineHeight")["sm"],
                },
                code: {
                    fontSize: em(16, 18),
                },
                "h2 code": {
                    fontSize: em(26, 30),
                },
                "h3 code": {
                    fontSize: em(21, 24),
                },
                pre: {
                    fontSize: em(16, 18),
                    lineHeight: round(28 / 16),
                    marginTop: em(32, 16),
                    marginBottom: em(32, 16),
                    borderRadius: rem(6),
                    paddingTop: em(16, 16),
                    paddingRight: em(24, 16),
                    paddingBottom: em(16, 16),
                    paddingLeft: em(24, 16),
                },
                ol: {
                    marginTop: theme("spacing")[4.5],
                    marginBottom: theme("spacing")[4.5],
                    paddingLeft: "26px",
                },
                ul: {
                    marginTop: theme("spacing")[4.5],
                    marginBottom: theme("spacing")[4.5],
                    paddingLeft: "26px",
                },
                li: {
                    marginTop: em(12, 18),
                    marginBottom: em(12, 18),
                },
                "ol > li": {
                    paddingLeft: theme("spacing").px,
                    marginTop: 0,
                    marginBottom: 0,
                },
                "ul > li": {
                    paddingLeft: theme("spacing").px,
                    marginTop: 0,
                    marginBottom: 0,
                },
                "> ul > li p": {
                    marginTop: em(16, 18),
                    marginBottom: em(16, 18),
                },
                "> ul > li > *:first-child": {
                    marginTop: em(24, 18),
                },
                "> ul > li > *:last-child": {
                    marginBottom: em(24, 18),
                },
                "> ol > li > *:first-child": {
                    marginTop: em(24, 18),
                },
                "> ol > li > *:last-child": {
                    marginBottom: em(24, 18),
                },
                "ul ul, ul ol, ol ul, ol ol": {
                    marginTop: em(16, 18),
                    marginBottom: em(16, 18),
                },
                hr: {
                    marginTop: theme("spacing")[8],
                    marginBottom: theme("spacing")[8],
                },

                "h2 + *": {
                    marginTop: "0",
                },
                "h3 + *": {
                    marginTop: "0",
                },
                "h4 + *": {
                    marginTop: "0",
                },
                table: {
                    fontSize: em(16, 18),
                    lineHeight: round(24 / 16),
                },
                "thead th": {
                    paddingRight: em(12, 16),
                    paddingBottom: em(12, 16),
                    paddingLeft: em(12, 16),
                },
                "thead th:first-child": {
                    paddingLeft: "0",
                },
                "thead th:last-child": {
                    paddingRight: "0",
                },
                "tbody td, tfoot td": {
                    paddingTop: em(12, 16),
                    paddingRight: em(12, 16),
                    paddingBottom: em(12, 16),
                    paddingLeft: em(12, 16),
                },
                "tbody td:first-child, tfoot td:first-child": {
                    paddingLeft: "0",
                },
                "tbody td:last-child, tfoot td:last-child": {
                    paddingRight: "0",
                },
            },
            {
                "> :first-child": {
                    marginTop: "0",
                },
                "> :last-child": {
                    marginBottom: "0",
                },
            },
        ],
    },
    // Invert (for dark mode)
    invert: {
        css: {
            "--tw-prose-body": "var(--tw-prose-invert-body)",
            "--tw-prose-headings": "var(--tw-prose-invert-headings)",
            "--tw-prose-lead": "var(--tw-prose-invert-lead)",
            "--tw-prose-links": "var(--tw-prose-invert-links)",
            "--tw-prose-bold": "var(--tw-prose-invert-bold)",
            "--tw-prose-counters": "var(--tw-prose-invert-counters)",
            "--tw-prose-bullets": "var(--tw-prose-invert-bullets)",
            "--tw-prose-hr": "var(--tw-prose-invert-hr)",
            "--tw-prose-quotes": "var(--tw-prose-invert-quotes)",
            "--tw-prose-quote-borders": "var(--tw-prose-invert-quote-borders)",
            "--tw-prose-captions": "var(--tw-prose-invert-captions)",
            "--tw-prose-code": "var(--tw-prose-invert-code)",
            "--tw-prose-pre-code": "var(--tw-prose-invert-pre-code)",
            "--tw-prose-pre-bg": "var(--tw-prose-invert-pre-bg)",
            "--tw-prose-th-borders": "var(--tw-prose-invert-th-borders)",
            "--tw-prose-td-borders": "var(--tw-prose-invert-td-borders)",
        },
    },

    // Gray color themes

    gray: {
        css: {
            "--tw-prose-body": "rgb(var(--colors-text-tertiary))",
            "--tw-prose-headings": "rgb(var(--colors-text-primary))",
            "--tw-prose-lead": "rgb(var(--colors-text-tertiary))",
            "--tw-prose-links": "rgb(var(--colors-text-tertiary))",
            "--tw-prose-bold": "rgb(var(--colors-text-primary))",
            "--tw-prose-counters": "rgb(var(--colors-text-tertiary))",
            "--tw-prose-bullets": "rgb(var(--colors-text-tertiary))",
            "--tw-prose-hr": "rgb(var(--colors-border-secondary))",
            "--tw-prose-quotes": "rgb(var(--colors-text-primary))",
            "--tw-prose-quote-borders": "rgb(var(--colors-fg-brand-primary_alt))",
            "--tw-prose-captions": "rgb(var(--colors-text-tertiary))",
            "--tw-prose-code": "rgb(var(--colors-text-primary))",
            "--tw-prose-pre-code": "rgb(var(--colors-text-tertiary))",
            "--tw-prose-pre-bg": "rgb(var(--colors-bg-primary))",
            "--tw-prose-th-borders": "rgb(var(--colors-border-primary))",
            "--tw-prose-td-borders": "rgb(var(--colors-border-secondary))",
            "--tw-prose-invert-body": colors.gray[300],
            "--tw-prose-invert-headings": colors.white,
            "--tw-prose-invert-lead": colors.gray[400],
            "--tw-prose-invert-links": colors.white,
            "--tw-prose-invert-bold": colors.white,
            "--tw-prose-invert-counters": colors.gray[400],
            "--tw-prose-invert-bullets": colors.gray[600],
            "--tw-prose-invert-hr": colors.gray[700],
            "--tw-prose-invert-quotes": colors.gray[100],
            "--tw-prose-invert-quote-borders": colors.gray[700],
            "--tw-prose-invert-captions": colors.gray[400],
            "--tw-prose-invert-code": colors.white,
            "--tw-prose-invert-pre-code": colors.gray[300],
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": colors.gray[600],
            "--tw-prose-invert-td-borders": colors.gray[700],
        },
    },

    "centered-quote": {
        css: {
            blockquote: {
                paddingLeft: "0px !important",
                borderLeft: "none",
                textAlign: "center",
            },
            "figure:has(> blockquote)": {
                borderLeft: "none",
                paddingLeft: "0px !important",
                paddingTop: "0px !important",
                paddingBottom: "0px !important",
                textAlign: "center",
            },
        },
    },

    "minimal-quote": {
        css: {
            blockquote: {
                borderLeft: "none",
                paddingLeft: "0px !important",
            },
            "figure:has(> blockquote)": {
                borderLeft: "none",
                paddingLeft: "0px !important",
            },
        },
    },
};

module.exports = {
    DEFAULT: {
        css: [
            {
                color: "var(--tw-prose-body)",
                maxWidth: "65ch",
                '[class~="lead"]': {
                    color: "var(--tw-prose-lead)",
                },
                a: {
                    color: "var(--tw-prose-links)",
                    textDecoration: "underline",
                    fontWeight: 400,
                    textUnderlineOffset: "4px",
                },
                strong: {
                    color: "var(--tw-prose-bold)",
                    fontWeight: "600",
                },
                "a strong": {
                    color: "inherit",
                },
                "blockquote strong": {
                    color: "inherit",
                },
                "thead th strong": {
                    color: "inherit",
                },
                ol: {
                    listStyleType: "decimal",
                },
                'ol[type="A"]': {
                    listStyleType: "upper-alpha",
                },
                'ol[type="a"]': {
                    listStyleType: "lower-alpha",
                },
                'ol[type="A" s]': {
                    listStyleType: "upper-alpha",
                },
                'ol[type="a" s]': {
                    listStyleType: "lower-alpha",
                },
                'ol[type="I"]': {
                    listStyleType: "upper-roman",
                },
                'ol[type="i"]': {
                    listStyleType: "lower-roman",
                },
                'ol[type="I" s]': {
                    listStyleType: "upper-roman",
                },
                'ol[type="i" s]': {
                    listStyleType: "lower-roman",
                },
                'ol[type="1"]': {
                    listStyleType: "decimal",
                },
                ul: {
                    listStyleType: "disc",
                },
                "ol > li::marker": {
                    fontWeight: "400",
                    color: "var(--tw-prose-counters)",
                },
                "ul > li::marker": {
                    color: "var(--tw-prose-bullets)",
                },
                hr: {
                    borderColor: "var(--tw-prose-hr)",
                    borderTopWidth: 1,
                },
                blockquote: {
                    fontWeight: "500",
                    fontStyle: "italic",
                    color: "var(--tw-prose-quotes)",
                    borderLeftWidth: "0.25rem",
                    borderLeftColor: "var(--tw-prose-quote-borders)",
                    quotes: '"\\201C""\\201D""\\2018""\\2019"',
                },
                "blockquote p:first-of-type::before": {
                    content: "open-quote",
                },
                "blockquote p:last-of-type::after": {
                    content: "close-quote",
                },
                h1: {
                    color: "var(--tw-prose-headings)",
                    fontWeight: "800",
                },
                "h1 strong": {
                    fontWeight: "900",
                    color: "inherit",
                },
                h2: {
                    color: "var(--tw-prose-headings)",
                    fontWeight: "700",
                },
                "h2 strong": {
                    fontWeight: "800",
                    color: "inherit",
                },
                h3: {
                    color: "var(--tw-prose-headings)",
                    fontWeight: "600",
                },
                "h3 strong": {
                    fontWeight: "700",
                    color: "inherit",
                },
                h4: {
                    color: "var(--tw-prose-headings)",
                    fontWeight: "600",
                },
                "h4 strong": {
                    fontWeight: "700",
                    color: "inherit",
                },

                img: {
                    borderRadius: theme("borderRadius").xl,
                    width: "100%",
                    objectFit: "cover",
                },
                "figure > *": {},

                figcaption: {
                    color: "var(--tw-prose-captions)",
                },
                cite: {
                    fontStyle: "normal",
                },

                code: {
                    color: "var(--tw-prose-code)",
                    fontWeight: "600",
                },
                "code::before": {
                    content: '"`"',
                },
                "code::after": {
                    content: '"`"',
                },
                "a code": {
                    color: "inherit",
                },
                "h1 code": {
                    color: "inherit",
                },
                "h2 code": {
                    color: "inherit",
                },
                "h3 code": {
                    color: "inherit",
                },
                "h4 code": {
                    color: "inherit",
                },
                "blockquote code": {
                    color: "inherit",
                },
                "thead th code": {
                    color: "inherit",
                },
                pre: {
                    color: "var(--tw-prose-pre-code)",
                    backgroundColor: "var(--tw-prose-pre-bg)",
                    overflowX: "auto",
                    fontWeight: "400",
                },
                "pre code": {
                    backgroundColor: "transparent",
                    borderWidth: "0",
                    borderRadius: "0",
                    padding: "0",
                    fontWeight: "inherit",
                    color: "inherit",
                    fontSize: "inherit",
                    fontFamily: "inherit",
                    lineHeight: "inherit",
                },
                "pre code::before": {
                    content: "none",
                },
                "pre code::after": {
                    content: "none",
                },
                table: {
                    width: "100%",
                    tableLayout: "auto",
                    textAlign: "left",
                    marginTop: em(32, 16),
                    marginBottom: em(32, 16),
                },
                thead: {
                    borderBottomWidth: "1px",
                    borderBottomColor: "var(--tw-prose-th-borders)",
                },
                "thead th": {
                    color: "var(--tw-prose-headings)",
                    fontWeight: "600",
                    verticalAlign: "bottom",
                },
                "tbody tr": {
                    borderBottomWidth: "1px",
                    borderBottomColor: "var(--tw-prose-td-borders)",
                },
                "tbody tr:last-child": {
                    borderBottomWidth: "0",
                },
                "tbody td": {
                    verticalAlign: "baseline",
                },
                tfoot: {
                    borderTopWidth: "1px",
                    borderTopColor: "var(--tw-prose-th-borders)",
                },
                "tfoot td": {
                    verticalAlign: "top",
                },
            },
            defaultModifiers.gray.css,
            ...defaultModifiers.base.css,
        ],
    },
    ...defaultModifiers,
};
