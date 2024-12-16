import plugin from 'tailwindcss/plugin';

type TextStyle = Record<string, string | number>;

type TextStyles =
  | Record<string, TextStyle>
  | ((options: { theme: Record<string, any> }) => Record<string, TextStyle>);

export default plugin(function ({ addUtilities, theme }) {
  const textStyles = theme<TextStyles>('textStyles', {});

  const formattedTextStyles =
    typeof textStyles === 'function' ? textStyles({ theme }) : textStyles;

  const utilities = Object.keys(formattedTextStyles).reduce((acc, key) => {
    const style = formattedTextStyles[key];

    // @ts-expect-error
    acc[`.${key}`] = style;

    return acc;
  }, {});

  addUtilities(utilities);
});
