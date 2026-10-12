 // Tarea 8 - INTER. 1: Un módulo más. Mover tarifaPorZona y costoDeEnvio a js/envio.js, 
 // con sus export y el import de ENVIO_GRATIS_DESDE. La consola tiene que imprimir lo mismo.

 import { ENVIO_GRATIS_DESDE } from "./tienda.js";

 // Calcular la tarifa según la zona de envío
 export function tarifaPorZona(zona) {
     switch (zona) {
         case "Lima":
             return 0;
         case "Resto del Peru":
             return 9.99;
         case "Internacional":
             return 29.99;
         default:
             return 9.99;
     }
 }

 // Calcular el costo de envío según el monto de compra
 export function costoDeEnvio(total) {
     return total > ENVIO_GRATIS_DESDE ? 0 : 9.99;
 }
