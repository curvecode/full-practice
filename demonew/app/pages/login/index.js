import React, { Component } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Button, Keyboard } from 'react-native';
import styles from '../../style/common';

export default class LoginScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: 'test@yopmail.com',
			password: '123456'
		};
  }
  
  onLoginPress() {
    // TODO
  }

  onFbLoginPress() {
    // TODO
  }

	render() {
		return (
			<KeyboardAvoidingView style={styles.containerView} behavior="padding">
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<View style={styles.loginScreenContainer}>
						<View style={styles.loginFormView}>
							<Text style={styles.logoText}>Login</Text>
							<TextInput
								placeholder="Username"
								placeholderColor="#c4c3cb"
								style={styles.loginFormTextInput}
							/>
							<TextInput
								placeholder="Password"
								placeholderColor="#c4c3cb"
								style={styles.loginFormTextInput}
								secureTextEntry={true}
							/>
							<Button
								buttonStyle={styles.loginButton}
								onPress={() => this.onLoginPress()}
								title="Login"
							/>
							<Button
								buttonStyle={styles.fbLoginButton}
								onPress={() => this.onFbLoginPress()}
								title="Login with Facebook"
								color="#3897f1"
							/>
						</View>
					</View>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		);
	}
}
