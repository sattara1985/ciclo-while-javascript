// 2. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.


const numero1 = parseInt(prompt("Ingresa el primer número (entre 1 y 50):"));
const numero2 = parseInt(prompt("Ingresa el segundo número (entre 1 y 50):"));

console.log("Números del 1 al 50, con '¡Lotería!' para", numero1, "y", numero2);

for (let i = 1; i <= 50; i++) {
  if (i === numero1 || i === numero2) {
    console.log(i + " ¡Lotería!");
  } else {
    console.log(i);
  }
}