const projetos = [
  {
    id: 1,
    titulo: "",
    descricao: "",
    imagem: "/assets/painel.webp" // Coloque suas fotos na pasta public
  },
  {
    id: 2,
    titulo: "",
    descricao: "",
    imagem: "/assets/20251003_123837.webp"
  },
  {
    id: 3,
    titulo: "",
    descricao: "",
    imagem: "/assets/20251003_125934.webp"
  },
   {
    id: 4,
    titulo: "",
    descricao: "",
    imagem: "/assets/20251111_160710.webp"
  },
  {
    id: 5,
    titulo: "",
    descricao: "",
    imagem: "/assets/20251210_155459.webp"
  },
  {
    id: 6,
    titulo: "",
    descricao: "",
    imagem: "/assets/20260123_142832.webp"
  },
  {
    id: 7,
    titulo: "",
    descricao: "",
    imagem: "/assets/20260210_161045.webp"
  },
  {
    id: 8,
    titulo: "",
    descricao: "",
    imagem: "/assets/20250513_153139.webp"
  },
  {
    id: 9,
    titulo: "",
    descricao: "",
    imagem: "/assets/20251223_123126.webp"
  },
  {
    id: 10,
    titulo: "",
    descricao: "",
    imagem: "/assets/20250702_171124.webp"
  },
  
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
      {/* NOVO BLOCO ABAIXO: */}
      <div className="portfolio-footer">
        <p>Gostou dos nossos projetos?</p>
        <a 
          href="https://www.instagram.com/wogs_moveispersonalizados?igsh=aGthcmVuNzh4c21r" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-instagram"
        >
          Siga-nos no Instagram para ver mais novidades
        </a>
      </div>

    </section>
  );
}

export default PortfolioPage;