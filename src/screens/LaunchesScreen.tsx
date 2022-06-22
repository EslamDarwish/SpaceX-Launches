import * as React from 'react';
import {useState} from 'react';

import {useInfiniteQuery} from 'react-query';
import {launchesApi} from '../services/launch';
import PageWrapper from '../components/PageWrapper';
import {Text} from 'react-native-elements';

export const LaunchesScreen = () => {
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
    ({pageParam = 1}) => launchesApi.fetchLaunches(params, pageParam),
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
      <Text>
        {JSON.stringify(data?.pages.map(page => page.totalDocs).flat())}
      </Text>
    </PageWrapper>
  );
};
