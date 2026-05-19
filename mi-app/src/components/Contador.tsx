import { useState } from "react";

export function Contador() {
  const [cuenta, setCuenta] = useState(0);

  const handleSumar = () => {
    if (cuenta === 10) alert("¡Máximo alcanzado!");
    else setCuenta((prev) => prev + 1);
  };
  const handleRestar = () => {
    if (cuenta === 0) alert("No se permiten números negativos");
    else setCuenta((prev) => prev - 1);
  };

  return (
    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
      <button type="button" onClick={handleRestar}>
        −
      </button>
      <span>Cuenta: {cuenta} </span>
      <button type="button" onClick={handleSumar}>
        +
      </button>
      <button type="button" onClick={() => setCuenta(0)}>
        Reiniciar
      </button>
    </div>
  );
}
