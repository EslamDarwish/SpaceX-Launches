import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import {Image} from 'react-native-elements';
import {Ship} from '../models/ship.model';
import Title from '../common/Title';
import DetailsWrapper from '../components/DetailsWrapper';
import Detail from '../common/Detail';

const ShipScreen = ({
  route,
}: {
  route: RouteProp<{params: {value: Ship}}, 'params'>;
}) => {
  const [data, setData] = useState<Ship>(route.params.value);
  useEffect(() => {
    setData(route.params.value);
  }, [route.params.value]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{uri: data?.image}}
          style={styles.image}
          height={300}
          width={300}
        />
        <Title>{data?.name}</Title>
        <DetailsWrapper>
          <Detail>
            <Text>Type:</Text>
            <Text>{data?.type}</Text>
          </Detail>

          <Detail>
            <Text>Mass:</Text>
            <Text>{data?.mass_kg}</Text>
          </Detail>
          <Detail>
            <Text>Year:</Text>
            <Text>{data?.year_built}</Text>
          </Detail>
          <Detail>
            <Text>Home Port:</Text>
            <Text>{data?.home_port}</Text>
          </Detail>
        </DetailsWrapper>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {width: 300, height: 300},
});
export default ShipScreen;
