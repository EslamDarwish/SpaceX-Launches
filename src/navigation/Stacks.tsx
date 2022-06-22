import React from 'react';

import {ShipsScreen} from '../screens/ShipsScreen';
import ShipScreen from '../screens/ShipScreen';
import RocketScreen from '../screens/RocketScreen';
import {RocketsScreen} from '../screens/RocketsScreen';
import {LaunchesScreen} from '../screens/LaunchesScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  LaunchesNavigatorParams,
  RocketsNavigatorParams,
  ShipsNavigatorParams,
} from './models';
import LaunchScreen from '../screens/LaunchScreen';

const StackLaunches = createNativeStackNavigator<LaunchesNavigatorParams>();
const StackRockets = createNativeStackNavigator<RocketsNavigatorParams>();
const StackLShips = createNativeStackNavigator<ShipsNavigatorParams>();

const LaunchesNavigator = () => {
  return (
    <StackLaunches.Navigator>
      <StackLaunches.Screen name="Launches" component={LaunchesScreen} />
      <StackLaunches.Screen name="Launch" component={LaunchScreen} />
    </StackLaunches.Navigator>
  );
};

export {LaunchesNavigator};

const RocketsNavigator = () => {
  return (
    <StackRockets.Navigator>
      <StackRockets.Screen name="Rockets" component={RocketsScreen} />
      <StackRockets.Screen name="Rocket" component={RocketScreen} />
    </StackRockets.Navigator>
  );
};

export {RocketsNavigator};
const ShipsNavigator = () => {
  return (
    <StackLShips.Navigator>
      <StackLShips.Screen name="Ships" component={ShipsScreen} />
      <StackLShips.Screen name="Ship" component={ShipScreen} />
    </StackLShips.Navigator>
  );
};

export {ShipsNavigator};
