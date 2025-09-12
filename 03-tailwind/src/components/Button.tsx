import React from "react";

type Variant = "solid" | "outline" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "solid",
  disabled,
  loading,
  className,
  ...props
}) => {
  const isDisabled = disabled || loading;

  const base =
    "font-inherit rounded-md px-4 py-3 border transition " +
    "duration-200 ease-in-out transform " +
    "focus-visible:outline-2 focus-visible:outline-offset-2 " +
    "disabled:opacity-50 disabled:cursor-not-allowed";

  const solid =
    "bg-[var(--accent)] text-[var(--accent-fg)] border-[var(--accent)] hover:brightness-105";
  const outline =
    "bg-transparent text-[var(--fg)] border-[var(--fg)]";
  const ghost =
    "bg-transparent text-[var(--fg)] border-transparent";

  const variantClass =
    variant === "outline" ? outline : variant === "ghost" ? ghost : solid;

  const classes = [base, variantClass, className].filter(Boolean).join(" ");

  return (
    <button
      type="button"
      aria-busy={loading || undefined}
      aria-disabled={isDisabled || undefined}
      disabled={isDisabled}
      className={classes}
      {...props}
    >
      <span aria-hidden={loading ? "true" : "false"}>{children}</span>
      {loading && <span className="visually-hidden">Carregando…</span>}
    </button>
  );
};
