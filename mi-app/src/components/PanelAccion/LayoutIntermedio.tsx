/**
 * COMPONENTE: LayoutIntermedio
 *
 * Este componente es otro ejemplo de "prop drilling" en la cadena de componentes.
 * Recibe props del padre (Sidebar), las valida explícitamente (comentario visible),
 * y las reenvía al componente hijo (PanelAccion).
 *
 * CARACTERÍSTICAS PRINCIPALES:
 * - Componente intermedio que solo reenvía props
 * - No utiliza las props que recibe (mensaje y onAccion)
 * - Aplica su propio estilo para separación visual
 * - Documentado para mostrar el flujo de datos
 *
 * CONCEPTOS CLAVE:
 * - Prop drilling: segundo nivel de reenvío de props
 * - Props intermedias: las props se transmiten sin modificación
 * - Mantenibilidad: cada nivel adicional hace el código más difícil de seguir
 * - Alternativa: Context API sería más limpia para este patrón
 */

import { PanelAccion } from "./PanelAccion";

type LayoutIntermedioProps = {
  mensaje: string;
  onAccion: () => void;
};

export function LayoutIntermedio({ mensaje, onAccion }: LayoutIntermedioProps) {
  return (
    <section
      style={{ border: "1px dashed #999", padding: "1rem", marginTop: "1rem" }}
    >
      <p style={{ fontSize: "0.85rem", color: "#666" }}>
        LayoutIntermedio — solo reenvía props (prop drilling)
      </p>
      <PanelAccion mensaje={mensaje} onAccion={onAccion} />
    </section>
  );
}
