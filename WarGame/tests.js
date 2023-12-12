const expect = chai.expect;
const assert = chai.assert;

//syntax
   // function {
    // }
    // it('#Should....', () => {
    //     expect((     ()).to.equal('')
    // })



//  TEST THAT DECK CONTAINS 52 CARDS

describe('War Game Unit Tests', () => {

    describe('#createDeck', () => {
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

    let testDeck = new Deck;
    testDeck.createDeck();

    it('should create an array containing 52 card objects', () => {
        expect(testDeck.deck.length).to.equal(52)
    })
    
 // TEST THAT THE SHUFFLED DECK IS DIFFERENT THAN THE ORIGINAL DECK
    
    describe('#shuffleDeck', () => {
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

    let testDeck = new Deck;
    testDeck.createDeck();
            it('should change the order of cards to be random', () => {
            expect(testDeck === testDeck.shuffleDeck).to.equal(false);
            })
        })
    })
})
