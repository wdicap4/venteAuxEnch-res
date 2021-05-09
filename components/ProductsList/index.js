import React from 'react';
import {View, Text, FlatList, Dimensions, Touchable, TouchableOpacity} from 'react-native';
import ProductItem from "../ProductItem";
import { firebase } from '@firebase/app';
import styles from './styles';
import products from './products';

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

        <TouchableOpacity style={{marginTop:32}} onPress={this.signOutUser}>
            <Text>Logout</Text>
        </TouchableOpacity>
        <FlatList
        data={products}
        renderItem={({item}) => <ProductItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      
      />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });


// const CarsList = (props) => {
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={{ alignSelf: "center", marginTop: 32 }}
//         onPress={() => this.props.navigation.navigate("Login")}
//         >
//           <Text style={{ color: "#414959", fontSize: 13 }}>
//             {" "}
//             <Text style={{ fontWeight: "500", color: "#E9446A" }}>Logout</Text>
//           </Text>
//         </TouchableOpacity>
//       <FlatList
//         data={products}
//         renderItem={({item}) => <ProductItem car={item} />}
//         showsVerticalScrollIndicator={false}
//         snapToAlignment={'start'}
//         decelerationRate={'fast'}
//         snapToInterval={Dimensions.get('window').height}
      
//       />
//     </View>
//   );
// };

// export default CarsList;
