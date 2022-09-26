import React from 'react';
import './Card.css'

const Card = (props) => {
    return (
        <div>
            <h3>Total Card Item: {props.card.length}</h3>
        </div>
    );
};

export default Card;