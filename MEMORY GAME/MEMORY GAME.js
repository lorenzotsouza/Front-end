const FRONT = "card-front"
const BACK = "card-back"

let techs = ['bootstrap',
    'aws',
    'bootstrap',
    'css',
    'git',
    'html',
    'javascript',
    'mysql',
    'postgresql',
    'python'];

let cards = null;

function starGame() {
        cards = createCardsFromTechs(techs);
        shuffleCards(cards);
        console.log(cards);
    }

function shuffleCards(cards) {
    let currentIndex = cards.length;
    let randomIndex = 0;

    while(currentIndex !== 0) {

        randomIndex = Math.floor(Math.random * currentIndex)
        currentIndex--;
        
        [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]]


    }
}


createCardsFromTechs(techs);
function createCardsFromTechs(techs) {

    let cards = [];

    for (let tech of techs) {
        cards.push(createPairFromTech(tech));
    }

    return (cards.flatMap(pair=>pair))

}

function createPairFromTech(tech) {

        return [{
            id: createIdWithTech(tech),
            icon: tech,
            flipped: false,
        }, {
            id: createIdWithTech(tech),
            icon: tech,
            flipped: false,
        }]

}

function createIdWithTech(tech) {
    return tech + parseInt(Math.random() * 1000);

}