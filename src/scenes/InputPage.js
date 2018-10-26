import React, { Component } from 'react';
import { AppRegistry, View, TextInput, Button } from 'react-native';

class Yeet extends Component {
  render() {
    return (
      <TextInput
        // {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable = {true}
        maxLength = {100}
      />
    );
  }
}

export default class InputPage extends Component {
static navigationOptions = ({navigation}) => {
  return {
    // title: 'Next',
    headerRight: 
    <Button
       title="Add"
       onPress={() => navigation.navigate('home')} />
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  // If you type something in the text box that is a color, the background will change to that
  // color.
  render() {
    return (
     <View style={{
       backgroundColor: this.state.text,
       borderBottomColor: '#',
       borderBottomWidth: 1 }}
     >
       <Yeet
         multiline = {true}
         numberOfLines = {4}
         onChangeText={(text) => this.setState({text})}
         value={this.state.text}
       />
     </View>
    );
  }
}

