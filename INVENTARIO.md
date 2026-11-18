# Inventario de migración — Evaluación N.º 4

**Estudiante:** Gabriel Rivas  
**Asignatura:** ICINF1107

## 1. Introducción

En este documento describo cómo realicé la migración de mi portafolio original, desarrollado con HTML y CSS en la Evaluación N.º 2, hacia una aplicación construida con React y TypeScript.

Mi objetivo fue conservar el diseño y el contenido original, adaptando su estructura a componentes reutilizables e incorporando las funcionalidades solicitadas.

## 2. Repositorios

**Proyecto original:**

https://github.com/Nvyffrvn19/portafolio-web

**Proyecto migrado a React:**

https://github.com/Nvyffrvn19/evaluacion_4-gabriel_rivas

## 3. Inventario de componentes

| Elemento original  | Archivo React     | Migración realizada                          |
| ------------------ | ----------------- | -------------------------------------------- |
| Encabezado         | `Navbar.tsx`      | Lo transformé en un componente reutilizable. |
| Portada            | `Home.tsx`        | Conservé el contenido y diseño de inicio.    |
| Proyectos          | `Projects.tsx`    | Incorporé filtros interactivos.              |
| Sobre mí           | `SobreMi.tsx`     | Lo convertí en una página independiente.     |
| Contacto           | `Contacto.tsx`    | Incorporé un formulario controlado.          |
| Pie de página      | `Footer.tsx`      | Lo transformé en un componente reutilizable. |
| Estilos originales | Archivos CSS      | Adapté los estilos a la nueva estructura.    |
| Imágenes           | `src/assets/img/` | Conservé los recursos visuales originales.   |

## 4. Cambios en la arquitectura

### De HTML a componentes

En mi proyecto original tenía las secciones organizadas dentro de una estructura HTML.

Durante la migración separé estas secciones en componentes React para mejorar la organización y facilitar su mantenimiento.

### Navegación

Implementé React Router para permitir la navegación entre Inicio, Proyectos, Sobre mí y Contacto.

También incorporé una ruta para mostrar un mensaje cuando la página solicitada no existe.

### Manejo de estados

Utilicé `useState` para administrar los filtros de proyectos, los campos del formulario y los estados de la consulta a GitHub.

### Efectos

Utilicé `useEffect` para ejecutar la consulta a la API de GitHub cuando se monta el componente correspondiente.

### Contexto global

Implementé `PortafolioContext` para compartir información entre componentes.

Utilicé este contexto para obtener mi usuario de GitHub desde el componente que consulta los repositorios.

## 5. Elementos visuales conservados

Uno de mis principales objetivos fue mantener la apariencia de mi portafolio original.

Durante la migración conservé:

- La paleta de colores.
- Las tipografías Archivo Black y Space Grotesk.
- Las imágenes utilizadas en las secciones.
- La distribución general de los contenidos.
- Los tamaños y proporciones principales.
- Los puntos de adaptación responsiva.

Para comprobar la fidelidad visual, comparé los estilos de React con los archivos CSS de mi repositorio original.

## 6. Nuevas funcionalidades

A diferencia de mi Evaluación N.º 2, incorporé:

1. Navegación mediante React Router.
2. Filtros interactivos de proyectos.
3. Formulario de contacto con validaciones.
4. Consulta de repositorios mediante API REST.
5. Estados de carga, error y resultados vacíos.
6. Cancelación de solicitudes mediante AbortController.
7. Context API para compartir información global.
8. Página de error 404.

## 7. Dificultades encontradas

Durante el desarrollo enfrenté dificultades relacionadas con la migración de los estilos originales.

En algunas implementaciones iniciales, las tipografías, tamaños y distribuciones no coincidían con mi portafolio anterior.

Para resolverlo, revisé nuevamente el CSS original y ajusté las reglas correspondientes.

También probé una implementación de tema oscuro, pero decidí descartarla porque modificaba demasiado la identidad visual del proyecto.

Finalmente, opté por utilizar Context API para compartir información sin alterar el diseño.

## 8. Verificación

Ejecuté `npm run build` para comprobar la compilación del proyecto.

La compilación finalizada correctamente me permitió confirmar que TypeScript y Vite podían generar la versión de producción.

También revisé visualmente las secciones durante la migración.

## 9. Conclusión

Considero que esta migración me permitió comprender cómo transformar una página estática en una aplicación React.

Aprendí a separar responsabilidades entre componentes, utilizar estados, consumir información externa y organizar mejor mi código.

El aspecto que más prioricé fue conservar el diseño de mi portafolio original mientras incorporaba nuevas funcionalidades.
