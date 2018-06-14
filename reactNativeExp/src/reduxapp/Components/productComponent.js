import React, { Component } from 'react';
import { View, Text, Image, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';

const products = [
    {id: 1, img: 'https://picsum.photos/100', productName: 'Samsung', price: '100'},
    {id: 2, img: 'https://picsum.photos/100', productName: 'iPhone', price: '100'},
    {id: 3, img: 'https://picsum.photos/100', productName: 'iPad', price: '100'},
    {id: 4, img: 'https://picsum.photos/100', productName: 'Sony', price: '100'},
    {id: 5, img: 'https://picsum.photos/100', productName: 'HTC', price: '100'},
    {id: 6, img: 'https://picsum.photos/100', productName: 'Nokia', price: '100'}
];

export default class ProductComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listProductOfCategory: products,
            done: true // TODO: should be false when have request to API
        };
    }

    renderProductList = (product) => {
        if (product) {
            return (
                <View>
                    {/* Picture */}
                    <View style={{ alignItems: 'center', flex: 1, flexDirection: 'row', alignContent: 'center', alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { console.log('Nothing') }}>
                            <Image
                                source={{ uri: product.img }}
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
