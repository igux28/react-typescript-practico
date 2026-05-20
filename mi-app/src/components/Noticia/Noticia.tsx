/**
 * COMPONENTE: Noticia
 *
 * Este es un componente presentacional (o "dumb component") que solo renderiza
 * la información que recibe a través de props. No tiene estado ni lógica compleja.
 *
 * CARACTERÍSTICAS PRINCIPALES:
 * - Recibe datos de una noticia a través de props (NoticiaData)
 * - Renderiza los datos en una estructura HTML semántica (elemento <article>)
 * - Aplica estilos inline para personalizar la apariencia (colores, bordes, sombras)
 * - Es reutilizable: puede mostrar múltiples noticias en una lista
 *
 * CONCEPTOS CLAVE:
 * - Props: recibe datos del componente padre
 * - Componente funcional simple: solo renderiza, sin lógica de negocio
 * - TypeScript: define tipos para asegurar que los datos sean correctos
 * - Estilos inline: personalización directa en JSX con objetos de estilo
 */

export type NoticiaData = {
  id: string;
  titulo: string;
  contenido: string;
};

type NoticiaProps = {
  noticia: NoticiaData;
};

export function Noticia({ noticia }: NoticiaProps) {
  return (
    <article
      style={{
        margin: "5px",
        borderRadius: "10px",
        background: "lightgrey",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0 px 30 px 50 px -12 px inset, rgba(0, 0, 0, 0.3) 0px 18px 26px -18px inset",
      }}
    >
      <h2>{noticia.titulo}</h2>
      <p>{noticia.contenido}</p>
    </article>
  );
}
