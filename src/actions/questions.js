// Node modules import
import axios from 'axios';

// Actions types import
import { FETCH_QUESTION } from '../constants/questions';

// Receives a random question
export function fetchQuestion() {
    return function(dispatch) {
        return axios.get('http://jservice.io/api/random')
            .then(response => {
                const questionObj = response.data[0];
                console.log(response.data[0].category);
                const data = {
                    id: questionObj.id,
                    answer: questionObj.answer,
                    description: questionObj.question,
                    category: questionObj.category.title
                };
                dispatch({
                    type: FETCH_QUESTION,
                    payload: data
                })
            } );
    }
}
