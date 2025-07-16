import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import styles from "./button-link.module.css";

interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  external?: boolean;
}

const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      external = false,
      href,
      children,
      ...props
    },
    ref
  ) => {
    const linkProps = external
      ? {
          target: "_blank",
          rel: "noopener noreferrer",
        }
      : {};

    if (external) {
      return (
        <a
          href={href}
          className={cn(styles.link, styles[variant], styles[size], className)}
          ref={ref}
          {...linkProps}
          {...props}
        >
          {children}
          {external && (
            <svg
              className={styles.externalIcon}
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
              />
            </svg>
          )}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={cn(styles.link, styles[variant], styles[size], className)}
        ref={ref}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

ButtonLink.displayName = "ButtonLink";

export { ButtonLink };
export type { ButtonLinkProps };
