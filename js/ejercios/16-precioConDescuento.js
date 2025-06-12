let precio = parseInt(prompt(`Ingrese el precio del producto: `));
let precioFinal =0; 

if (precio >= 1000){
   precioFinal = precio - (precio * 0.15);
   document.writeln(`El precio final con descuento es: ${precioFinal}`);
}else {
    precioFinal = precio;
    document.writeln(`El precio final sin descuento es: ${precioFinal}`);
}

