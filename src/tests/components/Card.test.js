import { expect } from 'chai';
import { createDeck, deal } from '../../data/deck';

describe('Card', () => {
    describe('createDeck()', () => {
        it('returns a new deck', () => {
            expect(createDeck()).to.be.instanceOf(Array);
        });
        it('has 52 elements', () => {
            expect(createDeck().length).to.eq(52);
        });
    });

    describe('deal()', () => {
        const deck = createDeck();
        const num = 5;
        const cards = deal(deck, num);

        it('returns new deck with cards removed', () => {
            expect(deck.length).to.eq(52 - num);
        });

        it('player has correct number of cards', () => {
            expect(cards.length).to.eq(num);
        });
    });
});
