let numero = parseInt(
  prompt(`Ingrese un numero para comprobar si es divisible por 2,3,5 o 7`)
);

document.writeln(`El numero es divisible por: `)

if (numero % 2 === 0) {
    document.writeln(`2`)
}

if (numero % 3 === 0) {
    document.writeln(`3`)
}

if (numero % 5 === 0) {
    document.writeln(`5`)
}

if (numero % 7 === 0) {
    document.writeln(`7`)
}