// Tarea 8 - FÁCIL: importar los módulos de TechCart
import { productos } from "./datos.js";

import formatearPrecio, { MONEDA } from "./formato.js";

import {
    IGV,
    ENVIO_GRATIS_DESDE,
    precioConIgv,
    conDescuento,
    agregarProducto,
    cuantosHayDe,
    resumenCarrito,
    fichaCorta,
    agruparPorCategoria,
    aplicarDescuentoA
} from "./tienda.js";


// Tarea 8 - INTER. 1: Un módulo más. Mover tarifaPorZona y costoDeEnvio a js/envio.js, con sus export y el import de ENVIO_GRATIS_DESDE. La consola tiene que imprimir lo mismo.
import { tarifaPorZona, costoDeEnvio } from "./envio.js";

// Tarea 8 - FÁCIL: las constantes se obtienen desde los módulos
let visitasDeHoy = 0;

visitasDeHoy = visitasDeHoy + 1;
console.log("Visitas", visitasDeHoy);

{
    const soloAquiAdentro = "vivo dentro de estas llaves";
    console.log(soloAquiAdentro);
}
console.log(typeof "Mackbook Pro 14");
console.log(typeof 1999.99);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);

const precioMacbook = 1999.99;
console.log(precioMacbook * (1 + IGV));
console.log(7 % 2 );

console.log("5"===5);
console.log("5"==5);
console.log(5==5);

console.log(precioMacbook > 1000 && precioMacbook<3000);
console.log(!(precioMacbook<3000));

const etiqueta = precioMacbook > 1000 ? "premium" : "accesible";
console.log(etiqueta)


const descuentoAplicado = 0;
console.log(descuentoAplicado ?? "sin descuento");
console.log(descuentoAplicado || "sin descuento");

const cupon = {
    codigo : "TECH10",
    porcentaje : 10
}
const cuponDelVisitante = null;

console.log(cupon?.porcentaje);
console.log(cuponDelVisitante?.porcentaje);

// Tarea 8 - INTER. 1: Un módulo más. Mover tarifaPorZona y costoDeEnvio a js/envio.js, con sus export y el import de ENVIO_GRATIS_DESDE. La consola tiene que imprimir lo mismo
const compraDelVisitante = 39.9;
const costoEnvio = costoDeEnvio(compraDelVisitante);

console.log("costo de envio:", costoEnvio);

console.log(tarifaPorZona("Internacional"));


const categorias = ["laptops", "smartphones", "tablets", "audio"];
for(let i = 0; i < categorias.length; i++) {
    console.log(i + ": " + categorias[i])
}

for(const categoria of categorias) {
    console.log(categoria);
}

let unidadesPorDespachar = 3;
while(unidadesPorDespachar > 0) {
    console.log("Despachando unidad " + unidadesPorDespachar);
    unidadesPorDespachar = unidadesPorDespachar - 1;
}


function precioConIGV(precio) {
    return precio * (1+IGV);
}

const precioConIGVExpresion = function (precio) {
    return precio * (1 + IGV);
}

const conIGVFlecha = (precio) => precio * (1 +IGV);

console.log(precioConIGV(1000));
console.log(precioConIGVExpresion(1000));
console.log(conIGVFlecha(1000));
console.log(conDescuento(1000));
console.log("pasando porcentaje", conDescuento(1000,25));
console.log(formatearPrecio(1999.99999));

function aplicar(precio, transformacion){
    return transformacion(precio);
}
console.log(aplicar(1000, conDescuento));
console.log(aplicar(1000,conIGVFlecha));

console.log(productos.length);
console.log(productos[0].nombre);
console.log(productos[productos.length-1].nombre);

const macbook = productos[0];
console.log(macbook.precio);
console.log(macbook["precio"]);
const propiedad = "categoria";
console.log(macbook[propiedad]);

for(const producto of productos){
    console.log(producto.nombre + " - " + formatearPrecio(producto.precio));
}

console.table(productos);
// Tarea 7 - FACIL: Replicar la clase y agregar un séptimo producto: comprobar length, la tabla y el valor del catálogo
const valorDelCatalogo = productos.reduce((suma, p) => suma + p.precio, 0);
console.log(valorDelCatalogo.toFixed(2));

// Tarea 7 - INTER. 1: El catálogo presentable: con map, nombre, categoría y precio formateado. Después, solo los que tienen stock
const catalogoPresentable = productos.map(producto => ({
    nombre: producto.nombre,
    categoria: producto.categoria,
    precio: formatearPrecio(producto.precio)
}));

console.table(catalogoPresentable);

const productosConStock = productos
    .filter(producto => producto.stock > 0)
    .map(producto => ({
        nombre: producto.nombre,
        categoria: producto.categoria,
        precio: formatearPrecio(producto.precio)
    }));

console.table(productosConStock);

