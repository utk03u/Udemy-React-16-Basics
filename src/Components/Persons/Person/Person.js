import React, {Component} from 'react';
import styles from './Person.css';
import WithClass from '../../../HOC/WithClass';
import PropTypes from 'prop-types';
//import Radium from 'radium';


class Person extends Component{
    constructor(props){
        super(props);
        console.log("Person.js component inside Constructor", props);
      }
      componentWillMount(){
        console.log('Person.js component inside ComponentWillMount()');
      }
      componentDidMount(){
        console.log('Person.js inside ComponentDidMount()');
      }
    render(){
        console.log("Person.js inside render()");
    return (
        <WithClass styles = {styles.Person}>
            <p onClick = {this.props.click}>I am the {this.props.name} aged {this.props.age}</p>
            <input type = "text" onChange = {this.props.changed} value={this.props.name}/>
        </WithClass>
    )
}; 

}

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    click:PropTypes.func,
    changed: PropTypes.func
}
export default Person;