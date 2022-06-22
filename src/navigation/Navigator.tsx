import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TabNavigatorParamsList} from './models';
import {LaunchesScreen} from '../screens/LaunchesScreen';
import {MissionsScreen} from '../screens/MissionsScreen';
import {ShipsScreen} from '../screens/ShipsScreen';

const TabNavigator = createBottomTabNavigator<TabNavigatorParamsList>();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator.Navigator>
        <TabNavigator.Screen name="Launches" component={LaunchesScreen} />
        <TabNavigator.Screen name="Missions" component={MissionsScreen} />
        <TabNavigator.Screen name="Ships" component={ShipsScreen} />
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
};
