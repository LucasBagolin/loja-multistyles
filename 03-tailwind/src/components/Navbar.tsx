import React from "react";
import { useTheme } from "../hooks/useTheme";

interface NavbarProps {
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      role="banner"
      className="sticky top-0 z-50 bg-[var(--bg)] border-b border-[var(--border)] shadow-card dark:shadow-cardDark"
    >
      {/* Skip link */}
      <a
        href="#conteudo"
        className="skip-link absolute left-[-9999px] focus:left-4 focus:top-4 bg-[var(--accent)] text-[var(--accent-fg)] px-3 py-2 rounded-md"
      >
        Pular para o conteúdo
      </a>

      <nav
        aria-label="Principal"
        className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between gap-4"
      >
        {/* Logo */}
        <a
          href="/"
          aria-label="Página inicial"
          className="text-[var(--fg)] text-lg font-bold"
        >
          MultiStyles
        </a>

        <div className="flex items-center gap-3">
          {/* Toggle de tema */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-pressed={theme === "dark"}
            aria-label={
              theme === "dark"
                ? "Alternar para tema claro"
                : "Alternar para tema escuro"
            }
            className="border border-[var(--border)] rounded px-3 py-2 transition transform hover:-translate-y-0.5 active:translate-y-0"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>

          {/* Carrinho */}
          <a
            href="#carrinho"
            aria-label={`Abrir carrinho. Itens: ${cartCount}`}
            className="relative inline-flex items-center gap-2 text-[var(--fg)]"
          >
            🛒
            <span
              role="status"
              aria-live="polite"
              className="absolute -top-2 -right-3 min-w-[22px] h-[22px] px-1.5 rounded-full bg-[var(--accent)] text-[var(--accent-fg)] text-xs font-semibold flex items-center justify-center"
            >
              {cartCount}
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
};
