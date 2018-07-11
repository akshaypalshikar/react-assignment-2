import  React  from 'react';

const validateComponent = (props) => {
    let message = "Text too short";
    if(props.length>=5){
        message = "Text long enough";
    }
    
    return(
        <div>
            {message}
        </div>
    );
}

export default validateComponent;