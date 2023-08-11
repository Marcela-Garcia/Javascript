


const revertirPalabra = palabra => {

    return palabra.split("").reverse("").join("");
};

const palabra1 = prompt("Ingrese la primer palabra");
const palabra2 = "Curso";
const palabra3 = "Programacion";

console.log("Palabra 1 al revés:" + revertirPalabra(palabra1));
document.write("Palabra 1 al revés:" + revertirPalabra(palabra1));

console.log("Palabra 2 al revés:" + revertirPalabra(palabra2));
document.write("<br>Palabra 2 al revés:" + revertirPalabra(palabra2));

console.log("Palabra 3 al revés:" + revertirPalabra(palabra3));
document.write("<br>Palabra 3 al revés: " + revertirPalabra(palabra3)); 