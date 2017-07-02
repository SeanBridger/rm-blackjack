export const deal = (deck, num) => {
  let cards = deck.slice(0, num);
  deck.splice(0, num);
  return cards;
};

export const shufflePack = (pack) => {
  let i, j, k;
  for (i = pack.length; i; i -= 1) {
    j = Math.floor(Math.random() * i);
    k = pack[i - 1];
    pack[i - 1] = pack[j];
    pack[j] = k;
  }
};

export const createDeck = () => {
  const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
  const suits = ['C', 'H', 'D', 'S'];
  const deck = [];
  values.forEach((v) => {
    suits.forEach((s) => {
      deck.push({value: v, suit: s});
    });
  });
  shufflePack(deck);
  return deck;
};

const getCardValue = (v) => {
    return v === 'K' || v === 'Q' || v === 'J' ? 10 : v;
};

export const score = (hand) => {
  if (!hand.length) { return 0; }
  const aceCards = hand.filter(card => card.value === 'A');
  const otherCards = hand.filter(card => card.value !== 'A');
  if (!aceCards.length) {
    return hand.reduce( (s, c) => {
        return s + getCardValue(c.value);
    }, 0);
  } else {
    let totalScore = score(otherCards) + aceCards.length;
    if (totalScore <= 11) {
      totalScore += 10;
    }
    return totalScore;
  }
};
