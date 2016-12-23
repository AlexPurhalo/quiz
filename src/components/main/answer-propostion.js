// Node modules import
import React, { Component } from 'react';

// Shows answer proposition chars
export default class AnswerProposition extends Component {
    constructor() {
        super();

        this.receiveChar = this.receiveChar.bind(this);
    }
    receiveChar(char) {
        this.props.charRelocationToBoard(char);
        this.props.checkAnswer();
    }

    showItem(characters) {
        return (
            characters.map(char =>
                <li
                    onClick={e => this.receiveChar(char)}
                    className={`inline-block character ${char.name === ' ' && 'space-as-character'}`}
                    key={char.id}>
                    {char.name}
                </li>
            )
        );
    }
    render() {
        return (
            <div className="answer-proposition">
                <div className="answer-container">
                    <div className="random-characters">
                        <ul className="inline-list">
                            {this.showItem(this.props.characters)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
