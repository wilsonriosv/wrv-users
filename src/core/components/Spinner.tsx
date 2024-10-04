import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export const Spinner = () => {
  return (
    <View>
      <Text style={styles.text1}>Spinner. Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
