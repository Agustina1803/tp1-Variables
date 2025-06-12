let numero = parseInt(prompt(`Ingrese el numero para saber si es divisible por dos: `));

if(numero % 2 === 0){
    document.writeln(`El numero ${numero} es divisible por 2`);
}else{
    document.writeln(`El numero ${numero} no es divisible por 2`);
}