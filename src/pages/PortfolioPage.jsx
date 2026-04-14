const projetos = [
  {
    id: 1,
    titulo: "Cozinha Planejada Moderna",
    descricao: "Acabamento em MDF amadeirado e puxadores em perfil alumínio.",
    imagem: "/projeto1.jpg" // Coloque suas fotos na pasta public
  },
  {
    id: 2,
    titulo: "Painel de TV Ripado",
    descricao: "Sala de estar com painel em laca e iluminação em LED.",
    imagem: "/projeto2.jpg"
  },
  {
    id: 3,
    titulo: "Guarda-Roupa Embutido",
    descricao: "Divisões internas personalizadas para máximo aproveitamento.",
    imagem: "/projeto3.jpg"
  }
];

function PortfolioPage() {
  return (
    <section id="portfolio" className="portfolio-page">
      <div className="portfolio-header">
        <h1>Nosso Portfólio</h1>
        <p>Transformando madeira em ambientes funcionais e elegantes.</p>
      </div>

      <div className="grid-projetos">
        {projetos.map((projeto) => (
          <div key={projeto.id} className="card-projeto">
            <img src={projeto.imagem} alt={projeto.titulo} />
            <div className="card-info">
              <h3>{projeto.titulo}</h3>
              <p>{projeto.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PortfolioPage;