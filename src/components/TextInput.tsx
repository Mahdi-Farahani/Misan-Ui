import React from "react";
import { cn } from "../utils/index";
import { IInputProps } from "@/types";
import { formatNumber } from "@/utils/addComma";

const TextInput = ({
  error,
  helperText,
  label,
  disabled,
  name,
  icon,
  isCurrency,
  className,
  labelClassName,
  dir = "ltr",
  ref,
  ...rest
}: IInputProps) => {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className={`${labelClassName}`} htmlFor={name}>
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
          onChange={(e) =>
            isCurrency ? formatNumber(e.target.value) : e.target.value
          }
          className={cn(
            "px-2 py-1 border border-gray-300",
            {
              "pl-8": icon,
              "border-danger": error,
              "bg-lightGray": disabled,
              "placeholder:text-right": dir === "rtl",
              "placeholder:text-left": dir === "ltr",
              "text-left": dir === "ltr",
            },
            className
          )}
          ref={ref}
          {...rest}
        />
      </div>
      {helperText && (
        <span className={cn("text-gray-50", { "text-danger": error })}>
          {helperText}
        </span>
      )}
    </div>
  );
};
export default TextInput;
