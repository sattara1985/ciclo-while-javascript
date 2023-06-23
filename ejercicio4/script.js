// 4. Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.


const palabras = [];
let control=0;

while (control==0) {
  const palabra = prompt("Ingresa una palabra o letra (No ingresa nada para terminar):");
  
  if (palabra === "") {
    control=1;
  }
  
  palabras.push(palabra);
}

console.log("Palabras Capturadas:");
console.log(palabras);
alert('Numeros capturados => '+palabras)