import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import DetailsWrapper from '../components/DetailsWrapper';
import Title from '../common/Title';
import Detail from '../common/Detail';
import {Rocket} from '../models/rocket.model';
import {RouteProp} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';
import {Card, Image} from 'react-native-elements';

const RocketScreen = ({
  route,
}: {
  route: RouteProp<{params: {value: Rocket}}, 'params'>;
}) => {
  const [data, setData] = useState<Rocket>(route.params.value);
  useEffect(() => {
    setData(route.params.value);
  }, [route.params.value]);
  return (
    <View style={styles.header}>
      <Title>{data?.name}</Title>
      <FlatList
        horizontal
        data={data?.flickr_images}
        renderItem={({item, index}) => (
          <Card>
            <Image
              source={{uri: item}}
              style={styles.image}
              height={200}
              width={200}
              key={index}
            />
          </Card>
        )}
        keyExtractor={item => item.toString()}
      />

      <DetailsWrapper>
        <Detail>
          <Text>{data?.description}</Text>
        </Detail>

        <Detail>
          <Text>Country:</Text>
          <Text>{data?.country}</Text>
        </Detail>
        <Detail>
          <Text>Height:</Text>
          <Text>{data?.height?.meters}</Text>
        </Detail>
        <Detail>
          <Text>Diameter:</Text>
          <Text>{data?.diameter?.meters}</Text>
        </Detail>
        <Detail>
          <Text>Mass:</Text>
          <Text>{data?.mass?.kg}</Text>
        </Detail>
        <Detail>
          <Text>Cost Per Launch:</Text>
          <Text>{data?.cost_per_launch}</Text>
        </Detail>
      </DetailsWrapper>
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
  image: {width: 200, height: 200},
});
export default RocketScreen;
