const readline=require('readline-sync');
let mot=readline.question("donne le mots :");
let motInverse='';
for(let j=mot.length-1;0<=j;j--){
    motInverse+=mot[j];
}
console.log("le mote inverser est ",motInverse);
