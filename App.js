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
import {Button,TouchableHighlight, SafeAreaView,StyleSheet,ImageBackground, ScrollView, Text, View,Dimensions} from 'react-native';
import Box from './components/box'
import  Util from './view/utils';
import  MoveBox from './components/movebox';
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {unitWidth, width,unitHeight,height} from "./components/AdapterUtil";
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
       screen:false,
        msg:[
          {title:"我的生日",time:"1999年12月29日",img:'https://s1.ax1x.com/2020/08/27/d42SDU.jpg'},
          {title:"祖国的生日",time:"10月1日",img:'https://s1.ax1x.com/2020/08/27/d42SDU.jpg'},
          {title:"测试",time:"10月1日",img:'https://s1.ax1x.com/2020/08/27/d42SDU.jpg'},
        ],
    };
    this.changeScreen=this.changeScreen.bind(this);
  }
  changeScreen(x=0){
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
          <View style={styles.btn1}>
          <Button 
          color="transparent"
          title="   返回   "
          onPress={this.changeScreen} 
          ></Button>
          </View>
       </View>
       <View style={styles.body}>
         <ScrollView 
         style={styles.scroll}
         horizontal={true}
         ref={scrollView => {
                     if(scrollView !== null){
                       this.scroll=scrollView;
                         setTimeout(()=>{              
                           scrollView.scrollTo({x:750*unitWidth*this.state.position,y:0,animated:true},1) 
                         })
                     }}}
                    pagingEnabled={true}
         >
          {this.state.msg.map((item,index) => {
            return <ScreenBox {...item} key={index}></ScreenBox>
          })
          }
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
          <View style={styles.topbtn}>
            <Button title=" 登陆 " color="transparent"></Button>
          </View>
         <Text style={styles.title}>
           纪念日
         </Text>
         <View style={styles.topbtn}>
         <Button title=" 添加 " color="transparent" ></Button>
         </View>
       </View>
       <View style={styles.body}>
         <ScrollView style={styles.scroll}>
           <View style={styles.movebody}>
          {this.state.msg.map((item,index) => {
            return<TouchableHighlight onPress={()=>{this.changeScreen(index)}}><Box {...item} key={index}></Box></TouchableHighlight>
          })
          }
          </View>
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
source={require('./img/background2.jpg')}>
        <View style={styles.top}>
         <Text style={styles.title}>
           相簿
         </Text>
       </View>
       <View style={styles.body}>
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
      s:true,
      msg:[
      {t:1},
      {t:2}
      ]
    };
    this.image = { uri: "https://zh-hans.reactjs.org/logo-og.png" };
    this.changes=this.changes.bind(this);
  }
  changes(){
 this.setState({
 s:!this.state.s
 })
  }
  render(){
    let inf=this.state.msg;
    if(this.state.s)
    {
    return(
<SafeAreaView style={styles.container}>
  <ScrollView style={styles.scroll2}
    horizontal={true}
    pagingEnabled={true}
  >
    <View style={styles.view}><ImageBackground source={this.image} style={styles.image}>
      <Text style={styles.text}>Inside</Text>
    </ImageBackground></View>

    <TouchableHighlight onPress={this.changes}>
    <View style={styles.view}></View>
    </TouchableHighlight>
     <View style={styles.view}>
     <View  style={styles.btn2}>
     <Button title="返回"  
 color="transparent"></Button></View>
     </View>
    <View style={styles.view}></View>
    <View style={styles.view}></View>
    </ScrollView>
</SafeAreaView>
    )
    }
    else
    {
    return(
      <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scroll2}>
      <View style={styles.view}>
  <ImageBackground source={this.image} style={styles.image}>
      <Text style={styles.text}>Inside</Text>
    </ImageBackground>
    </View>
    {this.state.msg.map((item,index)=>{
    return <TouchableHighlight onPress={this.changes}><View style={styles.view}>
    <Text>{index}</Text>
    </View></TouchableHighlight>
    })}
    
    </ScrollView>
</SafeAreaView>
    )
    }
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
    opacity:0.5,
    flexDirection:"row",
    justifyContent:"space-between",
  },
  backimg:{
    flex:1,
  },
  backimg2:{
    flex:1,
    display:"none",
  },
  title:{
    textAlign:'center',
    lineHeight:60,
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
  topbtn:{
    width:100*unitWidth,
    marginVertical:20*unitHeight,
    marginHorizontal:20*unitWidth
  },
  btn1:{
    margin:20*unitWidth,
    borderStyle:"solid",
    borderTopWidth:3,
    borderBottomColor:"#EEDC82",
    borderRadius:5,
    marginLeft:20*unitWidth,
    marginVertical:10*unitHeight,
    width:200*unitWidth
  },

  
  container: {
    flex: 1,
  },
  scrollView: {
    width:300,
    height:200,
    backgroundColor:"gray",
  },
  text: {
    fontSize: 42,
  },
  view:{
  width:300,
  height:300,
  backgroundColor:"green",
  margin:10,
  borderRadius:10,
   overflow:'hidden'
  },
  scroll2:{
  height:100,
  backgroundColor:"lightgreen"
  },
  view2:{
  width:130,
  height:100,
  backgroundColor:"green",
  margin:10,
  marginRight:"auto"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    borderRadius:100
    
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold"
  },
  btn2:{
 width:50,
 overflow:"hidden",
 borderStyle:"solid",
 borderColor:"#EEDC82",
 borderWidth:3,
 marginLeft:20,
 borderRadius:5
  }
});

