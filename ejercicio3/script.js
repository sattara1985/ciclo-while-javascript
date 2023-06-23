// 3. Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.

const numeros = [];
let control=0;

while (control==0) {
  const numero = parseInt(prompt("Ingresa un número (ingresa 0 para terminar):"));
  
  if (numero === 0) {
    control=1;
  }
  
  numeros.push(numero);
}

console.log("Numeros capturados:");
console.log(numeros);
alert('Numeros capturados => '+numeros)
