/**
 * COMPONENTE: PanelAccion
 *
 * Este es un componente simple que demuestra la comunicación entre componentes
 * a través de props y callbacks.
 *
 * CARACTERÍSTICAS PRINCIPALES:
 * - Recibe un `mensaje` (string) que se muestra en pantalla
 * - Recibe una función callback `onAccion` que se ejecuta al hacer clic en el botón
 * - Es un componente "contenido" en la cadena de prop drilling
 * - Usa event handlers para capturar acciones del usuario
 *
 * CONCEPTOS CLAVE:
 * - Props: recibe datos y funciones del componente padre
 * - Callbacks: funciones que se ejecutan como respuesta a eventos
 * - Event handlers: onClick para capturar el clic del botón
 * - Componente presentacional: solo renderiza, la lógica está en el padre
 */

type PanelAccionProps = {
  mensaje: string;
  onAccion: () => void;
};

export function PanelAccion({ mensaje, onAccion }: PanelAccionProps) {
  return (
    <div>
      <p>{mensaje}</p>
      <button type="button" onClick={onAccion}>
        +1 click
      </button>
    </div>
  );
}
