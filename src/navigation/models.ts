import {Launch} from './../models/launch.model';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
export type TabNavigatorParamsList = {
  LaunchesStack: undefined;
  RocketsStack: undefined;
  ShipsStack: undefined;
};

export type LaunchesNavigatorParams = {
  Launches: undefined;
  Launch: {value: Launch};
};

export type ShipsNavigatorParams = {
  Ships: undefined;
  Ship: {value: Launch};
};
export type RocketsNavigatorParams = {
  Rockets: undefined;
  Rocket: {value: Launch};
};

export type launchesScreenProp = NativeStackNavigationProp<
  LaunchesNavigatorParams,
  'Launches'
>;
export type shipsScreenProp = NativeStackNavigationProp<
  ShipsNavigatorParams,
  'Ships'
>;

export type rocketsScreenProp = NativeStackNavigationProp<
  RocketsNavigatorParams,
  'Rockets'
>;
