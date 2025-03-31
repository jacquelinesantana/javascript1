console.log("Ola Devas!");
//declaração de variável
let n = 2;

console.log(n);
//erro variavel não declarada
//console.log(n2);
console.log(1/0);
let batatinha = "batata frita";

console.log(n*batatinha);
//valor da variavel foi redefinida
batatinha = "5";
console.log(n*batatinha);

let variavel;
console.log(variavel);

let x = null;
console.log(typeof(batatinha));
const estado = "Minas Gerais";
console.log(estado);
//estado = "Acre";
//console.log(estado);

/*
 aqui consigo colocar meu comentário
 de mais de 
 uma linha.
*/

//OPERADORES
/*
 + (soma) -> (concatenar texto )
 - (subtração)
 *(multiplicação)
 /(divisão)
 %(módulo ou resto de divisão)
*/

let numero1 = 5, numero2 = 123;
console.log("Os valores subtraidos resulta em: " + (numero1 - numero2));

let variavel1 = "primeiro texto", variavel2 = "opaaa sou eu aqui";
console.log(`Agora vamos printar a primeira var ${variavel1} 
    \n Agora a segunda var ${variavel2}`);
console.log("Agora vamos printar a primeira var ${variavel1} \n Agora a segunda var ${variavel2}");

let numero3 = 0;
numero3++
console.log(numero3);
console.log(++numero3);
console.log(--numero3);

let num1 = 2, num2 = 5, num3 = 3;
let num4 = "2";
//Operadores relacionais
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 == num4);
console.log(num1 === num4);
console.log(num1 !== num4);