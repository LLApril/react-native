import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class ClassListItem extends Component{
  constructor(props) {
    super(props);
    this.state = {
      showText: true,
      imgUrl: '../images/btn_chat@2x.png'
    }      
  } 
  render() {
    return (
      <View>
        <View style={ this.state.showText ? styles.boxWrap : styles.animateLeft }>
          <View style={styles.img}>
             <Text style={styles.time}>08-06  15:00</Text>
            <View style={{height: 60,flex:1,flexDirection: 'row',marginLeft: 8}}> 
              <Text style={styles.header}></Text>
              <View style={{width: 100,height: 55,justifyContent: 'flex-end'}}>
                <Text style={{color: '#3f3f3f',lineHeight:28,fontSize:16}}>Jessica Wang</Text>
                <Text style={{color: '#ffa825',fontSize:13,marginTop: 2}}>变更申请处理中</Text>
              </View>
            </View> 
          </View>
          <View style={styles.more}>
            <Text style={{ fontSize: 15, color: '#828282', lineHeight: 20,marginRight: 8}}>Junior Lesson 8</Text>
            <View style={styles.chat}>
              <Image source={{url : '../images/btn_chat@2x.png' }} style={styles.common} />
              <Text style={styles.common} onPress={() => { this.setState({ showText: !this.state.showText }) }}>more</Text>
            </View>
          </View>
        </View>
          <View style={ this.state.showText ? styles.nav : styles.animateRight }>  
            <View style={styles.click}>          
              <Text style={{backgroundColor: '#fb5165',width: 40, height: 40, borderRadius: 40,marginTop: 20,fontSize: 19}}></Text>
              <Text style={{ marginTop: 2 }}>Cancel</Text>
            </View>  
            <View style={styles.click}>
              <Text style={ styles.comment}></Text>  
              <Text style={{marginTop: 2}}>Change</Text>
            </View>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  common: {
    backgroundColor: '#3fbfff',
    width: 40,
    height: 40
  },
  comment: { width: 40, height: 40, borderRadius: 40, backgroundColor: '#3dc0ff',marginTop: 20,fontSize: 19,lineHeight: 19, },
  time: {
    fontSize: 17,
    color: '#3f3f3f',
    lineHeight: 20,
    marginLeft: 8
  },
  boxWrap: {
    width: "100%",
    position: "relative",
    left: 0, 
    height: 100,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    backgroundColor: '#fff',
  },
  animateLeft: {
    left: -200,
    width: "100%",
    position: "relative",
    height: 100,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    backgroundColor: '#fff',
  },
  animateRight: {
    height: "100%",
    width: "50%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    right: 0,
  },
  img: {
    height: "100%",
    width: "50%",
    marginTop: 8,
  },
  header: {
    width: 60,
    height: 60,
    backgroundColor: 'violet',
    borderRadius: 60,
    marginRight: 10,
    marginTop: 3
  },
  more: {
    width: "50%",
    height: "100%",
    marginTop: 8,
    alignItems: 'flex-end',
  },
  chat: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
    width: 88,
    marginRight: 8
  },
  nav: {
    height: "100%",
    width: "50%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    right: -200
  },
  click: {
    width: '50%',
    alignItems: 'center',
  }
})

