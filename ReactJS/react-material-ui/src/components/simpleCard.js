import React, { Component } from 'react';
import { Card, CardHeader, CardContent, CardActions, Typography } from '@material-ui/core';

export default class componentName extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardHeader>Card header</CardHeader>
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            Lizard
                        </Typography>
                    </CardContent>
                    <CardActions>Card Action</CardActions>
                </Card>
            </div>
        )
    }
};
