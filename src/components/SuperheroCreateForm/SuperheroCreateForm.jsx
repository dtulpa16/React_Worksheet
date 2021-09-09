import React, {Component} from "react";


class SuperheroCreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            primaryAbility: '',
            secondaryAbility: ''
         }
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        
        this.props.createHero(this.state);
        console.log(this.state)
    }

    render() { 
        return ( 
        <form onSubmit = {this.handleSubmit}>
            <label>Hero Name</label>
            <input name= 'name' onChange = {this.handleChange} value = {this.state.name}/> 
            <label>Primary Ability</label>
            <input name = 'primaryAbility' onChange = {this.handleChange} value = {this.state.primaryAbility}/>
            <label>Primary Ability</label>
            <input name = 'secondaryAbility' onChange = {this.handleChange} value = {this.state.secondaryAbility}/>
            <button type = 'submit'>Create Hero</button>
        </form>
         );
    }
}
 
export default SuperheroCreateForm;