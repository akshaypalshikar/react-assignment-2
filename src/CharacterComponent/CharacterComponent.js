import React from 'react';
import CharacterComponent from './CharacterComponent.css'

const characterComponent = (props) =>{
    return(
        <label onClick = {props.clicked} className="CharacterComponent">{props.char}</label>
    );
}

export default characterComponent;

