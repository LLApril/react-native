import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import Header from '../component/header';

export default class Tutor_details extends Component{
  constructor(props) {
    super(props);
    this.state = {
      title: 'Tutor details'
    }
  }
  render() {
    return (
      <View>
        <Header title={this.state.title} />
      </View>
    )
  }
}