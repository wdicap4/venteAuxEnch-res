import React from "react";
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from "react-native";
// import * as firebase from "firebase";
import { firebase } from '@firebase/app';

export default class HomeScreen extends React.Component {
  state = {
    email: "",
    displayName: "",
  };

  componentDidMount() {
    const { email, displayName } = firebase.auth().currentUser;
    this.setState({ email, displayName });
  }

  signOutUser = () => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <View>
        <Text>Home Screen</Text>

        <TouchableOpacity style={{marginTop:32}} onPress={this.signOutUser}>
            <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
