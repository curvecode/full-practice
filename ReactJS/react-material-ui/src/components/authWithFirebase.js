import Switch from '@material-ui/core/Switch';
import Snackbar from '@material-ui/core/Snackbar';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import firebase from 'firebase';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

// import Icon from '@material-ui/core/Icon';
// import { withStyles } from '@material-ui/core/styles';

export default class AuthFirebase extends Component {

    constructor(props) {
        super(props);
        this.state = {
            auth: false,
            handleChange: false,
            email: 'email@yopmail.com',
            password: '123456',
            open: false,
            vertical: 'top',
            horizontal: 'right',
            message: 'I love snack'
        };
        this.initFirebaseApp();
    }

    initFirebaseApp() {
        var config = {
            apiKey: "AIzaSyDTvisFW7hm12SKGgtO58H3XKVEQgDyPfs",
            authDomain: "ngfirestore-2a81f.firebaseapp.com",
            databaseURL: "https://ngfirestore-2a81f.firebaseio.com",
            projectId: "ngfirestore-2a81f",
            storageBucket: "ngfirestore-2a81f.appspot.com",
            messagingSenderId: "527948778244"
        };
        firebase.initializeApp(config);
    }

    createAccount() {
        if (this.state.auth) {
            // False la sign up
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((value) => {
                console.log(value);
                alert('Sign up success!');
            }).catch((error) => {
                alert(error.message);
                console.log(error);
            });
        } else {
            // True la login
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider).then((result) => {
                var token = result.credential.accessToken;
                var user = result.user;
                console.log(token);
                alert(JSON.stringify(user));
            }).catch(error => {
                console.log('Error ', error);
            });
            // firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((value) => {
            //     console.log(value);
            //     alert('Sign in success');
            // }).catch((error) => {
            //     alert(error.message);
            //     console.log(error);
            // });
        }
    }
    render() {
        return (
            <div style={{
                marginTop: '10px'
            }}>
                <FormControl>
                    <InputLabel htmlFor="input-with-icon-email">Enter your email:</InputLabel>
                    <Input
                        placeholder="Enter your email"
                        className={'email'}
                        inputProps={{
                            'aria-label': 'Description',
                        }}
                        onChange={(event) => {
                            this.setState({
                                email: event.target.value || null
                            })
                        }}
                    />
                </FormControl>
                <br />
                <FormControl>
                    <InputLabel htmlFor="input-with-icon-password">Enter your password:</InputLabel>
                    <Input
                        placeholder="Enter your password"
                        className={'password'}
                        type="password"
                        autoComplete="current-password"
                        inputProps={{
                            'aria-label': 'Description',
                        }}
                        onChange={(event) => {
                            this.setState({
                                password: event.target.value || null
                            })
                        }}
                    />
                </FormControl>
                <br />
                <FormControlLabel
                    control={
                        <Switch checked={this.state.auth} onChange={() => {
                            this.setState({
                                auth: !this.state.auth
                            })
                        }} aria-label="LoginOrSignUpSwitch" />
                    }
                    label={this.state.auth ? 'Sign up' : 'Login'}
                />
                <br />
                <Button variant="contained" color="secondary" aria-label="edit" className={'submit'}
                    style={{
                        marginTop: '10px'
                    }}
                    onClick={() => {
                        this.createAccount();
                    }}
                >{this.state.auth ? 'Sign up' : 'Login'}</Button>
                <div>
                    <Button variant="contained" color="primary" onClick={() => this.handleShowSnackbar({
                        vertical: 'top',
                        horizontal: 'right',
                        message: 'Snack 1'
                    })}>Snackbar 1</Button>
                    <Button variant="contained" color="secondary" onClick={() => this.handleShowSnackbar({
                        message: 'Snack 2',
                        vertical: 'bottom',
                        horizontal: 'right'
                    })}>Snackbar 2</Button>
                    <Button variant="contained" color="default" onClick={() => this.handleShowSnackbar({
                        vertical: 'bottom',
                        horizontal: 'left',
                        message: 'Snack 3'
                    })}>Snackbar 3</Button>
                </div>
                <Snackbar
                    anchorOrigin={{ vertical: this.state.vertical, horizontal: this.state.horizontal }}
                    open={this.state.open}
                    onClose={() => this.handleClose()}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    autoHideDuration={2000}
                    message={<span id="message-id">{this.state.message}</span>}
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            className={'close'}
                            onClick={() => this.handleClose()}
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
            </div>
        )
    }

    handleShowSnackbar(option) {
        this.setState({
            vertical: option.vertical || this.state.vertical,
            horizontal: option.horizontal || this.state.horizontal,
            open: true,
            message: option.message || this.state.message
        });
    }

    handleClose() {
        this.setState({ open: false });
    }
};

Input.propTypes = {
    className: PropTypes.string.isRequired,
};