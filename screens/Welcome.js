import React, { Component } from 'react';
import { Animated, Dimensions, Image, FlatList, Modal, StyleSheet, ScrollView } from 'react-native';

import { Button, Block, Text } from '../components';
import { theme } from '../constants';

const { width, height } = Dimensions.get('window');

class Welcome extends Component {
  render() {
    return (
      <ScrollView>
        <Text>Welcome</Text>
      </ScrollView>
    );
  }
}

export default Welcome;

const styles = StyleSheet.create({

});
