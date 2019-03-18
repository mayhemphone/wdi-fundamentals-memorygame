console.log("Up and Running!");

var cards = [
	{	
		rank: 'queen',
		suit: 'hearts',
		cardImage: 'images/queen-of-hearts.png'
	},
	{	
		rank: 'queen',
		suit: 'diamonds',
		cardImage: 'images/queen-of-diamonds.png'
	},
	{	
		rank: 'king',
		suit: 'hearts',
		cardImage: 'images/king-of-hearts.png'
	},
	{	
		rank: 'king',
		suit: 'diamonds',
		cardImage: 'images/king-of-diamonds.png'
	}
];

var cardsInPlay = [];

var checkForMatch = function (){
	
	//check if two cards have been flipped
	if (cardsInPlay[0] === cardsInPlay[1]){
		console.log("You found a match!");
	} else {
		console.log("Sorry, Try again!");
	}

};

var flipCard = function (cardId) {
	//id the card
	console.log ("User flipped " + cards[cardId].rank);
	console.log ("User flipped " + cards[cardId].suit);
	console.log ("User flipped " + cards[cardId].cardImage);

	//push that card to the in play array
	cardsInPlay.push(cards[cardId].rank);

	//check the cards
	if (cardsInPlay.length === 2){
		console.log("The two cards are: " + cardsInPlay[0] + ", and a " + cardsInPlay[1]);
		checkForMatch();
	};	
};


//test flip
flipCard(0);
flipCard(2);

