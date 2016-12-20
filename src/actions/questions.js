// Node modules import
import axios from 'axios';

// Receives a random question
export function fetchQuestion() {
    return function() {
        return axios.get('http://jservice.io/api/random')
            .then(response => { console.log(response)} );
    }
}
