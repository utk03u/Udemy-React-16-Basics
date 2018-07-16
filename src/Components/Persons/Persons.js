import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component{ 
  constructor(props){
    super(props);
    console.log("Persons.js component inside Constructor", props);
  }
  componentWillMount(){
    console.log('Persons.js component inside ComponentWillMount()');
  }
  componentDidMount(){
    console.log('Persons.js inside ComponentDidMount()');
  }
  componentWillReceiveProps(nextProps){
    console.log("Persons.js inside ComponentWillReceiveProps()", nextProps);
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log("Persons.js inside shouldComponentUpdate", nextProps, nextState);
    return nextProps.persons !== this.props.persons;
  }
  componentWillUpdate(nextProps, nextState){
    console.log("Persons.js inside componentWillUpdate()", nextProps, nextState);
  }
  componentDidUpdate(){
    console.log("Persons.js inside componentDidupdate");
  }

  render(){
    console.log('Persons.js inside render()');
      return this.props.persons.map((person, index) =>{
          return <Person name = {person.name}
                         click = {()=>this.props.clicked(index)}
                         age = {person.age} 
                         key ={person.id}
                         changed = {(event) => this.props.nameChange(event, person.id)}/>
        
        });
        
    
      }}
    export default Persons;
