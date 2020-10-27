
//definisco funzione che mi inverte la mia parola

function wordReverse(inputWord){
  var containerChars = inputWord.split("");

  containerChars.reverse();

  return containerChars.join("");
}
//definisco la funzione che mi compara la parola inversa con quella scritta normale
function isPalindrome(inputWord){

  var message = "la parola non è Palindroma";

  if (inputWord == wordReverse(inputWord)){

    message = "la parola è Palindroma!";
  }
  return message;
}

//definisco una variabile al bottone
var checkButtonEl = document.getElementById("checkButton");

checkButtonEl.addEventListener('click', function(){

  // prendo gli elementi che mi servono dall'html e gli assegno una variabile
  var inputWordEl = document.getElementById("inputWord").value;

  var messagePalEl = document.getElementById("messagePal");

  //prendimi in considerazione il mio input e invertilo tramite la mia funzione su un'altra variabile
  var inputWordReverse = wordReverse(inputWordEl);
  //verifico se è palindroma confrontandola con la sua versione invertita tramite la mia funzione
  messagePalEl.innerHTML = isPalindrome(inputWordReverse);



});
