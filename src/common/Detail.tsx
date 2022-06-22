import {View, Text, StyleSheet} from 'react-native';
import React, {ReactChild} from 'react';
interface Props {
  children?: ReactChild | ReactChild[];
}
const Detail = ({children}: Props) => {
  return (
    <View style={styles.container}>
      {React.Children.map(children, child => {
        return <Text style={styles.text}>{child}</Text>;
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    padding: 10,
  },
});

export default Detail;
