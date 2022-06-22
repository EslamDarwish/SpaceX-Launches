import {View, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';

const Loader = ({isLoading}: {isLoading: boolean}) => {
  return isLoading ? (
    <ActivityIndicator style={styles.space} />
  ) : (
    <View style={styles.space2} />
  );
};

const styles = StyleSheet.create({
  space: {
    padding: 20,
  },
  space2: {
    padding: 10,
  },
});

export default Loader;
