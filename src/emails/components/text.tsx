import { cx } from "@/components/utils";
import { Text as EmailText, TextProps } from "@react-email/components";

export const Text = (props: TextProps) => {
    return (
        <EmailText {...props} className={cx("m-0", props.className)}>
            {props.children}
        </EmailText>
    );
};
