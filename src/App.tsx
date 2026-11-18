import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { SobreMi } from "./pages/SobreMi";
import { Contacto } from "./pages/Contacto";
import { ProveedorPortafolio } from "./context/PortafolioContext";

function App() {
  return (
    <ProveedorPortafolio>
      <BrowserRouter>
        <Navbar />

        <main id="contenido-principal">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
            <Route path="/contacto" element={<Contacto />} />

            <Route
              path="*"
              element={
                <section
                  style={{
                    padding: "4rem 2rem",
                    textAlign: "center",
                  }}
                >
                  <h1>404 — Página no encontrada</h1>
                  <p>La página que buscas no existe.</p>
                </section>
              }
            />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </ProveedorPortafolio>
  );
}

export default App;
