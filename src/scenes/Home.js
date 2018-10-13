import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, AsyncStorage } from 'react-native';

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);

    this.state = this.props;
  }

  componentDidMount() {

  }
  render() {
    return (
      <View>
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}

export default Home;