import { cx } from '@/components/utils';
import { ElementRef, forwardRef, ReactNode } from 'react';
import { HelpCircle } from '@a-peak-works/untitledui-icons';
import { Tooltip, TooltipTrigger } from '@/components/tooltips/tooltips';
import {
  Label as AriaLabel,
  LabelProps as AriaLabelProps,
} from 'react-aria-components';

interface LabelProps extends AriaLabelProps {
  children: ReactNode;
  isRequired?: boolean;
  tooltip?: string;
  tooltipDescription?: string;
}

const Label = forwardRef<ElementRef<typeof AriaLabel>, LabelProps>(
  ({ isRequired, tooltip, tooltipDescription, ...props }, ref) => {
    return (
      <AriaLabel
        // Used for conditionally hiding/showing the label element via CSS:
        // <Input label="Visible only on mobile" className="lg:[&_[data-label]]:hidden" />
        // or
        // <Input label="Visible only on mobile" className="lg:label:hidden" />
        data-label='true'
        ref={ref}
        {...props}
        className={cx(
          'flex w-full cursor-default items-center gap-0.5 text-secondary tt-sm-md',
          props.className
        )}>
        {props.children}

        <span
          className={cx(
            'hidden text-brand-tertiary',
            isRequired && 'block',
            typeof isRequired === 'undefined' && 'group-required:block'
          )}>
          *
        </span>

        {tooltip && (
          <Tooltip
            title={tooltip}
            description={tooltipDescription}
            placement='top'>
            <TooltipTrigger>
              <HelpCircle className='size-4 text-fg-quinary hover:text-fg-quinary_hover' />
            </TooltipTrigger>
          </Tooltip>
        )}
      </AriaLabel>
    );
  }
);

Label.displayName = 'Label';

export default Label;
