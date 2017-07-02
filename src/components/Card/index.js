import React from 'react';

const getIcon = (suit) => {
  switch(suit) {
    case 'C':
      return <p>&clubs;</p>;
    case 'D':
      return <p>&diams;</p>;
    case 'H':
      return <p>&hearts;</p>;
    case 'S':
      return <p>&spades;</p>;
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
