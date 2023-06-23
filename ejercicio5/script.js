// 5. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.

control=0;
while (control==0) {
  const dia = prompt("Ingresa un día de la semana (ingresa 'domingo' para terminar):");
   
  
  switch (dia.toLowerCase()) {
    case "lunes":
      alert("¡Es lunes! Ánimo para iniciar la semana.");
      break;
    case "martes":
      alert("¡Es martes! Continúa con el buen trabajo.");
      break;
    case "miercoles":
      alert("¡Es miércoles! Ya estás a mitad de semana.u");
      break;
    case "jueves":
      alert("¡Es jueves! El fin de semana está cerca.");
      break;
    case "viernes":
      alert("¡Es viernes! Disfruta el fin de semana que se acerca.");
      break;
    case "sabado":
      alert("¡Es sábado! Aprovecha tu día libre.");
      break;
    case "domingo":
      alert("¡Es domingo! Ve a descansar por favor.");
      control=1;
      break;
    default:
      alert("Día no reconocido. Intenta de nuevo.");
  }

}
