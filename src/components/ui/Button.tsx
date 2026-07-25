import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-canopux-white bg-canopux-white text-canopux-black hover:bg-transparent hover:text-canopux-white",
  secondary:
    "border border-canopux-white/70 bg-transparent text-canopux-white hover:border-canopux-white hover:bg-canopux-white/5",
  ghost: "border border-transparent bg-transparent text-canopux-white hover:opacity-70",
};

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
  onClick?: () => void;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function cx(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function isLinkProps(props: ButtonProps): props is ButtonAsLink {
  return typeof props.href === "string";
}

export function Button(props: ButtonProps) {
  const variant = props.variant ?? "primary";
  const classes = cx(
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-sans text-sm font-semibold tracking-normal normal-case transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-canopux-signal focus-visible:ring-offset-2 focus-visible:ring-offset-canopux-black disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    props.className,
  );

  if (isLinkProps(props)) {
    if (props.external) {
      return (
        <a
          href={props.href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          onClick={props.onClick}
        >
          {props.children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes} onClick={props.onClick}>
        {props.children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      className={classes}
      disabled={props.disabled}
      onClick={props.onClick}
      form={props.form}
      name={props.name}
      value={props.value}
      aria-label={props["aria-label"]}
    >
      {props.children}
    </button>
  );
}
