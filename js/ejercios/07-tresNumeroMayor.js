const num1 = parseInt(prompt(`Ingrese el primer numero:`)),
  num2 = parseInt(prompt(`Ingrese el segundo numero:`)),
  num3 = parseInt(prompt(`Ingrese el tercer numero: `));

 document.writeln(`Los numero ingresados son: ${num1}, ${num2}, ${num3}`); 

if (num1 > num2 && num1 > num3) {
  document.writeln(`El numero ${num1} es mayo que ${num2} y ${num3}`);
} else if (num2 > num1 && num2 > num3) {
  document.writeln(`El numero ${num2} es mayor que ${num1} y ${num3}`);
} else {
    document.writeln(`El numero ${num3} es mayor que ${num1} y ${num2}`);
}
