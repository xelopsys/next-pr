import { Head as EmailHead, HeadProps } from "@react-email/components";

export const Head = (props: HeadProps) => {
    return (
        <EmailHead {...props}>
            <meta name="color-scheme" content="light" />
            <meta name="supported-color-schemes" content="light" />
            {props.children}
        </EmailHead>
    );
};
