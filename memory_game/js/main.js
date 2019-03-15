console.log("Up and Running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2];


cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);


//check if two cards have been flipped
if (cardsInPlay.length === 2){
	console.log("User flipped a " + cardOne + ", and a " + cardTwo);
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	};
	if (cardsInPlay[0] !== cardsInPlay[1]){
		alert("Sorry, Try again!");
	}
	
};
