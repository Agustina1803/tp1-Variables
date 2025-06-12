const num1 = parseInt(prompt("Ingrese el primer numero: ")), num2 = parseInt(prompt("Ingrese el segundo numero"));

if(num1 > num2){
    document.writeln(`El numero ${num1} es mayor que el numero ${num2}`)
}else{
    document.writeln(`El numero ${num2} es mayor que el numero ${num1}`)
}