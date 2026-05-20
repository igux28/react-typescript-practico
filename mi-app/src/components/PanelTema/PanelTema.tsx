/**
 * COMPONENTE: PanelTema
 *
 * Este componente demuestra cómo consumir un Context en React.
 * Utiliza el hook `useTheme()` para acceder a los estilos y modo del tema actual.
 *
 * CARACTERÍSTICAS PRINCIPALES:
 * - Consume el ThemeContext usando el hook personalizado `useTheme()`
 * - Aplica estilos dinámicos basados en el tema actual (claro/oscuro)
 * - Muestra el modo actual del tema como información al usuario
 * - Los estilos se actualizan automáticamente cuando el tema cambia
 *
 * CONCEPTOS CLAVE:
 * - Context: compartes estado entre componentes sin prop drilling
 * - Custom Hook: `useTheme()` encapsula la lógica de acceso al context
 * - Estilos dinámicos: los estilos cambio según el estado del context
 * - Reactividad: cuando el context cambia, el componente se re-renderiza automáticamente
 */

import { useTheme } from "../../context/ThemeContext/ThemeContext";

export function PanelTema() {
  const { estilos, modo } = useTheme();

  return (
    <section style={estilos}>
      <h2>Panel con tema</h2>
      <p>
        Modo actual: <strong>{modo}</strong>
      </p>
      <p>Este bloque no recibe estilos por props.</p>
    </section>
  );
}
