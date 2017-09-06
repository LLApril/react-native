import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Header extends Component{
  static defaultProps = {
    back: '<'
  }
  constructor(props) {
    super(props);
    this.state = {
      isBack: true
    }
  }
  render() {
    return (
      <View style={ styles.title }>
        <Text style={styles.back} >{ this.state.isBack? this.props.back : ''}</Text>
        <Text style={styles.change}>{this.props.title}</Text> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    height: 44,
    flexDirection: 'row',
    backgroundColor: '#f4f4f4'
  },
  back: {
    width: '30%',
    fontSize: 32,
    color: '#8a8a8a',
    lineHeight: 40,
    marginLeft: 12
  },
  change: {
    flex: 1,
    lineHeight: 32,
    fontSize: 18,
    color: '#434343'
  }
})