const carrito = [];
carrito.push("Macbook Pro 14");
carrito.push("Airpods Max");
console.log(carrito.length);
carrito.pop();
console.log(carrito.length);
carrito.unshift("iPad Mini 2021");
console.log(carrito[0]);
carrito.shift();
console.log(carrito);

console.log("Laptops:", cuantosHayDe(productos, "laptops"));
console.log("Televisores:", cuantosHayDe(productos, "televisores"));

const carritoCompra = [
    productos[6]
];

console.log(resumenCarrito(carritoCompra));

//Prueba total >= $50 entonces envío = $0
const carritoCompraGratis = [
    productos[6],
    productos[6]
];

console.log(resumenCarrito(carritoCompraGratis));

// Tarea 7 - DIFICIL 2: producto más barato con stock usando filter + sort sobre una copia
const productosDisponibles = productos.filter(producto => producto.stock > 0);
const ordenadosPorPrecio = productosDisponibles
    .slice()
    .sort((a, b) => a.precio - b.precio);
const masBaratoConStockSort = ordenadosPorPrecio[0];

console.log("Más barato con stock (filter + sort):", masBaratoConStockSort);

// Tarea 7 - DIFICIL 2: producto más barato con stock usando filter + reduce
const masBaratoConStockReduce = productos
    .filter(producto => producto.stock > 0)
    .reduce((masBarato, producto) => producto.precio < masBarato.precio ? producto : masBarato);

console.log("Más barato con stock (filter + reduce):", masBaratoConStockReduce);

 // TAREA 8 - FÁCIL: agregar un producto con spread

 const nuevoProducto = {
     id: 8,
     nombre: "Monitor Samsung 27",
     precio: 249.99,
     categoria: "monitores",
     stock: 6,
     destacado: false
 };

 const catalogoActualizado = agregarProducto(productos, nuevoProducto);

 console.log("Productos originales:", productos.length);
 console.log("Productos actualizados:", catalogoActualizado.length);
 console.table(catalogoActualizado);
  // Tarea 8 - FÁCIL: Replicar la clase y sumar un producto. Los cuatro archivos y el type="module". Después, un producto nuevo con agregarProducto y su ficha en un template literal de varias líneas. Comprobar: 7 y 6
 const fichaProducto = `
 Producto : ${nuevoProducto.nombre}
 Categoría: ${nuevoProducto.categoria}
 Precio   : ${formatearPrecio(nuevoProducto.precio)}
 Con IGV  : ${formatearPrecio(precioConIgv(nuevoProducto.precio))}
 Stock    : ${nuevoProducto.stock} unidades
 `;

 console.log(fichaProducto);
  // Tarea 8 - INTER.2: La ficha corta. fichaCorta con el producto desestructurado en el paréntesis, incluido el envio anidado, y un template literal de tres líneas. Probar con map
 const productosConEnvio = catalogoActualizado.map(producto => ({
     ...producto,
     envio: {
         zona: "Lima"
     }
 }));

 console.table(productosConEnvio);

 // Tarea 8 - INTER.2: La ficha corta. fichaCorta con el producto desestructurado en el paréntesis, incluido el envio anidado, y un template literal de tres líneas. Probar con map

 const fichasCortas = productosConEnvio.map(fichaCorta);

 console.log("Fichas cortas de los productos:");

 fichasCortas.forEach(ficha => console.log(ficha));

 // Tarea 8 - DIFÍCIL 1: Agrupar por categoría. agruparPorCategoria(items): cada llave una categoría, cada valor el arreglo de sus productos. reduce + spread + nombre calculado + ??
 const productosAgrupados = agruparPorCategoria(catalogoActualizado);

 console.log("Productos agrupados por categoría:");
 console.log(productosAgrupados);

 console.log("Laptops:", productosAgrupados.laptops.length);
 console.log("Smartphones:", productosAgrupados.smartphones.length);
 console.log("Monitores:", productosAgrupados.monitores.length);


 // Tarea 8 - DIFÍCIL 2: aplicar descuento sin mutar el catálogo

 const catalogoConDescuento = aplicarDescuentoA(
     catalogoActualizado,
     "laptops"
 );

 console.log("Catálogo original:");
 console.table(catalogoActualizado);

 console.log("Catálogo con 10% de descuento en laptops:");
 console.table(catalogoConDescuento);

 // Tarea 8 - DIFÍCIL 2: Rebajar una categoría sin mutar nada. aplicarDescuentoA(items, categoria, porcentaje = 10). Comprobar con ===: los no tocados dan true, los tocados false
 console.log(
     "Macbook Pro 14:",
     catalogoActualizado[0] === catalogoConDescuento[0]
 );

 console.log(
     "Iphone 13 Pro:",
     catalogoActualizado[1] === catalogoConDescuento[1]
 );

 console.log(
     "Macbook Air 13:",
     catalogoActualizado[4] === catalogoConDescuento[4]
 );

 console.log(
     "Monitor Samsung 27:",
     catalogoActualizado[7] === catalogoConDescuento[7]
 );
