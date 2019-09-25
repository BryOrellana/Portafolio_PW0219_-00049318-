/*7)Fibonacci: La serie Fibonacci es una serie matemática muy reconocida, la 
cual tiene como primeros 10 términos: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34. 
Realice una función en JavaScript que reciba un número n como argumento y 
muestre la serie hasta el enésimo término.  */

function Ejer7(num) {
    let n = 0;
    let n1 = 1;
    let aux = 0;
    let arrF = [];
    arrF.push(n);
    arrF.push(n1);
    for (let i = 0; i < num - 2; i++) {
        aux = n + n1;
        n = n1;
        n1 = aux;
        arrF.push(n1);
    }
    console.log(arrF);
}

/*Ejecutar:*/
Ejer7(5)