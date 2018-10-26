import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, } from 'react-native';

class Home extends Component {
  static navigationOptions = ({navigation}) => {
  return {
    title: 'Home',
    headerRight: 
    <Button
       title="+"
       onPress={() => navigation.navigate('add')} />
    };
  };
  render() {
    return (
      <View>
        <Text>This is a text!</Text>
      </View>
    );
  }
}

export default Home;