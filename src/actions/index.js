export function initializeGame() {
   return {
     'type': 'INITIALIZE_GAME'
   };
}

export function setScores(wins, losses, draws) {
   return {
     'type': 'SET_SCORES',
     wins,
     losses,
     draws
   };
}

export function deal() {
  return {
    'type': 'DEAL_CARDS'
  }
}

export function stick() {
   return {
     'type': 'STICK'
   };
};
