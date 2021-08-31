const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 'J', 'Q', 'K'];
const suits = ['💔', '🖤', '🔶', '🍀'];
const desk = [];

for (let i = 0; i < cards.length; i++) {
    for (let j = 0; j < suits.length; j++) {
        desk.push(cards[i] + suits[j])
    };
};
console.log(desk);

