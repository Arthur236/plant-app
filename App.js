import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading, Asset } from 'expo';

import Navigation from './navigation';
import * as constants from './constants';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Navigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
