const readline=require('readline-sync');
let  mote=readline.question("donner le mot tu veux convertir :");
let motinvers= "";
for(let i=mote.length-1;i>=0;i--){
    motinvers+=mote[i];}
console.log(motinvers);