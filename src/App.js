import React from 'react';

import './App.css';

import Person from './Person/Person';

class App extends React.Component {
  state = {
    persons: [
      {id: '1asff', names: 'max', age: 16},
      {id: '2asss', names: 'manu', age: 18},
      {id: '3errr', names: 'stephanie', age: 24},
    ],
    otherState: 'some other values',
    showPerson: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex],
    };
    person.names = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  };
  togglePersonHadler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  };
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };
  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      color: 'white',
    };
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                names={person.names}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = 'red';
    }
    // const classes = ['red', 'bold'].join(' ')
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }
    return (
      <div className="App">
        <h1>Hi, i am a react developer</h1>
        <p className={classes.join(' ')}>i learnt it by being a self taught developer</p>
        <button style={style} onClick={this.togglePersonHadler}>
          Toggle Person
        </button>
        {persons}
      </div>
    );
  }
}
export default App;
