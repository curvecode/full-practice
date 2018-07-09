import React, { Component } from 'react';
import { View, Text, ScrollView} from 'react-native';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import IconA from 'react-native-vector-icons/FontAwesome';
import styles from './styles/common';

export default class componentName extends Component {
    render() {
        return (
            <View>
                <ScrollView>
                    <Text> List of FontAwesome Icons </Text>
                    <View style={styles.rowFlex}>
                        <IconA name="rocket" size={30} color="#900" />
                        <IconA name="adn" size={30} color="#000" />
                        <IconA name="home" size={30} color="#0fe" />
                        <IconA name="bus" size={30} color="#eee" />
                        <IconA name="calendar" size={30} color="#ccc" />
                        <IconA name="backward" size={30} color="#bbb" />
                        <IconA name="ban" size={30} color="#900" />
                        <IconA name="building" size={30} color="#abb" />
                        <IconA name="cc-visa" size={30} color="#cdd" />
                        <IconA name="behance" size={30} color="#aff" />
                        <IconA name="chrome" size={30} color="#ecc" />
                        <IconA name="bluetooth" size={30} color="#dee" />
                        <IconA name="bug" size={30} color="#add" />
                    </View>
                    <View>
                        <Button
                            leftIcon={{name: 'bug', type: 'font-awesome'}}
                            title={"Click me"}
                        />
                        <Icon 
                            name='rowing'
                            color='black'
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}
