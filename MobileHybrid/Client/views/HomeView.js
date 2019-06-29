import React from 'react';
import MapView from 'react-native-maps'
import { StyleSheet, View, Button} from 'react-native';

export default class HomeView extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    // Uncomment to freez on splash screen
    //SplashScreen.preventAutoHide();
    return (
      <View style={styles.map}>
        
        <Button
          title="Go to Map"
            onPress={() => this.props.navigation.navigate('MapControl')}
        />
{/*        <MapControlView link={this.props.navigation} />*/}
      </View>
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