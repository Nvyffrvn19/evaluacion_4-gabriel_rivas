import { NavLink } from "react-router-dom";
import "./NavBar.module.css";

export function Navbar() {
  const obtenerClaseEnlace = ({ isActive }: { isActive: boolean }): string =>
    isActive
      ? "navegacion__enlace navegacion__enlace--activo"
      : "navegacion__enlace";

  return (
    <header className="navegacion">
      <NavLink className="navegacion__marca" to="/">
        Gabriel Rivas
      </NavLink>

      <nav className="navegacion__menu" aria-label="Navegación principal">
        <ul className="navegacion__lista">
          <li className="navegacion__elemento">
            <NavLink className={obtenerClaseEnlace} to="/" end>
              Inicio
            </NavLink>
          </li>

          <li className="navegacion__elemento">
            <NavLink className={obtenerClaseEnlace} to="/proyectos">
              Proyectos
            </NavLink>
          </li>

          <li className="navegacion__elemento">
            <NavLink className={obtenerClaseEnlace} to="/sobre-mi">
              Sobre mí
            </NavLink>
          </li>

          <li className="navegacion__elemento">
            <NavLink className={obtenerClaseEnlace} to="/contacto">
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
