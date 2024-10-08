import React from "react";
import { cn } from "../utils/index";
import { ButtonProps } from "@/types";

const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={cn("px-4 py-2 rounded bg-blue-500 text-white", className)}
    >
      {children}
    </button>
  );
};

export default Button;
