import { TailwindConfig, TailwindProps } from "@react-email/components";
import { Tailwind as EmailTailwind } from "@react-email/tailwind";
import defaultTheme from "../theme/default";
import textStyles from "@/plugins/textStyles";

export const Tailwind = (props: TailwindProps) => {
    return (
        <EmailTailwind
            {...props}
            config={
                {
                    theme: {
                        extend: {
                            ...defaultTheme,
                        },
                    },
                    plugins: [textStyles],
                } as TailwindConfig
            }
        />
    );
};
