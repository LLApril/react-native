import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import ClassListItem from '../component/classList';

// import Change from '../page/change';
export default class RnApp extends Component {
    render() {
        return (
            <ScrollView style={{flex:1,backgroundColor: '#f4f4f4'}}>
              <View style={{ flex: 1}}>
              {  /* -------标题栏开始------  */  }  
                <View style={ styles.welcome } >
                    <View style={ styles.left }></View>
                    <Text style={ styles.center }>Schedule</Text>
                    <Text style={ styles.right }>Tutors</Text>
                  </View>
              {  /* -------标题栏结束------  */  } 
              {  /* -------课程表主体部分开始------  */}  
              <View style={{flex:1,backgroundColor: '#f4f4f4'}}>
                <ClassListItem /> 
                <ClassListItem />
                <ClassListItem />        
                <Text style={{ height: 30, marginTop: 10, textAlign: 'center', color: '#959595', fontSize: 14 }}>There are no more entries!</Text>
              </View>
              </View> 
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        backgroundColor: '#f4f4f4',
        flexDirection: 'row',
        height: 48,
    },
    left: {
        flex: 1
    },
    center: {
        flex: 3,
        textAlign: 'center',
        fontSize: 24,
        color: '#3f3f3f',
        lineHeight: 44
    },
    right: {
        flex: 1,
        fontSize: 22,
        color: '#3fbfff',
        lineHeight: 44,
        paddingRight: 8
    }
});