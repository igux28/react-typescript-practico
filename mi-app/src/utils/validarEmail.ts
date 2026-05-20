/**
 * UTILIDAD: emailValido
 *
 * Esta es una función pura que valida si un string es un email válido.
 * Se usa en el componente FormularioContacto para validar entrada del usuario.
 *
 * LÓGICA DE VALIDACIÓN:
 * 1. Elimina espacios en blanco al inicio y final (trim)
 * 2. Verifica longitud mínima (al menos 5 caracteres)
 * 3. Busca el símbolo @ (debe estar al menos en posición 1)
 * 4. Busca el punto . (debe estar después del @)
 * 5. Verifica que no sea el último carácter
 *
 * EJEMPLO DE USOS:
 * - emailValido("user@example.com") → true
 * - emailValido("invalid@") → false
 * - emailValido("no-arroba.com") → false
 *
 * CONCEPTOS CLAVE:
 * - Función pura: siempre devuelve el mismo resultado para la misma entrada
 * - Sin efectos secundarios: no modifica datos externos
 * - Reutilizable: puedes usarla en múltiples lugares
 * - Validación simple: suficiente para muchos casos, pero no es exhaustiva
 */

export function emailValido(email: string): boolean {
  const texto = email.trim();
  if (texto.length < 5) return false;
  const arroba = texto.indexOf("@");
  const punto = texto.lastIndexOf(".");
  return arroba > 0 && punto > arroba + 1 && punto < texto.length - 1;
}
