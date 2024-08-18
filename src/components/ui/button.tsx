import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  className?: string;
  children: ReactNode;
}

const ButtonVariants: { primary: string; secondary: string } = {
  primary:
    "text-[14px] tracking-normal font-bold px-[32px] py-[16px] rounded-[40px] text-white bg-primary-green hover:bg-primary-green-hover",
  secondary:
    "text-[14px] tracking-normal font-bold text-primary-green hover:text-white px-[24px] py-[10px] bg-primary-green-light hover:bg-primary-green-hover border border-primary-green rounded-[40px] hover:border-white",
};

const Button = ({ variant, className, children, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "flex justify-center items-center tracking-",
        ButtonVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
