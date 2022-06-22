import * as React from 'react';
import {useState, useEffect} from 'react';

import {useInfiniteQuery} from 'react-query';
import PageWrapper from '../components/PageWrapper';
import {rocketApi} from '../services/rocket';
import {useNavigation} from '@react-navigation/native';
import {rocketsScreenProp} from '../navigation/models';
import FilterWrapper from '../components/FiltersWrapper';
import FilteredButton from '../common/FilteredButton';
import {FlatList} from 'react-native-gesture-handler';
import FullWidthCard from '../components/FullWidthCard';
import RocketCard from '../components/RocketCard';
import Loader from '../components/Loader';

export const RocketsScreen = () => {
  const navigation = useNavigation<rocketsScreenProp>();
  const [params, setParams] = useState<{
    query: {active: boolean};
  }>({
    query: {
      active: true,
    },
  });
  const {data, hasNextPage, fetchNextPage, isFetchingNextPage, refetch} =
    useInfiniteQuery(
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
  const refetching = () => {
    refetch();
  };
  useEffect(() => {
    refetching();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.query.active]);

  const handleActive = () => {
    setParams({query: {...params.query, active: !params.query.active}});
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
          success={params.query.active}
          onPress={() => handleActive()}>
          Active
        </FilteredButton>
      </FilterWrapper>
      <FlatList
        data={data?.pages.map(page => page.docs).flat()}
        renderItem={({item}) => (
          <FullWidthCard>
            <RocketCard value={item} />
          </FullWidthCard>
        )}
        keyExtractor={item => item.id.toString()}
        onEndReached={loadMore}
        onEndReachedThreshold={0.2}
        ListFooterComponent={() => <Loader isLoading={isFetchingNextPage} />}
      />
    </PageWrapper>
  );
};
