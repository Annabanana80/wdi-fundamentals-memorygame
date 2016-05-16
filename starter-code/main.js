/*var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';

/*if (cardOne===cardTwo && cardThree===cardFour) {
	alert ('You found a match!');
} else {
	alert('Sorry, try again!');
}*/
var cards = ['queen','queen','king','king'];
var cardsInPlay =[];

var board = document.getElementById('game-board');

var createBoard = function() {
for (i=0; i < cards.length; i++) {
	var cardElement = document.createElement('div');
	cardElement.className = 'card';
	cardElement.setAttribute ('data-card', cards[i]);
 	cardElement.addEventListener ('click', isTwoCards);

	board.appendChild(cardElement);
	}
};
 
var isMatch = function(){
	if (cards[0]===cards[1]) {
		alert ("You found a match!");
	} else if (cards [2]===cards[3]){
		alert ("You found a match!");
	}else {
		alert("Sorry, try again!");
	}
};

var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute ('data-card')==='king') {
		cardElement.innerHTML ="<img src="http://i.imgur.com/09wsiBYt.png"/>";
	} else {
		cardElement.innerHTML = "<img src="http://i.imgur.com/qS50KAAt.png"/>";
	}
	if (cardsInPlay.length===2) {
		isMatch(cardsInPlay);
		cardsInPlay =[];
	}
}

