import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Image} from 'react-native-elements';
import Title from '../common/Title';
import {Rocket} from '../models/rocket.model';

const RocketCard = ({value}: {value: Rocket}) => {
  return (
    <View style={styles.rocketCard}>
      {value?.flickr_images?.length > 0 && (
        <Image
          source={{uri: value?.flickr_images[0]}}
          style={styles.image}
          height={60}
          width={60}
        />
      )}
      <View style={styles.rocketCardTextContainer}>
        <Title>{value?.name}</Title>
        <Text>Active: {JSON.stringify(value?.active)}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  rocketCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rocketCardTextContainer: {
    marginStart: 10,
  },
  image: {width: 60, height: 60},
});

export default RocketCard;
