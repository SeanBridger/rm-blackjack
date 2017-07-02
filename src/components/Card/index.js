import React from 'react';

const getIcon = (suit) => {
  switch(suit) {
    case 'C':
      return <span>&clubs;</span>;
    case 'D':
      return <span>&diams;</span>;
    case 'H':
      return <span>&hearts;</span>;
    case 'S':
      return <span>&spades;</span>;
    default:
      return null;
  }
};

const Card = ({faceDown, suit, value}) => {
  return (
    <div className={`card ${!faceDown ? suit : 'face-down'}`}>
      <p>{getIcon(suit)} {value}</p>
    </div>
  );
};

export default Card;
