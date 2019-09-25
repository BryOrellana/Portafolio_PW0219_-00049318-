/*8-Conversor decimal-binario: Crear una función en JavaScript, que reciba como 
parámetro un entero positivo. La función debe devolver el valor en binario. */

var Ejer8 = function(num){
    let valorB = num.toString(2);
 console.log("El número decimal %s en binario es %s", num, valorB);
}

/*Ejecutar: */
Ejer8(4);