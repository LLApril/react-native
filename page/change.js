import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

import Header from '../component/header';
// import ScrollableTabView, {DefaultTabBar}  from 'react-native-scrollable-tab-view';

export default class Change extends Component{
  constructor(props) {
    super(props)
    this.state = {
      dataList: [{ start: '8:00', end: '9:00' }, { start: '8:30', end: '9:30' }, { start: '9:00', end: '10:00' }, { start: '9:30', end: '10:30' }, { start: '10:00', end: '11:00' }, { start: '10:30', end: '11:30' }, { start: '11:00', end: '12:00' }, { start: '11:30', end: '12:30' }, { start: '12:00', end: '13:00' }, { start: '12:30', end: '13:30' }, { start: '13:00', end: '14:00' }, { start: '13:30', end: '14:30' }, { start: '14:00', end: '15:00' }, { start: '14:30', end: '15:30' }, { start: '15:00', end: '16:00' }, { start: '15:30', end: '16:30' }, { start: '16:00', end: '17:00' }, { start: '16:30', end: '17:30' }, { start: '17:00', end: '18:00' }, { start: '17:30', end: '18:30' }, { start: '18:00', end: '19:00' }, { start: '18:30', end: '19:30' }, { start: '19:00', end: '20:00' }, { start: '19:30', end: '20:30' }, { start: '20:00', end: '21:00' }, { start: '20:30', end: '21:30' }],
      title: 'Change'
    }
  }
  render() {
    let dataList = this.state.dataList;
    dataList = dataList.map((item , index) => {
      return (
        <View style={styles.classGrid} key={index}>
          <Text style={styles.start}>{item.start}</Text>
          <Text style={styles.end}>~{item.end}</Text>
        </View>
      )
    })
    return (
      <View style={{flex:1,backgroundColor: '#f4f4f4'}}>
        <Header title={this.state.title}/>
        <View>
          <View style={styles.tutor}>
            <Text style={styles.header}></Text>
            <View style={{flex:5}}>
              <Text style={{fontSize: 20,color: '#444'}}>Jessica Wang</Text>
              <View>
                <Text style={{ fontSize: 18, color: '#959595'}}>score</Text>
 
              </View>
            </View>
            <View style={{flex:3,alignItems: 'flex-end'}}>
              <Text style={styles.common}>chat</Text>
            </View>
          </View>
        </View>
        {/* ------------- 日期展示开始------------ */}
        <View style={{ height: 50, backgroundColor: '#fff' }}>
          
        </View>
        {/* ------------- 日期展示结束------------ */}
        
        {/* ------------- 课表开始------------ */}
        <View style={{marginHorizontal: 12,marginTop: 12,flexDirection: 'row',flexWrap: 'wrap',borderWidth: 1,borderColor: '#ddd'}}>
          {dataList}
        </View>
        {/* ------------- 课表结束------------ */}
        <View style={{height:90,flexDirection: 'row',paddingHorizontal: 12,flexWrap: 'wrap'}}>
          <View style={styles.show_class}>
            <Text style={[styles.select,styles.may]}></Text>
            <Text style={styles.font}>May choose</Text>
          </View>
          <View style={styles.show_class}>
            <Text style={[styles.select,styles.selected]}></Text>
            <Text style={styles.font}>Selected</Text>
          </View>
          <View style={styles.show_class}>
            <Text style={[styles.select,styles.customary]}></Text>
            <Text style={styles.font}>Customary</Text>
          </View>  
          <View style={styles.show_class}>
            <Text style={[styles.select,styles.other]}></Text>
            <Text style={styles.font}>Other students</Text>
          </View>          
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tutor: {
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd'
  },
  header: {
    width: 50,
    height: 50,
    backgroundColor: 'violet',
    borderRadius: 50,
    marginHorizontal: 12
  },
  common: {
    backgroundColor: '#3fbfff',
    width: 30,
    height: 30,
    textAlign: 'center',
    lineHeight: 24,
    color: '#fff',
    marginRight: 12
  },
  select: {
    width: 20,
    height: 20,
    marginRight: 9,
  },
  show_class: {
    width: '50%',
    flexDirection: 'row',
    marginTop: 11,
    height: 20,
    alignItems: 'center'
  },
  may: {
    backgroundColor: '#78ca37'
  },
  customary: {
    backgroundColor: '#9b5fb9'
  },
  selected: {
    backgroundColor: '#3fbfff'
  },
  other: {
    backgroundColor: '#ffa825'
  },
  font: {
    color: '#959595',
    fontSize: 14
  },
  classGrid: {
    width: '25%',
    backgroundColor: '#fff',
    height: 45,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ddd'
  },
  end: {
    fontSize: 14,
    color: '#ddd',
    textAlign: 'right',
    marginRight: 10
  },
  start: {
    fontSize: 18,
    color: '#ddd',
    textAlign: 'left',
    marginLeft: 10
  }
})