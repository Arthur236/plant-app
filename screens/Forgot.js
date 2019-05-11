import React, { Component } from 'react';
import { Animated, Dimensions, Image, FlatList, Modal, StyleSheet, ScrollView } from 'react-native';

import { Button, Block, Text } from '../components';
import { theme } from '../constants';

const { width, height } = Dimensions.get('window');

class Forgot extends Component {
  render() {
    return (
      <ScrollView>
        <Text>Forgot</Text>
      </ScrollView>
    );
  }
}

export default Forgot;

const styles = StyleSheet.create({

});
