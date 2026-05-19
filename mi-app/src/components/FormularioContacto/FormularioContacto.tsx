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
