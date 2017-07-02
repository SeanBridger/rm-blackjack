import { expect } from 'chai';

import reducer from '../../reducers/';
import { deal, initializeGame, setScores, stick } from '../../actions/';
import {createDeck} from '../../data/deck';

describe('reducer', () => {
   describe("INITIALIZE_GAME", () => {
       const action = initializeGame();

       describe("with empty initial state", () => {
           const initialState = undefined;
           const nextState = reducer(initialState, action);

           it('set up deck', () => {
               expect(nextState.deck.length).to.eq(49);
           });

           it('set up playerHand', () => {
               expect(nextState.playersHand.length).to.eq(2);
           });

           it('set up dealerHand', () => {
               expect(nextState.dealersHand.length).to.eq(2);
           });

           it('sets up gameOver', () => {
               expect(nextState.gameOver).to.eq(false);
           })
       });

       describe("with existing initial state", () => {
           const initialState = {'wins': 10, 'losses': 7, 'draws': 0, 'deck': 'fake deck'};
           const nextState = reducer(initialState, action);

           it('keeps old scores', () => {
               expect(nextState.wins).to.eq(10);
               expect(nextState.losses).to.eq(7);
               expect(nextState.draws).to.eq(0);
           });

           it('updates old variables', () => {
               expect(nextState.deck).not.to.eq('fake deck');
           });
       });

       describe("SET_SCORES", () => {
         const action = setScores(3, 2, 2);

         const initialState = {'wins': 10, 'losses': 7, 'draws': 0, 'deck': 'fake deck'};
         const nextState = reducer(initialState, action);

         it('set wins, losses and draws', () => {
             expect(nextState.wins).to.eq(3);
             expect(nextState.losses).to.eq(2);
             expect(nextState.draws).to.eq(2);
         });

         it('keeps old deck', () => {
             expect(nextState.deck).to.eq('fake deck');
         });
       });

   });
});
