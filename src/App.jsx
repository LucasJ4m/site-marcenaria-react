import './App.css'
import Navbar from './components/NavBar' // Importação correta aqui
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
function App() {
  return (
    <div className="App">
      {/* Aqui você chama o componente como uma tag HTML personalizada */}
      <Navbar />

      
     
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Design em Madeira com Precisão Digital</h1>
          <p>Móveis sob medida em Belo Horizonte.</p>
          <a href="https://wa.me/31920092519" className="btn-whatsapp">Solicitar Orçamento</a>
        </div>
      </section>
      
      <Portfolio />   

      
      {/* Orçamento e Rodapé */}
      <section id="contato" className="contato">
        <div className="contato-container">
            <h2>Solicite seu Orçamento</h2>
            <div className="botoes-contato">
                <a href="https://wa.me/31920092519" className="btn-whatsapp-grande" target="_blank">
                   Falar pelo WhatsApp
                </a>
            </div>
        </div>
      </section>

      <Footer />

      {/* No React, depois vamos separar isso em componentes menores! */}
    </div>
  )
}

export default App
