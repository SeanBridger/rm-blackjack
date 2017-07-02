import React from 'react';
import {connect} from 'react-redux';
import {GameStatsContainer} from './GameStats'
import Hand from './Hand'
import {MessageContainer} from './Message';

export const App = ({dealersHand, gameOver, playersHand, playerWon}) => {
  let message = gameOver ? <MessageContainer win={playerWon} /> : null;
  return (
    <div className='app'>
      <h1>RM - Blackjack</h1>
      <GameStatsContainer />
      {message}
      <div className='hands'>
        <Hand cards={playersHand} title="Player's Hand" />
        <Hand cards={dealersHand} title="Dealer's Hand" />
      </div>
    </div>
  );
}

const mapStateToProps = ({dealersHand, gameOver, playersHand, playerWon}) => ({
   dealersHand,
   gameOver,
   playersHand,
   playerWon
});

export const AppContainer = connect(mapStateToProps)(App);
