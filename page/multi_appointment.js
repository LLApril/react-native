import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated
} from 'react-native';

import Header from '../component/header';

export default class MultiAppoint extends Component{
  constructor(props) {
    super(props);
    this.state = {
      title: 'Multiple appointment',
      date: '',
      lessonList: [
        '08:00~09:00', '08:30~09:30', '09:00~10:00', '09:30~10:30', '10:00~11:00', '10:30~11:30','11:00~12:00', '11:30~12:30', '12:00~13:00', '12:30~13:30', '13:00~14:00', '13:30~14:30','14:00~15:00', '14:30~15:30', '15:00~16:00', '15:30~16:30', '16:00~17:00', '16:30~17:30','17:00~18:00', '17:30~18:30', '18:00~19:00', '18:30~19:30', '19:00~20:00', '19:30~20:30','20:00~21:00', '20:30~21:30'
      ],
      isShow: false,
      fadeAnim: new Animated.Value(-300),
      startValue: new Animated.Value(0)
    }
  }
  getTime(date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : ('0'+ (date.getMonth() + 1)); 
    let day = date.getDate() >=10 ? date.getDate() : ('0'+ date.getDate()) ;
    let formatDate = year + "-" + month + "-" + day;
    return formatDate;
  }
  componentDidMount() {
    let date = new Date();
    this.setState({
      date: this.getTime(date)
    })
  }
  render() {
     let lessonList = this.state.lessonList;
     lessonList = lessonList.map((item, index) => {
       if (index%2 == 1){
        return <Text key={index} style={{width: '50%',borderTopWidth: 1,borderColor: '#ddd',height: 40,lineHeight: 30,fontSize: 18,color: '#444',paddingLeft: 10}}>{item}</Text>
       } else {
        return <Text key={index} style={{width: '50%',borderTopWidth: 1,borderRightWidth: 1,borderColor: '#ddd',height: 40,lineHeight: 30,fontSize: 18,color: '#444',}}>{item}</Text>
      }
    })
    return (
        <View style={{flex:1, backgroundColor: '#f4f4f4'}}>
          <View>      
            <Header title={this.state.title} />
            <View style={{paddingHorizontal: 13,backgroundColor: '#fff'}}>
              <View style={styles.timeList}>
                <Text style={styles.chooseTime}>Class schedule time:</Text>
                <View style={{flexDirection: 'row'}}>
                <Text style={styles.time}
                  onPress={() => {
                    this.setState({
                      isShow: !this.state.isShow,
                      fadeAnim: this.state.isShow ? this.state.fadeAnim : this.state.startValue 
                    },Animated.timing(
                      this.state.fadeAnim,//初始值
                      this.state.isShow ? { toValue: -300 } : {toValue: 0}//结束值
                    ).start())//开始)
                }}>11:00~12:00</Text>
                  <Text>1</Text>
                </View>
              </View>
              <View style={styles.timeList}>
                <Text style={styles.chooseTime}>Start:</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.time}>{this.state.date}</Text>
                  <Text>1</Text>
                </View>
              </View>
              <View style={styles.timeList}>
                <Text style={styles.chooseTime}>End:</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.time}>2017-09-10</Text>
                  <Text>1</Text>
                </View>
              </View>
            </View>        
            <Text style={styles.point}>
              You can make an appointment for the class: <Text style={{color: '#3fbfff'}}> 2 </Text>point
            </Text>
            <Text style={styles.reserve}>Reservation course</Text>
          </View>
          <Animated.View style={{ backgroundColor: '#fff', position: 'absolute', bottom: this.state.fadeAnim}}>  
            <View style={{paddingHorizontal: 15}} onPress={() => {
                  {/*Animated.timing(
                    this.state.startValue, //初始值
                    { toValue: -300 } //结束值
                  ).start()*/}
                  alert("1111");
                }}>
              <View style={{position: 'relative',height: 40}} >
              <Text style={{ position: 'absolute', left: 0, top: 7, fontSize: 18, color: '#3fbfff' }}
                onPress={() => {
                  {/*Animated.timing(
                    this.state.startValue, //初始值
                    { toValue: -300 } //结束值
                  ).start()*/}
                  alert("1111");
                }}
              >Exit</Text>
                <Text style={{width: '100%',textAlign: 'center',fontSize: 18,lineHeight: 32,color: '#444'}}>Select time segment</Text>
              </View>
              <ScrollView style={{height: 230}}>
                <View style={{flexDirection: 'row',flexWrap: 'wrap'}}>
                  {lessonList}
                </View> 
              </ScrollView>
            </View>            
          </Animated.View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  timeList: {
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  chooseTime: {
    fontSize: 15,
    color: '#959595'
  },
  time: {
    fontSize: 15,
    marginRight: 12,
    color: '#444'
  },
  reserve: {
    marginHorizontal: 15,
    backgroundColor: '#3fbfff',
    color: '#fff',
    height: 38,
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 30,
    borderRadius: 20
  },
  point: {
    paddingHorizontal: 18,
    marginTop: 10,
    textAlign: 'center',
    color: '#959595',
    fontSize: 14,
    marginBottom: 30
  }
})


