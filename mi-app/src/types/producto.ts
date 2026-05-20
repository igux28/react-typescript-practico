/**
 * TIPOS: Producto
 *
 * Este archivo define el tipo TypeScript para un objeto Producto.
 * Es una definición de datos que se usa en toda la aplicación.
 *
 * ESTRUCTURA:
 * - id: identificador único del producto (string)
 * - nombre: el nombre del producto (string)
 * - precio: el precio del producto en número (number)
 *
 * USO:
 * - Importa este tipo en componentes que manejen productos
 * - Usálo para tipar arrays de productos, props, estado, etc.
 * - Ejemplo: const [producto, setProducto] = useState<Producto | null>(null)
 * - Ejemplo: type ListaProductosProps = { productos: Producto[] }
 *
 * VENTAJAS DE USAR TIPOS:
 * - TypeScript valida que los datos sean correctos
 * - Intellisense: el editor autocompleta las propiedades
 * - Detecta errores en tiempo de compilación
 * - Documentación clara de la estructura de datos
 */

export type Producto = {
  id: string;
  nombre: string;
  precio: number;
};
