// Exercicio 1:
// Receba o valor de uma conta de restaurante,calcule os 10% de gorjeta do garçom.
 
const prompt = require('prompt-sync')();
function dexporcento (){
let pagamento = prompt('dinheiro');
console.log(pagamento*10/100);
}
dexporcento();