/*1-Realice una función que reciba un arreglo como parámetro y liste los tipos 
    de datos de sus elementos y cuantos de cada tipo.*/

var element;
var s = 0,
    n = 0,
    f = 0,
    ob = 0;

function ejer1(arr) {
    arr.forEach(element => {
        switch (typeof element) {
            case "string":
                s++;
                break;

            case "number":
                n++;
                break;

            case "function":
                f++;
                break;

            case "object":
                ob++;
                break;
        }
        console.log(element);
    });
    console.log("Strings: " + s + " " + "Numbers: " + n + " " + "Functions: " + f + " " + "Objects: " + ob);
}

/*Ejecutar:*/ ejer1([1,"a","b",2,carro1 = { marca: "Toyota"}])


