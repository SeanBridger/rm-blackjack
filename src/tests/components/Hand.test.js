import { expect } from 'chai';
import { createDeck, deal, score } from '../../data/deck';

describe('cards.js', () => {
    describe('score()', () => {
        it('calculates correct score', () => {
            let hand = [
              {value: 4},
              {value: 8}
            ];
            expect(score(hand)).to.eq(12);
            hand = [
              {value: 3},
              {value: 3}
            ];
            expect(score(hand)).to.eq(6);
        });

        it('calculates correct score with face cards', () => {
            let hand = [
              {value: 5},
              {value: 'Q'}
            ];
            expect(score(hand)).to.eq(15);
            hand = [
              {value: 'K'},
              {value: 'K'}
            ];
            expect(score(hand)).to.eq(20);
        });
    });
});
