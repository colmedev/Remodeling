/*
 * Definición de elemento enlace
 */

export type LinkItem = {
  /*
   * Texto del elemento
   */
  text: string;

  /*
   * URL del elemento
   */
  url?: string;

  /*
   * Etiqueta del elemento
   */
  label: string;
};

export type IconItem = {
  /*
   * URL del elemento
   */
  icon: string;
};
