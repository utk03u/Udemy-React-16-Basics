import React, { Component } from 'react';
import styles from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';  
import WithClass from '../HOC/WithClass';

class App extends Component {
  constructor(props){
    super(props);
    console.log("App.js component inside Constructor", props);
    this.state = {
      persons: [
        {id : 'jhd', name: "Undertaker", age: 54}, //id can be anything unique
        {id : 'djdh',name: "Triple H", age: 49},
        {id : 'dkjdk', name: "Stone Cold", age: 52}
      ],
      showPersons: false,
      toggleClick: 0
    }
  }
  componentWillMount(){
    console.log('App.js component inside ComponentWillMount()');
  }
  componentDidMount(){
    console.log('App.js inside ComponentDidMount()'); //this is a better way of defining the function
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log("App.js inside shouldComponentUpdate", nextProps, nextState);
    return true;
  }
  componentWillUpdate(nextProps, nextState){
    console.log("App.js inside componentWillUpdate()", nextProps, nextState);
  }
  componentDidUpdate(){
    console.log("App.js inside componentDidUpdate()");
  }

  // componentDidMount = ()=> {  ///this is alernate method to call out these functions since it doesn't require this keyword
  //   console.log('App.js inside ComponentDidMount()');
  // }

  // state = {
  //   persons: [
  //     {id : 'jhd', name: "Undertaker", age: 54}, //id can be anything unique
  //     {id : 'djdh',name: "Triple H", age: 49},
  //     {id : 'dkjdk', name: "Stone Cold", age: 52}
  //   ],
  //   showPersons: false
  // }

  nameChangedHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p =>{ return p.id === id;});
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value; 
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }


  togglePersonHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState( (prevState, props) => {
      return {
              showPersons: !doesShow,
              toggleClick:prevState.toggleClick +1        
      }
          });
  }

  deletePersonHandler = (personIndex) =>{
    //const persons = this.state.persons.slice(); alternative below
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    console.log('App.js inside render()');
    let persons = null;
    if(this.state.showPersons){
      persons = (
              <Persons
                  persons = {this.state.persons}
                  clicked = {this.deletePersonHandler}
                  nameChange = {this.nameChangedHandler}
                  isAuthenticated = {this.state.authenticated}/>                      
    );           
}
  return (   
      <WithClass styles = {styles.App}>
      <Cockpit
        appTitle = {this.props.title} //this is how we use props in stateful components. Lecture 81
        showPersons = {this.state.showPersons}
        persons = {this.state.persons}
        clicked = {this.togglePersonHandler}
        />
       {persons} 
      </WithClass>  
    );
  }
}

export default App; 
