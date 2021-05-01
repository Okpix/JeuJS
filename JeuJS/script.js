var button = document.getElementById('game')

function evenement() {
  alert('Vous avez décidé de lancer une nouvelle partie !')
}

button.addEventListener('click', evenement)




/* début de partie */

const scoreP1 = document.getElementById('scoreP1');
const scoreP2 = document.getElementById('scoreP2');
const current1 = document.getElementById('current1');
const current2 = document.getElementById('current2');



function start() {
  const begincount = 0;
  

  scoreP1.innerHTML = begincount;
  scoreP2.innerHTML = begincount;
  current1.innerHTML = begincount;
  current2.innerHTML = begincount;

};


/* lancer le dé */
const dede = document.getElementById('dede');
var button = document.getElementById('roll');

function getRandomInt() {
  return Math.floor(Math.random() * 6) +1;
}

console.log(getRandomInt());

dede.innerHTML = getRandomInt();


/* expected output: 1 2 3 4 5 6 */

