import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, AsyncStorage, Alert, Image } from 'react-native';
import commonStyles from '../../styles/common';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ShoppingCartScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listProduct: []
        }
        this.checkListProductCart();
    }

    checkListProductCart = async () => {
        try {
            let arrayData = await AsyncStorage.getItem('Cart');
            this.setState({
                listProduct: JSON.parse(arrayData)
            });
        } catch (error) {
            Alert.alert(JSON.stringify(error));
        }
    }

    removeProductInCart = () => {

    }
    renderProductList = (product, index) => {
        return (
            <View style={commonStyles.category}>
                <View style={{ alignItems: 'center', flex: 1, flexDirection: 'row', alignContent: 'center', alignSelf: 'center' }}>
                    <TouchableOpacity>
                        <Image
                            source={{ uri: 'https://picsum.photos/100' }}
                            resizeMode={'contain'}
                            style={{ width: 100, height: 100 }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ paddingLeft: 5, flex: 3 }}>
                    <Text>{product.productName}</Text>
                    <Text>{product.price}</Text>
                    <TouchableOpacity onPress={(index) => { Alert.alert(`Remove this product: ${index}`) }}>
                        <Icon name="trash" size={26} color="#f4511e" />
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
    render() {
        if (this.state.listProduct.length > 0) {
            return (
                <View>
                    <Text> List product in your cart: </Text>
                    <FlatList
                        style={{}}
                        data={this.state.listProduct}
                        renderItem={(product, index) => { return this.renderProductList(product.item, index) }}
                        keyExtractor={(item, index) => String(item._id)}
                        ListEmptyComponent={() => { return this.showEmptyList() }}
                    />

                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('CategoryScreen');
                    }}>
                        <Text><Icon name="arrow-left" size={26} color="#f4511e" /> Continue shopping</Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return (
                <View>
                    <Text>Your cart is empty</Text>
                </View>
            )
        }
    }
}
