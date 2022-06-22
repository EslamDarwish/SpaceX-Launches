import {Text, StyleSheet} from 'react-native';
import React from 'react';

const Title = ({children}: {children: string}) => {
  return <Text style={styles.title}>{children}</Text>;
};
const styles = StyleSheet.create({
  title: {fontWeight: 'bold', fontSize: 16, paddingBottom: 5},
});

export default Title;
