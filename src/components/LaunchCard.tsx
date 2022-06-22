import {View, Text} from 'react-native';
import React from 'react';
import {Launch} from '../models/launch.model';
import Title from '../common/Title';

const LaunchCard = ({value}: {value: Launch}) => {
  return (
    <View>
      <Title>{value?.name}</Title>
      <Text>Success: {JSON.stringify(value?.success ?? 'Undetermined')}</Text>
      <Text>Upcoming: {JSON.stringify(value?.upcoming)}</Text>
    </View>
  );
};

export default LaunchCard;
