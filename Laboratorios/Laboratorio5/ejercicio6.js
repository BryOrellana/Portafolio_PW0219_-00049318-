/*6-Ordenamiento de array: Crear una función en JavaScript que ordene los 
elementos de un Array en orden ascendente.  */

function Ejer6(arr) {
    var ma = 0;
    for (let i = 0; i < arr.length; i++) {
        me = arr[i];
        for (let j = 0; j < arr.length; j++) {
            if (me < arr[j]) {
                me = arr[j];
                var aux = arr[i];
                arr[i] = arr[j];
                arr[j] = aux;
            }
        }
    }
    console.log(arr)
}

/*Ejecutar:*/
Ejer6([6, 1, 4, 8, 3, 5, 9, 3])