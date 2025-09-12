import React from 'react';

type Variant = 'solid' | 'outline' | 'ghost';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'solid',
  disabled,
  loading,
  ...props
}) => {
  const isDisabled = disabled || loading;

  return (
    <button
      type="button"
      aria-busy={loading || undefined}
      aria-disabled={isDisabled || undefined}
      data-variant={variant}
      disabled={isDisabled}
      {...props}
    >
      <span aria-hidden={loading ? 'true' : 'false'}>
        {children}
      </span>
      {loading && (
        <span className="visually-hidden">Carregando…</span>
      )}
    </button>
  );
};
