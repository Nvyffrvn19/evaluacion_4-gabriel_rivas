import { Link } from "react-router-dom";
import { RepositoriosGitHub } from "../components/RepositoriosGitHub/RepositoriosGitHub";
import portada from "../assets/img/portada.png";
import "./Home.module.css";

export function Home() {
  return (
    <>
      <section className="portada" aria-labelledby="titulo-portada">
        <div className="portada__contenido">
          <p className="portada__etiqueta">Portfolio de Gabriel Rivas</p>

          <h1 className="portada__titulo" id="titulo-portada">
            Clean Fit,
            <br />
            Clean Code.
          </h1>

          <p className="portada__descripcion">
            Estudiante de Ingeniería Civil en Informática, actualmente cursando
            primer año en la Universidad Católica de Temuco.
          </p>

          <div className="portada__acciones">
            <Link className="portada__boton" to="/proyectos">
              Ver proyectos
            </Link>

            <Link className="portada__boton" to="/contacto">
              Contacto
            </Link>
          </div>
        </div>

        <figure className="portada__imagen">
          <img src={portada} alt="Retrato de Marca Personal de Gabriel Rivas" />
        </figure>
      </section>

      <RepositoriosGitHub />
    </>
  );
}
