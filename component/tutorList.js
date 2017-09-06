import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class TutorList extends Component{
  render() {
    return (
      <View style={styles.tutorItem}>
        <View style={styles.tutor}>
          <Text style={styles.tutorImg}></Text>
          <View style={{height: 66,justifyContent: 'space-between'}}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: 124, justifyContent: 'space-between' }}>
              <Text style={{ color: '#444',fontSize: 15 }}>Jessica Wang</Text>
              <Text style={{ width: 21, height: 14, backgroundColor: 'red' }}></Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: 130,justifyContent: 'space-between',}}>
              <Text style={{fontSize: 14}}>6 Years</Text>
              <Text style={{backgroundColor: 'orange',width: 80,height: 14}}></Text>
            </View>
            <Text style={{fontSize: 14}}>Number of classes: <Text style={{ color: '#3fbfff' }}>10</Text></Text>
          </View>
        </View>
        <Text style={{backgroundColor: '#3fbfff',height: 34,width: 34}}></Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tutorItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: '#f4f4f4'
  },
  tutor: {
    height: 80,
    alignItems: 'center',
    flexDirection: 'row'
  },
  tutorImg: {
    width: 56,
    height: 56,
    borderRadius: 56,
    backgroundColor: 'violet',
    marginRight: 12
  }
})