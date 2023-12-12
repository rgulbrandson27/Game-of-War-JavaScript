
////////////////////////////---CARD AND DECK CLASSES---//////////////////

const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const suits = ['♠', '♣', '♥', '♦'];

class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }
    describe() {
        return this.value + " of " + this.suit;
    }
    getRank() {
         return values.indexOf(this.value);
    }
}

class Deck {
    constructor() {
        this.deck = [];
    }
    createDeck() {
    for (let i=0; i < values.length; i++) {
       for (let j=0; j < suits.length; j++) {
            this.deck.push(new Card(values[i], suits[j]));
            }
        }
    }
    shuffleDeck() {
        this.deck = this.deck.sort(() => Math.random() -0.5)    //note this is not the "most random" way to shuffle in JS
    }
}

///////////////////////////////---PLAYER CLASS---//////////////////
class Player {
    constructor() {
    this.score = 0;
    this.hand = [];

    }
    playTopCard() {
        return this.hand.shift();
    }

    addPoint() {
        return this.score = this.score +1;
    }
}

//////////////////////////////---GAME SET-UP---///////////////////////

const p1 = new Player();
const p10 = new Player();

let gameDeck = new Deck();
gameDeck.createDeck();
gameDeck.shuffleDeck();
console.log(gameDeck);    //---use to show deck has 52 cards and has been shuffled



function dealCards() {
    while (gameDeck.deck.length > 0) {
        p1.hand.push(gameDeck.deck.shift());
        p10.hand.push(gameDeck.deck.shift());
    }
}

dealCards();

console.log(p1.hand);        //---use to show each player's hand contains 26 cards
console.log(p10.hand);
console.log(gameDeck);      //---should now have 0 cards


//////////////////////////////---GAME-PLAY---///////////////////////

function play() {
    
    for (i = 1; i <=26; i++) {
        let playerOneCard = p1.playTopCard();
        let playerTwoCard = p10.playTopCard();
        // let playerOneShow = playerOneCard.describe();            //trying here to get both "describes" on same line but not working since each is its own console.log function
        // let playerTwoShow = playerTwoCard.describe();
       
        console.log(`----------ROUND ${i}----------`);
        
        console.log(`Player One        Player Two`);
        console.log(`  ${playerOneCard.describe()}           ${playerTwoCard.describe()}`);
        // console.log(`${playerOneShow} ${playerTwoShow}`);
        playerOneCard.getRank();
    

    if (((playerOneCard.getRank())) > (playerTwoCard.getRank())) {
        p1.addPoint();
        console.log(`    <<----- +1`);
        }   else if 
        (((playerOneCard.getRank())) < (playerTwoCard.getRank())) {
        p10.addPoint();
            console.log(`            +1 ------>>   `);
        }   else    {
        console.log(`Tie - no point awarded`)
        }
    }
        }   
play();

function announceWinner() {
    console.log(`----------------------------`);

    console.log(`  [♥]]] [♦]]] [♣]]] [♠]]]  `);
    console.log(`----------------------------`);
    console.log(`           SCORE           `);
    console.log(`
    Player One: ${p1.score}    
    Player Two: ${p10.score}`)
    console.log(`---------------------------`);

    if (p1.score > p10.score) {
        console.log(`Player One is the Winner!!!`);
    }   else if (p1.score < p10.score) {
        console.log(`Player Two is the Winner!!!!`);
    }   else {
        console.log(`Tie Game - Play Again!`);
    }
}

announceWinner();
