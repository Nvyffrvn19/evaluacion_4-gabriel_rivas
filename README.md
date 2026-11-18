# Portafolio Web — Evaluación N.º 4

**Estudiante:** Gabriel Rivas  
**Asignatura:** ICINF1107  
**Tecnologías:** React, TypeScript, Vite y CSS

## 1. Descripción del proyecto

En esta evaluación migré mi portafolio personal, desarrollado originalmente con HTML y CSS en la Evaluación N.º 2, a una aplicación construida con React y TypeScript.

Mi objetivo principal fue conservar la identidad visual de mi portafolio original, respetando sus colores, tipografías, imágenes y distribución, mientras incorporaba una arquitectura basada en componentes y nuevas funcionalidades interactivas.

## 2. Repositorios

- **Evaluación N.º 2:** https://github.com/Nvyffrvn19/portafolio-web
- **Evaluación N.º 4:** https://github.com/Nvyffrvn19/evaluacion_4-gabriel_rivas

## 3. Tecnologías utilizadas

Durante el desarrollo utilicé las siguientes tecnologías:

- **React:** para construir mi interfaz mediante componentes reutilizables.
- **TypeScript:** para definir tipos y mejorar la seguridad del código.
- **Vite:** para ejecutar el entorno de desarrollo y generar la compilación de producción.
- **React Router:** para implementar la navegación entre páginas.
- **CSS:** para conservar el diseño original y adaptar la interfaz a diferentes dispositivos.
- **Fetch API:** para consultar mis repositorios públicos de GitHub.
- **Context API:** para compartir información entre componentes.

## 4. Instalación y ejecución

Para ejecutar mi proyecto, primero se debe clonar el repositorio:

```bash
git clone https://github.com/Nvyffrvn19/evaluacion_4-gabriel_rivas.git
cd evaluacion_4-gabriel_rivas
```

Luego, instalar las dependencias:

```bash
npm install
```

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Para generar una compilación de producción:

```bash
npm run build
```

## 5. Estructura y navegación

Organicé mi portafolio en cuatro páginas principales:

| Ruta         | Descripción                                                    |
| ------------ | -------------------------------------------------------------- |
| `/`          | Presento mi portafolio y mis repositorios recientes de GitHub. |
| `/proyectos` | Muestro mis proyectos personales y filtros por categoría.      |
| `/sobre-mi`  | Presento información personal, herramientas e intereses.       |
| `/contacto`  | Muestro mis datos de contacto y un formulario validado.        |
| Otras rutas  | Muestro una página de error 404.                               |

Implementé React Router para navegar entre estas páginas sin recargar completamente la aplicación.

## 6. Funcionalidades implementadas

### Filtros de proyectos

En la sección de proyectos implementé filtros utilizando `useState`.

Esta funcionalidad me permite controlar la categoría seleccionada y actualizar dinámicamente los proyectos que aparecen en pantalla.

### Formulario de contacto

Desarrollé un formulario controlado utilizando `useState` para administrar los valores ingresados.

Incorporé validaciones para comprobar que los campos obligatorios no estén vacíos y que el correo electrónico tenga un formato válido.

Cuando los datos son correctos, abro la aplicación de correo del visitante mediante `mailto:`.

El formulario no utiliza un servidor para enviar mensajes automáticamente.

### Context API

Implementé un contexto global llamado `PortafolioContext`.

Desde este contexto comparto información relacionada con mi portafolio, incluyendo mi nombre y usuario de GitHub.

Utilicé `useContext` en el componente de repositorios para obtener el usuario de GitHub sin escribirlo directamente en la lógica del componente.

Decidí utilizar este enfoque porque permite compartir información sin modificar la apariencia visual de mi proyecto.

## 7. Integración con la API REST de GitHub

Incorporé una sección que consulta mis repositorios públicos recientes mediante la API REST de GitHub.

**Método HTTP:** `GET`

**Endpoint:**

```text
https://api.github.com/users/Nvyffrvn19/repos?sort=updated&per_page=6
```

### Parámetros utilizados

| Parámetro  | Valor     | Propósito                                   |
| ---------- | --------- | ------------------------------------------- |
| `sort`     | `updated` | Ordenar los repositorios por actualización. |
| `per_page` | `6`       | Solicitar hasta seis repositorios.          |

### Datos utilizados

| Campo              | Tipo          | Función                           |
| ------------------ | ------------- | --------------------------------- |
| `id`               | number        | Identificar cada repositorio.     |
| `name`             | string        | Mostrar su nombre.                |
| `description`      | string o null | Mostrar su descripción.           |
| `html_url`         | string        | Enlazar al repositorio original.  |
| `language`         | string o null | Mostrar su lenguaje principal.    |
| `stargazers_count` | number        | Mostrar la cantidad de estrellas. |

### Manejo de estados

Implementé diferentes estados para controlar la respuesta de la API:

- **Carga:** muestro un mensaje mientras espero la respuesta.
- **Error:** informo cuando la solicitud falla.
- **Sin resultados:** muestro un mensaje si no hay repositorios disponibles.
- **Éxito:** presento los repositorios mediante tarjetas.

También utilicé `AbortController` para cancelar la solicitud cuando el componente se desmonta.

La consulta es pública y no requiere autenticación, aunque está sujeta a los límites de solicitudes establecidos por GitHub.

## 8. Diseño responsivo

Durante la migración prioricé mantener la estética de mi Evaluación N.º 2.

Conservé las tipografías Archivo Black y Space Grotesk, los colores originales, las imágenes y la distribución de las secciones.

Utilicé estilos responsivos y puntos de adaptación a 768 px y 1024 px.

## 9. Accesibilidad

Durante el desarrollo incorporé diferentes prácticas de accesibilidad:

- Utilicé elementos semánticos de HTML.
- Asocié las etiquetas con los campos del formulario.
- Incorporé textos alternativos en las imágenes.
- Utilicé atributos ARIA cuando correspondía.
- Incorporé mensajes de error y estados de carga.
- Mantuve una estructura de navegación identificable.

Estas medidas contribuyen a la accesibilidad, aunque no constituyen por sí solas una certificación de cumplimiento de WCAG 2.1 AA.

## 10. Verificación del proyecto

Para verificar el funcionamiento técnico de mi aplicación ejecuté:

```bash
npm run build
```

Obtuve una compilación correcta de TypeScript y Vite.

También comprobé durante el desarrollo la navegación entre páginas, la presentación de los repositorios y la validación del formulario de contacto.

## 11. Documentación complementaria

- `INVENTARIO.md`: documento donde describo la migración desde la Evaluación N.º 2.
- `uso_ia.md`: documento donde explico cómo utilicé inteligencia artificial.
- `docs/captura-e2.png`: evidencia visual del portafolio original, una vez incorporada.

## 12. Conclusión

Con este proyecto logré transformar mi portafolio estático en una aplicación desarrollada con React y TypeScript.

El principal desafío fue incorporar nuevas tecnologías sin perder la identidad visual de mi trabajo original.

Esta evaluación me permitió comprender mejor la organización de componentes, el manejo de estados, la navegación, el consumo de APIs y la importancia de verificar los cambios durante el desarrollo.

## Autor

Gabriel Rivas
