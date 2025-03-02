const readline=require('readline-sync');
console.log("donner le duréé :");
let heure=readline.questionInt("donner l'heure :");
let min=readline.questionInt("donner minutes :");
let sec=readline.questionInt("donner  seconde :");
let dure=heure*3600+min*60+sec;
console.log(`le nombre totale de seconde est : ${dure}`);