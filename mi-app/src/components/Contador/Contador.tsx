import { useState } from "react";
import "./Contador.css";

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

  //Otra manera de hacer el incremento y decremento
  //usando una función pura.
  //Más información buscando info de "reductor function"
  //Spread operator
  const reductor = (estado, accion) => {
    switch (accion) {
      case "inc":
        return estado + 1;
      case "dec":
        return estado - 1;
      default:
        return estado;
    }
  };

  /*
  const reductorConSpreadOperator = (estado, accion) => {
    switch (accion) {
      case "inc":
        return {...estado, estado + 1};
      case "dec":
        return estado - 1;
      default:
        return estado;
    }
  };
*/

  return (
    <div className="contenedor">
      <div className="contador">
        <button className="boton-pequeno" onClick={handleRestar}>
          −
        </button>

        <span className="texto">Contador: {cuenta}</span>

        <button className="boton-pequeno" onClick={handleSumar}>
          +
        </button>
      </div>

      <button className="reiniciar" onClick={() => setCuenta(0)}>
        Reiniciar
      </button>
    </div>
  );
}
