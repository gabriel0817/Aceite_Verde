import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <Router>
      {/* Navbar fixed */}
      <Navbar />

      {/* Contenido con padding-top igual a la altura del navbar */}
      <div className="pt-14 min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
      <div>
      {/* Footer */}
      <Footer />
      </div>
    </Router>
  );
}

export default App;
