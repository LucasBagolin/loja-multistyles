import React from 'react';

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
    <header role="banner" className="navbar">
      {/* Skip to content (A11y) */}
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <nav aria-label="Principal" className="nav-inner">
        {/* Logo como link para home */}
        <a href="/" aria-label="Página inicial" className="logo">
          <strong>MultiStyles</strong>
        </a>

        {/* Toggle de tema — lógica de persistência virá no Passo 3 */}
        <div className="nav-actions">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-pressed={currentTheme === 'dark'}
            aria-label={currentTheme === 'dark' ? 'Alternar para tema claro' : 'Alternar para tema escuro'}
            className="theme-toggle"
          >
            {currentTheme === 'dark' ? '🌙' : '☀️'}
          </button>

          {/* Badge do carrinho */}
          <a href="#carrinho" aria-label={`Abrir carrinho. Itens: ${cartCount}`} className="cart">
            🛒
            <span role="status" aria-live="polite" className="cart-badge">
              {cartCount}
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
};
