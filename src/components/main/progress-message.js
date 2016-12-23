// Node modules import
import React, { Component } from 'react';

// Shows progress message to user
export default class ProgressMessage extends Component {
    render() {
        return (
            <div className="progress-message">
                {this.props.answerCondition === true && <div className="success-message">Correct</div>}
                {this.props.answerCondition === false && <div className="failure-message">Damn!</div> }
            </div>
        )
    }
}
