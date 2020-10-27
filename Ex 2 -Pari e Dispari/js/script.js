//definisco la mia funzione random che prenderà un numero casuale
function getRandom(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
}
//definisco la funzione che mi verifica se la somma è pari o Dispari
function evenOdd(num1, num2){
  var add = parseInt(num1) + parseInt(num2);
  var result;
  if(add % 2 == 0){
    result = "pari";
  } else {
    result= "dispari";
  }
  return result;
}
// prendo il bottone dall'HTML
var gameBtnEl = document.getElementById('gameBtn');

// do istruzioni al bottone su come reagire al click
gameBtnEl.addEventListener('click', function(){

// prendo gli elementi che mi servono dall'html e gli do una variabile
var myNumEl = document.getElementById("myNum").value;
var oddOrEven;
var addNumEl = document.getElementById("addNum");
var numMyEl = document.getElementById("numMy");
var numPcEl = document.getElementById("numPc");
var winMessageEl = document.getElementById("winMessage");
var pariDispariEl = document.getElementById("pariDispari").value;
pcNumberEl = document.getElementById("pcNumber");
//genero il numero random per il pc
pcNumberEl = (getRandom(1, 5));

//faccio la somma dei due numeri e verifico se siano pari o Dispari
numMyEl.innerHTML = ("mio numero " + myNumEl);
numPc.innerHTML = ("numero pc " + pcNumberEl);
oddOrEven = evenOdd(pcNumberEl, myNumEl);
addNumEl.innerHTML = ("la somma è " + oddOrEven);
if(pariDispariEl == "even" && oddOrEven == "pari"){

  winMessageEl.innerHTML = "Hai vinto!";

} else if(pariDispariEl == "even" && oddOrEven == "dispari"){

  winMessageEl.innerHTML = "ha vinto il pc!";

} else if(pariDispariEl == "odd" && oddOrEven == "dispari"){

  winMessageEl.innerHTML = "Hai vinto!";

} else if(pariDispariEl == "odd" && oddOrEven == "pari"){

  winMessageEl.innerHTML = "ha vinto il pc!";
}

});
