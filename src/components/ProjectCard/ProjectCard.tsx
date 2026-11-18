import type { Proyecto } from "../../types/Proyecto";
import "./ProjectCard.module.css";

interface PropiedadesTarjeta {
  proyecto: Proyecto;
  numero: number;
}

export function ProjectCard({ proyecto, numero }: PropiedadesTarjeta) {
  return (
    <article className="tarjeta-proyecto">
      <div className="tarjeta-proyecto__imagen">
        <img
          src={proyecto.imagen}
          alt={`Vista previa del proyecto ${proyecto.titulo}`}
          loading="lazy"
        />
      </div>

      <div className="tarjeta-proyecto__contenido">
        <p className="tarjeta-proyecto__numero">
          {String(numero).padStart(2, "0")}
        </p>

        <span className="tarjeta-proyecto__categoria">
          {proyecto.categoria}
        </span>

        <h3 className="tarjeta-proyecto__titulo">{proyecto.titulo}</h3>

        <p className="tarjeta-proyecto__descripcion">{proyecto.descripcion}</p>

        <ul
          className="tarjeta-proyecto__tecnologias"
          aria-label="Tecnologías utilizadas"
        >
          {proyecto.tecnologias.map((tecnologia) => (
            <li className="tarjeta-proyecto__tecnologia" key={tecnologia}>
              {tecnologia}
            </li>
          ))}
        </ul>

        {proyecto.repositorio && (
          <a
            className="tarjeta-proyecto__enlace"
            href={proyecto.repositorio}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver repositorio
          </a>
        )}
      </div>
    </article>
  );
}
