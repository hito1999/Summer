import React,{Component} from 'react';
import { Button,StyleSheet,ImageBackground, ScrollView, Text, View } from 'react-native';
import {unitWidth, width,unitHeight,height} from "./AdapterUtil";

export default class MoveBox extends Component{
    constructor(props) {
      super(props);
        this.state = {
          click: false,
    }
    this.image={uri: this.props.img}
    }

    //source={{uri: urlHttp}}
    render(){
      return(
        <View style={styles.box}>
        <ImageBackground 
      style={styles.backimg}
      source={this.image}>  
           <View >
            <Text style={styles.title}>
                {this.props.title} 
            </Text>
           </View>
           <View >
                <Text style={styles.time}>
                    {this.props.time}
                </Text>
       </View>
       </ImageBackground>
       </View>
      )
    }
  }
MoveBox.defaultProps={
  img:"https://s1.ax1x.com/2020/08/28/doK2xP.jpg"
}
  const styles = StyleSheet.create({
    box:{
        width:unitWidth*300,
        height:unitWidth*300,
        overflow:'hidden',
        flex:1,
        borderRadius:10,
        margin:20*unitHeight,
        opacity:0.8,
    },
    backimg:{
      width:"100%",
      height:"100%"
    },
    title:{
    textAlign:'center',
    lineHeight:unitWidth*90,
    width:"100%",
    height:unitWidth*90,
    fontSize:24,
    color:"white",
    },
    time:{
    textAlign:'center',
    lineHeight:unitWidth*100,
    width:"100%",
    height:unitWidth*100,
    fontSize:36,
    color:"white",
    }
    
  });
