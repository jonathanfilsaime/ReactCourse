import React from 'react';

const validate = (props) => {
    
    let paragraph = null;
    
    if(props.username > 5){
        paragraph = (
            <div>
                <p>too long</p>
            </div>
        );
    }else{
        paragraph = (
            <div>
                <p>too short</p>
            </div>
        );
    }
    
    return(
        <div>
            {paragraph}
        </div>
    );
};

export default validate;