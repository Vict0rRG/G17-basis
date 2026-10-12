
 // Tarea 8 - FÁCIL: módulo para formatear precios

 export const MONEDA = "$";

 const formatearPrecio = (precio) => {
     return `${MONEDA}${precio.toFixed(2)}`;
 };

 export default formatearPrecio;
