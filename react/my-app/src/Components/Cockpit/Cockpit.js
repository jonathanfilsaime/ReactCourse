import React from 'react';
import dash from "./Cockpit.css";

const cockpit = (props) => {

    const style = {
        background: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',

    };

    let classes = [];

    if(props.persons.length <= 2){
        classes.push(dash.red);
    }
    if(props.persons.length <= 1){
        classes.push(dash.bold);
    }


  return(
      <div >
          <h1>Hi mate</h1>
          <p className={classes.join(' ')}>this is really working</p>
          <button onClick={props.clicked} style={style}>Switch Name</button>
      </div>
  );
};

export default cockpit;