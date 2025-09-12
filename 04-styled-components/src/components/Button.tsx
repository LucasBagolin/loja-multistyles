import React from "react";
import styled, { css } from "styled-components";

type Variant = "solid" | "outline" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  loading?: boolean;
}

const StyledButton = styled.button<{ $variant: Variant }>`
  font: inherit;
  border-radius: ${({ theme }) => theme.radius.sm};
  padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[4]};
  border: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.fg};
  transition:
    transform ${({ theme }) => theme.transitionFast} ease,
    opacity   ${({ theme }) => theme.transitionFast} ease,
    background ${({ theme }) => theme.transitionBase} ease,
    color      ${({ theme }) => theme.transitionBase} ease,
    border-color ${({ theme }) => theme.transitionBase} ease;

  &:hover { transform: translateY(-1px); }
  &:active { transform: translateY(0); }

  &[disabled],
  &[aria-disabled="true"] {
    opacity: .5;
    cursor: not-allowed;
    transform: none;
  }

  /* Variantes */
  ${({ $variant, theme }) => {
    switch ($variant) {
      case "outline":
        return css`
          background: transparent;
          color: ${theme.colors.fg};
          border-color: ${theme.colors.fg};
        `;
      case "ghost":
        return css`
          background: transparent;
          color: ${theme.colors.fg};
          border-color: transparent;
        `;
      default: /* solid */
        return css`
          background: ${theme.colors.accent};
          color: ${theme.colors.accentFg};
          border-color: ${theme.colors.accent};
          &:hover { filter: brightness(1.05); }
        `;
    }
  }}
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "solid",
  disabled,
  loading,
  ...props
}) => {
  const isDisabled = disabled || loading;

  return (
    <StyledButton
      type="button"
      aria-busy={loading || undefined}
      aria-disabled={isDisabled || undefined}
      disabled={isDisabled}
      $variant={variant}
      {...props}
    >
      <span aria-hidden={loading ? "true" : "false"}>{children}</span>
      {loading && <span className="visually-hidden">Carregando…</span>}
    </StyledButton>
  );
};
