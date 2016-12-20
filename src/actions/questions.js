// Node modules import
import axios from 'axios';

// Actions types import
import { FETCH_QUESTION } from '../constants/questions';

// Receives a random question
export function fetchQuestion() {
    return function(dispatch) {
        return axios.get('http://jservice.io/api/random')
            .then(response => {
                dispatch({
                    type: FETCH_QUESTION,
                    payload: 'hello world'
                })
            } );
    }
}
