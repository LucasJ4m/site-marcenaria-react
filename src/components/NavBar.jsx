import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      {/* ADICIONE ESTE BLOCO DO LOGO AQUI */}
      <div className="logo-container">
        <Link to="/">
          <img src="/logo.png" alt="Logo Marcenaria Gomes" className="logo-img" />
        </Link>
      </div>
      
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/portfolio">Portfólio</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;