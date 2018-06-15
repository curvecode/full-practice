/*jshint esversion: 6 */
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default class TotalComponent extends Component {
    render() {
        return (
            <div>
                <p>Count : {this.props.count.toString()}</p>
                Total : {this.props.total.toString()}
                <Button variant="raised" color="primary" onClick={() => {
                    this.props.addCounter(7); 
                    this.props.addNumber(3)} }>Plus</Button>
            </div>
        )
    }
};
