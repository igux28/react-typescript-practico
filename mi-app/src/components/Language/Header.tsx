/**
 * COMPONENTE: Header (Language Header)
 *
 * Este componente consume datos del LangContext para mostrar mensajes
 * en el idioma seleccionado por el usuario.
 *
 * CARACTERÍSTICAS PRINCIPALES:
 * - Usa el hook `useContext` para acceder al LangContext
 * - Obtiene las traducciones (bienvenida y despedida) del contexto
 * - Valida que el contexto exista (si no, muestra error)
 * - Renderiza contenido dinámico basado en el idioma seleccionado
 * - Se actualiza automáticamente cuando cambia el idioma en el provider
 *
 * CONCEPTOS CLAVE:
 * - useContext: hook para consumir valores de un Context
 * - Context: compartir estado entre componentes sin props
 * - Validación: comprueba que el provider esté configurado correctamente
 * - Reactividad: cambios en el provider se reflejan automáticamente
 */

import { useContext } from "react";
import { LangContext } from "../../context/LangContext";

export function Header() {
  const t = useContext(LangContext);

  if (!t) {
    return <p>Error: falta LangProvider</p>;
  }

  return (
    <header style={{ margin: "1rem 0", borderBottom: "1px solid #ccc" }}>
      <h1>{t.bienvenida}</h1>
      <p>{t.despedida}</p>
    </header>
  );
}
