import { cx } from "@/components/utils";
import { BodyProps, Body as EmailBody } from "@react-email/components";

export const Body = (props: BodyProps) => {
    return (
        <EmailBody {...props} className={cx("m-0 bg-secondary p-0 font-body", props.className)}>
            {props.children}
        </EmailBody>
    );
};
