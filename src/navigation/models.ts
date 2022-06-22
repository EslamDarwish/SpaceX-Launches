import {NativeStackNavigationProp} from '@react-navigation/native-stack';
export type TabNavigatorParamsList = {
  LaunchesStack: undefined;
  RocketsStack: undefined;
  ShipsStack: undefined;
};

export type LaunchesNavigatorParams = {
  Launches: undefined;
  Launch: undefined;
};

export type ShipsNavigatorParams = {
  Ships: undefined;
  Ship: undefined;
};
export type RocketsNavigatorParams = {
  Rockets: undefined;
  Rocket: undefined;
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
