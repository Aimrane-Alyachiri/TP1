const readline=require('readline-sync');
let age=readline.questionInt("donner votre age :");
if(age>=18){
    let estAdulte=true;
    console.log(estAdulte);
}
else {
   let estAdulte=false;
     console.log(estAdulte); 

}

   