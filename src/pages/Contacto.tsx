import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import "./Contacto.css";

interface DatosFormulario {
  nombre: string;
  correo: string;
  mensaje: string;
}

type EstadoFormulario = "inicial" | "error" | "exito";

const datosIniciales: DatosFormulario = {
  nombre: "",
  correo: "",
  mensaje: "",
};

export function Contacto() {
  const [datos, setDatos] = useState<DatosFormulario>(datosIniciales);
  const [estado, setEstado] = useState<EstadoFormulario>("inicial");
  const [respuesta, setRespuesta] = useState("");

  function actualizarCampo(
    evento: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = evento.target;

    setDatos((anteriores) => ({
      ...anteriores,
      [name]: value,
    }));

    setEstado("inicial");
    setRespuesta("");
  }

  function enviarFormulario(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    const nombre = datos.nombre.trim();
    const correo = datos.correo.trim();
    const mensaje = datos.mensaje.trim();

    if (!nombre || !correo || !mensaje) {
      setEstado("error");
      setRespuesta("Completa todos los campos del formulario.");
      return;
    }

    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

    if (!correoValido) {
      setEstado("error");
      setRespuesta("Ingresa un correo electrónico válido.");
      return;
    }

    setEstado("exito");
    setRespuesta(
      "Formulario validado. Se abrirá tu aplicación de correo para enviar el mensaje.",
    );

    const asunto = encodeURIComponent(`Contacto de ${nombre}`);
    const cuerpo = encodeURIComponent(
      `Nombre: ${nombre}\nCorreo: ${correo}\n\nMensaje:\n${mensaje}`,
    );

    window.location.href = `mailto:grivas2026@alu.uct.cl?subject=${asunto}&body=${cuerpo}`;
  }

  return (
    <section id="contacto" aria-labelledby="titulo-contacto">
      <p className="contacto__numero">Contacto</p>

      <div className="contacto__contenido">
        <h1 id="titulo-contacto">Contáctame.</h1>

        <p className="contacto__descripcion">
          Si quieres conocer más sobre mis proyectos o trabajar en conjunto,
          puedes enviarme un mensaje o visitar mi perfil de GitHub.
        </p>

        <address className="contacto__datos">
          <p>
            Correo:{" "}
            <a href="mailto:grivas2026@alu.uct.cl">grivas2026@alu.uct.cl</a>
          </p>

          <p>
            GitHub:{" "}
            <a
              href="https://github.com/nvyffrvn19"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Perfil
            </a>
          </p>
        </address>
      </div>

      <form
        className="contacto__formulario"
        onSubmit={enviarFormulario}
        noValidate
      >
        <p>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={datos.nombre}
            onChange={actualizarCampo}
            autoComplete="name"
            required
          />
        </p>

        <p>
          <label htmlFor="correo">Correo electrónico</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={datos.correo}
            onChange={actualizarCampo}
            autoComplete="email"
            required
          />
        </p>

        <p>
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={5}
            value={datos.mensaje}
            onChange={actualizarCampo}
            required
          />
        </p>

        <button type="submit">Enviar Mensaje</button>

        {respuesta && (
          <p
            className={`contacto__respuesta contacto__respuesta--${estado}`}
            role={estado === "error" ? "alert" : "status"}
          >
            {respuesta}
          </p>
        )}
      </form>
    </section>
  );
}
