const readline=require('readline-sync');
let prixHort=readline.questionFloat("donner le prix hors taxe :");
let tauxTva=readline.questionFloat("donner le taux se tva (en  pourcentage :");
console.log(`le prix total TTC est : ${(prixHort*(1+tauxTva/100)).toFixed(2)}`)