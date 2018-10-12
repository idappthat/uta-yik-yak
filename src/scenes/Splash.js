import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import yeet from '../../images/yeet520.png';
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDlkT9b1WAM_AU_CH6bpCQavkhPtPH8sCs",
  databaseURL: "https://yeet-54e58.firebaseio.com/"
};

function writeNewUser() {
  let newUserKey = firebase.database().ref().child('users').push().key

  // Write the new user data simultaneously in the users list
  var updates = {};
  updates['/users/' + newUserKey] = newUserKey;

  return firebase.database().ref().update(updates);
}

firebase.initializeApp(firebaseConfig);
var database = firebase.database();
writeNewUser();


class Splash extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      authorized: true,
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <Image source={yeet} style={styles.image}></Image>
        <Text style={styles.text}>
          YEET
        </Text>
        <View style={styles.button}>
          <Button
            onPress={() => this.props.navigation.navigate('home')}
            title="Start yeetin'"
            color="#ffff"
            accessibilityLabel="Login button"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1abc9c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 375,
    width: 375,
    resizeMode: 'contain',
  },
  button: {
    // position: 'absolute',
    // bottom: 75,
  },
  text: {
    fontFamily: 'Chalkboard SE',
    fontSize: 74,
    color: '#ffff',
  }
});

export default Splash;