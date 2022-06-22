import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

interface Props {
  children?: ReactNode | ReactNode[];
}

const FilterWrapper = ({children}: Props) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>{children}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    padding: 10,
  },
});
export default FilterWrapper;
