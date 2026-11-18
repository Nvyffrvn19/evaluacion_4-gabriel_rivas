import type { Proyecto } from "../types/Proyecto";

import imagenPortafolio from "../assets/img/proyecto1.png";
import imagenLimitSolver from "../assets/img/proyecto2.png";
import imagenDealerCore from "../assets/img/proyecto3.png";

export const proyectos: Proyecto[] = [
  {
    id: 1,
    titulo: "First Web",
    descripcion:
      "Primera página web que desarrollé utilizando HTML5 y CSS3. En este proyecto trabajé la estructura semántica del contenido, la organización visual de las secciones y la aplicación de estilos mediante CSS. El proyecto representó mi primer acercamiento práctico al desarrollo web y me permitió comprender cómo se relacionan la estructura HTML y la presentación visual de una página.",
    categoria: "Frontend",
    tecnologias: ["HTML5", "CSS3"],
    imagen: imagenPortafolio,
    repositorio: "https://github.com/Nvyffrvn19/portafolio-web",
  },
  {
    id: 2,
    titulo: "Limit Solver",
    descripcion:
      "Aplicación creada para calcular diferentes tipos de límites matemáticos de acuerdo con los principios y procedimientos estudiados en cálculo. El proyecto busca facilitar la resolución de límites mediante una herramienta centralizada, manteniendo el respeto por la teoría matemática utilizada en cada operación.",
    categoria: "Frontend",
    tecnologias: ["Python"],
    imagen: imagenLimitSolver,
    repositorio: "",
  },
  {
    id: 3,
    titulo: "Dealer Core API",
    descripcion:
      "API desarrollada para centralizar y administrar los datos de una concesionaria. Permite organizar la información necesaria para sus operaciones y aplicar controles de errores para responder correctamente ante solicitudes inválidas o datos inexistentes.",
    categoria: "Backend",
    tecnologias: ["Python", "FastAPI"],
    imagen: imagenDealerCore,
    repositorio: "",
  },
];
