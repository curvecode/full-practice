import React, { Component } from 'react';
import { View, Text, Button} from 'react-native';

export default class ProductScreen extends Component {

    static navigationOptions = {
        title: 'List products'
    };
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Text> List product </Text>
                <Button 
                    title="Back to home"
                    onPress={() => {
                        this.props.navigation.navigate('Home');
                    }}
                />
            </View>
        );
    }
}
