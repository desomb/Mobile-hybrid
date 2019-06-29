import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { StyleSheet, Image } from 'react-native';
import HomeView from '../views/HomeView';
import BottomSheetView from '../views/BottomSheetView';
import MapControlView from '../views/MapControlView';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeView },
  MapControl: { screen: MapControlView },
  BottomSheet: { screen: BottomSheetView },
},
  {
    defaultNavigationOptions: {
      //headerRight: <NavigationIcon/>,
      headerStyle: {
        backgroundColor: '#004d99',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: "400",
      },
    },
    headerLayoutPreset: 'center',
  }
)

export default createAppContainer(MainNavigator);