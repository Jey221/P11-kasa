import './style/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import APropos from './pages/APropos';
import Logement from './pages/Logement';
import Erreur from './pages/Erreur';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="/Logement/:idLogement" element={<Logement />} />
        <Route path="/*" element={<Erreur />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
