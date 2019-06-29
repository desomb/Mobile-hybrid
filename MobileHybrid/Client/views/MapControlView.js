import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Image} from 'react-native';
import { AuthSession } from 'expo';

//init default position when no position found (default will use last position found but if first launch) this can be edit to start somewhere else
const defaultRegion = {
  latitude: 0,
  longitude: 0,
  latitudeDelta: 0.003,
  longitudeDelta: 0.003,
}

export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(position => resolve(position), e => reject(e));
  });
};

export default class MapControlView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: defaultRegion,
      showScroll: true,
    };
  }


  scrollState = (state, id) => {
    this.setState({ showScroll: state});
  }

  componentDidMount() {
    return getCurrentLocation().then(position => {
      if (position) {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          },
        });
      }
    });
  }

  render() {
    const { region } = this.state;
    var data = "test";

    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={styles.map}
          initialRegion={this.state.region.latitude != 0 ? this.state.region : null}
          loadingIndicatorColor={"#4280B2"}
          loadingBackgroundColor={"#4280B2"}
          showsUserLocation={true}
          region={region}
          onPress={() => this.scrollState(true, 0)}
          onRegionChangeComplete={region => this.setState({ region })}
        >
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    backgroundColor: '#4280B2',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFill
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: 'center',
  },
  marker: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    backgroundColor: '#4280B2',
  },
  ring: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: 'rgba(66,128,178, 0.3)',
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'rgba(66,128,178, 0.5)',
  },
  markerPreview: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 30,
    bottom: 50,
  },
  customMarker: {
    width: 20,
    height: 20 * 512 / 369,
  }
})