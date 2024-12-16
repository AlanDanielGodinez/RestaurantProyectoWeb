// src/App.js
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Recetas from './pages/Recetas';
import Menu from './pages/Menu';
import Reserva from './pages/Reserva';  // Importar el componente de reserva

function App() {
    return (
        <Router>
            <Navbar />
            <div className='container main'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Recetas" element={<Recetas />} />
                    <Route path="/Menu" element={<Menu />} />
                    <Route path="/reserva" element={<Reserva />} />  {/* Ruta para la reserva */}
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
