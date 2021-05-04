import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import ProductItem from "../ProductItem";

import styles from './styles';
import products from './products';

const CarsList = (props) => {
  return (
    <View style={styles.container}>
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
};

export default CarsList;
