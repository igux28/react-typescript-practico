/**
 * Este componente implementa un contador utilizando el hook `useReducer` de React.
 *
 * - Se importa el reducer (`contadorReducer`) junto con su estado inicial (`estadoInicial`)
 *   y los tipos de acciones (`AccionContador`).
 *
 * - `useReducer` se encarga de gestionar el estado (`estado`) y proporciona
 *   una función `dispatch` para enviar acciones al reducer.
 *
 * - La función `enviar` es un helper que recibe una acción y devuelve una función,
 *   lista para ser usada directamente como manejador de eventos (`onClick`).
 *   Esto evita tener que crear funciones inline en cada botón.
 *
 * La interfaz muestra:
 * - El valor actual del contador (`estado.valor`)
 * - Botones para lanzar distintas acciones:
 *   - −1 → decrementa el contador
 *   - +1 → incrementa el contador
 *   - +5 → suma 5 usando una acción con payload
 *   - Reset → reinicia el contador a 0
 *
 * Este ejemplo demuestra cómo usar `useReducer` para centralizar la lógica
 * de estado en un reducer y desacoplarla de la UI, facilitando su reutilización
 * y testeo.
 */
import { useReducer } from "react";
import {
  contadorReducer,
  estadoInicial,
  type AccionContador,
} from "../../reducers/contadorReducer";

export function ContadorReducer() {
  const [estado, dispatch] = useReducer(contadorReducer, estadoInicial);

  const enviar = (accion: AccionContador) => () => dispatch(accion);

  return (
    <div
      style={{
        display: "flex",
        gap: "0.5rem",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <button type="button" onClick={enviar({ type: "decrementar" })}>
        −1
      </button>
      <strong style={{ minWidth: "3rem", textAlign: "center" }}>
        {estado.valor}
      </strong>
      <button type="button" onClick={enviar({ type: "incrementar" })}>
        +1
      </button>
      <button type="button" onClick={enviar({ type: "sumar", payload: 5 })}>
        +5
      </button>
      <button type="button" onClick={enviar({ type: "reiniciar" })}>
        Reset
      </button>
    </div>
  );
}
