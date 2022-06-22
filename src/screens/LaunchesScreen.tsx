import * as React from 'react';
import {useState, useEffect} from 'react';

import {useInfiniteQuery} from 'react-query';
import PageWrapper from '../components/PageWrapper';
import {launchApi} from '../services/launch';
import {useNavigation} from '@react-navigation/native';
import {launchesScreenProp} from '../navigation/models';
import FilterWrapper from '../components/FiltersWrapper';
import FilteredButton from '../common/FilteredButton';
import {FlatList} from 'react-native-gesture-handler';
import FullWidthCard from '../components/FullWidthCard';
import LaunchCard from '../components/LaunchCard';
import Loader from '../components/Loader';
import {Text} from 'react-native';

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

  const {
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    refetch,
    isLoading,
    isError,
  } = useInfiniteQuery(
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
  const refetching = () => {
    refetch();
  };
  useEffect(() => {
    refetching();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.query.upcoming, params.query.success]);

  const handleFilter = (v: boolean) => {
    setParams({
      query: {...params.query, upcoming: v, success: v ? null : true},
    });
  };
  const handleSuccess = () => {
    setParams({query: {...params.query, success: !params.query.success}});
  };

  const loadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  return (
    <PageWrapper>
      <FilterWrapper>
        <FilteredButton
          success={!params.query.upcoming}
          onPress={() => handleFilter(false)}>
          Past
        </FilteredButton>
        {params.query.success !== null && (
          <React.Fragment>
            <FilteredButton
              success={params.query.success}
              onPress={() => handleSuccess()}>
              Success
            </FilteredButton>

            <FilteredButton
              success={params.query.success === false}
              onPress={() => handleSuccess()}>
              Failed
            </FilteredButton>
          </React.Fragment>
        )}
        <FilteredButton
          success={params.query.upcoming}
          onPress={() => handleFilter(true)}>
          Upcoming
        </FilteredButton>
      </FilterWrapper>
      {isLoading && <Loader isLoading={isLoading} />}
      {isError && <Text>An Error Occurred</Text>}

      <FlatList
        data={data?.pages.map(page => page.docs).flat()}
        renderItem={({item}) => (
          <FullWidthCard
            onPress={() => navigation.navigate('Launch', {value: item})}>
            <LaunchCard value={item} />
          </FullWidthCard>
        )}
        keyExtractor={item => item.flight_number.toString()}
        onEndReached={loadMore}
        onEndReachedThreshold={0.2}
        ListFooterComponent={() => <Loader isLoading={isFetchingNextPage} />}
      />
    </PageWrapper>
  );
};
