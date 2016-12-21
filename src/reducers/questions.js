// Actions types import
import {
    FETCH_QUESTION,
    INCREMENT_QUESTIONS_COUNT,
    RELOCATE_FROM_PROPOSITION_TO_BOARD,
    RELOCATION_FROM_BOARD
} from '../constants/questions';

// Initial states for reducers
const INITIAL_STATE = {
    question: null,
    totalCount: 0,
    arrayInProposition: [],
    arrayOnBoard: []
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_QUESTION:
            return { ...state,
                question: action.payload,
                arrayInProposition: action.payload.transformedAnswer,
                arrayOnBoard: []
            };

        case INCREMENT_QUESTIONS_COUNT:
            return { ...state, totalCount: state.totalCount + 1 };

        case RELOCATE_FROM_PROPOSITION_TO_BOARD:
            let array = state.arrayInProposition, val = action.payload;
            array = array.filter(item => item !== val );

            return {
                ...state,
                arrayInProposition: array,
                arrayOnBoard: [...state.arrayOnBoard, action.payload]
            };

        case RELOCATION_FROM_BOARD:
            let arr2 = state.arrayOnBoard, val2 = action.payload;
            arr2 = arr2.filter(item => item != val2);

            return {
                ...state,
                arrayInProposition: [...state.arrayInProposition, action.payload],
                arrayOnBoard: arr2
            };

        default:
            return state;
    }
}
