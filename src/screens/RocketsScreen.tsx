import * as React from 'react';
import {useState} from 'react';

import {useInfiniteQuery} from 'react-query';
import PageWrapper from '../components/PageWrapper';
import {Text} from 'react-native-elements';
import {rocketApi} from '../services/rocket';
import {useNavigation} from '@react-navigation/native';
import {rocketsScreenProp} from '../navigation/models';

export const RocketsScreen = () => {
  const navigation = useNavigation<rocketsScreenProp>();
  const [params, setParams] = useState<{
    query: {active: boolean};
  }>({
    query: {
      active: true,
    },
  });
  const {data} = useInfiniteQuery(
    'rockets',
    ({pageParam = 1}) => rocketApi.getAll(params, pageParam),
    {
      getNextPageParam: lastPage => {
        if (lastPage.nextPage !== null) {
          return lastPage.nextPage;
        }
      },
    },
  );

  return (
    <PageWrapper>
      <Text onPress={() => navigation.navigate('Rocket')}>
        {JSON.stringify(data?.pages.map(page => page.totalDocs).flat())}
      </Text>
    </PageWrapper>
  );
};
