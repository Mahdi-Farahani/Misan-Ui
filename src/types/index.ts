import { ComponentPropsWithRef, ReactNode } from "react";

export interface IInputProps extends ComponentPropsWithRef<'input'> {
    error?: boolean;
    helperText?: string;
    label?: string;
    icon?: ReactNode;
    labelClassName?: string;
    isCurrency?:boolean
  }
 export interface ButtonProps {
    children: ReactNode;
    className?: string;
  }