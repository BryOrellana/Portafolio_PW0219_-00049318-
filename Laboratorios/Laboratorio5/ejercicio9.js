/*9-Análisis de una circunferencia: Crear una función en JavaScript que pida 
por el teclado el radio de un circunferencia, y calcule el área de esta y lo 
retorne, si el radio ingresado es negativo o cero, retornará -1. */


function Ejer9(radio){
    var pi = Math.PI;
    if(radio <=0){
       console.log(-1)
    }else{
        let area= pi* Math.pow(radio,2)
        console.log('El area es igual a: ' + area )
    }
}

/*ejecutar:*/
Ejer9(2)