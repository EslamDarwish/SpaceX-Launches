import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import {Launch} from '../models/launch.model';
import Title from '../common/Title';

const LaunchScreen = ({
  route,
}: {
  route: RouteProp<{params: {value: Launch}}, 'params'>;
}) => {
  const [data, setData] = useState<Launch>(route.params.value);
  useEffect(() => {
    setData(route.params.value);
  }, [route.params.value]);

  return (
    <View>
      <Title>{data?.name}</Title>
      <Text>{}</Text>
    </View>
  );
};

export default LaunchScreen;
