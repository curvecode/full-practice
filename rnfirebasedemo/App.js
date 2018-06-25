import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase';
import styles from './src/components/styles/common';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('todos');
    this.unsubscribe = null;
    this.state = {
      title: '',
      loading: true,
      todos: [],
    };
    // this.bindingTodos();
  }

  updateTitle(text) {
    this.setState({
      title: text
    });
  }

  createTodo() {
    this.ref.add({
      title: this.state.title,
      completed: false,
      createdDate: new Date().toUTCString()
    });
    this.textInput.clear();
  }
  // constructor() {
  //   super();
  //   this.state = {
  //     // firebase things?
  //   };
  // }

  componentDidMount() {
    // firebase things?
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  componentWillUnmount() {
    this.unsubscribe = null;
  }

  bindingTodos() {
    let datas = [];
    this.ref.get().then((snapShot) => {
      snapShot.forEach(doc => {
        datas.push(doc.data());
      });
      // alert(JSON.stringify(datas));
      this.setState({
        todos: datas,
        loading: false
      });
    }).catch(error => {
      alert('Have error :', error);
      this.setState({
        loading: false
      });
    });
    // this.ref.onSnapshot(this.onCollectionUpdate);
  }



  onCollectionUpdate = (querySnapshot) => {
    const todos = [];
    querySnapshot.forEach((doc) => {
      const { title, completed, createdTime } = doc.data();
      todos.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        completed,
        createdTime
      });
      this.setState({
        todos: todos,
        loading: false,
      });
    });
  }

  renderTodo(item) {
    return (
      // <View>
      //   <Text>{item.title}</Text>
      //   <TouchableOpacity onPress={() => { alert('Complete it!'); }}>
      //     <Text>Complete</Text>
      //   </TouchableOpacity>
      // </View>

      <View style={styles.wrapper}>
        <View style={styles.thumbnailView}>
          <Image source={{ uri: props.image.thumbUrl }} style={styles.thumbnail} />
        </View>
        <View style={styles.detailsView}>
          <ProductName name={name} />
          <RatingView rating={reviewScore} reviewCount={reviewCount} style={styles.rating} />
          <PriceText price={offer.price} salePrice={offer.salePrice} style={styles.priceText} />
          <View style={styles.shipping}>
            <Text style={styles.shippingText}>{`${rn({ min: 2, max: 7, integer: true })} Days Shipping`}</Text>
          </View>
        </View>

      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {
            !this.state.loading &&
            <FlatList
              data={this.state.todos}
              renderItem={(todos) => { return this.renderTodo(todos.item) }}
              keyExtractor={(item) => String(item.createdDate)}
            />
            ||
            <View style={{ flex: 1 }}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          }
        </ScrollView>
        <View>
          <TextInput
            ref={ref => {
              this.textInput = ref
            }}
            placeholder="Enter your task"
            onChangeText={(text) => this.updateTitle(text)}
          />
          <Button
            title="Save"
            disabled={!this.state.title.length}
            onPress={() => this.createTodo()}
          />
        </View>
      </View>
    );
  }
}
