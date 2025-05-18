// Exercicio 5:
// Faça uma calculadora que receba notas de alunos e calcule a média da sala.

const prompt = require('prompt-sync')();
function media (){
  let aluno1 = +prompt('nota');
  let aluno2 = +prompt('nota');
   let soma = aluno1+aluno2; 
   console.log(soma/2);
    }
    media();
  