/*jshint esversion: 6 */
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default class CounterComponent extends Component {
    render() {
        return (
            <div>
                <div>
                    <Button variant="raised" color="primary" onClick={() => this.props.addNumber(this.props.inputNumber)}>Plus</Button>
                    <Button variant="raised" color="primary" onClick={() => this.props.minusNumber(this.props.inputNumber)}>Minus</Button>
                </div>
            </div>

        )
    }
};
