import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import Header from '../component/header';
import TutorList from '../component/tutorList';

export default class Select_tutor extends Component{
  constructor(props) {
    super(props);
    this.state = {
      title: 'Tutor',
    }
  }
  render() {
    return (
      <ScrollView style={{backgroundColor: '#f4f4f4'}}>
        <Header title={this.state.title} />
        <Text style={styles.title}>My former teacher</Text>
        <View style={{backgroundColor: '#fff'}}>
          <TutorList />
          <TutorList />
          <TutorList />
          <View style={{alignItems: 'center',height: 40}}>
            <Text style={{ color: '#3fbfff',marginTop: 2 }}>more</Text>
            <Text style={{ color: '#3fbfff' }}>∨</Text>
          </View>
        </View>
        <Text style={[styles.title,styles.height]}>Try other teachers in class!</Text>
        <View style={{backgroundColor: '#fff'}}>
          <TutorList />
          <TutorList />
        </View>
        <Text style={styles.all}>All Tutors</Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: '#f4f4f4',
    textAlign: 'center',
    height: 34,
    fontSize: 16,
    lineHeight: 28,
    color: '#959595',
  },
  height: {
    height: 38,
    lineHeight: 30,
  },
  all: {
    backgroundColor: '#fff',
    color: '#3fbfff',
    height: 41,
    textAlign: 'center',
    borderTopWidth: 1,
    borderColor: '#f4f4f4',
    lineHeight: 30,
    marginTop: 15
  }
  
})