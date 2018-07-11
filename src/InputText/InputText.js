import  React  from 'react';
import ValidateComponent from '../ValidateComponent/ValidateComponent'

const inputText = (props) => {
    return(
        <div>
            <textarea onChange={props.changed} value={props.text}/>
            <br/>
            <label>Length</label> {props.length}
            <ValidateComponent {...props}/>
        </div>
    );
}

export default inputText;
