

var limite = parseInt(prompt("Ingrese un valor límite positivo:"));
var suma = 0;
var contador = 0;

while (suma <= limite) {
    var numero = parseFloat(prompt("Ingrese un número:"));
    suma += numero;
    contador++;
}

console.log("Se ingresaron " + contador + " números.");
document.write("Se ingresaron " + contador + " números.");

console.log("La suma de los números introducidos es " + suma + ", que supera el límite inicial de " + limite + ".");
document.write("La suma de los números introducidos es " + suma + ", que supera el límite inicial de " + limite + ".");

/*En JavaScript, los números pueden ser enteros o de punto flotante 
(números con decimales). La función parseFloat() se utiliza para convertir una cadena de 
caracteres en un número de punto flotante. Si la cadena contiene un número válido con decimales,
 la función devolverá ese número. Si la cadena no es válida como número de punto flotante, 
 la función devolverá NaN (que significa "Not-a-Number").*/