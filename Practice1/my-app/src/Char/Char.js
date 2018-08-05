import React from 'react';

const char = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        text-align: 'center',
        margin: '16px',
        border: '1px solid'
    };

    return(
        <div style={style}>
            <p>{props.username}</p>
        </div>
    );
};

export default char;