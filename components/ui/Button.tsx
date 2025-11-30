import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
      primary: "bg-[#C9A227] text-[#0A1628] hover:bg-[#E0B830] shadow-lg hover:shadow-xl",
      secondary: "bg-[#2C4A6E] text-white hover:bg-[#1E3A5F] shadow-lg hover:shadow-xl",
      ghost: "bg-white/10 text-white hover:bg-white/20 border border-white/30 backdrop-blur-sm"
    };
    
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg"
    };
    
    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
