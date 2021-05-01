# évaluation n°2 : création d'un jeu de dés en Javascript

# cahier des charges

# 1 présentation du projet

Je dois créer un petit jeu en Javascript. 

Règles :
Le jeu comprend 2 joueurs sur un seul et même écran. 
Chaque joueur possède un score temporaire (ROUND) et un score global (GLOBAL).
À chaque tour, le joueur a son ROUND initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite. Le 
résultat d’un lancer est ajouté au ROUND. 
Lors de son tour, le joueur peut décider à tout moment de:
- Cliquer sur l’option “Hold”, qui permet d’envoyer les points du ROUND vers le GLOBAL. Ce sera alors le
tour de l’autre joueur.
- Lancer le dé. S’il obtient un 1, son score ROUND est perdu et c’est la fin de son tour.
Le premier joueur qui atteint les 100 points sur global gagne le jeu.


# 2 Description graphique et ergonomique

- Intégration de la maquette fournie dans l'énnoncé. 
- Les ressources seront disponibles dans un dossier images
- La font sera Lato (google font) : https://fonts.google.com/specimen/Lato
- Le Framework CSS de votre choix. Pour ma part Bootstrap sera utilisé. 


# 3 Description fonctionnelle

Création d’un petit jeu sur navigateur web à l’aide du DOM.

En fin de prestation, le commanditaire doit recevoir les différents éléments suivants :
- Un jeu fonctionnel
- Une interface lisible qui correspond à la maquette fournie.

Ceci implique plusieurs fonctionnalités globales :

- La possibilité de créer une nouvelle partie
- La possibilité de retenir le score courant
- La possibilité de lancer le dé
- La possibilité d’avoir 2 joueurs

# barème de l'évalutation du

1. Connaître et utiliser un environnement de développement (2 points).
2. Écrire un algorithme et l’intégrer dans une page web avec des scripts événementiels et avec un langage
de script côté client (5 points).
3. Utilisation des normes ECMAScript (JS) et du DOM (5 points).
4. Connaissance et utilisation d’un framework de présentation de type adaptatif (5 points).
5. Déploiement de la réalisation en ligne (3 points).
