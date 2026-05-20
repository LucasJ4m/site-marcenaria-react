const projetos = [
 {
    id: 1,
    titulo: "Painel de TV",
    descricao: "Painel ripado com acabamento premium",
    imagem: "/assets/painel.webp",
    alt: "Painel de TV ripado em marcenaria - WOG'S Marcenaria TWR Planejados"
  },
  {
    id: 2,
    titulo: "Armário de Quarto",
    descricao: "Guarda-roupa planejado com portas de correr",
    imagem: "/assets/20251003_123837.webp",
    alt: "Armário de quarto sob medida branco - WOG'S Marcenaria"
  },
  {
    id: 3,
    titulo: "Closet Integrado",
    descricao: "Closet sob medida com divisão inteligente",
    imagem: "/assets/20251003_125934.webp",
    alt: "Closet planejado em MDF - TWR Planejados Marcenaria"
  },
  {
    id: 4,
    titulo: "Cozinha Planejada",
    descricao: "Cozinha moderna com armários embutidos",
    imagem: "/assets/20251111_160710.webp",
    alt: "Cozinha sob medida com acabamento naval - WOG'S Marcenaria"
  },
  {
    id: 5,
    titulo: "Gabinete de Banheiro",
    descricao: "Móvel de banheiro resistente à umidade",
    imagem: "/assets/20251210_155459.webp",
    alt: "Gabinete de banheiro planejado - TWR Planejados"
  },
  {
    id: 6,
    titulo: "Escritório Home Office",
    descricao: "Bancada e prateleiras para escritório",
    imagem: "/assets/20260123_142832.webp",
    alt: "Móveis para home office sob medida - WOG'S Marcenaria"
  },
  {
    id: 7,
    titulo: "Painel de Sala",
    descricao: "Painel decorativo em madeira",
    imagem: "/assets/20260210_161045.webp",
    alt: "Painel de madeira para sala de estar - TWR Planejados"
  },
  {
    id: 8,
    titulo: "Área Gourmet",
    descricao: "Armários para churrasqueira e lazer",
    imagem: "/assets/20250513_153139.webp",
    alt: "Marcenaria para área gourmet planejada - WOG'S Marcenaria"
  },
  {
    id: 9,
    titulo: "Móvel Comercial",
    descricao: "Balcão para recepção e atendimento",
    imagem: "/assets/20251223_123126.webp",
    alt: "Balcão de atendimento sob medida - TWR Planejados"
  },
  {
    id: 10,
    titulo: "Estante de Livros",
    descricao: "Estante planejada com nichos",
    imagem: "/assets/20250702_171124.webp",
    alt: "Estante de livros planejada em MDF - WOG'S Marcenaria"
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
            <img src={projeto.imagem} alt={projeto.alt || "Projeto de Marcenaria Planejada"} />
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