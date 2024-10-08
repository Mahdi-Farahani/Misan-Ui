import React, { ComponentPropsWithRef, ForwardedRef, ReactNode } from 'react';
import { cn } from "../utils/index";

interface IInputProps extends ComponentPropsWithRef<'input'> {
  error?: boolean;
  helperText?: string;
  label?: string;
  icon?: ReactNode;
  labelClassName?: string;
}

const Input = (
  {
    error,
    helperText,
    label,
    disabled,
    name,
    icon,
    className,
    labelClassName,
    dir = 'ltr',
    ...rest
  }: IInputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label
          className={`mb-0 text-right text-sm text-black ${labelClassName}`}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <div className="relative flex items-center justify-start">
        {icon && (
          <div className="absolute left-1.5 top-1/2 max-w-7 -translate-y-1/2 overflow-hidden">
            {icon}
          </div>
        )}
        <input
          {...rest}
          className={cn(
            'px-2 py-1 border border-green-800',
            {
              'pl-8': icon,
              'border-danger': error,
              'bg-lightGray': disabled,
              'placeholder:text-right': dir === 'rtl',
              'placeholder:text-left': dir === 'ltr',
              'text-left': dir === 'ltr',
            },
            className
          )}
          ref={ref}
        />
      </div>
      {helperText && (
        <span className={cn('text-gray-50', { 'text-danger': error })}>
          {helperText}
        </span>
      )}
    </div>
  );
};
export const TextInput = React.forwardRef<HTMLInputElement, IInputProps>(Input);
