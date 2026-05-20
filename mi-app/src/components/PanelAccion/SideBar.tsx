/**
 * COMPONENTE: Sidebar
 *
 * Este componente demuestra el concepto de "prop drilling": pasar props a través
 * de componentes intermedios que no los usan directamente.
 *
 * En este caso, Sidebar recibe `mensaje` y `onAccion` del componente padre,
 * pero solo los reenvía al componente LayoutIntermedio. Sidebar no usa estos datos.
 *
 * CARACTERÍSTICAS PRINCIPALES:
 * - Actúa como intermediario en la cadena de componentes
 * - Reenvía props sin usarlas (prop drilling)
 * - Aplica estilos propios (borde, padding) para diferenciar la sección
 * - Incluye un comentario visual explicando el prop drilling
 *
 * CONCEPTOS CLAVE:
 * - Prop drilling: pasar props a través de múltiples niveles de componentes
 * - Desventaja: los componentes intermedios dependen de props que no usan
 * - Solución alternativa: usar Context para evitar prop drilling
 */

import { LayoutIntermedio } from "./LayoutIntermedio";

type SidebarProps = {
  mensaje: string;
  onAccion: () => void;
};

export function Sidebar({ mensaje, onAccion }: SidebarProps) {
  return (
    <div
      style={{
        border: "1px solid blue",
        padding: "1rem",
        marginTop: "1rem",
      }}
    >
      <p style={{ fontSize: "0.85rem", color: "#666" }}>
        Sidebar — también reenvía props (más prop drilling 😈)
      </p>

      <LayoutIntermedio mensaje={mensaje} onAccion={onAccion} />
    </div>
  );
}
