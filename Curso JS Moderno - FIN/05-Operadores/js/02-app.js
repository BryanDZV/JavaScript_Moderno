
const numero1 = 20;
const numero2 = "20";
const numero3 = 30;


// Revisar si 2 valores son iguales o diferentes
console.log(numero1 == numero3);
console.log(numero1 == numero2);


// Typeof
console.log( typeof numero1 );
console.log( typeof numero2 );

// Operador estricto (revisa valor y tipo de dato)
console.log(numero1 === numero2 );

// Diferente a 

// != compara solo el valor (con conversion de tipo).
// 20 != 30 -> true (si son diferentes)
console.log(numero1 != numero3);

// 20 != "20" -> false (convirtiendo "20" a numero, son iguales en valor)
console.log(numero1 != numero2);

// !== compara valor y tipo, sin conversion.
// 20 !== "20" -> true (mismo valor, pero distinto tipo: number vs string)
console.log(numero1 !== numero2);
