import {Text, StyleSheet} from 'react-native';
import React, {ReactChild} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
  children?: ReactChild;
  success: boolean | null | undefined;
  onPress: () => void;
}
const FilteredButton = ({children, onPress, success}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: `${success ? 'lightgreen' : 'white'}`,
        },
      ]}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {marginEnd: 10, padding: 10, borderRadius: 10},
  buttonText: {fontWeight: 'bold'},
});

export default FilteredButton;
