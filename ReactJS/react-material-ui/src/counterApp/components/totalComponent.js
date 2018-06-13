/*jshint esversion: 6 */
import React, { Component } from 'react';

export default class TotalComponent extends Component {
    render() {
        return (
            <div>
                Total : {this.props.count.toString()}
            </div>
        )
    }
};
