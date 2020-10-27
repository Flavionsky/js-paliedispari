// //definisco funzione che mi inverte la mia parola
//
// function wordReverse(inputWord){
//   var containerChars = inputWord.split("");
//
//   containerChars.reverse();
//
//   return containerChars.join("");
// }
// //definisco la funzione che mi compara la parola inversa con quella scritta normale
// function isPalindrome(inputWord){
//
//   var message = "la parola non è Palindroma";
//
//   if (inputWord == wordReverse(inputWord)){
//
//     message = "la parola è Palindroma!";
//   }
//   return message;
// }
//
// //definisco una variabile al bottone
// var checkButtonEl = document.getElementById("checkButton");
//
// checkButtonEl.addEventListener('click', function(){
//
//   // prendo gli elementi che mi servono dall'html e gli assegno una variabile
//   var inputWordEl = document.getElementById("inputWord").value;
//   var messagePalEl = document.getElementById("messagePal");
//
//   //prendimi in considerazione il mio input e invertilo tramite la mia funzione su un'altra variabile
//   var inputWordReverse = wordReverse(inputWordEl);
//   //verifico se è palindroma confrontandola con la sua versione invertita tramite la mia funzione
//   messagePalEl.innerHTML = isPalindrome(inputWordReverse);
//
//
//
// });
//definisco la funzione che mi compara la parola Palindroma
function isPalindrome(inputWord){
  //levo gli spazi nel caso in cui avessimo un frase da esaminare
  var charContainer = inputWord.split(" ").join("");
  //definisco il mio array che conterrà la stringa inversa
  var charReverse = [];
  //inserisco carattere per carattere al contrario nel mio array reverse
  for(var i = charContainer.length - 1; i >= 0; i--){
    charReverse.push(charContainer[i]);
  }
     var message;
     //comparo l'array di partenza con l'array inverso
     if(charReverse.join("") == charContainer){
       return message = "è palindroma!";
     } else{
       return message = "non è palindroma";
     }
}
//definisco una variabile al bottone
var checkButtonEl = document.getElementById("checkButton");

checkButtonEl.addEventListener('click', function(){

  // prendo gli elementi che mi servono dall'html e gli assegno una variabile
  var inputWordEl = document.getElementById("inputWord").value;
  var messagePalEl = document.getElementById("messagePal");
  //inserisco il messaggio che uscirà dalla funzione nell'HTML
  messagePalEl.innerHTML = isPalindrome(inputWordEl);

});
