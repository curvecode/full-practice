import React, { Component } from 'react';
import { StyleSheet, Image, Text, TextInput, View, TouchableOpacity, Dimensions, Alert } from 'react-native';

var { width, height } = Dimensions.get('window');
const userData = {
    usn: 'a',
    pwd: 'a'
}
export default class LoginComponent extends Component {

    static navigationOptions = {
        title: 'Login',
        header: null,
        headerBackTitle: null, // iOS
    };
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    onPressLogin = (e) => {
        if (this.state.username === userData.usn && this.state.password === userData.pwd) {
            // this.props.navigation.navigate('AlbumScreen', { album: {photo: 'url'} });
            Alert.alert('Success');
        } else {
            Alert.alert('Error', 'Your email or password is wrong');
        }
    }

    onPressSignUp = (e) => {
        alert('Sign up');
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/image/bg.jpg')} resizeMode={'cover'} style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0.9
                }}></Image>
                <Image source={require('../../assets/image/aptech-logo.jpg')} resizeMode={'contain'} style={styles.logo}></Image>
                <View style={styles.titleContainer}>
                    <Text style={styles.headerText}>
                        {'Student Login'.toUpperCase()}
                    </Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Enter your email"
                        placeholderTextColor="#6a89cc"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        returnKeyType="next"
                        underlineColorAndroid={"transparent"}
                        onChangeText={(text) => this.setState({ username: text })}
                        onSubmitEditing={() => this.passwordInput.focus()}
                    />
                    <TextInput
                        ref={(input) => this.passwordInput = input}
                        secureTextEntry={true}
                        style={styles.inputText}
                        placeholder="Enter your password"
                        placeholderTextColor="#6a89cc"
                        returnKeyType="go"
                        underlineColorAndroid={"transparent"}
                        onChangeText={(text) => this.setState({ password: text })}
                    />
                </View>
                <View style={styles.loginContainer}>
                    <TouchableOpacity style={styles.btnLogin} alignItems="center" onPress={this.onPressLogin}>
                        <Text style={styles.btnLoginText}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.hintContainer}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '700',
                        color: '#fff'
                    }}>Have an account ?</Text>
                    <TouchableOpacity style={styles.hintContent} onPress={this.onPressSignUp}>
                        <Text style={{
                            fontSize: 16,
                            color: '#6a89cc',
                            textDecorationLine: 'underline'
                        }}> Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    headerText: {
        fontSize: 24,
        color: '#0c2461',
        fontWeight: '700',
        marginBottom: 12,
        width: width - 60,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        paddingBottom: 10
    },
    logo: {
        width: 240,
        height: 175,
        alignSelf: 'center'
    },
    inputText: {
        width: width - 60,
        height: 52,
        backgroundColor: '#f1f2f6',
        color: '#0c2461',
        padding: 12,
        marginBottom: 8,
        borderRadius: 10
    },
    titleContainer: {
        alignItems: 'center'
    },
    inputContainer: {
        alignItems: 'center',
    },
    logoContainer: {

    },
    loginContainer: {
        alignItems: 'center',
    },
    btnLogin: {
        backgroundColor: '#0c2461',
        paddingVertical: 20,
        borderRadius: 10,
        marginTop: 22
    },
    btnLoginText: {
        textAlign: 'center',
        fontWeight: '700',
        width: width - 60,
        color: '#fff',
        fontSize: 20
    },
    hintContainer: {
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 20
    }
});