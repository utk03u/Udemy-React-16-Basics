import React from 'react';
import styles from './Cockpit.css'
// import Aux from '../../HOC/Aux'; newer version doesn't aux as seperate. we call use <> </> or React.Fragment as in return statment line 19

const cockpit = (props) => {
    let classes = [];
    let btnClass = styles.Button;

    if(props.showPersons){
        btnClass = [styles.Button, styles.Red].join(' ');
    }
    
        if(props.persons.length <=2){
        classes.push(styles.red);
        }
        if(props.persons.length<=1){
        classes.push(styles.bold);
}
    return (
        <React.Fragment>
        <h1>{props.appTitle}</h1>
        <p className = {classes.join(' ')}><i>WWE App</i></p>
        <button className = {btnClass} onClick = {props.clicked}>Show Wrestlers</button>
        </React.Fragment>
    );
}

export default cockpit;