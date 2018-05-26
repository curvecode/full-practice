import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import CommonStyle from '../style/common';
import LoginService from '../service/loginService';

export default class LoginComponent extends Component {


  constructor(props) {
    super(props);
    this.state = {
      email: 'abc@gmail.com',
      password: '123456'
    }
  }

  handleLogin() {
    // let tmp = new LoginService();
    // Alert.alert('Title', 'Working');
    let userObj = {
      email: this.state.email,
      password: this.state.password
    }

    LoginService.handleLoginByPromise(userObj).then((data) => {
      alert(JSON.stringify(data, null, 4));
      // Alert.alert('Success', 'Login Success ' + data.message);
    }).catch((error) => {
      Alert.alert('Error', 'Error message');
    });

  }
  render() {
    return (
      <View style={CommonStyle.container}>
        <Text>Login page</Text>
        <View>
          <TextInput
            style={{}}
            placeholder={'Enter your email'}
            keyboardType={'email-address'}
            autoCapitalize="none"
            onChange={(text) => { this.setState({ email: text }) }}
          />
        </View>
        <View>
          <TextInput
            style={{}}
            placeholder={'Enter your password'}
            keyboardType={'default'}
            secureTextEntry={true}
            autoCapitalize="none"
            onChange={(text) => { this.setState({ password: text }) }}
          />
        </View>
        <View>
          <TouchableOpacity style={{
            width: '100%',
            backgroundColor: '#000',
            alignItems: 'center',
            padding: 10
          }} onPress={() => { this.handleLogin(); }}>
            <Text style={{ color: '#fff' }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
