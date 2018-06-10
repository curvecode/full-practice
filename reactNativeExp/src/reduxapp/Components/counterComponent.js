import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class componentName extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <TouchableOpacity style={{}} onPress={() => { this.props.increaseNum(1) }}>
                    <Icon name="plus-circle" size={32} color="#000" />
                </TouchableOpacity>
                <View style={{ padding: 24 }}>
                    <Text style={{ fontSize: 18, fontWeight: '700' }}>{this.props.count}</Text>
                </View>
                <TouchableOpacity style={{}} onPress={() => { this.props.decreaseNum(1) }}>
                    <Icon name="minus-circle" size={32} color="#f4511e" />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
