function Home() {
  return (
    <section id="home" className="hero"> {/* Adicionei o ID 'home' aqui */}
      <div className="hero-content"> {/* Adicione essa DIV que envolve o texto */}
        <h1>Design em Madeira com Precisão Digital</h1>
        <p>Móveis sob medida em Belo Horizonte.</p>
        <a href="https://wa.me/31920092519" className="btn-whatsapp">Solicitar Orçamento</a>
      </div>
    </section>
  );
}
export default Home;