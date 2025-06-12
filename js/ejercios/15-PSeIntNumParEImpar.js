let numero = parseInt(prompt(`Ingrese el numero para saber si es par o impar `));

if(numero % 2 === 0){
    document.writeln(`El numero ${numero} es par`);
}else{
    document.writeln(`El numero ${numero} es impar`);
}