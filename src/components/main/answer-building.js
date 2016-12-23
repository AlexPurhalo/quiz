// Node modules import
import React, { Component } from 'react';

// Shows build board
export default class AnswerBuilding extends Component {
    constructor() {
        super();

        this.receiveCharacter = this.receiveCharacter.bind(this);
    }
    receiveCharacter(char) {
        this.props.charRelocationFromBoard(char);
    }

    giveStyle() {
        if (this.props.answerCondition === true ) {
            return 'success-answer'
        } else if (this.props.answerCondition === false ) {
            return 'failure-answer'
        } else {
            return ''
        }
    }
    showItem(characters) {
        return (
            characters.map(char =>
                <li
                    onClick={e => this.receiveCharacter(char)}
                    className={`inline-block character ${char.name === ' ' && 'space-as-character'}`}
                    key={char.id}>
                    {char.name}
                </li>
            )
        )
    }
    render() {
        return (
            <div className="answer-building">
                <div className={`answer-container ${this.giveStyle()}`}>
                    <div className="characters-place">
                        <ul className="inline-list">
                            {this.showItem(this.props.characters)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

// failure-answer, success-answer
