import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import LoadingScreen from './components/LoadingScreen';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import HomeScreen from './components/HomeScreen';
import ProductsList from './components/ProductsList';
import Header from './components/Header';
import { firebase } from '@firebase/app';

var firebaseConfig = {
  apiKey: "AIzaSyCyZV6A-8eSCs2nRVAGm5HWQvHVdBbPgQo",
  authDomain: "vaeapp-37598.firebaseapp.com",
  projectId: "vaeapp-37598",
  storageBucket: "vaeapp-37598.appspot.com",
  messagingSenderId: "196293961673",
  appId: "1:196293961673:web:f218391b1954e4e5afaa18",
};
//Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  ProductsList : ProductsList,
});

const AuthStack = createSwitchNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: "Loading",
    }
  )
);



// export default function App() {
  // return (
  //   <View style={styles.container}>
  //     <Header />
  //     <ProductsList />
  //     <StatusBar style="auto" />
  //   </View>
  // );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
