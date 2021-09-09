import React, {Component} from 'react';
import './App.css'
import NameDisplay from './DisplayName/DisplayName';
import NameList from './NameList/NameList';
import AlertUser from './AlertUser/AlertUser';
import Superheroes from './Superheroes/Superheroes';
import SuperheroCreateForm from './SuperheroCreateForm/SuperheroCreateForm';
import axios from 'axios';
import Joke from './Joke/Joke';

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
                ],
        }
    }

    alertButton = () => {
        alert('devCodeCamp')
    }

    createHero = (newHero) =>{
        let tempHeroes = this.state.superheroes;
        tempHeroes.push(newHero);
        this.setState({
            superheroes: tempHeroes
        })
    }

    render(){
        return(
            <React.Fragment>
            <NameDisplay first = {this.state.firstName} last = {this.state.lastName}/><br/><hr/>
            <NameList name = {this.state.names}/><br/><hr/>
            <AlertUser alert = {this.alertButton}/><br/><hr/>
            <Superheroes hero = {this.state.superheroes}/><br/><hr/>
            <SuperheroCreateForm createHero = {this.createHero}/><br /><hr/>
            <Joke/>
            </React.Fragment>
        )
    }
}

export default App;