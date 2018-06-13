/*jshint esversion: 6 */
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

export default class InputNumberComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changedNum: 0
        };
    }

    setNumberChange(value) {
        this.setState({
            changedNum: parseInt(value, 10)
        });
    }

    render() {
        return (
            <div>
                <TextField id="input_num" type="number" onChange={(value) => this.setNumberChange(value)} />
                <div id='APP'></div>
                <p>{this.state.changedNum.toString()}</p>
                <p>{this.props.inputNumber.toString()}</p>
            </div>
        )
    }
};
