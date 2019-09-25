/*10- Valor absoluto: Escribir una funcion en JavaScript que, dado un número 
real cualquiera, encuentre su valor absoluto y lo retorne. El valor absoluto de 
un número x es igual a x si x > 0, y a -x si x es menor o igual a 0. */

function Ejer10(num){
    if(num<0){
        console.log('El valor absoluto de '+ num + ' es: '+ (-num))
    }else if(num>=0){
        console.log('El valor absoluto de ' + num + ' es: '+ num)
    }
}

/*Ejecutar*/
Ejer10(-100)