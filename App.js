/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import React from 'react';
// import { Image, ScrollView, Text } from 'react-native';
// // import Watch from './view/day1'

// const logo = {
//   uri: 'https://reactnative.dev/img/tiny_logo.png',
//   width: 64,
//   height: 64
// };

// export default App = () => (
//   <ScrollView>
//     <Text style={{ fontSize: 96 }}>Scroll me pl1</Text>
//     <Watch></Watch>
//   </ScrollView>
// );
import React,{Component} from 'react';
import {TouchableHighlight, SafeAreaView,StyleSheet,ImageBackground, ScrollView, Text, View,Dimensions} from 'react-native';
import Box from './components/box'
import  Util from './view/utils';
import  MoveBox from './components/movebox';
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {unitWidth, width,unitHeight,height} from "./components/AdapterUtil";
import { Button } from 'react-native-paper';
import ScreenBox from './components/screen'


// const logo = {
//   uri: './img/background1.jpg',
//   width: 64,
//   height: 64
// };

const tabBarIcon = name => ({ tintcolor }) => (
  <FontAwesome
    style={{ backgroundColor: "transparent" }}
    name={name}
    tintcolor={tintcolor}
    color="white"
    size={22}
  />
);
class MryDay extends React.Component{
  static navigationOptions = {
    tabBarIcon :tabBarIcon("qq"),
    tabBarLabel:"纪念日"
  };
  constructor() {
    super();
      this.state = {
       position:0,
       screen:true,
        msg:[
          {title:"我的生日",time:"1999年12月29日",img:'https://s1.ax1x.com/2020/08/27/d42SDU.jpg'},
          {title:"祖国的生日",time:"10月1日",img:'https://s1.ax1x.com/2020/08/27/d42SDU.jpg'},
        ],
    };
    this.changeScreen=this.changeScreen.bind(this);
  }
  changeScreen(x){
  this.setState({
    screen:!this.state.screen,
    position:x
  })
  }
  render(){
    if(this.state.screen)
    {
      let inf=this.state.msg;
    return(
      <ImageBackground 
        style={styles.backimg}
        source={require('./img/background1.jpg')}>
        <View style={styles.top}>
          <Button>sign in/sign up</Button>
         <Text style={styles.title}>
           纪念日
         </Text>
         <Button>add</Button>
       </View>
       <View style={styles.body}>
         <ScrollView style={styles.scroll}>
           <View style={styles.movebody}>
          {this.state.msg.map((item,index,key) => {
            return<TouchableHighlight onPress={this.changeScreen(index)}><Box {...item}></Box></TouchableHighlight>
          })
          }
          </View>
         </ScrollView>
       </View>
    </ImageBackground>
    )
  }
  else
  {
      return(
        <ImageBackground 
        style={styles.backimg}
        source={require('./img/background1.jpg')}>
        <View style={styles.top}>
          <View style={styles.btn1}>
          <Button 
          color="transparent"
          title="   返回   " 
          onPress={this.changeScreen(0)}></Button>
          </View>
       </View>
       <View style={styles.body}>
         <ScrollView 
         style={styles.scroll}
         horizontal={true}
         ref={scrollView => {
                     if(scrollView !== null){
                         setTimeout(()=>{              
                           scrollView.scrollTo({x:750*unitWidth*this.state.position,y:0,animated:true},1) 
                         })
                     }}}
                    pagingEnabled={true}
         >
          {this.state.msg.map((item,key) => {
            return <ScreenBox {...item}></ScreenBox>
          })
          }
         </ScrollView>
       </View>
    </ImageBackground>
      )
  }
    }
    
}

class CalDay extends React.Component{
  static navigationOptions = {
    tabBarIcon :tabBarIcon("credit-card"),
    tabBarLabel:"日历"
  };
  constructor() {
    super();
      this.state = {
        stopWatch: false,
        resetWatch: true,
        intialTime: 0,
        msg:[
          {title:"我的生日",time:"1999年12月29日",img:''},
          {title:"祖国的生日",time:"10月1日",img:''},
        ],
    };
  }
  render(){
    let inf=this.state.msg;
    return(
      <ImageBackground 
style={styles.backimg}
source={require('./img/background1.jpg')}>
        <View style={styles.top}>
         <Text style={styles.title}>
           日历
         </Text>
       </View>
       <View style={styles.body}>
         <MoveBox></MoveBox>
       </View>
    </ImageBackground>
    )
  }
}

class PicBox extends React.Component{
  static navigationOptions = {
    tabBarIcon :tabBarIcon("user"),
    tabBarLabel:"相册",
  };
  constructor() {
    super();
      this.state = {
        stopWatch: false,
        resetWatch: true,
        intialTime: 0,
        msg:[
          {title:"我的生日",time:"1999年12月29日",img:''},
          {title:"祖国的生日",time:"10月1日",img:''},
        ],
    };
  }
  render(){
    let inf=this.state.msg;
    return(
      <ImageBackground 
style={styles.backimg}
source={require('./img/background1.jpg')}>
        <View style={styles.top}>
         <Text style={styles.title}>
           相册
         </Text>
       </View>
       <View style={styles.body}>
         <MoveBox></MoveBox>
       </View>
    </ImageBackground>
    )
  }
}



export default  createAppContainer(
  createMaterialBottomTabNavigator({
    纪念日: {screen: MryDay},
    日历: { screen: CalDay },
    相册: { screen: PicBox }
  })
);


const styles = StyleSheet.create({
  top:{
    width:width,
    backgroundColor:"gray",
    opacity:0.5
  },
  backimg:{
    flex:1
  },
  title:{
    textAlign:'center',
    lineHeight:60,
    width:395,
    height:60,
    fontSize:36,
    color:"white",
  },
  body:{
    width:width,
    flex:1,
    alignItems:"center",//去除效果如何影响？
    paddingTop:10,
  },
  box:{
    marginBottom:10,
    backgroundColor:"gray",
    opacity:0.3,
    width:width,
    height:150
  },
  scroll:{
    width:width,
    height:unitHeight*900,
  },
  movebody:{
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"center",
    width:width
  },
  btn1:{
    float:left,
    margin:20*unitWidth,
    borderStyle:"solid",
    borderTopWidth:3,
    borderBottomColor:"#EEDC82",
    borderRadius:5,
    marginLeft:20*unitWidth,
    marginVertical:10*unitHeight,
  }
});

