import React from 'react';
import {connect} from 'react-redux';
import {deal, stick} from '../../actions';

export const GameStats = ({draws, gameOver, losses, onHit, onStick, wins}) => {
  let disableButtons = false;
  if (gameOver) {
    disableButtons = true;
  }
  return (
    <div className='game-stats'>
      <div className='scores'>
        <p>Wins: {wins}</p>
        <p>Draws: {draws}</p>
        <p>Losses: {losses}</p>
      </div>
      <div className='buttons'>
        <button disabled={disableButtons} onClick={onHit}>Hit</button>
        <button disabled={disableButtons} onClick={onStick}>Stick</button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onHit: () => {
    dispatch(deal(true))
  },
  onStick: () => {
    dispatch(stick());
  }
});

const mapStateToProps = ({draws, gameOver, losses, wins}) => ({
   draws,
   gameOver,
   losses,
   wins
});

export const GameStatsContainer = connect(mapStateToProps, mapDispatchToProps)(GameStats);
