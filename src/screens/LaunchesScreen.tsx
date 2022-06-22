import * as React from 'react';
import {useState} from 'react';

import {useInfiniteQuery} from 'react-query';
import PageWrapper from '../components/PageWrapper';
import {Text} from 'react-native-elements';
import {launchApi} from '../services/launch';
import {useNavigation} from '@react-navigation/native';
import {launchesScreenProp} from '../navigation/models';

export const LaunchesScreen = () => {
  const navigation = useNavigation<launchesScreenProp>();
  const [params, setParams] = useState<{
    query: {upcoming: boolean; success?: boolean | null; name?: any};
  }>({
    query: {
      upcoming: false,
      success: true,
    },
  });

  const {data} = useInfiniteQuery(
    'launches',
    ({pageParam = 1}) => launchApi.getAll(params, pageParam),
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
      <Text onPress={() => navigation.navigate('Launch')}>
        {JSON.stringify(data?.pages.map(page => page.totalDocs).flat())}
      </Text>
    </PageWrapper>
  );
};
