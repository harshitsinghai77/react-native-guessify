import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TitleText from './TitleText';

import Colors from '../constants/Colors';

const NumberContainer = props => {
  return (
    <View style={styles.container}>
      <TitleText style={styles.number}>{props.children}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.main,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    color: Colors.accent,
    fontSize: 26
  }
});

export default NumberContainer;
