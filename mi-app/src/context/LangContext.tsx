/**
 * CONTEXT: LangContext
 *
 * Este archivo define un Context que gestiona el idioma de la aplicación.
 * Permite a cualquier componente acceder al idioma actual sin pasar props.
 *
 * COMPONENTES DEL ARCHIVO:
 *
 * 1. TIPOS:
 *    - Lang: tipo union que define los idiomas soportados (es, en, fr)
 *    - Traducciones: objeto con las claves de traducción disponibles
 *
 * 2. DATOS:
 *    - traducciones: objeto Record que mapea cada idioma a sus traducciones
 *
 * 3. CONTEXTO:
 *    - LangContext: context que provee el objeto Traducciones actual
 *
 * 4. PROVIDER:
 *    - LangProvider: componente que debe envolver la aplicación
 *    - Gestiona el estado del idioma
 *    - Proporciona un selector (<select>) para cambiar el idioma
 *    - Reenvía las traducciones a través del context
 *
 * USO:
 * - Envuelve tu app con <LangProvider> en main.tsx o App.tsx
 * - En cualquier componente hijo, usa: const t = useContext(LangContext)
 * - Accede a traducciones con t.bienvenida, t.despedida, etc.
 */

import { createContext, useState, type ReactNode } from "react";

export type Lang = "es" | "en" | "fr";

export type Traducciones = {
  bienvenida: string;
  despedida: string;
};

const traducciones: Record<Lang, Traducciones> = {
  es: {
    bienvenida: "Bienvenido a la aplicación",
    despedida: "Hasta pronto",
  },
  en: {
    bienvenida: "Welcome to the app",
    despedida: "See you soon",
  },
  fr: {
    bienvenida: "Allo!!!!",
    despedida: "Arre voire!!!",
  },
};

export const LangContext = createContext<Traducciones | null>(null);

type LangProviderProps = {
  children: ReactNode;
};

export function LangProvider({ children }: LangProviderProps) {
  const [lang, setLang] = useState<Lang>("es");
  const value = traducciones[lang];

  return (
    <LangContext.Provider value={value}>
      <div style={{ padding: "1rem" }}>
        <label>
          Idioma:{" "}
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as Lang)}
          >
            <option value="es">ES</option>
            <option value="en">EN</option>
            <option value="fr">FR</option>
          </select>
        </label>
        {children}
      </div>
    </LangContext.Provider>
  );
}
