import React from 'react';
import {View, Text, ImageBackground,TextInput} from 'react-native';
import StyledButton from "../StyledButton";
import styles from './styles';

const CarItem = (props) => {

  const { name, tagline, taglineCTA, image } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline}
          {' '}
          <Text style={styles.subtitleCTA}>
            {taglineCTA}
          </Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        {/* <StyledButton
          type="primary"
          onPress={() => {
            console.warn("Custom Order was pressed");
          }}
        /> */}
         <TextInput
        style={styles.input}
        keyboardType='numeric'
      />

        <StyledButton
          type="secondary"
          content={"Soumettre votre proposition"}
          onPress={() => {
            console.warn("Votre proposition a bien été envoyée");
          }}
        />
      </View>

    </View>
  );
};

export default CarItem;
