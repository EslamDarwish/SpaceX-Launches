import {View, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import {Launch} from '../models/launch.model';
import Title from '../common/Title';
import {Image, Text} from 'react-native-elements';
import DetailsWrapper from '../components/DetailsWrapper';
import Detail from '../common/Detail';

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
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{uri: data?.links?.patch?.small}}
          style={styles.image}
          height={100}
          width={100}
        />
        <Title>{data?.name}</Title>
        <DetailsWrapper>
          <Detail>
            <Text>{data?.details}</Text>
          </Detail>

          <Detail>
            <Text>Rocket:</Text>
            <Text>{data?.rocket}</Text>
          </Detail>
          <Detail>
            <Text>Success:</Text>
            <Text>{JSON.stringify(data?.success)}</Text>
          </Detail>
          <Detail>
            <Text>Upcoming:</Text>
            <Text>{JSON.stringify(data?.upcoming)}</Text>
          </Detail>
          <Detail>
            <Text>Date Utc:</Text>
            <Text>{data?.date_utc}</Text>
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
  image: {width: 100, height: 100},
});
export default LaunchScreen;
