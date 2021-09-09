import React, {Component} from 'react';
import axios from "axios";


class Joke extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            jokesFromApi: []
         }
    }

    componentDidMount(){
        this.getJokes()
    }

    async getJokes(){
        let response = await axios.get('https://v2.jokeapi.dev/joke/Programming?type=twopart&amount=5')
        this.setState({
            jokesFromApi: response.data.jokes
        })
    }

    render() { 
        return (
            <div>
            <h2>Enjoy some jokes :D</h2>
            <hr />
            {this.state.jokesFromApi.map(joke => {
                return( <div>
                    <ul>
                        <h1>{joke.setup}</h1><br />
                        <h1>{joke.delivery}</h1><br /><hr />
                    </ul>
                    </div>)
            })}
            </div>  
         );
    }
}
 
export default Joke;

