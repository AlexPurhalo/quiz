// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchQuestion } from '../actions/questions';

// Components import
import ActivityLog from './main/activity-log';
import QuestionInfo from './main/question-info';
import Loader from './main/loader';

// Main page
class Main extends Component {
    componentWillMount() {
        this.props.fetchQuestion();
    }

    render() {
        console.log(this.props.question);
        return (
            <div className="main-page">
                {this.props.question ? (
                    <div>
                        <ActivityLog />
                        <QuestionInfo
                            id={this.props.question.id}
                            description={this.props.question.description}
                            category={this.props.question.category} />
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
        question: state.questions.question
    }
}

export default connect(mapStateToProps, { fetchQuestion })(Main)
