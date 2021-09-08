import React, {Component} from 'react';
import './App.css'
import NameDisplay from './DisplayName/DisplayName';
import NameList from './NameList/NameList';
import AlertUser from './AlertUser/AlertUser';
import Superheroes from './Superheroes/Superheroes';

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            firstName: 'Reggie',
            lastName: 'White',
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'],
            superheroes: [
                    {
                        superheroId: 1,
                        name: 'Batman',
                        primaryAbility: 'Wealthy',
                        secondaryAbility: 'Rich'
                    },
                    {
                        superheroId: 2,
                        name: 'Superman',
                        primaryAbility: 'Super strength',
                        secondaryAbility: 'Fly'
                    },
                    {
                        superheroId: 3,
                        name: 'Spiderman',
                        primaryAbility: 'Spider senses',
                        secondaryAbility: 'Shoots web'
                    }
                ]
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
            <Superheroes hero = {this.state.superheroes}/>
            </div>
        )
    }
}

export default App;