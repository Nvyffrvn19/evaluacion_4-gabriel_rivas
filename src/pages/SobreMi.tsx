import "./SobreMi.css";

import imagenSobreMi from "../assets/img/sobre-mi.jpg";

const herramientas: string[] = [
  "HTML5",
  "CSS3",
  "Visual Studio Code",
  "GitHub",
];

export function SobreMi() {
  return (
    <section
      id="sobre-mi"
      className="sobre-mi"
      aria-labelledby="titulo-sobre-mi"
    >
      <p className="sobre-mi__numero">Sobre Mí</p>

      <figure className="sobre-mi__imagen">
        <img src={imagenSobreMi} alt="Retrato de Gabriel Rivas" />
      </figure>

      <div className="sobre-mi__contenido">
        <h1 id="titulo-sobre-mi">
          Quién está detrás
          <br />
          del code.
        </h1>

        <p className="sobre-mi__descripcion">
          Soy un estudiante de primer año de Ingeniería Civil en Informática en
          la Universidad Católica de Temuco. Me apasiona el desarrollo web y la
          creación de interfaces atractivas y funcionales. Mi objetivo es
          combinar la estética con la eficiencia en cada proyecto que emprendo.
        </p>

        <section
          className="sobre-mi__herramientas"
          aria-labelledby="titulo-herramientas"
        >
          <h2 id="titulo-herramientas">Herramientas y Tecnologías</h2>

          <ul>
            {herramientas.map((herramienta) => (
              <li key={herramienta}>{herramienta}</li>
            ))}
          </ul>
        </section>

        <section
          className="sobre-mi__intereses"
          aria-labelledby="titulo-intereses"
        >
          <h2 id="titulo-intereses">Fuera de la Universidad</h2>

          <p>Deporte · Tecnología · Música</p>
        </section>
      </div>
    </section>
  );
}
