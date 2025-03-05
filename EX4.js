//EX4:
const readline=require('readline-sync');
let age=readline.questionInt("donner votre age :")
estAdulte=false;
if(age >= 18){
   estAdulte=true;
  console.log(estAdulte);
}
else{
   estAdulte=false;
  console.log(estAdulte);
}