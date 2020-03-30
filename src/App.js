import React from 'react';

import './App.css';

import Person from './Person/Person';

class App extends React.Component{
    state = {
      person: [
        {names: 'max', age: 16},
        {names: 'manu', age: 18},
        {names:'stephanie', age: 24},
      ]
    }
    switchNameHandler= (newName) =>{
      // console.log('was clicked!');
      this.setState({ 
        person: [
        {names: newName, age: 16},
        {names: 'manu', age: 18},
        {names:'stephanie', age: 27},
      ]
      })
    }
    nameChangeHandler = (event) => {
      this.setState({
        person: [
          {names: 'Max', age: 16},
          {names: event.target.value, age: 18},
          {names: 'stephanie', age: 27},
        ]
      })
    }



  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
    }
    return (
      <div className="App">
        <h1>Hi, i am a react developer</h1>
        <p>i learnt it by being a self taught developer</p>
        <button
        style={style} 
        onClick={ () => this.switchNameHandler('Maximilian')}>Switch Name</button>
        <Person
         names={this.state.person[0].names}
          age={this.state.person[0].age} />
        <Person
         names={this.state.person[1].names} 
         click={this.switchNameHandler.bind( this, 'Max!')} 
         age={this.state.person[1].age}
         changed={this.nameChangeHandler}>My Hobbies: Racing</Person>
        <Person 
        names={this.state.person[2].names} 
        age={this.state.person[2].age}/>
      </div>
    );
  }
    
  
  
}

export default App;
