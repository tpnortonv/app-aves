import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Birds from './pages/Birds';
import BirdDetail from './pages/BirdDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/birds" element={<Birds />} />
        <Route path="/bird/:uid" element={<BirdDetail />} /> {/* Ruta para ver los detalles de una ave */}
      </Routes>
    </Router>
  );
}

export default App;

