
 // Tarea 8 - FÁCIL: operaciones de la tienda

 export const IGV = 0.18;
 export const ENVIO_GRATIS_DESDE = 50;

 // Calcular el precio incluyendo IGV
 export const precioConIgv = (precio) => precio * (1 + IGV);

 // Aplicar un descuento a un precio
 export const conDescuento = (precio, porcentaje = 10) => {
     const rebaja = precio * (porcentaje / 100);
     return precio - rebaja;
 };

 // Agregar un producto sin modificar el arreglo original
 export const agregarProducto = (items, producto) => {
     return [...items, producto];
 };

 // Contar productos de una categoría
 export const cuantosHayDe = (items, categoria) =>
     items.filter(producto => producto.categoria === categoria).length;

 // Resumir los productos de un carrito
 export function resumenCarrito(items) {
     const cantidad = items.length;
     const total = items.reduce((suma, producto) => suma + producto.precio, 0);
     const envio = total >= ENVIO_GRATIS_DESDE ? 0 : 9.99;

     return { cantidad, total, envio };
 }

  // Tarea 8 - INTERMEDIA 2: ficha corta con desestructuración

 export const fichaCorta = ({
     nombre,
     precio,
     envio: { zona }
 }) => `
 Producto: ${nombre}
 Precio: ${precio}
 Zona de envío: ${zona}
 `;

 
 // Tarea 8 - DIFÍCIL 1: agrupar productos por categoría

 export const agruparPorCategoria = (items) => {
     return items.reduce((grupos, producto) => {
         const categoria = producto.categoria;

         return {
             ...grupos,
             [categoria]: [
                 ...(grupos[categoria] ?? []),
                 producto
             ]
         };
     }, {});
 };

 
 // Tarea 8 - DIFÍCIL 2: Rebajar una categoría sin mutar nada. aplicarDescuentoA(items, categoria, 
 // porcentaje = 10). Comprobar con ===: los no tocados dan true, los tocados false
 export const aplicarDescuentoA = (items, categoria, porcentaje = 10) => {
     return items.map(producto => {
         if (producto.categoria === categoria) {
             return {
                 ...producto,
                 precio: producto.precio * (1 - porcentaje / 100)
             };
         }

         return producto;
     });
 };



