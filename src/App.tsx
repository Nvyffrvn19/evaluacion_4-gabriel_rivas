import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main id="contenido-principal">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/proyectos" element={<Projects />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
