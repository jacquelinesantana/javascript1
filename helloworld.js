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
    \n Agora a segunda var ${variavel2}`);//interpolar texto e variáveis
console.log("Agora vamos printar a primeira var ${variavel1} \n Agora a segunda var ${variavel2}");
//com aspas teste ele printa a variavel e não o conteúdo da variável

let numero3 = 0;
numero3++
console.log(numero3);
console.log(++numero3);
console.log(--numero3);

let num1 = 2, num2 = 5, num3 = 3;
let num4 = "2";

let y = null;
let yy = "null";
//Operadores relacionais
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 == num4);
//compara se os valores são igual e apenas os valores 
console.log(num1!=num4);
//verificar se os valores são completamente diferentes 2 != "2"
console.log(num1 === num4);
//comparar se os valores são igual e tambémm os tipos dos dados
console.log(num1 !== num4);
//comparar os valores e tbm os tipos de dados 2 != "2"
console.log("testando os nulls da Mari");
console.log(y!=yy);

//OPERADORES LÓGICOS
/*
&& - condição 1 E condição 2 (são verdadeiras) = duas condições verdadeira
|| - condição 1 OU condição 2 (são verdadeiras) = Quando as duas ou uma delas for verdadeira
*/

// Estrutura de decisão
/*
if(condição){...}
let num1 = 2, num2 = 5, num3 = 3;
let num4 = "2";
*/
if(num1 < num2){
    console.log("caiu aqui no if, deu bom!");
}

if(num1 < num2 && num1 > num3){
    console.log("deu certo no if com duas condições");
}

if(num1 < num2 || num1 > num3){
    console.log("deu certo no if com duas condições");
}
/*
  condição 1  ^ condição 2 => apenas uma das condições for verdadeira
^ num1 < num2 ^ num1 > num3
se apenas a condição 1 for verdadeira ouuuu apenas a condição 2 for verdadeira
let num1 = 2, num2 = 5, num3 = 3;
let num4 = "2";
*/

if(num1 < num2 ^ num1 > num3){
    console.log("deu certo no if com duas condições ou ^");
}
if(num1 < num2 ^ num1 < num3){
    console.log("vamos ver se o ou exclusivo sai agora");
}
if(num1 > num2 ^ num1 > num3){
    console.log("vamos ver se o ou exclusivo sai agora denovo");
}

console.log(!true);