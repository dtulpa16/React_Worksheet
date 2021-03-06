import React from "react";
import './Superheroes.css'


const Superheroes = (props) =>{
    return(
        <table>
            <thead>
                <th>Name</th>
                <th>Primary Ability</th>
                <th>Secondary Ability</th>
            </thead>
                {props.hero.map((element) => <tbody><td>{element.name}</td> <td>{element.primaryAbility}</td> <td>{element.secondaryAbility}</td></tbody> )}
                      
        </table>
    )
}


export default Superheroes