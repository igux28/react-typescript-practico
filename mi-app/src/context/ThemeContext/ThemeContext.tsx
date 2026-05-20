/**
 * CONTEXT: ThemeContext
 *
 * Este archivo define un Context que gestiona el tema (claro/oscuro) de la aplicación.
 * Proporciona tanto el estado del tema como los estilos CSS asociados.
 *
 * COMPONENTES DEL ARCHIVO:
 *
 * 1. TIPOS:
 *    - ModoTema: tipo union ("claro" | "oscuro") que define los modos disponibles
 *    - ThemeContextValue: interfaz con modo, estilos y función alternar
 *
 * 2. ESTILOS:
 *    - estilosPorModo: objeto Record que mapea cada modo a sus estilos CSS
 *    - Define colores de fondo, texto, altura mínima y padding
 *
 * 3. CONTEXTO:
 *    - ThemeContext: context que provee el objeto ThemeContextValue
 *
 * 4. PROVIDER:
 *    - ThemeProvider: componente que gestiona el estado del tema
 *    - Incluye un botón para alternar entre modos
 *    - Reenvía el tema a través del context
 *
 * 5. CUSTOM HOOK:
 *    - useTheme(): hook personalizado para acceder al context
 *    - Valida que se use dentro del ThemeProvider
 *    - Lanza error si se usa sin el provider
 *
 * USO:
 * - Envuelve tu app con <ThemeProvider>
 * - En cualquier componente, usa: const { modo, estilos, alternar } = useTheme()
 * - Usa estilos para aplicar los estilos CSS del tema actual
 * - Llama a alternar() para cambiar entre temas
 */

import {
  createContext,
  useContext,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

export type ModoTema = "claro" | "oscuro";

const estilosPorModo: Record<ModoTema, CSSProperties> = {
  claro: {
    backgroundColor: "#fff",
    color: "#111",
    minHeight: "120px",
    padding: "1rem",
  },
  oscuro: {
    backgroundColor: "#1a1a1a",
    color: "#f5f5f5",
    minHeight: "120px",
    padding: "1rem",
  },
};

type ThemeContextValue = {
  modo: ModoTema;
  estilos: CSSProperties;
  alternar: () => void;
};

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [modo, setModo] = useState<ModoTema>("claro");

  const value: ThemeContextValue = {
    modo,
    estilos: estilosPorModo[modo],
    alternar: () => setModo((m) => (m === "claro" ? "oscuro" : "claro")),
  };

  return (
    <ThemeContext.Provider value={value}>
      <div>
        <button
          type="button"
          onClick={value.alternar}
          style={{ marginBottom: "1rem" }}
        >
          Tema: {modo} (clic para cambiar)
        </button>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme debe usarse dentro de ThemeProvider");
  return ctx;
}
