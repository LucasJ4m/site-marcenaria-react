function Footer() {
  return (
    <footer className="rodape">
           <div className="rodape-container">
        <div className="rodape-col">
            <h3>Contato</h3>
            <p>📞 (31) 92009-2519</p>
            <p>📧 contato@gomesmarcenaria.com.br</p>
        </div>

        <div className="rodape-col">
            <h3>Endereço</h3>
            <p>Belo Horizonte - MG</p>
            <p>Rua Gilberto Freire, 157 - Bairro Bom Sucesso</p>
            <p>CNPJ: 00.000.000/0001-00</p>
        </div>

        <div className="rodape-col">
            <h3>Siga-nos</h3>
            <a href="https://instagram.com/seuusuario" target="_blank" className="link-social">Instagram</a>
        </div>
    </div>
    <div className="rodape-direitos">
        <p>&copy; {new Date().getFullYear()} WOG'S Marcenaria - Todos os direitos reservados.</p>
    </div>
</footer>
  );
}

export default Footer;