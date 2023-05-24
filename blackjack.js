const masterDeck = [
    [ '2', 'H' ],  [ '2', 'S' ],  [ '2', 'D' ],
    [ '2', 'C' ],  [ '3', 'H' ],  [ '3', 'S' ],
    [ '3', 'D' ],  [ '3', 'C' ],  [ '4', 'H' ],
    [ '4', 'S' ],  [ '4', 'D' ],  [ '4', 'C' ],
    [ '5', 'H' ],  [ '5', 'S' ],  [ '5', 'D' ],
    [ '5', 'C' ],  [ '6', 'H' ],  [ '6', 'S' ],
    [ '6', 'D' ],  [ '6', 'C' ],  [ '7', 'H' ],
    [ '7', 'S' ],  [ '7', 'D' ],  [ '7', 'C' ],
    [ '8', 'H' ],  [ '8', 'S' ],  [ '8', 'D' ],
    [ '8', 'C' ],  [ '9', 'H' ],  [ '9', 'S' ],
    [ '9', 'D' ],  [ '9', 'C' ],  [ '10', 'H' ],
    [ '10', 'S' ], [ '10', 'D' ], [ '10', 'C' ],
    [ 'K', 'C' ],  [ 'K', 'H' ],  [ 'K', 'D' ],
    [ 'K', 'S' ],  [ 'Q', 'C' ],  [ 'Q', 'H' ],
    [ 'Q', 'D' ],  [ 'Q', 'S' ],  [ 'A', 'C' ],
    [ 'A', 'H' ],  [ 'A', 'D' ],  [ 'A', 'S' ],
    [ 'J', 'C' ],  [ 'J', 'H' ],  [ 'J', 'D' ],
    [ 'J', 'S' ]
  ]

  let currentDeck;




// function I used to create the deck

const createCards = () => {
    const deck = [];
    while (deck.length < 53) {
        for (let j = 2; j < 11; j++){
            deck.push([j.toString(), "H"]);
            deck.push([j.toString(), "S"]);
            deck.push([j.toString(), "D"]);
            deck.push([j.toString(), "C"]);
        }
        for (let j = 0; j < 4; j++){
            const suits = ['C', 'H', 'D', 'S'];
            const faces = ["K","Q","A","J"]
            suits.forEach(entry => {
                deck.push([faces[j], entry]);
            })
        }
        return deck
    };
}

const rand = () => { return Math.floor(Math.random() * (currentDeck.length)); }

const player_hand = [];
const dealer_hand = [];

const draw = (num) => {
    const drawn = [];
    for (let i = 0; i < num; i++) {
        const index = rand();
        const card = currentDeck[index];
        drawn.push(card);
        currentDeck.splice(index,1)
        
    };
    return drawn;
}

const hit_btn = document.getElementById('hit');
const new_btn = document.getElementById('new');
const pSide = document.getElementById('pSide');

const newGame = () => {
    currentDeck = createCards();
    const player_card1 = document.createElement('div');
    player_card1.innerHTML = draw(1);
    pSide.append(player_card1);
    const player_card2 = document.createElement('div');
    player_card2.innerHTML = draw(1);
    pSide.append(player_card2);
}


new_btn.addEventListener('click', signal => {
    while (pSide.firstChild) {
        pSide.removeChild(pSide.firstChild);
    }
    newGame();
})

hit_btn.addEventListener('click', signal => {
    const hit_card = document.createElement('div');
    hit_card.innerHTML = draw(1);
    pSide.append(hit_card);
})