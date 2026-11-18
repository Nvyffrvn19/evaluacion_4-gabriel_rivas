import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.piePagina}>
      <p className={styles.derechos}>© 2026 Gabriel Rivas</p>

      <Link
        className={styles.enlace}
        to="/"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        Volver arriba ↑
      </Link>
    </footer>
  );
}
