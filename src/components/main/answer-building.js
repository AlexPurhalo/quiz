// Node modules import
import React, { Component } from 'react';

// Shows build board
export default class AnswerBuilding extends Component {
    render() {
        return (
            <div className="answer-building">
                <div className="answer-container">
                    <div className="characters-place">
                        <ul className="inline-list">
                            <li className="inline-block character">
                                B
                            </li>
                            <li className="inline-block character">
                                V
                            </li>
                            <li className="inline-block character">
                                E
                            </li>
                            <li className="inline-block character space-as-character">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
