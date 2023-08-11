var maximo = Number.MIN_SAFE_INTEGER;
var minimo = Number.MAX_SAFE_INTEGER;
var sumatoria = 0;
var cantidadNumeros = 0;
var numero;

do {
  numero = parseInt(prompt("Ingresa un número entero (ingresa 0 para terminar):"));

  if (!isNaN(numero) && numero !== 0) {
    sumatoria += numero;
    cantidadNumeros++;

    if (numero > maximo) {
      maximo = numero;
    }

    if (numero < minimo) {
      minimo = numero;
    }
  } else if (numero !== 0) {
    alert("Ingresa un número válido.");
  }
} while (numero !== 0);

var promedio = sumatoria / cantidadNumeros;

console.log("Máximo número ingresado: ", maximo); 
document.write("Máximo número ingresado: ", maximo);
console.log("Mínimo número ingresado: ", minimo);
document.write("Mínimo número ingresado: ", minimo);
console.log("Promedio de los números ingresados: ", promedio);
document.write("Promedio de los números ingresados: ", promedio);
