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
/*
let num1 = 2, num2 = 5, num3 = 3;
let num4 = "2";
*/
if(num1> num2){
    console.log("saída do if");
}else{
    console.log("saída do else");
}

// EStrutura de decisão - Swhitch case

let opcao = 2;

switch(opcao){
    case 1:
        console.log("Opção 1 selecionada");
        break;

    case 2:
        console.log("Opção 2 selecionada");
        break;
    default:
        console.log("Escolha uma opção válida");
        
}

//if ternario
/*
condição ? resultado verdadeiro : resultado do falso;
*/
let idade = 15
console.log(
    idade>18? 
    "Bem vinda(o) ao sistema": 
    "Você não tem idade para acessar, chame sua mãe");

    console.log(
        idade>=15? 
        "Agora você pode ver o site": 
        "Continua com acesso restrito");

//Estrutura de repetição
/*
for(valor inicial; condição final; incremento){...}
*/

let contador = 0;
for(contador; contador < 4; contador ++){
    console.log("o contador agora vale: " + contador);
}

/*
While(condição){

}
*/
let condicao1 = 10;
while(condicao1 > 5){
    console.log("Condição do while esta ok, valor é: " + condicao1);
    condicao1 --;
}

/*
do{
....
}while(condição)
*/

let condicao2 = 3;

do{
    console.log("valor da condição 2 é: " + condicao2);

}while(condicao2 >= 10);
 //    condição falsa

 do{
    console.log("valor da condição 2 é: " + condicao2);
condicao2 ++;
}while(condicao2 <= 10);
 //    condição falsa

 //FUNÇOES
 
 /*
 function nome(argumentos){
    código
 }
 */

 function digaOla(nome){
    console.log("Ola diva " + nome);

 }

 digaOla("Gaby");
 digaOla("Daniele");

 function horaDoLanche(tipoLanche){
    return "O lanche hoje será: " + tipoLanche;
 }

 console.log(horaDoLanche("Batata"));
 
function n2 (n){
    console.log(n + 2)
}
 // ()=>

//criou uma constante    
const exibir = n => console.log(n + 2);
 //           argumentos 

 exibir(15);
 exibir(22);
                //array
 let numeros = [1,2,3,4,5,6,7,8,9];
             //[0,1,2,3,4,5,6,7,8]

//exibir uma posição do array
console.log(numeros[5]);

//
numeros.forEach(numero => {
    console.log(numero);
});

//tratamento de exceções
/*
try {
    codigo que vamos tentar executar
}catch(error){
nossa exceção
}
*/

try {
    
    // Tenta converter um número em letras maiúsculas
    const resultado = converte("123");

    console.log(resultado);

} catch (error) {
    // Captura o erro e informa ao usuário
    console.error("Não é possível converter para letras maiúsculas!");
}finally{
    console.log("Eu sempre estarei aqui")
}

// Função para formatar uma string com todas as letras maiúsculas
function converte(conteudo){
    return conteudo.toUpperCase();
}