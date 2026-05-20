/**
 * COMPONENTE: LayoutLang
 *
 * Este componente es un layout que incluye el Header (que consume el LangContext)
 * y renderiza el contenido proporcionado a través de children.
 *
 * Demuestra cómo los datos del Context son accesibles en componentes dentro
 * del árbol, incluso si el layout no consume el context directamente.
 *
 * CARACTERÍSTICAS PRINCIPALES:
 * - Acepta `children` para renderizar contenido flexible
 * - Incluye el componente Header que sí consume el LangContext
 * - Proporciona una estructura visual con un comentario explicativo
 * - No necesita pasar props del context explícitamente
 *
 * CONCEPTOS CLAVE:
 * - Context inheritance: los hijos pueden usar el context del proveedor
 * - Composition: combina Layout + Header para crear la estructura completa
 * - Separation of concerns: cada componente tiene un propósito claro
 * - Context doesn't require prop drilling: Header accede al context sin necesidad de props
 */

import type { ReactNode } from "react";
import { Header } from "./Header";

type LayoutProps = {
  children: ReactNode;
};

export function LayoutLang({ children }: LayoutProps) {
  return (
    <section>
      <p style={{ fontSize: "0.85rem", color: "#666" }}>
        Layout (no recibe props de idioma)
      </p>
      <Header />
      <main>{children}</main>
    </section>
  );
}
