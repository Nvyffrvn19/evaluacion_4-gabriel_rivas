import { Link } from "react-router-dom";
import "./Footer.module.css";

export function Footer() {
  return (
    <footer className="pie-pagina">
      <p className="pie-pagina__derechos">
        &copy; {new Date().getFullYear()} Gabriel Rivas. Todos los derechos
        reservados.
      </p>

      <Link className="pie-pagina__enlace" to={"/"}>
        Volver al inicio
      </Link>
    </footer>
  );
}
