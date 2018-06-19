import React, { Component } from 'react';
// import styles from '../styles/index.css';
import Grid from '@material-ui/core/Grid';
import TransMatComp from './transitionComp';

// const style = {
//     width: '640px',
//     margin: '10px auto'
// }

export default class ListTaskComponent extends Component {
    constructor(props) {
        super(props);
        console.log('Constructor APP');
    }
    render() {
        console.log('Render APP');
        return (
            <Grid container spacing={8}>
                <ul xs={12} sm={6}>
                    <li>Task 1</li>
                    <li>Task 1</li>
                    <li>Task 1</li>
                    <li>Task 1</li>
                    <li>Task 1</li>
                </ul>
                <ul xs={12} sm={6}>
                    <li>Task 2</li>
                    <li>Task 3</li>
                    <li>Task 4</li>
                    <li>Task 5</li>
                    <li>Task 6</li>
                </ul>
                <TransMatComp abc={{ something: '123' }} />
            </Grid>
        )
    }
    componentWillMount() {
        console.log('Will mount');
    }
    componentDidUpdate() {
        console.log('Did update');
    }
};