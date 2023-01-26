import './style/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import APropos from './pages/APropos';
import Logement from './pages/Logement';
import Erreur from './pages/Erreur';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="/Logement" element={<Logement />} />
        <Route path="/*" element={<Erreur />} />
      </Routes>
    </div>
  );
}

export default App;
