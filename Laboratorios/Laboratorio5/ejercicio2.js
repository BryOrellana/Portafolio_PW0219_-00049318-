/*2-Realice una función que reciba un arreglo de datos numéricos, y muestre la
 suma de todos los elementos del arreglo y su promedio. */

function Ejer2(num) {
    var sum = 0 , prom = 0;
    num.forEach(element => {
        sum = sum + element;
        prom=sum/num.length;
    });
    console.log("Suma:" + sum + " " + "Promedio:" + prom);
}

/*Ejecutar:*/ Ejer2([1,2,3,4,5])