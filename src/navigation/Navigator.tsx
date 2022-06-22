import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TabNavigatorParamsList} from './models';
import {LaunchesNavigator, RocketsNavigator, ShipsNavigator} from './Stacks';

const TabNavigator = createBottomTabNavigator<TabNavigatorParamsList>();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator.Navigator screenOptions={{headerShown: false}}>
        <TabNavigator.Screen
          name="LaunchesStack"
          component={LaunchesNavigator}
        />
        <TabNavigator.Screen name="RocketsStack" component={RocketsNavigator} />
        <TabNavigator.Screen name="ShipsStack" component={ShipsNavigator} />
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
};
