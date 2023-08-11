
var num1 = parseInt(prompt("Ingrese el primer numero a operar (ENTERO)"));
var num2 = parseInt(prompt("Ingrese el segundo numero a operar (ENTERO)"));

console.log("El primer numero ingresado es " + num1);
console.log("El segundo numero ingresado es " + num2);

var op = prompt("Ingrese qué operacion desea realizar (S/R/M/D)").toUpperCase();

switch (op) {
    case "S":
        var suma = num1 + num2;
        console.log("La suma es: " + suma);
        document.write("La suma es: " + suma);
        break;
    case "R":
        var resta = num1 - num2;
        console.log("La resta es: " + resta);
        document.write("La resta es: " + resta);
        break;
    case "M":
        console.log("La multiplicacion es: " + (num1 * num2));
        document.write("La multiplicacion es: " + (num1 * num2));
        break;
    case "D":
        if (num2 !== 0) {
            console.log("La division es: " + (num1 / num2));
            document.write("La division es: " + (num1 / num2));
        } else {
            console.log("No se puede dividir por cero.");
            document.write("No se puede dividir por cero.");
        }
        break;
    default:
        console.log("Operación no válida.");
        document.write("Operación no válida.");
}
