import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { Form as AriaForm } from "react-aria-components";

export const Form = forwardRef<ElementRef<typeof AriaForm>, ComponentPropsWithoutRef<typeof AriaForm>>((props, ref) => {
    return <AriaForm ref={ref} {...props} />;
});

Form.displayName = "Form";
