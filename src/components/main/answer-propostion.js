// Node modules import
import React, { Component } from 'react';

// Shows answer proposition chars
export default class AnswerProposition extends Component {
    render() {
        return (
            <div className="answer-proposition">
                <div className="answer-container">
                    <div className="random-characters">
                        <ul className="inline-list">
                            <li className="inline-block character">
                                B
                            </li>
                            <li className="inline-block character">
                                L
                            </li>
                            <li className="inline-block character">
                                S
                            </li>
                            <li className="inline-block character">
                                P
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
