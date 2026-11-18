import { useEffect, useState } from "react";
import { usarPortafolio } from "../../context/PortafolioContext";
import type { RepositorioGitHub } from "../../types/RepositorioGitHub";
import "./RepositoriosGitHub.css";

export function RepositoriosGitHub() {
  const { usuarioGitHub } = usarPortafolio();

  const [repositorios, setRepositorios] = useState<RepositorioGitHub[]>([]);
  const [cargando, setCargando] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controlador = new AbortController();

    async function obtenerRepositorios() {
      try {
        setCargando(true);
        setError(null);

        const respuesta = await fetch(
          `https://api.github.com/users/${encodeURIComponent(usuarioGitHub)}/repos?sort=updated&per_page=6`,
          { signal: controlador.signal },
        );

        if (!respuesta.ok) {
          throw new Error(`Error HTTP ${respuesta.status}`);
        }

        const datos: RepositorioGitHub[] = await respuesta.json();

        if (!controlador.signal.aborted) {
          setRepositorios(datos);
        }
      } catch (errorCapturado: unknown) {
        if (controlador.signal.aborted) {
          return;
        }

        setError(
          errorCapturado instanceof Error
            ? errorCapturado.message
            : "No fue posible obtener los repositorios.",
        );
      } finally {
        if (!controlador.signal.aborted) {
          setCargando(false);
        }
      }
    }

    void obtenerRepositorios();

    return () => {
      controlador.abort();
    };
  }, [usuarioGitHub]);

  return (
    <section
      className="repositorios-github"
      aria-labelledby="titulo-repositorios"
    >
      <p className="repositorios-github__etiqueta">GitHub / API REST</p>

      <h2 className="repositorios-github__titulo" id="titulo-repositorios">
        Repositorios recientes.
      </h2>

      {cargando && (
        <p role="status" aria-live="polite">
          Cargando repositorios...
        </p>
      )}

      {error && (
        <p role="alert">No se pudieron cargar los repositorios: {error}</p>
      )}

      {!cargando && !error && repositorios.length === 0 && (
        <p>No hay repositorios públicos disponibles.</p>
      )}

      {!cargando && !error && repositorios.length > 0 && (
        <div className="repositorios-github__lista">
          {repositorios.map((repositorio) => (
            <article
              key={repositorio.id}
              className="repositorios-github__tarjeta"
            >
              <h3>{repositorio.name}</h3>

              <p>{repositorio.description || "Sin descripción disponible."}</p>

              <div className="repositorios-github__datos">
                <span>{repositorio.language || "Sin lenguaje definido"}</span>
                <span>★ {repositorio.stargazers_count}</span>
              </div>

              <a
                href={repositorio.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver código fuente
              </a>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
