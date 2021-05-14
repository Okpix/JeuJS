/* chargement de la page web */

window.addEventListener("load", function(begin) {
  start();
  change();
  show();
});

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

/* gestion des sons du jeu */

var diceSound = new Audio('son/sondede.wav');
var buzzSound = new Audio('son/buzz.wav');
var winSound = new Audio('son/win.wav')


function playSoundDede(){
  diceSound.play();
}

function playSoundBuzz(){
  buzzSound.play();
}

function playSoundWin(){
  winSound.play();
}


/* lancer le dé */

var tabNbr = [];
for (i = 1; i <= 6; i++){
	tabNbr.push(i)
}

var nbrAleatoire = function(nbr){
	return nbr[Math.floor(Math.random() * nbr.length)];
}

var roll = function roll1(){
	var dice = nbrAleatoire(tabNbr);
	dede.innerHTML = (dice);
  console.log(dede.innerHTML);
  playSoundDede();

/* permet d'affecter une image à une face de dé en fonction de son chiffre */

const firstDiceImage = 'images/dice'+ dice +'.png';

document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);

/* si le dé fait 1 le score du tour est remis à zéro grâce à la fonction reset() et on change de joueur */

  if (dice == 1){
    reset();
    playSoundBuzz();
    if(P1turn == 0){
      resetTurn1();
      change2();
    }
    else{
      resetTurn2();
      change();
    }   
  }
  else if(P1turn == 0){
    roundhold();
  }
  else if(P2turn == 0){
    roundhold2();
  }

  if (dice == 1 && P1turn == 1){
    player1.classList.toggle('buzz');
  }else{
    player1.classList.remove('buzz');
  }
  if(dice == 1 && P2turn == 1){
    player2.classList.toggle('buzz');
  }else{
    player2.classList.remove('buzz');
  }
}
 
/* fonction permettant de changer l'aspect visuel en fonction du tour du joueur */
var player2 = document.getElementById('player2');
var player1 = document.getElementById('player1');
var currentPlayer1 = document.getElementById('currentPlayer1');
var currentPlayer2 = document.getElementById('currentPlayer2');

function change(){
    player1.classList.toggle('Round');
    player2.classList.remove('Round');
    currentPlayer2.classList.remove('bg-danger');
    currentPlayer1.classList.toggle('bg-danger');
}
function change2(){
  player2.classList.toggle('Round');
  player1.classList.remove('Round');
  currentPlayer1.classList.remove('bg-danger');
  currentPlayer2.classList.toggle('bg-danger');
}

if (P1turn = 0){
  change();
}else{
  change2();
}

/* lancer un dé et l'aditionner au total du current de manière automatique */ 

var P1turn = 0;
var P2turn = 1;

function roundhold(){
  
  let holdCount = eval(dede.innerHTML.valueOf());
  let currentCount = eval(current1.innerHTML.valueOf());
 

  var add1 = currentCount + holdCount;

  current1.innerHTML = add1;

  if(add1 >= 100){
    playSoundWin();
    alert (texte2.innerHTML + ' win !!!');
    start();
  }
};

function roundhold2(){
  
  let holdCount2 = eval(dede.innerHTML.valueOf());
  let currentCount2 = eval(current2.innerHTML.valueOf());

  var add2 = currentCount2 + holdCount2;

  current2.innerHTML = add2;

  if(add2 >= 100){
    playSoundWin();
    alert (texte4.innerHTML + ' win !!!');
    start();
  }
};

/* outil/fonction pour la gestion des tours des joueurs */

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
    hold2();
  }
}

function hold1(){
  let hold1 = eval(scoreP1.innerHTML.valueOf());
  let currentCount1 = eval(current1.innerHTML.valueOf());


  scoreP1.innerHTML = currentCount1 + hold1;
  reset();
  resetTurn1();
  change2();

  if(scoreP1.innerHTML >= 100){
    playSoundWin();
    alert (texte2.innerHTML + ' win !!!');
    start();
  }
}

function hold2(){
  let hold2 = eval(scoreP2.innerHTML.valueOf());
  let currentCount2 = eval(current2.innerHTML.valueOf());


  scoreP2.innerHTML = currentCount2 + hold2;
  reset();
  resetTurn2();
  change();

  if(scoreP2.innerHTML >= 100){
    playSoundWin();
    alert (texte4.innerHTML + ' win !!!');
    start();
  }
}

/* définir un pseudo pour les joueurs */

var saisie2empty = "player2";
var saisieempty = "player1";

function show(){
  document.getElementById("texte2").innerHTML = 'player 1';
  document.getElementById("texte4").innerHTML = 'player 2';
}

function afficher(){

let saisie = document.getElementById("texte1").value;
let saisie2 = document.getElementById("texte3").value;

if(saisie.length === 0){
  document.getElementById("texte2").innerHTML = 'player 1';
}else{
  document.getElementById("texte2").innerHTML = saisie ;
}

if(saisie2.length === 0){
  document.getElementById("texte4").innerHTML = 'player 2';
}else{
  document.getElementById("texte4").innerHTML = saisie2 ;
}
}