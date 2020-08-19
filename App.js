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
import { StyleSheet,ImageBackground, ScrollView, Text, View,Dimensions} from 'react-native';
import Box from './components/box'

// const logo = {
//   uri: './img/background1.jpg',
//   width: 64,
//   height: 64
// };


export default class extends Component{
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
           纪念日
         </Text>
       </View>
       <View style={styles.body}>
      {
inf&&inf.map(info,index)=>(
  <Box msg={info}>
  </Box>
)
      }
       </View>
    </ImageBackground>
    )
  }
}
const {height,width}=Dimensions.get('window');
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
    alignItems:"center",
    paddingTop:10
  },
  box:{
    marginBottom:10,
    backgroundColor:"gray",
    opacity:0.3,
    width:width,
    height:150
  }
});