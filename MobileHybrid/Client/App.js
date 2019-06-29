import React from 'react';
import MapView from 'react-native-maps'
import { StyleSheet, View, Button} from 'react-native';
import Navigation from './components/Navigation';

export default class App extends React.Component {

  render() {
    // Uncomment to freez on splash screen
    //SplashScreen.preventAutoHide();
    return (
      <Navigation/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  map: {
    height: '100%',
    width: '100%',
  },
})