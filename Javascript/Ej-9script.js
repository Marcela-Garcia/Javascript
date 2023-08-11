
let cadena = prompt("Ingrese la cadena");
let resultado="";
for (let i = 0; i < cadena.length; i++) {
    resultado = resultado + cadena.substring(i, i + 1) + " ";
}
window.alert(resultado);
document.write(resultado); 