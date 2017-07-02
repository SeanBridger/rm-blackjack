import {createDeck, deal, score} from '../data/deck';

const initializeGame = (currentState) => {
   let deck = createDeck();
   let playersHand = deal(deck, 2);
   let dealersHand = [...deal(deck, 1), {}];

   let gameOver = false;
   let playerWon = false;
   let draws = currentState.draws || 0;
   let losses = currentState.losses || 0;
   let wins = currentState.wins || 0;

   if(score(playersHand) === 21) {
     gameOver = true;
     playerWon = true;
     wins += 1;
   }

   const gameState = {
     dealersHand,
     deck,
     draws,
     gameOver,
     losses,
     playersHand,
     playerWon,
     wins
   };

   return gameState;
};

function gameState(state = {}, action) {
  let deck = state.deck;
  let draws = state.draws || 0;
  let gameOver = state.gameOver;
  let losses = state.losses || 0;
  let playerWon = state.playerWon;
  let wins = state.wins || 0;

  switch(action.type) {
    case 'DEAL_CARDS':
      const card = deal(deck, 1);
      const playersHand = [...state.playersHand, ...card]
      const playersScore = score(playersHand);
      if (playersScore > 21) {
        losses++;
        gameOver = true;
        playerWon = false;
      }
      return Object.assign({}, state, { deck, gameOver, losses, playersHand, playerWon } );
    case 'INITIALIZE_GAME':
      return initializeGame(state);
    case 'SET_SCORES':
      return Object.assign({}, state, { wins: action.wins, losses: action.losses, draws: action.draws } );
    case 'STICK':
      const pHand = state.playersHand;
      let dHand = state.dealersHand.filter(card => {
        const keys = Object.keys(card);
        return keys.indexOf('suit') !== -1;
      });
      while (score(dHand) < 17) {
        let card = deal(deck, 1);
        dHand = [...dHand, ...card];
      }

      const pScore = score(pHand);
      const dScore = score(dHand);

      if (pScore > dScore || dScore > 21) {
        playerWon = true;
        wins++;
      } else if (dScore > pScore) {
        playerWon = false;
        losses++;
      } else if (dScore === pScore) {
        draws++;
        playerWon = undefined;
      }

      return Object.assign({}, state, {
        dealersHand: dHand,
        deck,
        draws,
        gameOver: true,
        losses,
        playerWon,
        wins
      } );
    default:
      return state;
  }
}

export default gameState;
