import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Image, TouchableOpacity, AsyncStorage, Alert } from 'react-native';
import Product from '../model/Product';
import ProductService from '../service/productService';
import commonStyles from '../../styles/common';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class ProductDetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false,
            product: new Product()
        }

        this.fetchData(this.props.navigation.state.params.product._id);
    }
    fetchData(id) {
        ProductService.fetchProductDetail(id).then((data) => {
            this.setState({
                product: data[0],
                done: true
            })
        }).catch((error) => {
            this.setState({
                done: true,
                product: new Product()
            });
        })
    }

    addToCart = async (product) => {
        try {
            let arrayData = [];
            let dataCart = await AsyncStorage.getItem('Cart');
            if (dataCart) {
                arrayData = JSON.parse(dataCart);
                arrayData.push(product);
                AsyncStorage.setItem('Cart', JSON.stringify(arrayData), (error) => {
                    this.props.navigation.navigate('ShoppingCartScreen');
                });
            } else {
                // Set item
                arrayData.push(product);
                AsyncStorage.setItem('Cart', JSON.stringify(arrayData), (error) => {
                    this.props.navigation.navigate('ShoppingCartScreen');
                });
            }
        } catch (error) {
            Alert.alert(JSON.stringify(error));
        }
    }
    render() {
        return (
            <View style={{ backgroundColor: '#eee', flex: 1 }}>
                {
                    this.state.done &&
                    <View style={{ flex: 1 }}>
                        <View style={{ alignContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={{ uri: 'https://picsum.photos/300' }}
                                resizeMode={'contain'}
                                style={{ width: 300, height: 300 }}
                            />
                        </View>
                        <View style={{ alignContent: 'center', marginTop: 10 }}>
                            <Text>Product name: {this.state.product.productName}</Text>
                            <Text>Price: {this.state.product.price}</Text>
                        </View>
                        <View style={{ alignContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => {
                                // this.props.navigation.navigate('ShoppingCartScreen', { product: this.state.product })
                                this.addToCart(this.state.product);
                            }}>
                                <Text><Icon name="shopping-cart" size={32} color="#f4511e" /> Add to cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    ||
                    <View style={{ flex: 1 }}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                }
            </View>
        );
    }
}
