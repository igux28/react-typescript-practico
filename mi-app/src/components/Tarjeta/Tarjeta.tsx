/**
 * COMPONENTE: Tarjeta (Card Container)
 *
 * Este es un componente reutilizable que actúa como contenedor visual.
 * Sirve para envolver otros componentes y aplicar estilos consistentes de "tarjeta".
 *
 * CARACTERÍSTICAS PRINCIPALES:
 * - Acepta `children` para renderizar contenido flexible dentro de la tarjeta
 * - Prop opcional `titulo` para mostrar un encabezado en la tarjeta
 * - Estilos predeterminados: bordes, esquinas redondeadas, padding y espacio
 * - Pattern de composición: permite reutilizar la estructura en múltiples lugares
 *
 * CONCEPTOS CLAVE:
 * - Children: patrón para aceptar cualquier contenido React
 * - Props opcionales: usando `?` en TypeScript para propiedades no obligatorias
 * - Componente contenedor: wrapper que proporciona estructura visual
 * - Reutilización: el mismo componente puede usarse en múltiples contextos
 */

import type { ReactNode } from "react";

type TarjetaProps = {
  children: ReactNode;
  titulo?: string;
};

export function Tarjeta({ children, titulo }: TarjetaProps) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "1rem",
        marginBottom: "1rem",
      }}
    >
      {titulo ? <h3 style={{ marginTop: 0 }}>{titulo}</h3> : null}
      {children}
    </div>
  );
}
