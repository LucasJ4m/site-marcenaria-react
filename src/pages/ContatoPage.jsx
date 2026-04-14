function ContatoPage() {
  return (
    // Adicionamos o id="contato" para o CSS antigo te encontrar
    <section id="contato" className="contato">
      <div className="contato-container">
        <h2>Solicite seu Orçamento</h2>
        <p>Fale conosco via WhatsApp ou E-mail.</p>
        
        {/* Aqui você deve colocar os botões ou ícones que tinha antes */}
        <div className="botoes-contato">
          <a href="https://wa.me/31920092519" className="btn-whatsapp-grande" target="_blank" rel="noopener noreferrer">
            Conversar no WhatsApp
          </a>

          <a href="mailto:contato@gomesmarcenaria.com.br"
          className="btn-email"
          >
            Enviar E-mail
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContatoPage;