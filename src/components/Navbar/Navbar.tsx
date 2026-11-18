import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export function Navbar() {
  const obtenerClaseEnlace = ({ isActive }: { isActive: boolean }): string =>
    isActive ? `${styles.enlace} ${styles.enlaceActivo}` : styles.enlace;

  return (
    <header className={styles.navegacion}>
      <NavLink className={styles.marca} to="/">
        Gabriel Rivas
      </NavLink>

      <nav className={styles.menu} aria-label="Navegación principal">
        <ul className={styles.lista}>
          <li>
            <NavLink className={obtenerClaseEnlace} to="/" end>
              Inicio
            </NavLink>
          </li>

          <li>
            <NavLink className={obtenerClaseEnlace} to="/proyectos">
              Proyectos
            </NavLink>
          </li>

          <li>
            <NavLink className={obtenerClaseEnlace} to="/sobre-mi">
              Sobre mí
            </NavLink>
          </li>

          <li>
            <NavLink className={obtenerClaseEnlace} to="/contacto">
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
