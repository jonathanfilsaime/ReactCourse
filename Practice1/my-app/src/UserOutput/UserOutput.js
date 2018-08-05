import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return(
        <div className="UserOutput">
            <p>my username is {props.username}</p>
            <p>my password is {props.password}</p>
        </div>
    );
};

export default userOutput;