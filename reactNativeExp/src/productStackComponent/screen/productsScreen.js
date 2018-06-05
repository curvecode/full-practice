import React, { Component } from 'react';
import { View, Text, Image, FlatList, ActivityIndicator, Alert, TouchableOpacity } from 'react-native';
import ProductService from '../service/productService';
import commonStyles from '../../styles/common';

export default class ProductsScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listProductOfCategory: [],
            done: false
        }
        this.fetchData(this.props.navigation.state.params.category._id);
        // Alert.alert(JSON.stringify(this.props.navigation.state.params.category));
        console.log(this.props.navigation.state.params);
    }

    fetchData = (id) => {
        ProductService.fetchListCategory(id).then((data) => {
            this.setState({
                listProductOfCategory: data
            });
            this.setState({ done: true });
            return data;
        }).catch((error) => {
            this.setState({ done: true });
        });

    }

    renderProductList = (product) => {
        if (product) {
            return (
                <View style={commonStyles.category}>
                    {/* Picture */}
                    <View style={{ alignItems: 'center', flex: 1, flexDirection: 'row', alignContent: 'center', alignSelf: 'center' }}>
                        <TouchableOpacity
                            onPress={() => { this.props.navigation.navigate('ProductDetailScreen', { product: product }) }}
                        >
                            <Image
                                source={{ uri: 'https://picsum.photos/100' }}
                                resizeMode={'contain'}
                                style={{ width: 100, height: 100 }}
                            />
                        </TouchableOpacity>
                    </View>
                    {/* Name and Time */}
                    <View style={{ paddingLeft: 5, flex: 3 }}>
                        <Text>{product.productName}</Text>
                        <Text>{product.price}</Text>
                    </View>
                </View>
            )
        } else {
            return null;
        }
    }

    showEmptyList = () => {
        return (
            <View>
                <Text>No product</Text>
            </View>
        );
    }
    render() {
        return (
            <View style={{ backgroundColor: '#eee', flex: 1 }}>
                {
                    this.state.done &&
                    <FlatList
                        style={{}}
                        data={this.state.listProductOfCategory}
                        renderItem={(product) => { return this.renderProductList(product.item) }}
                        keyExtractor={(item, index) => String(item._id)}
                        ListEmptyComponent={() => { return this.showEmptyList() }}
                    />
                    ||
                    <View style={{ flex: 1 }}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                }

            </View>
        );
    }
}
