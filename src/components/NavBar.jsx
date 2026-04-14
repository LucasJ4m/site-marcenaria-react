// src/components/Navbar.jsx
function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="Logo da marcenaria" />
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#portfolio">Portfólio</a></li>
          <li><a href="#contato">Orçamento</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;