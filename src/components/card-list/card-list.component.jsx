import React from 'react';
import './card-list.component.style.css';

export const CardList = props => {
    return <div className="card-list">{props.children}</div>
}

export default CardList;