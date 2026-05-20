/**
 * Este fichero define un reducer para gestionar el estado de un contador,
 * pensado para ser usado con el hook `useReducer` de React.
 *
 * - `EstadoContador` describe la estructura del estado (un valor numérico).
 * - `AccionContador` define todas las acciones posibles que pueden modificar el estado.
 * - `estadoInicial` establece el valor inicial del contador.
 *
 * El reducer (`contadorReducer`) recibe el estado actual y una acción,
 * y devuelve un nuevo estado en función del tipo de acción:
 *
 * - 'incrementar': aumenta el valor en +1
 * - 'decrementar': disminuye el valor en -1
 * - 'reiniciar': resetea el contador a 0
 * - 'sumar': añade al valor actual el número indicado en `payload`
 *
 * Este patrón permite centralizar la lógica de actualización del estado
 * y facilita su mantenimiento, testeo y escalabilidad.
 */

export type EstadoContador = {
  valor: number;
};

export type AccionContador =
  | { type: "incrementar" }
  | { type: "decrementar" }
  | { type: "reiniciar" }
  | { type: "sumar"; payload: number };

export const estadoInicial: EstadoContador = { valor: 0 };

export function contadorReducer(
  estado: EstadoContador,
  accion: AccionContador,
): EstadoContador {
  switch (accion.type) {
    case "incrementar":
      return { valor: estado.valor + 1 };
    case "decrementar":
      return { valor: estado.valor - 1 };
    case "reiniciar":
      return { valor: 0 };
    case "sumar":
      return { valor: estado.valor + accion.payload };
    default:
      return estado;
  }
}
