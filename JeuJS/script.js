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
	var a = nbrAleatoire(tabNbr);
	dede.innerHTML = (a);
  console.log(dede.innerHTML)
}


/* garder un dé */ 

function hold(){

  var hold = current1.innerHTML + dede.innerHTML;
  current1.innerHTML = hold;
}