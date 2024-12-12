import { cx } from '@/components/utils';
import { ElementRef, forwardRef, ReactNode } from 'react';
import {
  Text as AriaText,
  TextProps as AriaTextProps,
} from 'react-aria-components';

interface HintTextProps extends AriaTextProps {
  children: ReactNode;
  isInvalid?: boolean;
}

const HintText = forwardRef<ElementRef<typeof AriaText>, HintTextProps>(
  ({ isInvalid, ...props }, ref) => {
    return (
      <AriaText
        ref={ref}
        {...props}
        slot={isInvalid ? 'errorMessage' : 'description'}
        className={cx(
          'text-tertiary tt-sm',

          // Invalid state styles
          isInvalid && 'text-error-primary',
          'group-invalid:text-error-primary',

          props.className
        )}
      />
    );
  }
);

HintText.displayName = 'HintText';

export default HintText;
