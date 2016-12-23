// Node modules import
import React, { Component } from 'react';

// Allows get next quiz
export default class ContinueQuiz extends Component {
    nextQuestion() {
        this.props.fetchQuestion();
        this.props.incrementCorrectQuestionsCount();
        this.props.incrementQuestionsCount();
    }

    render() {
        return (
            <div>
                {this.props.answerCondition === true ? (
                    <div onClick={this.nextQuestion.bind(this)}
                        className="next-question">
                        Next Question
                    </div>
                ) : null }
            </div>
        );
    }
}
