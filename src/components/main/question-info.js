// Node modules import
import React, { Component } from 'react';

// Renders question's info
export default class QuestionInfo extends Component {
    render() {
        return (
            <div className="question-info">
                <h1 className="title">Question #1231</h1>
                <h2 className="category">category: energy</h2>
                <p className="description">
                    Hello, some text should be here. My name is Alex for example. I'm coding here :D
                    Some another description, blablabla!
                </p>
            </div>
        );
    }
}
