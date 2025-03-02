const readline=require('readline-sync');
let préFixe=readline.question("donner le prefixe de facture :");
let numero=readline.question("donner le numerro de base :");
let suffixe=readline.question("donner le suffixe :");
console.log(préFixe+"-"+numero+"-"+suffixe);