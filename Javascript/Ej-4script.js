

var caracter = prompt("Ingrese un caracter. Solo puede ser S o N").toUpperCase();
if (caracter=="S" || caracter=="N"){
    console.log("CORRECTO");
    document.write("CORRECTO");
}else{
    console.log("INCORRECTO");
    document.write("INCORRECTO");
}