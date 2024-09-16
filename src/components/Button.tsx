import React from "react";
import { cn } from "../utils/index";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
}) => {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded bg-blue-500 text-white",
        className
      )}>
      {children}
    </button>
  );
};

export default Button;
