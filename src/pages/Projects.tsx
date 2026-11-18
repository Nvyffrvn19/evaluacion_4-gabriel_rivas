import { useState } from "react";
import { ProjectCard } from "../components/ProjectCard/ProjectCard";
import { proyectos } from "../data/proyectos";
import type { CategoriaProyecto } from "../types/Proyecto";
import "./Projects.css";

type FiltroProyecto = "Todos" | CategoriaProyecto;

const categorias: FiltroProyecto[] = ["Todos", "Frontend", "Backend"];

export function Projects() {
  const [filtroActivo, setFiltroActivo] = useState<FiltroProyecto>("Todos");

  const proyectosFiltrados = proyectos.filter((proyecto) => {
    return filtroActivo === "Todos" || proyecto.categoria === filtroActivo;
  });

  return (
    <section className="proyectos" aria-labelledby="titulo-proyectos">
      <header className="proyectos__encabezado">
        <p className="proyectos__etiqueta">Proyectos</p>

        <h1 className="proyectos__titulo" id="titulo-proyectos">
          Proyectos Personales
        </h1>

        <p className="proyectos__descripcion">
          Uno de los pocos proyectos que he desarrollado en mi formación como
          Ingeniero Civil en Informática.
        </p>
      </header>

      <div
        className="proyectos__filtros"
        role="group"
        aria-label="Filtrar proyectos por categoría"
      >
        {categorias.map((categoria) => (
          <button
            key={categoria}
            type="button"
            className={
              filtroActivo === categoria
                ? "proyectos__filtro proyectos__filtro--activo"
                : "proyectos__filtro"
            }
            onClick={() => setFiltroActivo(categoria)}
            aria-pressed={filtroActivo === categoria}
          >
            {categoria}
          </button>
        ))}
      </div>

      <p className="proyectos__contador" aria-live="polite">
        {proyectosFiltrados.length}{" "}
        {proyectosFiltrados.length === 1
          ? "proyecto encontrado"
          : "proyectos encontrados"}
      </p>

      {proyectosFiltrados.length > 0 ? (
        <div className="proyectos__cuadricula">
          {proyectosFiltrados.map((proyecto) => (
            <ProjectCard key={proyecto.id} proyecto={proyecto} />
          ))}
        </div>
      ) : (
        <p className="proyectos__vacio">
          No hay proyectos disponibles en esta categoría.
        </p>
      )}
    </section>
  );
}
