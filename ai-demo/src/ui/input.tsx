import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import styles from "./input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error = false, leftIcon, rightIcon, ...props }, ref) => {
    return (
      <div className={styles.wrapper}>
        {leftIcon && <div className={styles.leftIcon}>{leftIcon}</div>}
        <input
          type={type}
          className={cn(
            styles.input,
            leftIcon ? styles.withLeftIcon : "",
            rightIcon ? styles.withRightIcon : "",
            error ? styles.error : "",
            className
          )}
          ref={ref}
          {...props}
        />
        {rightIcon && <div className={styles.rightIcon}>{rightIcon}</div>}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
export type { InputProps };
