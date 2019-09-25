/*3-Realice una función en JS, que dados un número y un arreglo como parámetros, 
retorne cuantas ocurrencias existen de ese número dentro del arreglo.*/ 

function Ejer3(n,arr) {
    var ocurrencias = 0;
    for (let i = 0; i < arr.length; i++) {
        if (n == arr[i]) {
            ocurrencias++;
        }       
    }
    if (ocurrencias != 0) {
        console.log("Ocurrencias:" + ocurrencias);
    }
    else{
        if (ocurrencias == 0) {
            console.log("No hay ocurrencias del numero:" + n + " en el arreglo");
        }
    }
}

/*Ejecutar:*/Ejer3(3,[1,4,2,1,3,3,5,6])