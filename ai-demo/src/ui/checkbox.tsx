import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import styles from "./checkbox.module.css";

interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error = false, ...props }, ref) => {
    return (
      <div className={styles.container}>
        <input
          type='checkbox'
          className={cn(styles.checkbox, error ? styles.error : "", className)}
          ref={ref}
          {...props}
        />
        {label && (
          <label
            htmlFor={props.id}
            className={cn(styles.label, props.disabled && styles.disabled)}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
export type { CheckboxProps };
