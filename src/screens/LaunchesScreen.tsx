import React from 'react';
import {Text, StyleSheet} from 'react-native';
import PageWrapper from '../components/PageWrapper';

export const LaunchesScreen = () => {
  return (
    <PageWrapper>
      <Text style={styles.title}>Launches</Text>
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  title: {
    padding: 16,
    fontSize: 24,
    textAlign: 'center',
  },
});
