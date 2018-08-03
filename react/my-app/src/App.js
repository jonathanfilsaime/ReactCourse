import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
      persons : [
          {id: 1, name: 'jon', age: 30},
          {id: 2, name: 'jane', age: 5},
          {id: 3, name: 'jen', age: 20}
          ]
    };

    switchNameHandler= () => {
        console.log('was clicked!');
        this.setState({
            persons: [
                {name: 'Max', age: 100},
                {name: 'jane', age: 666},
                {name: 'jen', age: 20}
            ]
        });
    };

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {...this.state.persons[personIndex]};

        person.name = event.target.value;

        const persons =[...this.state.persons];

        persons[personIndex] = person;

        this.setState({persons: person});

    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPerson;
        this.setState({showPerson: !doesShow});
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons : persons});
    };

  render() {
      const style = {
          background: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer'
      };

      let persons = null;

      if(this.state.showPerson){
          persons = (
              <div>
                  {this.state.persons.map((person, index) => {
                      return <Person
                          name={person.name}
                          age={person.age}
                          click={() => this.deletePersonHandler(index)}
                          key={person.id}
                          changed={(event) => this.nameChangeHandler(event, person.id)}/>
                  })}
              </div>
          );
      }

    return (
      <div className="App">
        <h1>Hi mate</h1>
          <p>this is really working</p>
          <button onClick={this.togglePersonsHandler} style={style}>Switch Name</button>
          {persons}
      </div>
    );
  }
}

export default App;
