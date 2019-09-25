/*Palíndromo: Se dice que una palabra es palíndroma cuando se puede leer de la 
misma manera tanto de derecha a izquierda y viceversa. Crear una función en
 JavaScript que reciba como parámetro una palabra. La función debe retornar si
  la palabra es palíndroma o no.*/

function Ejer5(cadena) {
    var tam = cadena.length;
    var invert = "";

    while (tam >= 0) {
        invert = invert + cadena.charAt(tam);
        tam--;
    }
    
    if (invert == cadena) {
        console.log("La palabra es palíndroma");
    }else{
        console.log("La palabra no es palíndroma");
    }
}

/*ejecutar:*/
Ejer5("civic")