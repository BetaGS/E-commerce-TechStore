import { useState } from 'react';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';
import { Link } from 'react-router-dom'
import './Navbar.css';

function Navbar({ itensNoCarrinho = 0 }) {
  const [termoBusca, setTermoBusca] = useState('');

  const handleBusca = (e) => {
    setTermoBusca(e.target.value);
    // Aqui você futuramente filtrará os produtos
    console.log('Buscando por:', e.target.value);
  };

  return (
    <nav className="navbar">
      {/* 1. Logo */}
      <div className="logo">
        <Link to="/">
          <h1>TechStore</h1>
        </Link>
      </div>

      {/* 2. Links (Escondidos em mobile futuramente) */}
      <ul className="nav-links">
        <li>
          <Link to="/">
          <a>Home</a>
          </Link>
        </li>
        <li>
          <Link to="/sobre">
          <a>Sobre</a>
          </Link>
        </li>
      <li>
          <Link to="/contato">
          <a>Contato</a>
          </Link>
        </li>
      </ul>
      

      {/* 3. Ações */}
      <div className="nav-actions">
        {/* Barra de Busca */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={termoBusca}
            onChange={handleBusca}
          />
        </div>

        {/* Ícone de Usuário */}
        <button className="icon-btn" title="Minha Conta">
          <User size={24} />
        </button>

        {/* Ícone de Carrinho com Badge */}
        <Link to="/carrinho">
          <button className="icon-btn" title="Carrinho">
            <ShoppingCart size={24} />
            {itensNoCarrinho > 0 && (
              <span className="cart-badge">{itensNoCarrinho}</span>
            )}
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
