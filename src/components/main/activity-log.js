// Node modules import
import React, { Component } from 'react';

// Renders data about user activity
export default class ActivityLog extends Component {
    render() {
        return (
            <div className="activity-log">
                <div className="row">
                    <div className="col-md-6">
                        <div className="correct-answers">
                            Correct Answers: {this.props.correctAnswers}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="total-questions">
                            Total Questions: {this.props.questionsCount}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
