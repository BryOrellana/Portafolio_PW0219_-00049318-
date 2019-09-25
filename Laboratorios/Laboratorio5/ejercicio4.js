/*4-Elabore una función que llene un arreglo con 20 números de forma aleatoria
 (random), y que pida al usuario adivinar un número, si lo adivina mostrará un 
 mensaje indicando que ganó, si no mostrará que perdió. */

function Ejer4(opcion) {
    var arregloR = [];
    var numR = 0;
    for (let i = 0; i < 20; i++) {
        numR = Math.floor(Math.random() * 10);
        arregloR.push(numR);
    }

    for (let i = 0; i < arregloR.length; i++) {
        if (opcion == arregloR[i]) {
            console.log("Ganaste! Adivinaste el numero:)");
            break;
        }
        if (opcion != arregloR[i] && i == arregloR.length - 1) {
            console.log("Perdiste, no has adivinado el numero:(");
        }

    }
}

/*Ejecutar:*/
Ejer4(2)