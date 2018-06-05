import React, { Component } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import Category from '../model/Category';
import commonStyles from '../../styles/common';
import ProductService from '../service/productService';
export default class CategoryScreen extends Component {

    // productService;
    constructor(props) {
        super(props);
        this.state = {
            categoryList: [],
            cartList: [],
            done: false
        }
        this.fetchData();
    }

    fetchData = () => {
        ProductService.fetchListCategory().then((data) => {
            this.setState({
                categoryList: data
            });
            this.setState({ done: true });
            return data;
        }).catch((error) => {
            this.setState({ done: true });
        });

    }
    renderCategoryList = (category) => {
        return (
            <View style={commonStyles.category}>
                {/* Picture */}
                <View style={{ alignItems: 'center', flex: 1, flexDirection: 'row', alignContent: 'center', alignSelf: 'center' }}>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('ProductsScreen', { category: category }) }}
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
                    <Text>{category.categoryName}</Text>
                </View>
            </View>
        )
    }

    showEmptyList = () => {
        return (
            <View>
                <Text>No data</Text>
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
                        data={this.state.categoryList}
                        renderItem={(category) => { return this.renderCategoryList(category.item) }}
                        keyExtractor={(item, index) => String(item._id)}
                        ListEmptyComponent={() => { this.showEmptyList() }}
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
