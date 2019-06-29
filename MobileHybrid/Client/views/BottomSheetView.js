import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';
export default class BottomSheetView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      
      <BottomSheet
        ref={this.bs}
        snapPoints={[550, 350, 40]}
        initialSnap={1}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: '#F5FCFF',
  },
  panelContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  panel: {
    height: 600,
    padding: 20,
    backgroundColor: '#f7f5eee8',
  },
  header: {
    backgroundColor: '#004d99',
    shadowColor: '#000000',
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#318bfb',
    alignItems: 'center',
    marginVertical: 10,
  },
  panelButtonTitle: {
    fontSize: 17,
    color: 'white',
  },
  photo: {
    width: '100%',
    height: 225,
    marginTop: 30,
  },
  collaboratorTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  collaboratorTitle: {
    fontSize: 18,
    color: '#318bfb',
    alignItems: 'center'
  },
  collaboratorList: {
    marginTop: 5
  },
  map: {
    height: '100%',
    width: '100%',
  },
})