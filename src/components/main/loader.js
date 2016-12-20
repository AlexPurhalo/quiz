// Node modules import
import React, { Component } from 'react';

// Images import
import LoaderImage from '../../../images/loader.gif'

// Renders loader
export default class Loader extends Component {
    render() {
        return (
            <div className="loader">
                <img src={LoaderImage} alt="loader"/>
            </div>
        );
    }
}
