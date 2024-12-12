import {
  cloneElement,
  ComponentPropsWithoutRef,
  createContext,
  isValidElement,
  ReactNode,
  useContext,
  useId,
} from 'react';
import {
  Control,
  FieldPath,
  FieldValues,
  FormProvider,
  UseControllerReturn,
  UseFormReturn,
  useController,
  useFormContext,
} from 'react-hook-form';
import { Form as AriaForm } from 'react-aria-components';

interface FormProps<TFieldValues extends FieldValues = FieldValues>
  extends ComponentPropsWithoutRef<typeof AriaForm> {
  form: UseFormReturn<TFieldValues>;
  children: ReactNode;
}

interface FormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
  name: TName;
  control: Control<TFieldValues>;
  children:
    | ReactNode
    | ((control: UseControllerReturn<TFieldValues, TName>) => ReactNode);
}

interface FormFieldContextValues<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
  id: string;
  name: TName;
  control?: UseControllerReturn<TFieldValues, TName>;
}

const FormFieldContext = createContext<FormFieldContextValues>(
  {} as FormFieldContextValues
);

export const useFormFieldContext = () => {
  const context = useContext(FormFieldContext);
  const { getFieldState, formState } = useFormContext();
  const fieldState = getFieldState(context.name, formState);

  if (!context) {
    throw new Error(
      "The 'useFormContext' hook must be used within a '<FormField />'"
    );
  }

  return { ...context, ...fieldState };
};

export const HookForm = <TFieldValues extends FieldValues = FieldValues>({
  form,
  ...props
}: FormProps<TFieldValues>) => {
  return (
    <FormProvider {...form}>
      <AriaForm {...props} />
    </FormProvider>
  );
};

HookForm.displayName = 'HookForm';

export const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  children,
  ...props
}: FormFieldProps<TFieldValues, TName>) => {
  const id = 'form-item-' + useId();
  const control = useController(props);
  const withValidationBehavior = {
    ...control,
    field: {
      ...control.field,
      validationBehavior: 'aria',
    },
  };

  return (
    <FormFieldContext.Provider
      value={{
        id,
        name: props.name,
        control: control as UseControllerReturn<FieldValues, TName>,
      }}>
      {children &&
        (typeof children === 'function'
          ? children(withValidationBehavior)
          : cloneElement(children as React.ReactElement, {
              validationBehavior: 'aria',
            }))}
    </FormFieldContext.Provider>
  );
};

FormField.displayName = 'FormField';
