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
      style={{margin:'5px', borderRadius: '10px', background: 'lightgrey', boxShadow: 'rgba(50, 50, 93, 0.25) 0 px 30 px 50 px -12 px inset, rgba(0, 0, 0, 0.3) 0px 18px 26px -18px inset'}}>
      <h2>{noticia.titulo}</h2>
      <p>{noticia.contenido}</p>
    </article>
  );
}
