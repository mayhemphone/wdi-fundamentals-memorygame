console.log("Up and Running!");

//keep track of successful matches
var wins = 0;

//these are the 4 cards and their info
var cards = [
	{	
		cardNum: 0,
		rank: 'queen',
		suit: 'hearts',
		cardImage: 'images/queen-of-hearts.png'
	},
	{	
		cardNum: 1,
		rank: 'queen',
		suit: 'spades',
		cardImage: 'images/queen-of-spades.png'
	},
	{	
		cardNum: 2,
		rank: 'king',
		suit: 'hearts',
		cardImage: 'images/king-of-hearts.png'
	},
	{	
		cardNum: 3,
		rank: 'king',
		suit: 'spades',
		cardImage: 'images/king-of-spades.png'
	}
];

//Selected cards array
var cardsInPlay = [];

var clearBoard = function (){

	var myNode = document.getElementById("game-board");
	while (myNode.firstChild) {
    	//Removes the imgs
    	myNode.removeChild(myNode.firstChild);
	}
	//removes the cards from the selected array
	cardsInPlay.length = 0;
	//makes the board again
	createBoard();
}


var createBoard = function (){
	//shuffle function call here
	shuffle(cards);
	for (var i = 0; i < cards.length; i++){
		//creates the img element, then sets all of the attributes
		var cardElement = document.createElement('img');
		//sets them all to the back img
		cardElement.setAttribute('src', 'images/back.png');
		//pulls attributes for each card from the corresponding cards array
		cardElement.setAttribute('cardNum', cards[i].cardNum);
		cardElement.setAttribute('rank', cards[i].rank);
		cardElement.setAttribute('suit', cards[i].suit);
		cardElement.setAttribute('cardImage', cards[i].cardImage);
		//set click event
		cardElement.addEventListener("click", flipCard);
		//inserts the img element into html
		document.getElementById("game-board").appendChild(cardElement);
		console.log(cardElement);
	}
	if (wins === 1){
		//singular message
		document.getElementById("score").innerHTML ="<h1>" + wins + " match so far!</h1>";
	} else{
		//plural message
		document.getElementById("score").innerHTML ="<h1>" + wins + " matches so far!</h1>";
};
}

//fisher yates shuffle found on https://www.frankmitchell.org/2015/01/fisher-yates/
var shuffle = function (array) {
  var i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

var checkForMatch = function (){
	
	//check if two cards have been flipped
	if (cardsInPlay[0] === cardsInPlay[1]){
		//alert("You found a match!");
		//save score
		wins = wins + 1
		document.getElementById("score").innerHTML ="<h1 style='color:green;'>YOU MATCHED!</h1>";
		
		

	} else {
		//alert("Sorry, Try again!");
		document.getElementById("score").innerHTML ="<h1 style='color:red;'>TRY AGAIN!</h1>";
	}

};

var flipCard = function () {
	//id the card
	var cardId = this.getAttribute('cardNum');
	//alert(cardsInPlay.length + 1);
	console.log ("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);

	//push that card to the in play array
	cardsInPlay.push(cards[cardId].rank);

	//show face
	this.setAttribute('src', cards[cardId].cardImage);

	//check the cards
	if (cardsInPlay.length === 2){
		console.log("The two cards are: " + cardsInPlay[0] + ", and a " + cardsInPlay[1]);
		checkForMatch();
	}
};


//Create the board
createBoard();

