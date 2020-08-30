import React,{Component} from 'react';
import { Button,StyleSheet,ImageBackground, ScrollView, Text, View } from 'react-native';
import {unitWidth, width,unitHeight,height} from "./AdapterUtil";


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
        <View style={styles.body}>
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
    body:{
       marginHorizontal:75*unitWidth,
    },
    box:{
        width:unitWidth*600,
        height:unitHeight*600,
        overflow:'hidden',
        flex:1,
        borderRadius:10,
       
    },
    backimg:{
      width:"100%",
      height:"100%"
    },
    title:{
    textAlign:'center',
    lineHeight:unitHeight*200,
    width:"100%",
    height:unitHeight*200,
    fontSize:24,
    color:"white",
    },
    time:{
    textAlign:'center',
    lineHeight:unitHeight*300,
    width:"100%",
    height:unitHeight*300,
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
