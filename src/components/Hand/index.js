import React from 'react';
import Card from '../Card';

const Hand = ({cards, title}) => {
  return (
    <div className='hand'>
      <h2>{title}</h2>
      {cards.map((card, i) =>
        <Card
          faceDown={!(card.suit && card.value)}
          suit={card.suit}
          value={card.value}
          key={i}
        />
      )}
    </div>
  );
}

export default Hand;
