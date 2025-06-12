let frase = prompt(`Ingrese una frase de hasta 4 caracteres`).toLowerCase();



if( frase.length >= 0 && frase.length <=4){
 document.writeln(`Las vocales de ${frase} son: `);
if (
  frase.charAt(0) == `a` ||
  frase.charAt(0) == `e` ||
  frase.charAt(0) == `i` ||
  frase.charAt(0) == `o` ||
  frase.charAt(0) == `u`
) {
  document.writeln(frase.charAt(0));
}

if(
  frase.charAt(1) == `a` ||
  frase.charAt(1) == `e` ||
  frase.charAt(1) == `i` ||
  frase.charAt(1) == `o` ||
  frase.charAt(1) == `u`
){
    document.writeln(frase.charAt(1));
}

if(
  frase.charAt(2) == `a` ||
  frase.charAt(2) == `e` ||
  frase.charAt(2) == `i` ||
  frase.charAt(2) == `o` ||
  frase.charAt(2) == `u`
){
   document.writeln(frase.charAt(2));;
}

if(
  frase.charAt(3) == `a` ||
  frase.charAt(3) == `e` ||
  frase.charAt(3) == `i` ||
  frase.charAt(3) == `o` ||
  frase.charAt(3) == `u`
){
    document.writeln(frase.charAt(3));
}

}else{
    document.writeln(`La frase contiene mas de 4 caracteres`);
}


