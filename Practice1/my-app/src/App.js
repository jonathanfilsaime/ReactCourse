import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Validation from './Validation/Validation';
import './App.css';

class App extends Component {
    state = {
        username: 1,
        password: 'filsaime'
    };

    modifyNameHandler = (event) => {

        this.setState({
            username: event.target.value.length,
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
         <UserOutput username={this.state.username} password={this.state.password}/>
         <Validation username={this.state.username}/>
     </div>
    );
  };
}

export default App;
