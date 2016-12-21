// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchQuestion, incrementQuestionsCount } from '../actions/questions';

// Components import
import ActivityLog from './main/activity-log';
import QuestionInfo from './main/question-info';
import Loader from './main/loader';
import SkipQuestion from './main/skip-question';

// Main page
class Main extends Component {
    componentWillMount() {
        this.props.fetchQuestion();
    }

    render() {
        return (
            <div className="main-page">
                {this.props.question ? (
                    <div>
                        <ActivityLog
                            questionsCount={this.props.questionsCount}/>
                        <QuestionInfo
                            id={this.props.question.id}
                            description={this.props.question.description}
                            category={this.props.question.category} />
                        <SkipQuestion
                            fetchQuestion={this.props.fetchQuestion}
                            incrementQuestionsCount={this.props.incrementQuestionsCount} />
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
        question: state.questions.question,
        questionsCount: state.questions.totalCount
    }
}

export default connect(mapStateToProps, { fetchQuestion, incrementQuestionsCount })(Main)
