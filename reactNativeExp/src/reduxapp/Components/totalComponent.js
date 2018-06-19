import React, { Component } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class TotalComponent extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Text> Aloha : {this.props.total} </Text>
                <TouchableOpacity style={{}} onPress={() => { this.props.addCounter(10); this.props.increaseNum(10) }}>
                    <Icon name="plus-circle" size={64} color="#000" />
                </TouchableOpacity>
            </View>
        );
    }
}
