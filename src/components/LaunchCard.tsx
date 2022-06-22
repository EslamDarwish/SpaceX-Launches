import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Launch} from '../models/launch.model';
import Title from '../common/Title';
import {Image} from 'react-native-elements';

const LaunchCard = ({value}: {value: Launch}) => {
  return (
    <View style={styles.launchCard}>
      <Image
        source={{uri: value?.links?.patch?.small}}
        style={styles.image}
        height={60}
        width={60}
      />
      <View style={styles.launchCardTextContainer}>
        <Title>{value?.name}</Title>
        <Text>Success: {JSON.stringify(value?.success ?? 'Undetermined')}</Text>
        <Text>Upcoming: {JSON.stringify(value?.upcoming)}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  launchCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  launchCardTextContainer: {
    marginStart: 10,
  },
  image: {width: 60, height: 60},
});

export default LaunchCard;
