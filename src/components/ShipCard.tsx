import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Ship} from '../models/ship.model';
import {Image} from 'react-native-elements';
import Title from '../common/Title';

const ShipCard = ({value}: {value: Ship}) => {
  return (
    <View style={styles.shipCard}>
      <Image
        source={{uri: value?.image}}
        style={styles.image}
        height={60}
        width={60}
      />
      <View style={styles.shipCardTextcontainer}>
        <Title>{value?.name}</Title>
        <Text>Active: {JSON.stringify(value?.active)}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  shipCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shipCardTextcontainer: {
    marginStart: 10,
  },
  image: {width: 60, height: 60},
});

export default ShipCard;
