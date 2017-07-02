import React from 'react';
import {connect} from 'react-redux';
import {initializeGame} from '../../actions';

export const Message = ({onNewGame, win}) => {
  let message;
  if(win === undefined) {
      message = 'Game Drawn!';
  } else if(win) {
      message = 'Player wins!';
  } else {
      message = 'Player loses';
  }

  return (
    <div className='message'>
      <p>{message}</p>
      <button onClick={onNewGame}>New Game</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onNewGame: () => {
    dispatch(initializeGame())
  }
});

export const MessageContainer = connect(undefined, mapDispatchToProps)(Message);
