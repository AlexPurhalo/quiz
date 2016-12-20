// Actions types import
import { FETCH_QUESTION } from '../constants/questions';

// Initial states for reducers
const INITIAL_STATE = {
    question: null
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_QUESTION:
            return { ...state, question: null };
        default:
            return state;
    }
}
