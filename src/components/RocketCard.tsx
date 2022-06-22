import {View, Text} from 'react-native';
import React from 'react';
import {Rocket} from '../models/rocket.model';

const RocketCard = ({value}: {value: Rocket}) => {
  return (
    <View>
      <Text>{JSON.stringify(value?.id)}</Text>
      <Text>{JSON.stringify(value?.name)}</Text>

      <Text>Active: {JSON.stringify(value?.active)}</Text>
    </View>
  );
};

export default RocketCard;
