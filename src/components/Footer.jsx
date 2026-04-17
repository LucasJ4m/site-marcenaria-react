import { MessageCircle } from 'lucide-react'; // Importa o ícone de conversa
function Footer() {
  return (
    <footer className="rodape">
           <div className="rodape-container">
        <div className="rodape-col">
            <h3>Contato</h3>
            <p>
          <MessageCircle size={20} color="#25D366" /> {/* Ícone do Zap com a cor oficial */}
          (31) 92009-2519
          
        </p>
            <p>📧 comercial@twrplanejados.com.br</p>
        </div>

        <div className="rodape-col">
            <h3>Endereço</h3>
            <p>Belo Horizonte - MG</p>
            <p>Rua Gilberto Freire, 157 - Bairro Bom Sucesso</p>
            
        </div>

        <div className="rodape-col">
            <h3>Siga-nos</h3>
            <a href="https://www.instagram.com/wogs_moveispersonalizados?igsh=aGthcmVuNzh4c21r" target="_blank" className="link-social">Instagram</a>
        </div>
    </div>
    <div className="rodape-direitos">
        <p>&copy; {new Date().getFullYear()} WOG'S Marcenaria - Todos os direitos reservados.</p>
    </div>
</footer>
  );
}

export default Footer;