import React, { Component } from 'react';
import { Animated, Dimensions, Image, FlatList, Modal, StyleSheet, ScrollView } from 'react-native';

import { Button, Block, Text } from '../components';
import { theme } from '../constants';

const { width, height } = Dimensions.get('window');

class Login extends Component {
  render() {
    return (
      <ScrollView>
        <Text>Login</Text>
      </ScrollView>
    );
  }
}

export default Login;

const styles = StyleSheet.create({

});
