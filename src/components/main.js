// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions import
import {
    fetchQuestion,
    incrementQuestionsCount,
    charRelocationToBoard,
    charRelocationFromBoard,
    checkAnswer,
    incrementCorrectQuestionsCount
} from '../actions/questions';

// Components import
import ActivityLog from './main/activity-log';
import QuestionInfo from './main/question-info';
import Loader from './main/loader';
import SkipQuestion from './main/skip-question';
import AnswerBuilding from './main/answer-building';
import AnswerProposition from './main/answer-propostion';
import ContinueQuiz from './main/continue-quiz';
import ProgressMessage from './main/progress-message';

// Main page
class Main extends Component {
    componentWillMount() {
        this.props.fetchQuestion();
    }

    render() {
        console.log(`answer: ${this.props.question && this.props.question.answer}`);
        return (
            <div className="main-page">
                {this.props.question ? (
                    <div>
                        <ActivityLog
                            questionsCount={this.props.questionsCount}
                            correctAnswers={this.props.correctAnswers} />
                        <QuestionInfo
                            id={this.props.question.id}
                            description={this.props.question.description}
                            category={this.props.question.category} />
                        <SkipQuestion
                            fetchQuestion={this.props.fetchQuestion}
                            incrementQuestionsCount={this.props.incrementQuestionsCount} />
                        <ProgressMessage
                            answerCondition={this.props.answerCondition} />
                        <AnswerBuilding
                            characters={this.props.arrayOnBoard}
                            charRelocationFromBoard={this.props.charRelocationFromBoard}
                            answerCondition={this.props.answerCondition} />
                        {this.props.answerCondition === null ? (
                            <AnswerProposition
                                characters={this.props.arrayInProposition}
                                charRelocationToBoard={this.props.charRelocationToBoard}
                                checkAnswer={this.props.checkAnswer} />
                        ) : (
                            <ContinueQuiz
                                answerCondition={this.props.answerCondition}
                                fetchQuestion={this.props.fetchQuestion}
                                incrementCorrectQuestionsCount={this.props.incrementCorrectQuestionsCount}
                                incrementQuestionsCount={this.props.incrementQuestionsCount} />
                        )}

                    </div>
                ) :
                    <Loader />
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        question: state.questions.question,
        questionsCount: state.questions.totalCount,
        arrayInProposition: state.questions.arrayInProposition,
        arrayOnBoard: state.questions.arrayOnBoard,
        answerCondition: state.questions.checkAnswerCondition,
        correctAnswers: state.questions.correctAnswers
    }
}

export default connect(
    mapStateToProps,
    {
        fetchQuestion,
        incrementQuestionsCount,
        charRelocationToBoard,
        charRelocationFromBoard,
        checkAnswer,
        incrementCorrectQuestionsCount
    }
)(Main)
