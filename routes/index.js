import React from 'react';
import { TabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import CameraScreen from '../screens/CameraScreen';

const MyApp = TabNavigator({
  Camera: {
    screen: CameraScreen,
  },
  Home: {
    screen: HomeScreen,
  },
  Notifications: {
    screen: NotificationsScreen,
  },
}, {
  initialRouteName: 'Home',
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

export default MyApp;
