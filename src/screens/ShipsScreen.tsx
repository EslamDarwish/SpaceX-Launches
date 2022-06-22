import * as React from 'react';
import {useState} from 'react';

import {useInfiniteQuery} from 'react-query';
import PageWrapper from '../components/PageWrapper';
import {Text} from 'react-native-elements';
import {shipsApi} from '../services/ship';
import {useNavigation} from '@react-navigation/native';
import {shipsScreenProp} from '../navigation/models';

export const ShipsScreen = () => {
  const navigation = useNavigation<shipsScreenProp>();
  const [params, setParams] = useState<{
    query: {active: boolean};
  }>({
    query: {
      active: true,
    },
  });
  const {data} = useInfiniteQuery(
    'ships',
    ({pageParam = 1}) => shipsApi.getAll(params, pageParam),
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
      <Text onPress={() => navigation.navigate('Ship')}>
        {JSON.stringify(data?.pages.map(page => page.totalDocs).flat())}
      </Text>
    </PageWrapper>
  );
};
