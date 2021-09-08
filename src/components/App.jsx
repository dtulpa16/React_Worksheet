import React, {Component} from 'react';
import './App.css'
import NameDisplay from './DisplayName/DisplayName';
import NameList from './NameList/NameList';
import AlertUser from './AlertUser/AlertUser';

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            firstName: 'Reggie',
            lastName: 'White',
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']
        }
    }

    alertButton = () => {
        alert('devCodeCamp')
    }
    render(){
        return(
            <div>
            <NameDisplay first = {this.state.firstName} last = {this.state.lastName}/>
            <NameList name = {this.state.names}/>
            <AlertUser alert = {this.alertButton}/>
            </div>
        )
    }
}

export default App;