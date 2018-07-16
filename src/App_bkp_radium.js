import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

class App extends Component {
  state = {
    persons: [
      {id : 'jhd', name: "Undertaker", age: 54}, //id can be anything unique
      {id : 'djdh',name: "Triple H", age: 49},
      {id : 'dkjdk', name: "Stone Cold", age: 52}
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p =>{ return p.id === id;});



    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value; 
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }


  togglePersonHandler = () =>{
    const doesShow = false;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) =>{
    //const persons = this.state.persons.slice(); alternative below
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    const btnStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      borderRadius: '10px',
      padding: '10px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor: 'lightgreen',
        color: 'black'
      },
      ':focus':{
        outline:0

      }
    };
    let persons = null;
    if(this.state.showPersons){
      persons = (<div>
        
                  {this.state.persons.map((person, index) =>{
                    return <Person name = {person.name}
                                   click = {()=>this.deletePersonHandler(index)}
                                   age = {person.age} 
                                   key ={person.id}
                                   changed = {(event) => this.nameChangedHandler(event, person.id)}/>
                  }
                  )}
                  
                    
      </div>);

      btnStyle.backgroundColor = 'red';   
      btnStyle[':hover'] = {
        backgroundColor: '#FF5733',
        color: 'black'
      }
}
let classes = [];
if(this.state.persons.length <=2){
  classes.push('red');
}
if(this.state.persons.length<=1){
  classes.push('bold');
}
    return (
      <StyleRoot>
      <div className="App">
        <h1>Hi!, This is React App</h1>
        <p className = {classes.join(' ')}>This is amazing</p>
        <button style = {btnStyle} onClick = {this.togglePersonHandler}>Show Wrestlers</button>
       {persons} 
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App); //Higher Order Component
