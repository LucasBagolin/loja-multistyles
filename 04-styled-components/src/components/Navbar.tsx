import React from "react";
import styled from "styled-components";

interface NavbarProps {
  cartCount: number;
  currentTheme: "light" | "dark";
  onToggleTheme?: () => void;
}

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  background: ${({ theme }) => theme.colors.bg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadow.card};
`;

const SkipLink = styled.a`
  position: absolute;
  left: -9999px;
  top: auto;

  &:focus {
    left: ${({ theme }) => theme.space[4]};
    top: ${({ theme }) => theme.space[4]};
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accentFg};
    padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[3]};
    border-radius: ${({ theme }) => theme.radius.sm};
  }
`;

const NavInner = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[4]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space[4]};
`;

const Logo = styled.a`
  color: ${({ theme }) => theme.colors.fg};
  text-decoration: none;
  font-size: 18px;
  font-weight: 700;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[3]};
`;

const ThemeToggle = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.xs};
  padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[3]};
  cursor: pointer;
  transition:
    transform ${({ theme }) => theme.transitionFast} ease,
    opacity   ${({ theme }) => theme.transitionFast} ease,
    background ${({ theme }) => theme.transitionBase} ease,
    color      ${({ theme }) => theme.transitionBase} ease,
    border-color ${({ theme }) => theme.transitionBase} ease;

  &:hover { transform: translateY(-1px); }
  &:active { transform: translateY(0); }
`;

const CartLink = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.fg};
`;

const CartBadge = styled.span`
  position: absolute;
  top: -10px;
  right: -12px;
  min-width: 22px;
  height: 22px;
  padding: 0 6px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.accentFg};
  font-size: 12px;
  font-weight: 600;

  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onToggleTheme,
  currentTheme,
}) => {
  return (
    <Header role="banner">
      {/* Skip to content */}
      <SkipLink href="#conteudo">Pular para o conteúdo</SkipLink>

      <NavInner aria-label="Principal">
        <Logo href="/" aria-label="Página inicial">
          MultiStyles
        </Logo>

        <Actions>
          <ThemeToggle
            type="button"
            onClick={onToggleTheme}
            aria-pressed={currentTheme === "dark"}
            aria-label={
              currentTheme === "dark"
                ? "Alternar para tema claro"
                : "Alternar para tema escuro"
            }
          >
            {currentTheme === "dark" ? "🌙" : "☀️"}
          </ThemeToggle>

          <CartLink
            href="#carrinho"
            aria-label={`Abrir carrinho. Itens: ${cartCount}`}
          >
            🛒
            <CartBadge role="status" aria-live="polite">
              {cartCount}
            </CartBadge>
          </CartLink>
        </Actions>
      </NavInner>
    </Header>
  );
};
