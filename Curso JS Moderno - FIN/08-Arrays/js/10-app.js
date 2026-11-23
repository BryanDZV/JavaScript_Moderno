const carrito = [
  { nombre: "Monitor 20 Pulgadas", precio: 500 },
  { nombre: "Televisión 50 Pulgadas", precio: 700 },
  { nombre: "Tablet ", precio: 300 },
  { nombre: "Audifonos", precio: 200 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Celular", precio: 500 },
];

// El método map es ideal para cuando quieres transformar los elementos de un array y obtener un nuevo array con los resultados de esa transformación. Por ejemplo, si quieres crear un nuevo array que contenga solo los nombres de los productos en el carrito, podrías usar map de la siguiente manera:
const nuevoArray = carrito.map(function (producto) {
  return `Articulo: ${producto.nombre} Precio: $${producto.precio} `;
});

// Muy similar al forEach existe un array metod llamado map, la diferencia es que map te crea un array nuevo...
//Porque forEach no retorna un arreglo; siempre retorna undefined por diseño.
const nuevoArray2 = carrito.forEach(function (producto) {
  return `Articulo: ${producto.nombre} Precio: $ producto.precio} `;
});

console.log(nuevoArray);
console.log(nuevoArray2);
