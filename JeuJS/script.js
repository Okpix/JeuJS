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

  change();
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

 /* si le dé fait 1 le score du tour est remis à zéro grâce à la fonction reset() et on change de joueur */

  if (dice == 1){
    reset();
    if(P1turn == 0){
      resetTurn1();
    }
    else{
      resetTurn2();
    }   
  }
  else if(P1turn == 0){
    roundhold();
  }
  else if(P2turn == 0){
    roundhold2();
  }
}


  
function change(){
    var element = document.getElementById('player1');
    element.classList.toggle("player");
}
function change2(){
  var element = document.getElementById('player2');
  element.classList.toggle("player");
}

/* lancer un dé et l'aditionner au total du current de manière automatique */ 

var P1turn = 0;
var P2turn = 1;

function roundhold(){
  
  var holdCount = eval(dede.innerHTML.valueOf());
  var currentCount = eval(current1.innerHTML.valueOf());
 

  var add = currentCount + holdCount;

  current1.innerHTML = add;

  if(current1.innerHTML >= 100){
    alert ('Player 1 win !!!');
    start();
  }

  
};

function roundhold2(){
  
  var holdCount2 = eval(dede.innerHTML.valueOf());
  var currentCount2 = eval(current2.innerHTML.valueOf());
 

  var add = currentCount2 + holdCount2;

  current2.innerHTML = add;

  if(current2.innerHTML >= 100){
    alert ('Player 2 win !!!');
    start();
  }
  
};


function reset(){
  current1.innerHTML = 0;
  current2.innerHTML = 0;
};

function resetTurn1(){
  P1turn = 1;
  P2turn = 0;
}

function resetTurn2(){
  P1turn = 0;
  P2turn = 1;
}

/* conserver le score du tour en cours et déclancher la victoire si le score atteint 100*/ 




function hold(){
  if (P1turn == 0){
    hold1();
  }
  else{
    hold2()
  }
}


function hold1(){
  var hold1 = eval(scoreP1.innerHTML.valueOf());
  var currentCount1 = eval(current1.innerHTML.valueOf());


  scoreP1.innerHTML = currentCount1 + hold1;
  reset();
  resetTurn1();

  if(scoreP1.innerHTML >= 100){
    alert ('Player 1 win !!!');
    start();
  }
}

function hold2(){
  var hold2 = eval(scoreP2.innerHTML.valueOf());
  var currentCount2 = eval(current2.innerHTML.valueOf());


  scoreP2.innerHTML = currentCount2 + hold2;
  reset();
  resetTurn2();

  if(scoreP2.innerHTML >= 100){
    alert ('Player 2 win !!!');
    start();
  }
}