import React from 'react';
import styles from './Navbar.module.css';

interface NavbarProps {
  cartCount: number;
  onToggleTheme?: () => void;
  currentTheme?: 'light' | 'dark';
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onToggleTheme,
  currentTheme = 'light',
}) => {
  return (
    <header role="banner" className={styles.navbar}>
      {/* Skip link para acessibilidade */}
      <a className={styles.skipLink} href="#conteudo">Pular para o conteúdo</a>

      <nav aria-label="Principal" className={styles.navInner}>
        <a href="/" aria-label="Página inicial" className={styles.logo}>
          <strong>MultiStyles</strong>
        </a>

        <div className={styles.navActions}>
          {/* Toggle de tema */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-pressed={currentTheme === 'dark'}
            aria-label={currentTheme === 'dark' ? 'Alternar para tema claro' : 'Alternar para tema escuro'}
            className={styles.themeToggle}
          >
            {currentTheme === 'dark' ? '🌙' : '☀️'}
          </button>

          {/* Carrinho */}
          <a
            href="#carrinho"
            aria-label={`Abrir carrinho. Itens: ${cartCount}`}
            className={styles.cart}
          >
            🛒
            <span
              role="status"
              aria-live="polite"
              className={styles.cartBadge}
            >
              {cartCount}
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
};
