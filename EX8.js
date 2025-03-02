const readline=require('readline-sync')
let prixht=readline.questionFloat("donner le prix hort taxe :");
let TVA=readline.questionFloat("donner le TVA :");
let prixT=prixht+(prixht*TVA/100);
console.log(`le prix total TTC est : ${prixT.toFixed(2)}`);