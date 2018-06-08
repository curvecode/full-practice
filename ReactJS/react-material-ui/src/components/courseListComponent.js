import React, { Component } from 'react';
import Navbar from '../components/navBarComponent';
import Button from '@material-ui/core/Button';

export default class componentName extends Component {
    render() {
        return ( 
            <div className="course-list">
                <Navbar />
                
                <Button variant="raised" color="primary">
                    Hello World
                </Button>
            </div>
        )
    }
};
