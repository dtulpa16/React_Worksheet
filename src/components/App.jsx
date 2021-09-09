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
            jokesFromApi: []
        }
    }

    // componentDidMount(){
    //     this.getJokes()
    // }
    
    // async getJokes(){
    //     let response = await axios.get('https://v2.jokeapi.dev/joke/Programming?type=twopart&amount=5')
    //     this.setState({
    //         jokesFromApi: response.data.jokes
    //     })
    // }

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
            <NameDisplay first = {this.state.firstName} last = {this.state.lastName}/>
            <NameList name = {this.state.names}/>
            <AlertUser alert = {this.alertButton}/>
            <Superheroes hero = {this.state.superheroes}/>
            <SuperheroCreateForm createHero = {this.createHero}/>
            <Joke/>
            </React.Fragment>
        )
    }
}

export default App;