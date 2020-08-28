import React,{Component} from 'react';
import { StyleSheet,ImageBackground, ScrollView, Text, View } from 'react-native';
import {unitWidth, width,unitHeight,height} from "./AdapterUtil";
import { black } from 'react-native-paper/lib/typescript/src/styles/colors';
import { Button } from 'react-native-paper';


export default class Screen extends Component{
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
        <View>
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
       <View style={styles.bottom}>
          <View>
          <Button 
          color="transparent"
          title="  编辑  " ></Button>
          </View>
          <View>
          <Button 
          color="transparent"
          title="  更改背景图片  " ></Button>
          </View>
       </View>
       </View>
      )
    }
  }
Screen.defaultProps={
  img:"https://s1.ax1x.com/2020/08/28/doK2xP.jpg"
}
  const styles = StyleSheet.create({
    box:{
        width:unitWidth*600,
        height:unitHeight*600,
        overflow:'hidden',
        flex:1,
        borderRadius:10,
        margin:20*unitHeight,
    },
    backimg:{
      width:"100%",
      height:"100%"
    },
    title:{
    textAlign:'center',
    lineHeight:"30%",
    width:"100%",
    height:"30%",
    fontSize:24,
    color:"white",
    },
    time:{
    textAlign:'center',
    lineHeight:"50%",
    width:"100%",
    height:"50%",
    fontSize:36,
    color:"white",
    },
    bottom:{
        marginTop:10*unitHeight,
        width:unitWidth*600
    },
    btn:{

    }
  });
