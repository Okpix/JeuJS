/*var button = document.getElementById('game');

function evenement() {
  alert('Vous avez décidé de lancer une nouvelle partie !')
};

button.addEventListener('click', evenement);




/* début de partie */

var scoreP1 = document.getElementById('scoreP1');
var scoreP2 = document.getElementById('scoreP2');
var current1 = document.getElementById('current1');
var current2 = document.getElementById('current2');



function start() {
  var begincount = 0;
  
  scoreP1.innerHTML = begincount;
  scoreP2.innerHTML = begincount;
  current1.innerHTML = begincount;
  current2.innerHTML = begincount;
  dede.innerHTML = begincount;

};


/* lancer le dé */

/*var dede = document.getElementById('dede');
var testbtn = document.getElementById('roll');



function calcul(){
  return Math.floor(Math.random() * 6) + 1;
};

dede.innerHTML = calcul();

console.log(dede);*/

var tabNbr = [];
for (i = 1; i <= 6; i++){
	tabNbr.push(i)
}

var nbrAleatoire = function(nbr){
	return nbr[Math.floor(Math.random() * nbr.length)];
}

var roll = function(){
	var ded = nbrAleatoire(tabNbr);
	dede.innerHTML = (ded);
  console.log(dede.innerHTML)
}


/* garder un dé et l'aditionner au total du current */ 

function hold(){
  
  var holdCount = eval(dede.innerHTML.valueOf());
  var currentCount = eval(current1.innerHTML.valueOf());

  var add = currentCount + holdCount;
  var Count = true;
 
  if(add > 21) {
  reset();
  }
  else {
    current1.innerHTML = add;
    Count = false;
    console.log(Count)
  }
};

function reset() {
  current1.innerHTML = 0;
};