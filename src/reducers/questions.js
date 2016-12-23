// Actions types import
import {
    FETCH_QUESTION,
    INCREMENT_QUESTIONS_COUNT,
    RELOCATE_FROM_PROPOSITION_TO_BOARD,
    RELOCATION_FROM_BOARD,
    CHECK_ANSWER,
    INCREMENT_CORRECT_QUESTIONS_COUNT
} from '../constants/questions';

// Imports functions
import { objsArrToStr } from '../functions/answer-transformation';

// Initial states for reducers
const INITIAL_STATE = {
    question: null,
    totalCount: 0,
    arrayInProposition: [],
    arrayOnBoard: [],
    checkAnswerCondition: null,
    correctAnswers: 0
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_QUESTION:
            return { ...state,
                question: action.payload,
                arrayInProposition: action.payload.transformedAnswer,
                arrayOnBoard: [],
                checkAnswerCondition: null
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
                arrayOnBoard: arr2,
                checkAnswerCondition: null
            };

        case CHECK_ANSWER:
            let answer;
            let userAnswer = objsArrToStr(state.arrayOnBoard), actualAnswer = state.question.answer;
            if (state.arrayInProposition.length <= 0) {
                if (userAnswer === actualAnswer ) answer = true;
                if (userAnswer !== actualAnswer ) answer = false;
            } else {
                answer = null
            }

            console.log(answer);
            return { ...state, checkAnswerCondition: answer };

        case INCREMENT_CORRECT_QUESTIONS_COUNT:
            return { ...state, correctAnswers: state.correctAnswers + 1};

        default:
            return state;
    }
}
