import React from 'react';
import styles from './Button.module.css';

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
  className,
  ...props
}) => {
  const isDisabled = disabled || loading;

  // mapeia a variant para a classe do módulo
  const variantClass =
    variant === 'outline' ? styles.outline :
    variant === 'ghost'   ? styles.ghost   :
    styles.solid;

  const classes = [styles.button, variantClass, className].filter(Boolean).join(' ');

  return (
    <button
      type="button"
      aria-busy={loading || undefined}
      aria-disabled={isDisabled || undefined}
      disabled={isDisabled}
      className={classes}
      {...props}
    >
      <span aria-hidden={loading ? 'true' : 'false'}>
        {children}
      </span>
      {loading && <span className="visually-hidden">Carregando…</span>}
    </button>
  );
};
