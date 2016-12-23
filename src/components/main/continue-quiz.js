// Node modules import
import React, { Component } from 'react';

// Allows get next quiz
export default class ContinueQuiz extends Component {
    render() {
        return (
            <div>
                {this.props.answerCondition === true ? (
                    <div className="next-question">Next Question</div>
                ) : null }
            </div>
        );
    }
}
