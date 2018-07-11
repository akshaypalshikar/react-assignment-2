import  React  from 'react';

const inputText = (props) => {
    return(
        <div>
            <textarea onChange={props.changed} value={props.text}/>
            <br/>
            <label>Length</label> {props.length}
        </div>
    );
}

export default inputText;
