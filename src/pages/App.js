import '../style/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home.js';
import APropos from '../components/APropos';
import Logement from '../components/Logement';
import Erreur from '../components/Erreur';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="/Logement" element={<Logement />} />
        <Route path="/Erreur" element={<Erreur />} />
      </Routes>
    </div>
  );
}

export default App;
