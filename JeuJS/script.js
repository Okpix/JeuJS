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

var tabNbr = [];
for (i = 1; i <= 6; i++){
	tabNbr.push(i)
}

var nbrAleatoire = function(nbr){
	return nbr[Math.floor(Math.random() * nbr.length)];
}

var roll = function(){
	var dice = nbrAleatoire(tabNbr);
	dede.innerHTML = (dice);
  console.log(dede.innerHTML);

  /* si le dé fait 1 le score du tour est remis à zéro grâce à la fonction reset() */
  if (dice == 1) {
    reset();
  }
  else{
    roundhold();
  }
}


/* lancer un dé et l'aditionner au total du current de manière automatique */ 

function roundhold(){
  
  var holdCount = eval(dede.innerHTML.valueOf());
  var currentCount = eval(current1.innerHTML.valueOf());
  var dice = eval(dede.innerHTML.valueOf());

  var add = currentCount + holdCount;

  current1.innerHTML = add;

  
};

function reset(){
  current1.innerHTML = 0;
};

/* conserver le score du tour en cours et déclancher la victoire si le score atteint 100*/ 

function hold(){
  var hold = eval(scoreP1.innerHTML.valueOf());
  var currentCount = eval(current1.innerHTML.valueOf());


  scoreP1.innerHTML = currentCount + hold;
  reset();

  if(scoreP1.innerHTML >= 100){
    alert ('you win');
    start();
  }
}