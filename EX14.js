const readline=require('readline-sync');
let prénom=readline.question("donner son prénom :");
let anneNé=readline.questionInt("donner votre anner de naissance :");
console.log("votre mot de passe : "+prénom+anneNé+"!");