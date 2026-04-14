import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PortfolioPage from './pages/PortfolioPage';
import ContatoPage from './pages/ContatoPage';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* O Routes decide qual página mostrar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contato" element={<ContatoPage />} />
          
          {/* Rota de segurança: se digitar qualquer coisa errada, volta pra Home */}
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;