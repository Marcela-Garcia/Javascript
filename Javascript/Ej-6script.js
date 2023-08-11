

var numero = parseInt(prompt("Ingrese un número entero:"));

if (numero === 0) {
    console.log("El número no es par ni impar.");
    document.write("El número no es par ni impar.");

} else if (numero % 2 === 0) {
    console.log("El número es par.");
    document.write("El número es par.");

} else {
    console.log("El número es impar.");
    document.write("El número es impar.");
}
