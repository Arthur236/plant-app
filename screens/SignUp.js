import React, { Component } from 'react';
import { Animated, Dimensions, Image, FlatList, Modal, StyleSheet, ScrollView } from 'react-native';

import { Button, Block, Text } from '../components';
import { theme } from '../constants';

const { width, height } = Dimensions.get('window');

class SignUp extends Component {
  render() {
    return (
      <ScrollView>
        <Text>SignUp</Text>
      </ScrollView>
    );
  }
}

export default SignUp;

const styles = StyleSheet.create({

});
