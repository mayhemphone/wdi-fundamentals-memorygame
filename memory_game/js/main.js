console.log("Up and Running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

//var cardOne = cards[0];
//var cardTwo = cards[2];
//cardsInPlay.push(cardOne);
//cardsInPlay.push(cardTwo);

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
	console.log ("User flipped " + cards[cardId]);
	
	//push that card to the in play array
	cardsInPlay.push(cards[cardId]);

	//check the cards
	if (cardsInPlay.length === 2){
		console.log("The two cards are: " + cardsInPlay[0] + ", and a " + cardsInPlay[1]);
		checkForMatch();
	};	
};


//test flip
flipCard(0);
flipCard(2);

