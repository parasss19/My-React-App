import React from 'react';

import './Card.css';

function Card(props) {

    //card component jha use kia h as wrapper vaha jo class use hui hogi card component par usko yha bhi use krna h varna break  ho jayga styling
    // const classes = 'card' + props.className;  //it will not work  bc coz of this syntax 'card'
    const classes = 'card ' + props.className;

    return (<div className={classes}>
        {props.children}
    </div>);
}
export default Card;
