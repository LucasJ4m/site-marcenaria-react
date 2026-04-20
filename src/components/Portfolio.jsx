function Portfolio() {
 
  const meusProjetos = [
    { id: 1, titulo: "Cozinha Planejada", imagem: "", desc: "Acabamento em MDF Naval" },
    { id: 2, titulo: "Painel Ripado", imagem: "/painel.jpg", desc: "Sala de estar com iluminação LED" },
    { id: 3, titulo: "Armário de Quarto", imagem: "/quarto.jpg", desc: "Portas de correr com espelho" },
   
  ];

  return (
    <section id="portfolio" className="portfolio">
      <h2>Nosso Portfólio</h2>
      <div className="grid-projetos">
        {/* 2. O MAP: Ele percorre a lista e cria o HTML para cada item */}
        {meusProjetos.map((projeto) => (
          <div key={projeto.id} className="card-projeto">
            <img src={projeto.imagem} alt={projeto.titulo} />
            <div className="card-info">
              <h3>{projeto.titulo}</h3>
              <p>{projeto.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;