// 1. Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.

const numero = parseInt(prompt("Ingresa un número:"));

console.log("Los múltiplos de 5 hasta el número", numero, "son:");

for (let i = 1; i <= numero; i++) {
  if (i % 5 === 0) {
    console.log(i+'  es un multiplo de 5');
  }else{
    //console.log('este numero no es multiplo '+i);
  }
}
