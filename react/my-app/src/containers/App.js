import React, { Component } from 'react';
import dash from './App.css';
import Person from '../Components/Persons/Person/Person';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit'

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

        this.setState({persons: persons});

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
          background: 'green',
          color: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer',

      };

      let persons = null;
      let classes = [];
      if(this.state.persons.length <= 2){
          classes.push(dash.red);
      }
      if(this.state.persons.length <= 1){
          classes.push(dash.bold);
      }

      console.log(dash.App);

      if(this.state.showPerson){
          persons = (
              <div>
                  <Persons
                      persons={this.state.persons}
                      clicked={this.deletePersonHandler}
                      changed={this.nameChangeHandler}/>
              </div>
          );
          style.backgroundColor = 'red';
      }

    return (
      <div className={dash.App}>
          <Cockpit showPerson={this.state.showPerson}
                   persons={this.state.persons}
                   clicked={this.togglePersonsHandler}/>
          {persons}
      </div>

    );
  }
}

export default App;
