const largo = parseInt(prompt(`Ingrese el largo del rectangulo: `)),
  ancho = parseInt(prompt(`Ingrese el ancho del rectangulo`));

const perimetro = 2*(largo + ancho);
const area = largo * ancho;

document.writeln(`El perimetro es: ${perimetro} <br>`);
document.writeln(`El area es: ${area}`);