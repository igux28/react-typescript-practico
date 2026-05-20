/**
 * COMPONENTE: FormularioContacto
 *
 * Este componente demuestra cómo crear un formulario controlado en React.
 * Gestiona tres campos: nombre, email y mensaje, cada uno con su propio estado.
 *
 * CARACTERÍSTICAS PRINCIPALES:
 * - Campos controlados: el valor del input está sincronizado con el estado (value + onChange)
 * - Validación de email en tiempo real: usa la función utilitaria `emailValido`
 * - Botón deshabilitado: el botón "Enviar" solo está activo si el email es válido
 * - Feedback al usuario: muestra un mensaje de error si el email no es válido
 *
 * CONCEPTOS CLAVE:
 * - Formularios controlados: React controla el valor y los cambios
 * - Estado múltiple: usa varios useState para cada campo
 * - Validación: integra una función utilitaria para validar datos
 * - Atributos deshabilitados: controla la interactividad con props
 */

import { emailValido } from "../../utils/validarEmail";
import "./FormularioContacto.css";
import { useState } from "react";

export const FormularioContacto = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const emailOk = emailValido(email);

  return (
    <form className="formulario">
      <h2>Contacto</h2>

      <div className="campo">
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          type="text"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      <div className="campo">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="campo">
        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
      </div>

      <button type="submit" className="boton" disabled={!emailOk}>
        Enviar
      </button>
      {!emailOk && email.length > 0 && (
        <p style={{ color: "crimson" }}>Introduce un email válido.</p>
      )}
    </form>
  );
};
