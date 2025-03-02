const readline=require('readline-sync');
let  palindrome=readline.question("donner le mot tu veux convertir :");
let estpalindre=true;
for(let i=0,j=palindrome.length-1;i<j;i++,j--){
    if(palindrome[i] != palindrome[j]){
        estpalindre=false;
        break;
    }}
    if(estpalindre){
console.log("le mot est palindrome ");
    }
    else
        console.log("le mot n' pas un palindrome");