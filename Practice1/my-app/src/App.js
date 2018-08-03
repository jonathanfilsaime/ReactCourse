import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
    state = {
        userName: 'jonathan',
        password: 'filsaime'
    };

    modifyNameHandler = (event) => {
        this.setState({
            userName: event.target.value,
            password: 'sejud'
        });
    };

    render() {
        const style = {
            background: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

    return (
     <div>
         <p style={style}>hey why aren't you working</p>
         <UserInput change={this.modifyNameHandler} />
         <UserOutput userName={this.state.userName} password={this.state.password}/>
     </div>
    );
  };
}

export default App;
